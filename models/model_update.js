var orm_update = require("../config/orm_update.js") 

var model_update = {
	// UPDATE SET DATA
	//
	update_movement: function(set_id, updated_movement_id, callback) {
		orm_update.edit_set_movement(set_id, updated_movement_id, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	update_weight: function(set_id, updated_weight, callback) {
		orm_update.edit_set_weight(set_id, updated_weight, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	update_sets: function(set_id, updated_no_sets, callback) {
		orm_update.edit_set_sets(set_id, updated_no_sets, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	update_reps: function(set_id, updated_no_reps, callback) {
		orm_update.edit_set_reps(set_id, updated_no_reps, (result)=>{
			callback(result);
			return result;
		});
	},
	//
	update_rpe: function(set_id, updated_rpe, callback) {
		orm_update.edit_set_rpe(set_id, updated_rpe, (result)=>{
			callback(result);
			return result;
		});
	},
	// UPDATE MOVEMENTS AND CONDITIONS
	//
	update_movement_name: function(movement_id, updated_name, callback) {
		orm_update.edit_movement_name(movement_id, updated_name, (result)=>{
			callback(result);
			return result;
		});
	}
};

module.exports = model_update;