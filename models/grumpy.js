
var orm = require("../config/orm");

var grumpy = {
  all: function(cb) {
    orm.all("grumpys", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("grumpys", ["campground_name", [name, false], cb])
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("grumpys", {
      
    }, condition, cb);
  }
};

module.exports = grumpy;