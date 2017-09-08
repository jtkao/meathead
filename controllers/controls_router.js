var create_sets = require("../models/model_create.js");
var delete_sets = require("../models/model_delete.js");

module.exports = function(app) {
	app.post("/new_t_movement", (req,res)=>{
		var movement = req.body.movement_name;
		console.log('adding new movement', movement);
		create_sets.add_movement(movement, (result)=>{
			res.send(result);
		});
	});

	app.post("/new_t_condition", (req,res)=>{
		var condition = req.body.condition_name;
		console.log('adding new condition', condition);
		create_sets.add_condition(condition, (result)=>{
			res.send(result);
		});
	});

	app.post("/delete_set_note", (req, res)=>{
		var set_id = req.body.set_id;
		console.log("delete set note for setid#", set_id);
		delete_sets.erase_set_note(set_id, (result)=>{
			res.send(result);
		});
	});	

	app.post("/delete_set_condition", (req, res)=>{
		var set_id = req.body.set_id;
		var condition_id = req.body.condition_id;

		console.log("delete set condition#",condition_id, "for setid#", set_id);
		delete_sets.erase_set_condition(set_id, condition_id, (result)=>{
			res.send(result);
		});
	});
};