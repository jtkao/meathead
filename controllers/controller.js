var sets_model = require("../models/sets_model")

module.exports = function(app) {
	app.get("/", (req,res) =>{
		res.render("home", {movement:movements});
	})

	app.post("/log", (req,res)=>{
		// var set = req.body;
		// console.log("request body:", set);

		sets_model.all((result)=>{
			console.log("result from controller", result)
			res.send("you made it");
		})

	})

	app.get("/traininglog", (req,res)=>{
		res.render("traininglog")
	});

// end controller
};
