var orm_CR = require("../config/orm_CR.js") 

var sets_model = {
	// CREATE
	// add new record
	add_record: function(movement_id, weight, no_sets, no_reps, rpe, callback) {
		orm_CR.new_set(movement_id, weight, no_sets, no_reps, rpe, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new condition
	add_condition: function(condition_name, callback) {
		orm_CR.new_condition(condition_name, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new movement 
	add_movement: function(movement_name, callback) {
		orm_CR.new_movement(movement_name, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new set condition
	add_set_condition: function(set_id, condition_id, callback) {
		orm_CR.new_set_condition(set_id, condition_id, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new set note
	add_set_note: function(set_id, content, callback) {
		orm_CR.new_set_note(set_id, content, (result)=>{
			callback(result);
			return result;
		})
	},
	// READ
	// return all sets ever
	all: function(callback) {
		orm_CR.select_all((result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets on date
	on_date: function(date, callback) {
		orm_CR.select_by_date(date, (result)=>{
			callback(result);
			return result;
		});
	},
	// return all sets between dates
	in_range: function(start, end, callback) {
		orm_CR.select_in_range(start, end, (result)=>{
			callback(result);
			return result;
		});
	},
	// return 1 rep max
	find_1rm: function(movement_id, callback) {
		orm_CR.select_pr(movement_id, 1, (result)=>{
			callback(result);
			return result;
		});
	},
	// return set notes for single set
	find_set_notes: function(set_id, callback) {
		orm_CR.select_set_notes(set_id, (result)=>{
			callback(result);
			return result;
		});
	},
	// return set conditions for single set
	find_set_conditions: function(set_id, callback) {
		orm_CR.select_set_conditions(set_id, (result)=>{
			callback(result);
			return result;
		});
	}
};

module.exports = sets_model;