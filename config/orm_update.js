var connection = require('./connection.js');

function execute(callback) {
	connection.query(query_string, (error, result) => {
		if (error) {throw error};
		callback(result);
	});
};

var orm_update = {
	// UPDATE SET DATA
	//
	edit_set_movement: function(set_id, updated_movement_id, callback) {
		var query_string = "UPDATE `sets` SET `movement_id`=" + updated_movement_id 
			+ " WHERE `set_id`=" + set_id + ";";
		console.log(query_string);

		execute(callback);
	},
	//
	edit_set_weight: function(set_id, updated_weight, callback) {
		var query_string = "UPDATE `sets` SET `weight`=" + updated_weight 
			+ " WHERE `set_id`=" + set_id + ";";
		console.log(query_string);

		execute(callback);
	},
	//
	edit_set_sets: function(set_id, updated_no_sets, callback) {
		var query_string = "UPDATE `sets` SET `no_sets`=" + updated_no_sets 
			+ " WHERE `set_id`=" + set_id + ";";
		console.log(query_string);

		execute(callback);
	},
	//
	edit_set_reps: function(set_id, updated_no_reps, callback) {
		var query_string = "UPDATE `sets` SET `no_reps`=" + updated_no_reps 
			+ " WHERE `set_id`=" + set_id + ";";
		console.log(query_string);

		execute(callback);
	},
	//
	edit_set_rpe: function(set_id, updated_rpe, callback) {
		var query_string = "UPDATE `sets` SET `rpe`=" + updated_rpe 
			+ " WHERE `set_id`=" + set_id + ";";
		console.log(query_string);

		execute(callback);
	},
	//
	edit_set_notes: function(set_id, updated_content, callback) {
		var query_string = 'UPDATE `set_notes` SET `content`="' + updated_content 
			+ '" WHERE `set_id`=' + set_id + ';';
		console.log(query_string);

		execute(callback);
	},
	// UPDATE MOVEMENTS AND CONDITIONS
	//
	edit_movement_name: function(movement_id, updated_name, callback) {
		var query_string = 'UPDATE `movements` SET `movement_name`="' + updated_name
			+ '" WHERE `movement_id`=' + movement_id + ';';
		console.log(query_string);

		execute(callback);
	},
	//
	edit_condition_name: function(condition_id, updated_name, callback) {
		var query_string = 'UPDATE `conditions` SET `condition_name`="' + updated_name
			+ '" WHERE `condition_id`=' + condition_id + ';';
		console.log(query_string);

		execute(callback);
	}
// end orm_update
};

module.exports = orm_update;

