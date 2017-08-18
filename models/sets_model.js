var orm = require("../config/orm.js") 

var sets_model = {

	// return all sets ever
	all: function(callback) {
		orm.select_all((result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets on date
	on_date: function(date, callback) {
		orm.select_by_date(date, (result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets between dates
	in_range: function(start, end, callback) {
		orm.select_in_range(start, end, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	find_1rm: function(movement_id, callback) {
		orm.select_pr(movement_id, 1, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	find_notes: function(set_id, callback) {
		orm.select_notes(set_id, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	find_conditions: function(set_id, callback) {
		orm.select_conditions(set_id, (result)=>{
			callback(result);
			return result;
		});
	}
};

module.exports = sets_model;