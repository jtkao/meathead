var sets = require("../models/model_read.js")

module.exports = function(app) {

	app.post("/find_all_sets", (req, res)=>{
		sets.find_all((result)=>{
			res.send(result);
		});
	});

	app.post("/find_set_on_date", (req, res)=>{
		var set_date = "2017-08-17";

		sets.find_on_date(set_date, (result)=>{
			res.send(result);
		})
	});

	app.post("/find_sets_in_range", (req, res)=>{
		var start_date = "2017-08-01";
		var end_date = "2017-08-31";

		sets.find_in_range(start_date, end_date, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_1rm", (req,res)=>{
		var movement_id = 1;

		sets.find_1rm(movement_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_set_notes", (req,res)=>{
		var set_id = 1;

		sets.find_notes(set_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_set_conditions", (req,res)=>{
		var set_id = 5;

		sets.find_conditions(set_id, (result)=>{
			res.send(result);
		});
	});
	
// end controller read 
};
