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

	app.post("/newcondition", (req,res)=>{
		console.log("new condition")
		var condition = req.body.condition;
		console.log(condition);

		db.Condition.findOrCreate({
			where: {
				name: condition
			}
		})

		res.end();
	})
}