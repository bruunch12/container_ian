var net = require('net');
var server = net.createServer(
	function(socket) {
		socket.on('data', function(data) {
		socket.write('echo:'+data);
			}
		);
	}
);
server.listen(3000);
