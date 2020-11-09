function cronTime(){
    this.cron = (valor) =>{
        if(valor == '1'){
            return valor = '0 * * * *'; //A cada uma hora
        }else if(valor == '2'){
            return valor = '*/30 * * * *'; //A Cada 30 minutos
        }else if(valor == '3'){
            return valor = '*/15 * * * *'; //A cada 15 minutos
        }else if(valor == '4'){
            return valor = '*/5 * * * *'; //A cada 5 minutos
        }else if(valor == '5'){
            return valor = '*/1 * * * *'; //A cada 1 minutos
        }else{
            return 'VALOR INCORRETO!'
        }
    }

    this.mensagem = (valor) =>{
        if(valor == '1'){
            return valor = 'SENDO EXECUTADO A CADA 1 HORA'; //A cada uma hora
        }else if(valor == '2'){
            return valor = 'SENDO EXECUTADO A CADA  30 MINUTOS'; //A Cada 30 minutos
        }else if(valor == '3'){
            return valor = 'SENDO EXECUTADO A CADA  15 MINUTOS'; //A cada 15 minutos
        }else if(valor == '4'){
            return valor = 'SENDO EXECUTADO A CADA  5 MINUTOS'; //A cada 5 minutos
        }else if(valor == '5'){
            return valor = 'SENDO EXECUTADO A CADA  1 MINUTO'; //A cada 1 minutos
        }
    }
}

let cron = new cronTime();

module.exports = {
    'cron' : cron
}