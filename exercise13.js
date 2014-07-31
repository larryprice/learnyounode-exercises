var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  var data;

  if (url.parse(request.url).pathname == "/api/parsetime") {
    var date = new Date(url.parse(request.url, true).query.iso);
    data = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  if (url.parse(request.url).pathname == "/api/unixtime") {
    data = {
      unixtime: new Date(url.parse(request.url, true).query.iso).getTime()
    };
  }

  if (data) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(data));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(process.argv[2]);