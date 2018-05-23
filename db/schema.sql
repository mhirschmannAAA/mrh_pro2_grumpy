CREATE DATABASE IF NOT EXISTS campground_db;

USE campground_db;

DROP TABLE IF EXISTS campgrounds:

CREATE TABLE campgrounds (
    id int NOT NULL AUTO_INCREMENT,
    camp_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(50) NOT NULL,
    level VARCHAR(1) NOT NULL,
    shade VARCHAR(50),
    groundcover VARCHAR(255),
    deckpad VARCHAR(1),
    table VARCHAR(1),
    privacy VARCHAR(255),
    PRIMARY KEY (camp_name)
);