const { io } = require('../server');



io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvanido a la app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*         if (mensaje.usuario) {
                    callback({
                        resp: 'TODO OK'
                    });
                } else {
                    callback({
                        resp: 'TODO OK'
                    });
                } */


    });

});