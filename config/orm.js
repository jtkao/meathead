var connection = require('./connection.js');

var orm = {

	// 
	selectAll: function(cbf) {
		query_string = "SELECT * FROM `sets` NATURAL JOIN `movements`";

		connection.query(query_string, (error, result) => {
			if (error) {throw error};
			console.log("from the orm", result)
			cbf(result)
		})
	}

// end orm
};

module.exports = orm;

