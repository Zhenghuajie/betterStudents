var express = require('express');
var app = express();
var http = require('http').Server(app);
 
var io = require('socket.io')(http);

app.get('/', function(req, res){
	 //res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('message', function(msg){
		io.emit('brodcast', msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    