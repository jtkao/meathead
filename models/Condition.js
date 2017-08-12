module.exports = function(sequelize, Datatypes) {
	var Condition = sequelize.define("Condition", {
		name: {
			type: Datatypes.TEXT,
			allowNull: false,
			validate: {
                len: [1]
            }
		}
	});

	return Condition;
}