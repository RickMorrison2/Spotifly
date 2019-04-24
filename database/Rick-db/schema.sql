DROP DATABASE IF EXISTS artists1;

CREATE DATABASE artists1;

USE artists1;

CREATE TABLE artists (
  id SERIAL NOT NULL PRIMARY KEY,
  artist VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL
);

  -- LOAD DATA INFILE 'c:/users/pepsi/Desktop/HRGalvanizeExercises/Rick-SDC/data.csv'
  -- INTO TABLE artists 
  -- FIELDS TERMINATED BY ',' 
  -- ENCLOSED BY '"'
  -- LINES TERMINATED BY '\n'
  -- IGNORE 1 ROWS;