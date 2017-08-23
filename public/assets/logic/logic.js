$("#home-modal").modal();

var total = 45;
// second element is the weight of the barbell added
var barbell_accounted = [true, 45];
var custom = "";

var reps = 0;
var sets = 1;

var barbell_emulator = "=========[45]==========";

function reset() {
	barbell_accounted = [false, 0];
	barbell_emulator = "=========[45]=========="
	total = 45;
	reps = 0;
	sets = 1;

	$("#bb-display").html(total);
	$("#bb-accounted").html("not accounted for!");
	$("#rep-display").html(reps);
	$("#set-display").html(sets);
	$("#bb-emulator").html(barbell_emulator);
};

function barbell_control (weight, opposite) {
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


$(document).ready(()=>{
	$("#enter-box").hide();
	$("#log-box").hide();

	// SWITCH

	$("#toggle-enter").on("click", ()=>{
		$("#load-box").hide();
		$("#enter-box").show();
		$("#bb45").hide();
		$("#bb55").hide();
		reset();
	});

	$("#toggle-load").on("click", ()=>{
		$("#enter-box").hide();
		$("#load-box").show();
		$("#bb45").show();
		$("#bb55").show();
		reset();
	});

	// BARBELL

	$("#bb45").on("click", ()=>{
		barbell_control(45,55);
	});

	$("#bb55").on("click", ()=>{
		barbell_control(55,45);
	});

	// clears the entire 
	$("#bb-clear").on("click",()=>{
		reset();
	});

	// LOADING WEIGHTS

	$(".plate").on("click", (me)=>{
		weight = me.currentTarget.value;
		total += (parseFloat(weight) * 2)

		var plate = " [" + weight + "] ";
		console.log(barbell_emulator)

		var loaded = plate + barbell_emulator + plate;
		barbell_emulator = loaded;


		$("#bb-display").html(total)
		$("#bb-emulator").html(barbell_emulator);
	});

	// CUSTOM

	$(".numbtn").on("click", (me)=>{
		number = me.currentTarget.value;
		custom += number;
		$("#custom-display").html(custom);
	});

	$("#set-custom").on("click", ()=>{
		if (custom.length === 0) {
			total = 0;
		} else {
			total = parseInt(custom);
		}
		custom = "";
		$("#custom-display").html("0");
		$("#bb-display").html(total);
	});

	$("#custom-backspace").on("click", ()=>{
		custom = custom.substring(0, custom.length-1);
		$("#custom-display").html(custom);
	});

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
		if (sets === 1) {
			sets = 1;
			$("#set-display").html(sets);
		} else if (sets >= 2) {
			sets -= 1
			$("#set-display").html(sets);
		}
	});

	// submit 

	$("#begin-log").on("click", ()=>{
		event.preventDefault();
		$("#home-modal-head").html(total + " " + sets + " x " + reps)

		$("#home-modal").modal("show");
	});

	$("#submit-log").on("click", ()=>{
		event.preventDefault();

		var movement = $("#select-movement").val();

		console.log(movement + ": " + total + " " + sets + " x " + reps)

		$.ajax({
			url: "/log",
			method: 'POST',
			data: {
				"sets": sets,
				"reps": reps,
				"weight": total,
				"movementid": movement
			}
		});

		reset();
		$("#enter-box").hide();
		$("#home-modal").modal("hide");
	});

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
	});

});