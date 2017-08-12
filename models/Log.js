module.exports = function(sequelize,Datatypes) {
	var Log = sequelize.define("Log", {
		weight: {
			type: Datatypes.INTEGER,
			allowNull: false, 
		},
		sets: {
			type: Datatypes.INTEGER,
			allowNull: false, 
		},
		reps: {
			type: Datatypes.INTEGER,
			allowNull: false, 
		},
		movementid: {
			type: Datatypes.INTEGER,
			allowNull: false,
		},
		notes: {
			type: Datatypes.TEXT,
			allowNull: true
		}
	});

	return Log;
};