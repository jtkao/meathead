const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 4200;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

// controller 
//require('./controllers/controller_create.js')(app)
//require('./controllers/controller_read.js')(app)
//require('./controllers/controller_update.js')(app)


//router
require('./controllers/main_router.js')(app)
require('./controllers/setlog_router.js')(app)

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

