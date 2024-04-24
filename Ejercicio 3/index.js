const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require("./numeros.js");

const arrayNumeros = [2, 3, 101, 201, 202, 100]

const loggerNumber = () => {
    arrayNumeros.forEach(numero =>{
        if (numeros.esPar(numero) == true){
            logger.info(numero + ' número par');
            
        }else{
            logger.error(numero + ' número impar')
        }
    })
}
loggerNumber()