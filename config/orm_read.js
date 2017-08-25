var connection = require('./connection.js');

function execute(query_string, callback) {
	console.log(query_string);
	connection.query(query_string, (error, result) => {
		if (error) {throw error};
		callback(result);
	});
};

var orm_read = {
	// return all set data
	select_all: function(callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
	// return set data in range (today - 7), today
	select_for_week: function(callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE `set_date` BETWEEN CURDATE()-7 AND CURDATE() ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
	// return set data on date
	select_by_date: function(date, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE (`set_date`='"
			+ date + "');";
		execute(query_string, callback);
	},
	// return set data in range start_date - end_date
	select_in_range: function(start_date, end_date, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE `set_date` BETWEEN '" + start_date + "' AND '" + end_date + "';";
		execute(query_string, callback);
	},
	// return set data recorded in a given month
	select_for_month:function(month, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE MONTH(`set_date`) =" + month + " ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
	// return the heaviest weight lifted in a given rep range 
	select_pr: function(movement_id, reps, callback) {
		var query_string = "SELECT MAX(`weight`), `movement_name` FROM `sets` NATURAL JOIN `movements` WHERE (`no_reps`=" + reps + ") AND (`movement_id`=" + movement_id + ");";
		execute(query_string, callback);
	},
	// return notes for a set
	select_set_notes: function(set_id, callback) {
		var query_string = "SELECT * FROM `set_notes` WHERE (`set_id`=" + set_id + ");";
		execute(query_string, callback);
	},
	select_conditions(callback) {
		var query_string = "SELECT * FROM `conditions`;"
		execute(query_string, callback);
	},
	// return conditions for a set
	select_set_conditions: function(set_id, callback) {
		var query_string = "SELECT * FROM `set_conditions` NATURAL JOIN `conditions` WHERE (`set_id`=" + set_id + ");";
		execute(query_string, callback);
	},
	// return all movements and their ids (as select options)
	select_movements: function(callback) {
		var query_string = "SELECT * FROM `movements`;"
		execute(query_string, callback);
	},
	// return all set data for a given movement
	select_by_movement: function(movement_id, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE (`movement_id`=" + movement_id + ");";
		execute(query_string, callback)
	}
// end orm_read
};

module.exports = orm_read;

