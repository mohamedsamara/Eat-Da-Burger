const { connection } = require('./connection.js');

const sqlWhereSyntax = nums => {
  let arr = [];
  for (let i = 0; i < nums; i++) {
    arr.push('?');
  }
  return arr.toString();
};

const sqlSet = ob => {
  let arr = [];

  for (let key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
};

const orm = {
  selectAll: function(table, next) {
    let sql = 'SELECT * FROM ' + table + ';';

    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      next(result);
    });
  },

  insertOne: function(table, columns, values, next) {
    let sql =
      "INSERT INTO '" +
      table +
      "' ('" +
      columns.toString() +
      "') VALUES ('" +
      sqlWhereSyntax(values.length) +
      "')";

    connection.query(sql, values, function(err, result) {
      if (err) {
        throw err;
      }
      next(result);
    });
  },

  updateOne: function(table, columns, condition, next) {
    let sql =
      "Update '" +
      table +
      "' SET'" +
      sqlSet(columns) +
      "'WHERE'" +
      condition +
      "')";

    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      next(result);
    });
  }
};

module.exports = orm;
