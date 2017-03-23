var socket = io.connect(/*'http://pruebadelchat.azurewebsites.net:'*/'http://10.75.11.132:3000', { 'forceNew': true });

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

    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;

    var nickname = document.getElementById('text');
    nickname.value = "";
}

function addMessage(e) {
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }

    document.getElementById('nickname').style.display = 'none';

    socket.emit('add-message', message);

    return false;
}