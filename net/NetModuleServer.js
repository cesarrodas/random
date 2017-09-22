const net = require('net');
const server = net.createServer(function(connection) {
  console.log('client has connected successfully!');

  connection.on('end', function() {
    console.log('client has disconnected successfully!');
  });

  connection.write('Hello Node.js!\r\n');
  connection.pipe(connection);
});

server.on('error', function(err){
  console.log('error', err);
});

server.listen(3000, function() {
  console.log('server is listening');
  console.log('server bound address is: ' + server.address());
});
