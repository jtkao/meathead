CREATE DATABASE `meathead`;
USE `meathead`; 

CREATE TABLE `movements` (
	`movement_id` INT AUTO_INCREMENT PRIMARY KEY,
	`movement_name` VARCHAR (255) NOT NULL,
    UNIQUE (`movement_name`)
);

CREATE TABLE `conditions` (
	`condition_id` INT AUTO_INCREMENT PRIMARY KEY,
	`condition_name` VARCHAR (255) NOT NULL,
    UNIQUE (`condition_name`)
);

CREATE TABLE `sets` (
	`set_id` INT AUTO_INCREMENT PRIMARY KEY,
	`set_date` DATE NOT NULL,
    `movement_id` INT,
	`weight` INT NOT NULL,
    `no_sets` INT NOT NULL,
    `no_reps` INT NOT NULL,
    `rpe` INT,
    FOREIGN KEY (`movement_id`) REFERENCES `movements`(`movement_id`),
    INDEX (`set_date`)
);

CREATE TABLE `set_conditions` (
	`set_id` INT NOT NULL,
	`condition_id` INT NOT NULL,
	FOREIGN KEY (`set_id`) REFERENCES `sets`(`set_id`),
    FOREIGN KEY (`condition_id`) REFERENCES `conditions`(`condition_id`),
    PRIMARY KEY(`set_id`, `condition_id`),
    INDEX (`set_id`)
);

CREATE TABLE `set_notes` (
    `set_id` INT PRIMARY KEY,
    `content` TEXT,
    FOREIGN KEY (`set_id`) REFERENCES `sets`(`set_id`)
);