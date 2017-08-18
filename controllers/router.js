
module.exports = function(app) {
	app.post("/newmovement", (req,res)=>{
		console.log("new movement")
		var movement = req.body.movement;


		res.end();
	})

	app.get("/", (req,res) =>{
		res.render("home", {movement:movements});
	})

	app.post("/log", (req, res)=>{
		var set = req.body;
		console.log("request body:", set);

		res.end();

	})

	app.get("/traininglog", (req,res)=>{
		res.render("traininglog")
	});

}