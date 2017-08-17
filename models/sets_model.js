var orm = require("../config/orm.js") 

var sets_model = {
	all: function(cbf) {
		orm.selectAll((result)=>{
			cbf(result);
			return result;
		})
	}
}

module.exports = sets_model;