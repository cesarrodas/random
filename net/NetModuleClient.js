const net = require('net');
const client = net.connect({port: 3000}, function() {
  console.log('Client has connected to server successfully!');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function(){
  console.log('Client has disconnected from server successfully!');
});
