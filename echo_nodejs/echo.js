var net = require('net');
var server = net.createServer(
	function(socket) {
		socket.on('data', function(data) {
			socket.write(process.env["IPADDR"]+ ':' + data);
			}
		);
	}
);
server.listen(2000);
