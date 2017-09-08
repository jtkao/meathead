var read_sets = require("../models/model_read.js");
var create_sets = require("../models/model_create.js");

var bcrypt = require('bcrypt');

module.exports = function(app) {

	app.get("/", (req,res) =>{

		read_sets.find_movements((movements)=>{
			res.render("home", {"movement":movements})
		});
	});

	app.post("/log", (req, res)=>{
		var set = req.body;
		console.log("request body:", set);

		var movement_id = req.body.movement_id;
		var weight = req.body.weight;
		var no_sets = req.body.no_sets;
		var no_reps = req.body.no_reps;
		var rpe = req.body.rpe;

		create_sets.add_record(movement_id, weight, no_sets, no_reps, rpe, (result)=>{
			res.send(result);
		})
	});

	app.get("/controls", (req, res)=>{
		res.render("controls");
	});

	app.post("/authenticate", (req, res)=>{
		console.log("VERIFY LOGIN")
		var username = req.body.username;
		var password = req.body.password; 

		bcrypt.compare(password, "$2a$10$gJtsmwV2Xlm4bs/so4osiuBsmsRagI9d0.lCNTYjnrE0jKRqsFPnm", (err, result)=>{
			if (err) {throw err};

			if (result) {
				res.send("success");
			} else {
				console.log("NOPE");
				res.send("fail");
			}
		})
	});
}