var connection = require('./connection.js');

function execute(query_string, callback) {
	console.log(query_string)
	connection.query(query_string, (error, result) => {
		if (error) {throw error};
		callback(result);
	});
};

var orm_create = {
	// CREATE
	// add_record
	new_set: function(movement_id, weight, no_sets, no_reps, rpe, callback) {
		if (rpe.length === 0) {
			rpe = null
		}
		query_string = "INSERT INTO `sets` (`set_date`,`movement_id`,`weight`,`no_sets`,`no_reps`, `rpe`) VALUES "
			+ "(CURDATE(), " + movement_id + ", " + weight + ", " + no_sets + ", " + no_reps + ", " + rpe + ");"
		execute(query_string, callback);
	},
	// add_condition
	new_condition: function(condition_name, callback) {
		query_string = 'INSERT INTO `conditions` (`condition_name`) VALUES ("' + condition_name + '");'
		execute(query_string, callback);
	},
	// add_movement
	new_movement: function(movement_name, callback) {
		query_string = 'INSERT INTO `movements` (`movement_name`) VALUES ("' + movement_name + '");'
		execute(query_string, callback);
	},
	// add_set_condition
	new_set_condition: function(set_id, condition_id, callback) {
		query_string = "INSERT INTO `set_conditions` (`set_id`,`condition_id`) VALUES (" + set_id + ", " + condition_id + ");"
		execute(query_string, callback);
	},
	// add_set_note
	new_set_note: function(set_id, content, callback) {
		query_string = 'INSERT INTO `set_notes` (`set_id`,`content`) VALUES (' + set_id + ', "' + content + '");'
		execute(query_string, callback);
	}
// end orm_create
};

module.exports = orm_create;

