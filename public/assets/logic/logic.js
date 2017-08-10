var total = 0;
// second element is the weight of the barbell added
var barbell_accounted = [false, 0];
// string
var custom = "";

var reps = 0;

$(document).ready(()=>{
	console.log("hi");

	$("#enter-box").hide();

	// SWITCH

	$("#toggle-enter").on("click", ()=>{
		$("#load-box").hide();
		$("#enter-box").show();
	})

	$("#toggle-load").on("click", ()=>{
		$("#enter-box").hide();
		$("#load-box").show();
	})

	// BARBELL

	$("#bb45").on("click", ()=>{
		console.log("before", barbell_accounted)
		if (!barbell_accounted[0]) {
			barbell_accounted[0] = true;
			barbell_accounted[1] = 45;
			total += 45;

			$("#bb-display").html(total)
			$("#bb-accounted").html("accounted for!")
		} else {
			barbell_accounted[0] = false;
			
			// set <barbell weight ONLY> IF bar weight is accounted for
			if (barbell_accounted[1] === 55) {
				total -= 55;
			} else if (barbell_accounted[1] === 45) {
				total -= 45;
			}


			$("#bb-display").html(total)
			$("#bb-accounted").html("not accounted for!")
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
			$("#bb-accounted").html("accounted for!")
		} else {
			barbell_accounted[0] = false;
			
			// set <barbell weight ONLY> = 0 IF bar weight is accounted for
			if (barbell_accounted[1] === 55) {
				total -= 55;
			} else if (barbell_accounted[1] === 45) {
				total -= 45;
			}

			$("#bb-display").html(total)
			$("#bb-accounted").html("not accounted for!")
		}
		console.log("after", barbell_accounted)
	});

	// clears the entire 
	$("#bb-clear").on("click",()=>{
		barbell_accounted = [false, 0];
		total = 0;
		$("#bb-display").html(total)
		$("#bb-accounted").html("not accounted for!")
	})

	// LOADING WEIGHTS

	$(".plate").on("click", (me)=>{
		weight = me.currentTarget.value;
		total += (parseInt(weight) * 2)

		$("#bb-display").html(total)
	});

	// CUSTOM

	$(".numbtn").on("click", (me)=>{
		number = me.currentTarget.value;
		custom += number;
		$("#custom-display").html(custom)
	})

	$("#set-custom").on("click", ()=>{
		total = parseInt(custom);
		custom = "";
		$("#custom-display").html("0");
		$("#bb-display").html(total);
	})

	$("#custom-backspace").on("click", ()=>{
		custom = custom.substring(0, custom.length-1)
		$("#custom-display").html(custom)
	})

	// REPS

	$("#repup").on("click", ()=>{
		reps += 1;
		$("#rep-display").html(reps);
	});

	$("#repdown").on("click", ()=>{
		if (reps > 0) {
			reps -= 1;
			$("#rep-display").html(reps);
		};
	});
})