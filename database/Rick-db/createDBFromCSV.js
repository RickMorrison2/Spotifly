const { Pool } = require('pg');


const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'artists1',
  password: '',
  port: '5432',
})

let sql = `DROP TABLE IF EXISTS artists;

CREATE TABLE artists(
id serial PRIMARY KEY,
name VARCHAR (255)
image VARCHAR (255));`

// pool.query(sql, (err, res) => {
//   console.log(err, res)
// });

// sql = `COPY artists(id, name) 
// FROM '/Users/peteknutson/ghrden01/Pete_SDC/server/database/artists.csv' DELIMITER ',' CSV HEADER;`;

// pool.query(sql, (err, res) => {
//   console.log(err, res)
// });

// sql = `COPY albums(id, name) 
// FROM '/Users/peteknutson/ghrden01/Pete_SDC/server/database/albums.csv' DELIMITER ',' CSV HEADER;`;

// pool.query(sql, (err, res) => {
//   console.log(err, res)
// });

sql = `COPY artists1(id, name, image) 
FROM '/c/users/pepsi/Desktop/HRGalvanizeExercises/Rick-SDC/Rick-db/data.csv' DELIMITER ',' CSV HEADER;`;

pool.query(sql, (err, res) => {
  console.log(err, res)
});

pool.end();