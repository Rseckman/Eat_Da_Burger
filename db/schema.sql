CREATE DATABASE d1riquo4ueja6jzv;
USE d1riquo4ueja6jzv;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);