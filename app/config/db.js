const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aprdb',
  password: 'syahru',
  port: 5432,
});

module.exports = pool;