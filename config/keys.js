exports.mysql = {
  host: 'localhost',
  port: 3306,
  database: 'node_burgers',
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD
};
