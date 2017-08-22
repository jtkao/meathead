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

$(document).ready(()=>{
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

	$("#get-month").on("click", ()=>{
		var month = $("#month-selection").val();
		console.log(month);

		$.ajax({
			url: "/find_sets_for_month",
			method: "POST",
			data: {
				"month": month
			},
			success: (data)=>{
				populate(data)
			}
		})
	});

	$("#get-week").on("click", ()=>{
		$.ajax({
			url: "/find_sets_for_week",
			method: "GET",
			success: (data)=>{
				populate(data)
			}
		})
	});

	$("#get-all").on("click", ()=>{
		$.ajax({
			url: "/find_all_sets",
			method: "GET",
			success: (data)=>{
				populate(data)
			}
		})
	});

	$("#data-results-body").on("click", "button.get-notes",(me)=>{
		//console.log(me)
		var set_id = me.target.value;
		console.log("notes for set id#", set_id)

		$.ajax({
			url: "/find_set_notes",
			method: "POST",
			datatype: "json",
			data: {
				"set_id": set_id
			}
		}).done((data)=>{
			if (data.length > 0) {
				console.log(data[0].content)
			} else {
				console.log("no notes!")
			}
		})
	});

	$("#data-results-body").on("click", "button.get-conditions",(me)=>{
		//console.log(me)
		var set_id = me.target.value;
		console.log("conditions for set id#", set_id)

		$.ajax({
			url: "/find_set_conditions",
			method: "POST",
			datatype: "json",
			data: {
				"set_id": set_id
			}
		}).done((data)=>{
			if (data.length > 0) {
				data.forEach((condition)=>{
					console.log(condition.condition_name)
				})
			} else {
				console.log("no conditions!")
			}
		})
	});
	//end 
});