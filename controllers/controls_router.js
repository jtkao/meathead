var create_sets = require("../models/model_create.js");

module.exports = function(app) {
	app.post("/new_t_movement", (req,res)=>{
		var movement = req.body.movement_name;
		console.log('adding new movement', movement);
		create_sets.add_movement(movement, (result)=>{
			res.send(result)
		})
	});

	app.post("/new_t_condition", (req,res)=>{
		var condition = req.body.condition_name;
		console.log('adding new condition', condition);
		create_sets.add_condition(condition, (result)=>{
			res.send(result)
		})
	})
}