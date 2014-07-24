var myfs = require("./exercise6-module");
var fs = require('fs');
var path = require('path');

myfs(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function (fileName) {
    console.log(fileName);
  });
});