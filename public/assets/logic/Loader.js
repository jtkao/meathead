function Barbell() {

	// standard values of common plates
	this.plate = 45;
	this.quarter = 25;
	this.dime = 10;
	this.nickel = 5;
	this.thalf = 2.5;

	this.bar = [];
	this.bar_total = 0;

	// add weight as element to array bar
	this.load = function(weight) {
		if (!isNaN(weight)) {
			this.bar.push(weight);
		}
	};

	// return bar_total as the total of all elements in array bar
	this.add = function() {
		var sum = 0;
		this.bar.forEach((value)=>{
			sum += value;
		}, this);

		this.bar_total = sum;
	};

	// subract weight from bar_total
	this.subtract = function(weight) {
		if (!isNaN(weight)) {
			this.bar_total -= weight;
		}
	};

	// clear array bar
	this.clear = function() {
		this.bar = [];
	};
}

var me = new Barbell();

me.load(me.plate);
me.load(me.plate);
me.load(me.plate);
me.load(me.plate);
me.add();
console.log(me.bar_total);
me.subtract(90);
console.log(me.bar_total)


module.exports = Barbell

