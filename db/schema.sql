-- Create the database burgers_db.
CREATE DATABASE node_burgers;
USE node_burgers;

-- Create the table burgers.
CREATE TABLE burgers
( 
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
