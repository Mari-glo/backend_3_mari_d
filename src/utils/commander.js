const { Command } = require('commander')

const program = new Command()

program
    //.option('-d', 'Variable para debug', false)
   // .option('-p <port>', 'Variable para el puerto', 8080)
    .option('--mode <mode>', 'Modo de ejecución de la app', 'development')
    .parse()

  module.exports = { program }  