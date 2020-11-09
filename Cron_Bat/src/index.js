var question = require('readline-sync');
var bat = require('./bat');
var timeCron = require('./timeCron');

function Home(){
    console.log(`
    1 - MOVER ARQUIVO 
    2 - COPIAR ARQUIVO 
    `);
    let acao = question.question('\n DIGITE A OPCAO: ');
    let dirOrigem = question.question('DIGITE O DIRETORIO ORIGEM: ');
    let dirDestino = question.question('DIGITE O DIRETORIO DESTINO: ');
    let nomeBat = question.question('DIGITE O NOME DA SUA BAT: ');

    console.log(`
    DIGITE O TEMPO QUE A TAREFA AGENDADA SERA EXECUTADA PARA ESTA BAT. 

    1 - 1 HORA
    2 - 30 MINUTOS
    3 - 15 MINUTOS
    4 - 5 MINUTOS
    5 - 1 MINUTO
    
    `)

    let tempo = question.question("DIGITE A OPCAO: ");
    
    if(acao == '1'){
        acao = "move";
    }else if(acao == '2'){
        acao = "copy"
    }
    bat.arq.action(acao,dirOrigem,dirDestino,nomeBat);
    bat.arq.timeCron(tempo);
}

Home();