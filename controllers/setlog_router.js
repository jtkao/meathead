var read_sets = require("../models/model_read.js");

module.exports = function(app) {

	app.get("/traininglog", (req,res)=>{

		read_sets.find_all((result)=>{
			var raw_data = result;

			raw_data.forEach((set)=>{
				var date_to_string = String(set.set_date).substring(0,15);
				console.log(date_to_string);
				set.set_date = date_to_string;
			});

			res.render("traininglog", {"logged":result})
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