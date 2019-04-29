const orm = require('../config/orm');

const burger = {
  selectAll: function(next) {
    orm.selectAll('burgers', function(res) {
      next(res);
    });
  },
  insertOne: function(columns, values, next) {
    orm.insertOne('burgers', columns, values, function(res) {
      next(res);
    });
  },
  updateOne: function(columns, condition, next) {
    orm.updateOne('burgers', columns, condition, function(res) {
      next(res);
    });
  }
};

module.exports = burger;
