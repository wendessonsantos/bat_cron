let fs = require('fs');
var cron = require('node-cron');
const { dirname } = require('path');
var exec = require('child_process').exec;
var timeCron = require('./timeCron');

function bat() {
  let dirName = 'C:\\BAT-DIR\\';
  this.action = (acao, diretorioOrigem, diritorioDestino, nameBat) => {
    try {
      const dir = 'C:\\BAT-DIR\\';
      //Verifica se não existe
      if (!fs.existsSync(dir)) {
        //Efetua a criação do diretório
        fs.mkdirSync(dir);
      }


      fs.writeFile(`${dirName}${nameBat}.bat`, `:inicio\n${acao} ${diretorioOrigem}\\*.* ${diritorioDestino}\n:fim`, function (err) {
        //Caro ocorra algum erro
        if (err) {
          return console.log('Error ao criar o arquivo bat.')
        }
        //Caso não tenha erro, retornaremos a mensagem de sucesso
        console.log(`\nBAT CRIADA COM SUCESSO EM : ${dirName} !`);
      });
    } catch (error) {
      console.error(error);
    }

    this.timeCron = (time) => {
      let valorCron = timeCron.cron.cron(time)
      let valorMenssagem = timeCron.cron.mensagem(time);
      try {
        cron.schedule(valorCron, () => {
          exec(`${dirName}${nameBat}.bat`, function (error, stdout, stderr) {
            let horarioDaExecucao = new Date();
            console.log(`\nHorario da Execucao: ${horarioDaExecucao}\n${stdout}`);
          });
          console.log(`\n************* ${valorMenssagem} *************`);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}

function optionCron() {

}

var moverArquivo = new bat();
module.exports = {
  'arq': moverArquivo
}

