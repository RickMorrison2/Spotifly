const {
  Pool,
} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spotify',
  password: 'password',
  port: 5432,
})

let sql = `DROP TABLE IF EXISTS artists;
  CREATE TABLE artists(
  id serial PRIMARY KEY,
  name VARCHAR (255),
  image VARCHAR (255));`

// pool.query(sql, (err, res) => {
//   console.log(err, res)
// });

sql = `copy artists(id, name, image) from 'C:\\data.csv' DELIMITER ',' CSV HEADER;`;

pool.query(sql, (err, res) => {
  console.log(err, res)
});

pool.end();