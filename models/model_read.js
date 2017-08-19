var orm_read = require("../config/orm_read.js") 

var model_read = {
	// READ
	// return all sets ever
	find_all: function(callback) {
		orm_read.select_all((result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets on date
	find_on_date: function(date, callback) {
		orm_read.select_by_date(date, (result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets between dates
	find_in_range: function(start, end, callback) {
		orm_read.select_in_range(start, end, (result)=>{
			callback(result);
			return result;
		});
	},
	// return 1 rep max
	find_1rm: function(movement_id, callback) {
		orm_read.select_pr(movement_id, 1, (result)=>{
			callback(result);
			return result;
		});
	},
	// return set notes for single set
	find_set_notes: function(set_id, callback) {
		orm_read.select_set_notes(set_id, (result)=>{
			callback(result);
			return result;
		});
	},
	// return set conditions for single set
	find_set_conditions: function(set_id, callback) {
		orm_read.select_set_conditions(set_id, (result)=>{
			callback(result);
			return result;
		});
	}
};

module.exports = model_read;