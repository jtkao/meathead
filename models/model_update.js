var orm_update = require("../config/orm_update.js") 

var model_update = {
	// UPDATE
	//
	update_set_movement: function(set_id, updated_movement_id, callback) {
		orm_update.edit_set_movement(set_id, updated_movement_id, (result)=>{
			callback(result);
			return result;
		});
	}
};

module.exports = model_update;