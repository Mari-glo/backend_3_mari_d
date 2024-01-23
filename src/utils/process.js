process.on('exit', code =>{
    console.log('salir del proceso', code)
})

console.log('ejecutar')

process.on('uncaughtException', exception =>{
    console.log('atrapa todos los errores no controlados', exception)
})

process.on('message', message =>{
    console.log('Enviar mensajes a otro processo', message)
})