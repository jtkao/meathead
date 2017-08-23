function populate(data) {
	$("#data-results-body").html("");
	// generate table elements loaded with response data
	data.forEach((set)=>{
		var raw = "<tr>"
		raw += '<td>' + set.movement_name + '</td>'
		raw += '<td>' + set.weight + '</td>'
		raw += '<td>' + set.no_sets + '</td>'
		raw += '<td>' + set.no_reps + '</td>'
		raw += '<td>' + set.set_date + '</td>'
		raw += '<td> <button class="get-notes" value=' + set.set_id + '> view </button> </td>'
		raw += '<td> <button class="get-conditions" value=' + set.set_id + '> view </button> </td>'
		raw += '</tr>'
		//console.log(raw)
		$("#data-results-body").append(raw);
	})
};

// get set commentary (notes, conditions) 
function set_commentary(element, message, route, property){
	var set_id = element.target.value;
	console.log(message, set_id)

	$.ajax({
		url: route,
		method: "POST",
		datatype: "json",
		data: {"set_id": set_id}
	}).done((data)=>{
		if (data.length > 0) {
			data.forEach((commentary)=>{
				console.log(commentary[property])
			})
		} else {
			console.log("no data!")
		}
	})
}

$(document).ready(()=>{
	// toggle control panel 
	$("#control-box").hide();
	$("#data-controls").on("click", ()=>{
		var control_box = $("#control-box");
		if (control_box.is(":visible")) {
			$("#data-controls").html("show");
			control_box.hide();
		} else {
			$("#data-controls").html("hide");
			control_box.show();
		};
	});

	$("#get-week").on("submit", (event)=>{
		event.preventDefault();
		console.log("GET week")
		$.ajax({
			url: "/find_sets_for_week",
			method: "GET",
			success: (data)=>{populate(data)}
		});
	});

	$("#get-all").on("submit", (event)=>{
		event.preventDefault();
		console.log("GET ALL")
		$.ajax({
			url: "/find_all_sets",
			method: "GET",
			success: (data)=>{populate(data)}
		});
	});


	$("#get-month").on("submit", (event)=>{
		event.preventDefault();
		var month = $("#month-selection").val();

		$.ajax({
			url: "/find_sets_for_month",
			method: "POST",
			data: {"month": month},
			success: (data)=>{populate(data)}
		});
	});

	$("#get-date").on("submit", (event)=>{
		event.preventDefault();
		var set_date = $("#date-input").val()
		$.ajax({
			url: "/find_sets_on_date",
			method: "POST",
			data: {"set_date": set_date},
			success: (data)=>{populate(data)}
		});
	});

	$("#get-today").on("click", (event)=>{
		event.preventDefault();
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

		$.ajax({
			url: "/find_sets_on_date",
			method: "POST",
			data: {"set_date": date},
			success: (data)=>{populate(data)}
		});
	});

	$("#get-movement").on("submit", (event)=>{
		event.preventDefault();
		var movement_id = $("#movement-selection").val();

		$.ajax({
			url: "/find_sets_for_movement",
			method: "POST",
			data: {"movement_id": movement_id},
			success: (data)=>{populate(data)}
		});
	});

	$("#data-results-body").on("click", "button.get-notes",(me)=>{
		set_commentary(me, "notes for set id#", "/find_set_notes", "content");
	});

	$("#data-results-body").on("click", "button.get-conditions",(me)=>{
		set_commentary(me, "conditions for set id#", "/find_set_conditions", "condition_name");
	});
	//end 
});