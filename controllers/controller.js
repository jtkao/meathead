var sets = require("../models/sets_model")

module.exports = function(app) {
	app.get("/", (req,res) =>{
		res.render("home", {movement:movements});
	})

	app.post("/log", (req, res)=>{
		// var set = req.body;
		// console.log("request body:", set);

		res.end();

	})

	app.post("/all_sets", (req, res)=>{
		sets.all((result)=>{
			res.send(result);
		})
	});

	app.post("/set_on_date", (req, res)=>{

		set_date = "2017-08-17";

		sets.on_date(set_date, (result)=>{
			res.send(result);
		})
	});

	app.post("/sets_in_range", (req, res)=>{
		start_date = "2017-08-01";
		end_date = "2017-08-31";

		sets.in_range(start_date, end_date, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_1rm", (req,res)=>{
		movement_id = 1;

		sets.find_1rm(movement_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_notes", (req,res)=>{
		set_id = 1;

		sets.find_notes(set_id, (result)=>{
			res.send(result);
		});
	});

	app.post("/find_conditions", (req,res)=>{
		set_id = 5;

		sets.find_conditions(set_id, (result)=>{
			res.send(result);
		});
	});

	app.get("/traininglog", (req,res)=>{
		res.render("traininglog")
	});

// end controller
};
