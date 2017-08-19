var orm_create = require("../config/orm_create.js") 

var model_create = {
	// CREATE
	// add new record
	add_record: function(movement_id, weight, no_sets, no_reps, rpe, callback) {
		orm_create.new_set(movement_id, weight, no_sets, no_reps, rpe, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new condition
	add_condition: function(condition_name, callback) {
		orm_create.new_condition(condition_name, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new movement 
	add_movement: function(movement_name, callback) {
		orm_create.new_movement(movement_name, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new set condition
	add_set_condition: function(set_id, condition_id, callback) {
		orm_create.new_set_condition(set_id, condition_id, (result)=>{
			callback(result);
			return result;
		})
	},
	// add new set note
	add_set_note: function(set_id, content, callback) {
		orm_create.new_set_note(set_id, content, (result)=>{
			callback(result);
			return result;
		})
	}
};

module.exports = model_create;