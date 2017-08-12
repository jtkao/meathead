var db = require("../models")

module.exports = function(app) {
	app.get("/", (req,res) =>{

		db.sequelize.query("SELECT * FROM `movements`").then((data)=>{
			var movements = data[0]
			console.log(movements)
			
			res.render("home", {movement:movements});
		})
	})

	app.post("/log", (req,res)=>{
		var set = req.body;
		console.log(set);

		res.end();
	})
}