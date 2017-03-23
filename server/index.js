var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('client'));

app.get('/hola-mundo', function (req, res) {
    res.status(200).send('Hola mundo');
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat Papus!!',
    nickname: 'Bot'
}];
io.on('connection', function (socket) {
    console.log("el nodo con IP: " + socket.handshake.address + " se ha conectado");

    socket.emit('messages', messages);
});

server.listen(app.get('port'), function () {
    console.log('El servidor está funcionando y esta corriendo en el puerto: '+app.get('port'));
});