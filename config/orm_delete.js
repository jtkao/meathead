var connection = require('./connection.js');

function execute(query_string, callback) {
	console.log(query_string)
	connection.query(query_string, (error, result) => {
		if (error) {throw error};
		callback(result);
	});
};

var orm_delete = {
	// DELETE
	// delete set record
	delete_set: function(set_id, callback) {
		query_string = "DELETE FROM `sets` WHERE `set_id`=" + set_id + ";";
		execute(query_string, callback);
	},
	// delete set note
	delete_set_note: function(set_id, callback) {
		query_string = "DELETE FROM `set_notes` WHERE `set_id`=" + set_id + ";";
		execute(query_string, callback);
	},
	// delete a single set condition
	delete_set_condition: function(set_id, condition_id, callback) {
		query_string = "DELETE FROM `set_conditions` WHERE `set_id`=" + set_id 
		+ " and `condition_id`=" + condition_id +";";
		execute(query_string, callback);
	},
	// delete all set conditions for a single set record
	delete_set_conditions: function(set_id, callback) {
		query_string = "DELETE FROM `set_conditions` WHERE `set_id`=" + set_id + ";";
		execute(query_string, callback);
	}
// end orm_delete
};

module.exports = orm_delete;

