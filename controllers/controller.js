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

		db.Log.create({
			weight: set.weight,
			sets: set.sets,
			reps: set.reps,
			movementid: set.movementid
		});

		res.end();
	})

	app.get("/traininglog", (req,res)=>{
		db.sequelize.query("SELECT * FROM `movements`").then((data)=>{
			var movements = data[0]
			// console.log(movements_list)

			db.sequelize.query("SELECT * FROM `logs`").then((data)=>{
				var log_raw = data[0]
				var movements_list = movements;
				// console.log(log_raw)

				var log_display = [];

				log_raw.forEach((entry)=>{
					var set = {
						"log_id": entry.id,
						"weight": entry.weight,
						"sets": entry.sets,
						"reps": entry.reps,
						"date": entry.createdAt

					}

					console.log(entry.createdAt)


					movements_list.forEach((movement)=>{
						if (entry.movementid === movement.id) {
							set["movement"] = movement.name
						}
					})

					log_display.push(set)
				})

				console.log(log_display)

				res.render("traininglog", {log:log_display})
			})
		});
	});

// end controller
};
