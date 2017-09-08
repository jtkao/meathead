var orm_delete = require("../config/orm_delete.js") 

var model_delete = {
	erase_set: function(set_id, callback) {
		orm_delete.delete_set(set_id, (result)=>{
			callback(result);
			return result;
		})
	},

	erase_set_note: function(set_id, callback) {
		orm_delete.delete_set_note(set_id, (result)=>{
			callback(result);
			return result;
		})
	},

	erase_set_condition: function(set_id, condition_id, callback) {
		orm_delete.delete_set_condition(set_id, condition_id, (result)=>{
			callback(result);
			return result;
		})
	}
};

module.exports = model_delete;