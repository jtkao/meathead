var sets = require("../models/model_update.js");

module.exports = function(app) {
	// UPDATE SET DATA

	app.post("/update_set_movement", (req, res)=>{
		var set_id = 1;
		var updated_movement_id = 3;

		sets.update_movement(set_id, updated_movement_id, (result)=>{
			res.send(result)
		});
	});

	app.post("/update_set_weight", (req, res)=>{
		var set_id = 1;
		var updated_weight = 455;

		sets.update_weight(set_id, updated_weight, (result)=>{
			res.send(result)
		});
	});

	app.post("/update_set_sets", (req, res)=>{
		var set_id = 1;
		var updated_no_sets = 1;

		sets.update_sets(set_id, updated_no_sets, (result)=>{
			res.send(result)
		});
	});

	app.post("/update_set_reps", (req, res)=>{
		var set_id = 1;
		var updated_no_reps = 1;

		sets.update_reps(set_id, updated_no_reps, (result)=>{
			res.send(result);
		});
	});

	app.post("/update_set_rpe", (req, res)=>{
		var set_id = 1;
		var updated_rpe = 10;

		sets.update_rpe(set_id, updated_rpe, (result)=>{
			res.send(result);
		});
	});

	app.post("/update_set_notes", (req, res)=>{
		var set_id = 1;
		var updated_content = "butter on thighs don't help the stretch reflex" ;

		sets.update_notes(set_id, updated_content, (result)=>{
			res.send(result);
		});
	});

	// UPDATE MOVEMENT AND CONDITION NAMES

	app.post("/update_movement_name", (req, res)=>{
		var movement_id = 1;
		var updated_name = "LOW BAR SQUAT";

		sets.update_movement_name(movement_id, updated_name, (result)=>{
			res.send(result);
		});
	});

	app.post("/update_condition_name", (req, res)=>{
		var condition_id = 1;
		var updated_name = "bovine growth hormone";

		sets.update_condition_name(condition_id, updated_name, (result)=>{
			res.send(result);
		});
	});
// end controller read 
};
