var socket = io.connect('http://13.65.241.130:6677', { 'forceNew': true });

socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

function render(data) {
    var html = data.map(function (message, index) {
        return (`
            <div class ="message">
                <strong>${message.nickname}</strong> Dice:
            <p>${message.text}</p>
            </div>
         `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}