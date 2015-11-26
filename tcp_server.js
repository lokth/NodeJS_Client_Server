
require('net').createServer(function(socket) {
	var rs = require('fs').createReadStream('file.txt');
	rs.pipe(socket);
}).listen(4001);