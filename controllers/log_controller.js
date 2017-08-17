
module.exports = function(app) {
	app.post("/newmovement", (req,res)=>{
		console.log("new movement")
		var movement = req.body.movement;


		res.end();
	})
}