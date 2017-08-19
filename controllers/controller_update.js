var sets = require("../models/model_update.js");

module.exports = function(app) {
	app.post("/update_set_movement", (req, res)=>{
		var set_id = 1;
		var updated_movement_id = 3;

		sets.update_set_movement(set_id, updated_movement_id, (result)=>{
			res.send(result)
		});
	});
// end controller read 
};
