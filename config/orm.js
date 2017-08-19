var connection = require('./connection.js');

var orm = {
	// CREATE
	//
	new_set: function(movement_id, weight, no_sets, no_reps, rpe, callback) {
		query_string = "INSERT INTO `sets` (`set_date`,`movement_id`,`weight`,`no_sets`,`no_reps`, `rpe`) VALUES "
			+ "(CURDATE(), " + movement_id + ", " + weight + ", " + no_sets + ", " + no_reps + ", " + rpe + ");"
		// console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	//
	new_condition: function(condition_name, callback) {
		query_string = "INSERT INTO `conditions` (`condition_name`) VALUES ('" + condition_name + "');"
		// console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	//
	new_movement: function(movement_name, callback) {
		query_string = "INSERT INTO `movements` (`movement_name`) VALUES ('" + movement_name + "');"
		console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// READ
	// all
	select_all: function(callback) {
		query_string = "SELECT * FROM `sets` NATURAL JOIN `movements`";
		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// on_date
	select_by_date: function(date, callback) {
		query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE (`set_date`='"
			+ date + "');";
		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// in_range, for_week, for_month
	select_in_range: function(start_date, end_date, callback) {
		query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE `set_date` BETWEEN '"
			+ start_date + "' AND '" + end_date + "';";
		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// find_pr, find_1rm
	select_pr: function(movement_id, reps, callback) {
		query_string = "SELECT MAX(`weight`) FROM `sets` WHERE (`no_reps`="
			+ reps + ") AND (`movement_id`=" + movement_id + ");"
		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// find_notes
	select_notes: function(set_id, callback) {
		query_string = "SELECT * FROM `set_notes` WHERE (`set_id`=" + set_id + ");"
		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	},
	// find_conditions
	select_conditions: function(set_id, callback) {
		query_string = "SELECT * FROM `set_conditions` NATURAL JOIN `conditions` WHERE (`set_id`=" + set_id + ");"

		//console.log(query_string)

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	}
	// UPDATE
	// DELETE
// end orm
};

module.exports = orm;

