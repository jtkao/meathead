var read_sets = require("../models/model_read.js");

module.exports = function(app) {

	app.get("/", (req,res) =>{
		
		read_sets.find_movements((movements)=>{
			res.render("home", {"movement":movements})
		});
	})

	app.post("/log", (req, res)=>{
		var set = req.body;
		console.log("request body:", set);

		res.end();

	})

}