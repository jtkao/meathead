var connection = require('./connection.js');

function execute(query_string, callback) {
	console.log(query_string);
	connection.query(query_string, (error, result) => {
		if (error) {throw error};
		callback(result);
	});
};

var orm_read = {
	// READ
	// all
	select_all: function(callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
		// for_week
	select_for_week: function(callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE `set_date` BETWEEN CURDATE()-7 AND CURDATE() ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
	// on_date
	select_by_date: function(date, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE (`set_date`='"
			+ date + "');";
		execute(query_string, callback);
	},
	// in_range
	select_in_range: function(start_date, end_date, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE `set_date` BETWEEN '" + start_date + "' AND '" + end_date + "';";
		execute(query_string, callback);
	},
	// 
	select_for_month:function(month, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE MONTH(`set_date`) =" + month + " ORDER BY (`set_date`);";
		execute(query_string, callback);
	},
	// find_pr, find_1rm
	select_pr: function(movement_id, reps, callback) {
		var query_string = "SELECT MAX(`weight`) FROM `sets` WHERE (`no_reps`=" + reps + ") AND (`movement_id`=" + movement_id + ");";
		execute(query_string, callback);
	},
	// find_notes
	select_set_notes: function(set_id, callback) {
		var query_string = "SELECT * FROM `set_notes` WHERE (`set_id`=" + set_id + ");";
		execute(query_string, callback);
	},
	// find_conditions
	select_set_conditions: function(set_id, callback) {
		var query_string = "SELECT * FROM `set_conditions` NATURAL JOIN `conditions` WHERE (`set_id`=" + set_id + ");";
		execute(query_string, callback);
	},
	//
	select_movements: function(callback) {
		var query_string = "SELECT * FROM `movements`;"
		execute(query_string, callback);
	},
	//
	select_by_movement: function(movement_id, callback) {
		var query_string = "SELECT * FROM `sets` NATURAL JOIN `movements` WHERE (`movement_id`=" + movement_id + ");";
		execute(query_string, callback)
	}
// end orm_read
};

module.exports = orm_read;

