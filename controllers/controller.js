var db = require("../models")

module.exports = function(app) {
	app.get("/", (req,res) =>{

		db.sequelize.query("SELECT * FROM `movements`").then((data)=>{
			var movements = data[0]
			console.log(movements)
			
			db.sequelize.query("SELECT * FROM `conditions`").then((data)=>{
				var conditions = data[0]
				console.log(conditions)
			res.render("home", {movement:movements, condition:conditions});
			})
		})
	})

	app.post("/log", (req,res)=>{
		var set = req.body;
		console.log(set);

		res.end();
	})
}