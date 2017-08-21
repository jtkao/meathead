$(()=>{

	function barbellControl (weight, opposite) {
		console.log("before", barbell_accounted)
		if (!barbell_accounted[0]) {
			barbell_accounted[0] = true;
			barbell_accounted[1] = weight;
			total += weight;
			var first_half = barbell_emulator.substr(0, (barbell_emulator.length/2)-1);
			var second_half = barbell_emulator.substr((barbell_emulator.length/2)+1, (barbell_emulator.length));

			barbell_emulator = first_half + weight + second_half;

			$("#bb-display").html(total)
			$("#bb-accounted").html("accounted for! " + weight + " lbs.")
			$("#bb-emulator").html(barbell_emulator)
		} else {
			barbell_accounted[0] = false;
				
			// set <barbell weight ONLY> = 0 IF bar weight is accounted for
			if (barbell_accounted[1] === weight) {
				total -= weight;
			} else if (barbell_accounted[1] === opposite) {
				total -= opposite;
			}

			var first_half = barbell_emulator.substr(0, (barbell_emulator.length/2)-1);
			var second_half = barbell_emulator.substr((barbell_emulator.length/2)+1, (barbell_emulator.length));

			barbell_emulator = first_half + "00" + second_half;

			$("#bb-display").html(total);
			$("#bb-accounted").html("not accounted for!");
			$("#bb-emulator").html(barbell_emulator);
		};
	};

	window.barbell_control = barbell_control;
})