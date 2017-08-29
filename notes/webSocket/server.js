/*
 * 1.安装ws@1.1.1
 * 2.引入ws模块
 * 3.实例化并监听9000
 * 4.处理连接
 */
var WebSocket = require('ws');
var server = new WebSocket.Server({port: 9000});

//

server.on('connection', function (client) {
    // body...
    console.log('incoming...');

    client.on('message', function (data) {
        console.log('message: %s', data);
    });

    client.on('close', function () {
        console.log('client disconnected');
    });

    client.send('success');
})