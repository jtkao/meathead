var connection = require('./connection.js');

var orm_update = {
	// UPDATE
	//
	edit_set_movement: function(set_id, updated_movement_id, callback) {
		var query_string = "UPDATE `sets` SET `movement_id`=" + updated_movement_id 
			+ " WHERE `set_id`=" + set_id + ";"
		console.log(query_string);

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			callback(result);
		});
	}

// end orm_update
};

module.exports = orm_update;

