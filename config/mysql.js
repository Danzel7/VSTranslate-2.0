var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'vsinterview.ckdxitur80we.eu-west-1.rds.amazonaws.com',
  user            : 'smileyface',
  password        : 'vspassword12345',
  database		  : 'translate',
  port:          3306
});

module.exports = pool;
