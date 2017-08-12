var db = require("../models")

module.exports = function(app) {
	app.post("/newmovement", (req,res)=>{
		console.log("new movement")
		var movement = req.body.movement;
		console.log(movement);

		db.Movement.findOrCreate({
			where: {
				name: movement
			}
		})

		res.end();
	})
}