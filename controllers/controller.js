module.exports = function(app) {
	app.get("/", (req,res) =>{
		res.render("home");
	})

	app.post("/log", (req,res)=>{
		var set = req.body;
		console.log(set);

		res.end();
	})
}