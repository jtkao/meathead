var read_sets = require("../models/model_read.js");

function to_view(response, result){
	result.forEach((set)=>{
		var date_to_string = String(set.set_date).substring(4,15);
		set.set_date = date_to_string;
	});

	response.send(result);
	response.end();
}

module.exports = function(app) {

	app.get("/setlog", (req,res)=>{
		var month = "MONTH(CURDATE())"

		read_sets.find_for_month(month, (result)=>{
			result.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.render("setlog", {"logged":result})
		});
	});

	app.get("/find_all_sets", (req,res)=>{

		read_sets.find_all((result)=>{
			result.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.send(result);
			res.end();
		});
	});

	app.get("/find_sets_for_week", (req,res)=>{

		read_sets.find_for_week((result)=>{
			result.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.send(result);
			res.end();
		});
	});

	app.post("/find_sets_for_month", (req, res)=>{
		var month = req.body.month;
		console.log("request for month", month);
	
		read_sets.find_for_month(month, (result)=>{
			result.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			})

			res.send(result);
			res.end();
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
			console.log(result);
			res.send(result);
			res.end();
		});
	});

	app.post("/find_set_conditions", (req,res)=>{
		var set_id = req.body.set_id;

		read_sets.find_set_conditions(set_id, (result)=>{
			console.log(result);
			res.send(result);
			res.end();
		});
	});
}