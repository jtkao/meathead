var read_sets = require("../models/model_read.js");
var create_sets = require("../models/model_create.js");
var update_sets = require("../models/model_update.js");

function to_view(response, result){
	result.forEach((set)=>{
		var date_to_string = String(set.set_date).substring(4,15);
		set.set_date = date_to_string;
	});

	response.send(result);
}

module.exports = function(app) {

	app.get("/setlog", (req,res)=>{
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

		read_sets.find_on_date(date, (result)=>{
			var test = result;

			test.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			read_sets.find_movements((movements)=>{
				var set_data = test;
				var mvmt_data = movements;
				//res.render("setlog", {"logged":test, "mvmt":movements})
				read_sets.find_conditions((conditions)=>{
					res.render("setlog", {"logged":test, "mvmt":movements, "conditions":conditions})
				})
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

	app.post("/find_1rm", (req,res)=>{
		var movement_id = req.body.movement_id;

		read_sets.find_1rm(movement_id, (result)=>{
			res.send(result);
		});
	});

	// FIND NOTES AND CONDITIONS
	app.post("/find_set_notes", (req,res)=>{
		var id = req.body.set_id;

		read_sets.find_set_notes(id, (result)=>{
			var set_id = [{"set_id": id}];
			var response = set_id.concat(result);
			res.send(response)
		});
	});

	app.post("/find_set_conditions", (req,res)=>{
		var id = req.body.set_id;

		read_sets.find_set_conditions(id, (result)=>{
			var set_id = [{"set_id": id}];
			var response = set_id.concat(result);
			res.send(response)
		});
	});
	//

	app.post("/add_set_condition", (req, res)=>{
		console.log(req.body)
		var set_id = req.body.set_id;
		var condition_id = req.body.condition_id;

		create_sets.add_set_condition(set_id, condition_id, (result)=>{
			res.send(result);
		})
	});

	app.post("/add_set_note", (req, res)=>{
		console.log(req.body);
		var set_id = req.body.set_id;
		var content = req.body.content;

		create_sets.add_set_note(set_id, content, (result)=>{
			res.send(result);
		})
	});

	app.post("/update_set_note", (req, res)=>{
		console.log(req.body);
		var set_id = req.body.set_id;
		var content = req.body.content;

		update_sets.update_notes(set_id, content, (result)=>{
			res.send(result);
		})
	})


}