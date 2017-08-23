var read_sets = require("../models/model_read.js");

function to_view(response, result){
	result.forEach((set)=>{
		var date_to_string = String(set.set_date).substring(4,15);
		set.set_date = date_to_string;
	});

	response.send(result);
}

module.exports = function(app) {

	app.get("/setlog", (req,res)=>{
		var month = "MONTH(CURDATE())"

		read_sets.find_for_month(month, (result)=>{
			var test = result;

			test.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			read_sets.find_movements((movements)=>{
				console.log(movements)
				res.render("setlog", {"logged":test, "mvmt":movements})
			});
		});
	});

	app.get("/find_all_sets", (req,res)=>{
		read_sets.find_all((result)=>{
			to_view(res, result)
		});
	});

	app.get("/find_sets_for_week", (req,res)=>{
		read_sets.find_for_week((result)=>{
			to_view(res, result)
		});
	});

	app.post("/find_sets_for_month", (req, res)=>{
		var month = req.body.month;
	
		read_sets.find_for_month(month, (result)=>{
			to_view(res, result);
		});
	});

	app.post("/find_sets_for_movement", (req, res)=>{
		var movement_id = req.body.movement_id;
	
		read_sets.find_for_movement(movement_id, (result)=>{
			to_view(res, result);
		});
	});

	app.post("/find_sets_on_date", (req, res)=>{
		var set_date = req.body.set_date;

		read_sets.find_on_date(set_date, (result)=>{
			to_view(res, result);
		})
	});

	// FIND NOTES AND CONDITIONS
	app.post("/find_set_notes", (req,res)=>{
		var set_id = req.body.set_id;

		read_sets.find_set_notes(set_id, (result)=>{
			to_view(res, result);;
		});
	});

	app.post("/find_set_conditions", (req,res)=>{
		var set_id = req.body.set_id;

		read_sets.find_set_conditions(set_id, (result)=>{
			to_view(res, result);
		});
	});
}