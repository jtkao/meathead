INSERT INTO `movements` (`movement_name`) VALUES 
("SQUAT"),
("DEADLIFT"),
("BENCH");

INSERT INTO `sets` (`set_date`,`movement_id`,`weight`,`no_sets`,`no_reps`) VALUES 
(CURDATE(), 1, 405,3,3),
(CURDATE(), 2, 315,4,10),
(CURDATE(), 3, 255,5,3),
("2017-08-18", 1, 455,5,3),
("2017-08-18", 2, 365,5,5),
("2017-08-18", 3, 185,7,5),
("2017-08-21", 1, 405,5,5),
("2017-08-21", 2, 405,3,3),
("2017-08-21", 3, 185,4,8);

INSERT INTO `conditions` (`condition_name`) VALUES 
("raw"),
("belt"),
("sleeves"),
("straps");

INSERT INTO `set_conditions` (`set_id`,`condition_id`) VALUES
(1,1),
(1,2),
(3,1),
(4,1),
(5,1),
(5,3),
(8,4);

INSERT INTO `set_notes` (`set_id`,`content`) VALUES
(1,"need moar roids"),
(4,"hips can crush the bones of old women and grind them into dust"),
(5,"huehuehueheuhe");

