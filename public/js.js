$(function() {
    var socket = io.connect('/');
    socket.on('connect', function() {
        console.log('--- socket.on connect');
    });
});