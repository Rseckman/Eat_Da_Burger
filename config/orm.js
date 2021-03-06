var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(condition, cb) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [condition], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      cb(result);
      
    });
  },

  deleteOne: function(condition, cb){
    connection.query("DELETE FROM burgers WHERE id = ?", [condition], function(err, result){
      if (err) {
        return res.status(500).end();
      }
      cb(result);
    });
  }
};

module.exports = orm;
