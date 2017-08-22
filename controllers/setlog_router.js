var read_sets = require("../models/model_read.js");

module.exports = function(app) {

	app.get("/setlog", (req,res)=>{
		var month = "MONTH(CURDATE())"

		read_sets.find_for_month(month, (result)=>{
			var raw_data = result;

			raw_data.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.render("setlog", {"logged":result})
		});
	});

	app.get("/setlog_all", (req,res)=>{

		read_sets.find_all((result)=>{
			var raw_data = result;

			raw_data.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.render("setlog", {"logged":result})
		});
	});

	app.get("/setlog_week", (req,res)=>{

		read_sets.find_for_week((result)=>{
			var raw_data = result;

			raw_data.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.render("setlog", {"logged":result})
		});
	});

	app.post("/setlog_month", (req, res)=>{
		var month = req.body.month
	
		read_sets.find_for_month(month, (result)=>{
			console.log("server response", result)
			var raw_data = result;

			raw_data.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(4,15);
				set.set_date = date_to_string;
			});

			res.render("setlog", {"logged":result});
		});
	});

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