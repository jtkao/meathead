function populate(data) {
	$("#control-box").hide();
	$("#data-results-body").html("");
	// generate table elements loaded with response data
	data.forEach((set)=>{
		var raw = "<tr class='table-data'>"
		raw += '<td>' + set.movement_name + '</td>'
		raw += '<td>' + set.weight + '</td>'
		raw += '<td>' + set.no_sets + '</td>'
		raw += '<td> x </td>'
		raw += '<td>' + set.no_reps + '</td>'
		raw += '<td>' + set.set_date + '</td>'
		raw += '<td> <button class="btn get-notes" value=' + set.set_id + '> notes </button> </td>'
		raw += '<td> <button class="btn get-conditions" value=' + set.set_id + '> conditions </button> </td>'
		raw += '</tr>'
		//console.log(raw)
		$("#data-results-body").append(raw);
		
	})
};

$(document).ready(()=>{
	// toggle control panel 
	$("#data-controls").on("click", ()=>{
		var control_box = $("#control-box");
		if (control_box.is(":visible")) {
			control_box.hide();
		} else {
			control_box.show();
		};
	});
	// get all sets in range (today, today-7)
	$("#get-week").on("click", (event)=>{ event.preventDefault();
		console.log("GET week")
		$.ajax({
			url: "/find_sets_for_week",
			method: "GET",
			success: (data)=>{populate(data)}
		});
	});
	// get all sets in database
	$("#get-all").on("click", (event)=>{ event.preventDefault();
		console.log("GET ALL")
		$.ajax({
			url: "/find_all_sets",
			method: "GET",
			success: (data)=>{populate(data)}
		});
	});
	// get all sets for the selected month
	$("#get-month").on("submit", (event)=>{ event.preventDefault();
		var month = $("#month-selection").val();

		$.ajax({
			url: "/find_sets_for_month",
			method: "POST",
			data: {"month": month},
			success: (data)=>{populate(data)}
		});
	});
	// get all sets for a single workout session (date)
	$("#get-date").on("submit", (event)=>{ event.preventDefault();
		var set_date = $("#date-input").val()
		console.log(set_date)
		$.ajax({
			url: "/find_sets_on_date",
			method: "POST",
			data: {"set_date": set_date},
			success: (data)=>{populate(data)}
		});
	});
	// get all sets from today's workout (date)
	$("#get-today").on("click", (event)=>{ event.preventDefault();
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

		$.ajax({
			url: "/find_sets_on_date",
			method: "POST",
			data: {"set_date": date},
			success: (data)=>{populate(data)}
		});
	});
	// get all sets for a selected mvoement
	$("#get-movement").on("submit", (event)=>{ event.preventDefault();
		var movement_id = $("#movement-selection").val();

		$.ajax({
			url: "/find_sets_for_movement",
			method: "POST",
			data: {"movement_id": movement_id},
			success: (data)=>{populate(data)}
		});
	});
	//end 
});