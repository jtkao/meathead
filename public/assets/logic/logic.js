var total = 0;

// second element is the weight of the barbell added
var barbell_accounted = [false, 0];

$(document).ready(()=>{
	console.log("hi");

	// BARBELL

	$("#bb45").on("click", ()=>{
		console.log("before", barbell_accounted)
		if (!barbell_accounted[0]) {
			barbell_accounted[0] = true;
			barbell_accounted[1] = 45;
			total += 45;

			$("#bb-display").html(total)
		} else {
			barbell_accounted[0] = false;
			
			// set <barbell weight ONLY> IF bar weight is accounted for
			if (barbell_accounted[1] === 55) {
				total -= 55;
			} else if (barbell_accounted[1] === 45) {
				total -= 45;
			}


			$("#bb-display").html(total)
		}
		console.log("after", barbell_accounted)
	});

	$("#bb55").on("click", ()=>{
		console.log("before", barbell_accounted)
		if (!barbell_accounted[0]) {
			barbell_accounted[0] = true;
			barbell_accounted[1] = 55;
			total += 55;

			$("#bb-display").html(total)
		} else {
			barbell_accounted[0] = false;
			
			// set <barbell weight ONLY> = 0 IF bar weight is accounted for
			if (barbell_accounted[1] === 55) {
				total -= 55;
			} else if (barbell_accounted[1] === 45) {
				total -= 45;
			}

			$("#bb-display").html(total)
		}
		console.log("after", barbell_accounted)
	});

	// clears the entire 
	$("#bb-clear").on("click",()=>{
		total = 0;
		$("#bb-display").html(total)
	})

	// LOADING WEIGHTS

	$(".plate").on("click", (me)=>{
		weight = (me.currentTarget.value);
		total += (parseInt(weight) * 2)

		$("#bb-display").html(total)
	});
})