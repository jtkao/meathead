module.exports = function(sequelize, Datatypes) {
	var Movement = sequelize.define("Movement", {
		name: {
			type: Datatypes.TEXT,
			allowNull: false,
			validate: {
                len: [1]
            }
		}
	});

	return Movement;
}