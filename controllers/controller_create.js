var sets = require("../models/model_create.js")

module.exports = function(app) {

	app.post("/add_set", (req, res)=>{
		var movement_id = 3;
		var weight = 255;
		var no_sets = 1;
		var no_reps = 1;
		var rpe = 10;

		sets.add_record(movement_id, weight, no_sets, no_reps, rpe, (result)=>{
			res.send(result)
		})
	});

	app.post("/add_condition", (req, res)=>{
		var condition_name = "fatgripz";

		sets.add_condition(condition_name, (result)=>{
			res.send(result)
		});
	});

	app.post("/add_movement", (req, res)=>{
		var movement_name = "OVERHEAD PRESS";

		sets.add_movement(movement_name, (result)=>{
			res.send(result)
		});
	});

	app.post("/add_set_condition", (req, res)=>{
		var set_id = 13;
		var condition_id = 5;

		sets.add_set_condition(set_id, condition_id, (result)=>{
			res.send(result)
		});
	});

	app.post("/add_set_note", (req, res)=>{
		var set_id = 13;
		var content = "well duh it was raw";

		sets.add_set_note(set_id, content, (result)=>{
			res.send(result)
		});
	})
	
// end controller read 
};
