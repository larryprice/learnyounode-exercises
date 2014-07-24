var fs = require('fs');
var path = require('path');

var extension = "." + process.argv[3];

fs.readdir(process.argv[2], getFiles);

function getFiles(err, list) {
  if (!err) {
    list.forEach(function (fileName) {
      if (extension == path.extname(fileName)) {
        console.log(path.normalize(fileName));
      }
    });
  } else {
    console.log(err);
  }
}