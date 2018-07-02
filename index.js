var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//on connection, we need to ask that the connected user pick a user name
//maybe with an alert? and then we take that value 
//and assign it to a user for that socketgit 
io.sockets.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.sockets.emit('chatMessage', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});