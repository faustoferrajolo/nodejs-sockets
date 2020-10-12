var socket = io();

// Los on son para escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');

})

socket.on('disconnect', function() {

        console.log('Perdimos la conexión con el servidor');

    })
    // Emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alguien',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);

});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});