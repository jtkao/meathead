var total = 0;
// second element is the weight of the barbell added
var barbell_accounted = [false, 0];
var custom = "";

var reps = 0;
var sets = 0;

$(document).ready(()=>{
	$("#enter-box").hide();
	$("#log-box").hide();

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
			$("#bb-accounted").html("accounted for! (45)")
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
			$("#bb-accounted").html("accounted for! (55)")
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
		reps = 0;
		$("#bb-display").html(total)
		$("#bb-accounted").html("not accounted for!")
		$("#rep-display").html(reps)
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

	// REPS x SETS

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

	$("#setup").on("click", ()=>{
		sets += 1;
		$("#set-display").html(sets);
	});

	$("#setdown").on("click", ()=>{
		if (sets > 0) {
			sets -= 1;
			$("#set-display").html(sets);
		};
	});

	// submit 

	$("#begin-log").on("click", ()=>{
		event.preventDefault();
		$("#log-head").html(total + " " + sets + " x " + reps)

		$("#bb-box").hide();
		$("#load-box").hide();
		$("#enter-box").hide();
		$("#rep-box").hide();
		$("#begin-log").hide();
		$("#log-box").show();
	});

	$("#submit-log").on("click", ()=>{
		$.ajax({
			url: "/log",
			method: 'POST',
			data: {
				"reps": reps,
				"weight": total
			}
		})

		$("#bb-box").show();
		$("#load-box").show();
		$("#rep-box").show();
		$("#begin-log").show();
		$("#log-box").hide();
	})

	$("#new-movement-form").on("submit", ()=>{
		event.preventDefault();
		var movement = $("#new-movement-input").val().trim().toUpperCase();
		console.log(movement)

		$.ajax({
			url: "/newmovement",
			method: 'POST',
			data: {
				"movement": movement
			}
		})
		
	})

	$("#new-condition-form").on("submit", ()=>{
		event.preventDefault();
		var condition = $("#new-condition-input").val().trim().toUpperCase();
		console.log(condition)
		
		$.ajax({
			url: "/newcondition",
			method: 'POST',
			data: {
				"condition": condition
			}
		})
	})
})