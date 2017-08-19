var sets = require("../models/sets_model")

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
		})
	});

	app.post("/add_movement", (req, res)=>{
		var movement_name = "OVERHEAD PRESS";

		sets.add_movement(movement_name, (result)=>{
			res.send(result)
		})
	});
	
	app.post("/all_sets", (req, res)=>{
		sets.all((result)=>{
			res.send(result);
		})
	});

	app.post("/set_on_date", (req, res)=>{
		var set_date = "2017-08-17";

		sets.on_date(set_date, (result)=>{
			res.send(result);
		})
	});

	app.post("/sets_in_range", (req, res)=>{
		var start_date = "2017-08-01";
		var end_date = "2017-08-31";

		sets.in_range(start_date, end_date, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_1rm", (req,res)=>{
		var movement_id = 1;

		sets.find_1rm(movement_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_notes", (req,res)=>{
		var set_id = 1;

		sets.find_notes(set_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_conditions", (req,res)=>{
		var set_id = 5;

		sets.find_conditions(set_id, (result)=>{
			res.send(result);
		});
	});
	
// end controller
};
