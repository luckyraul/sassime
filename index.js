var path = require('path');

var entryPoint = require.resolve('sassime');
var dir = path.dirname(entryPoint);

function includePaths() {
  return dir;
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
