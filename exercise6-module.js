module.exports = function (dirName, extName, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dirName, function (err, data) {
    if (err) {
      return callback(err);
    }

    var list = [];
    data.forEach(function (fileName) {
      if ("." + extName == path.extname(fileName)) {
        list.push(path.normalize(fileName));
      }
    });

    callback(null, list);
  });
}