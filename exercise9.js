var http = require('http');

var result1 = "",
  result2 = "",
  result3 = "",
  done = 0;

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    result1 += data;
  });
  response.on("end", finish);
});

http.get(process.argv[3], function(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    result2 += data;
  });
  response.on("end", finish);
});

http.get(process.argv[4], function(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    result3 += data;
  });
  response.on("end", finish);
});

function finish() {
  if (++done === 3) {
    console.log(result1);
    console.log(result2);
    console.log(result3);
  }
}