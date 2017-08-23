$("#setlog-modal").modal();

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
		console.log(data)
		$("#setlog-modal-head").html(message);

		if (data.length > 0) {
			data.forEach((commentary)=>{
				console.log(commentary[property])
				$("#setlog-modal-body").html(commentary[property]);
				$("#setlog-modal").modal("show");
			})
		} else {
			$("#setlog-modal-body").html("no data");
			$("#setlog-modal").modal("show");
		}
	})
}

$(document).ready(()=>{

	$("#get-1rm").on("submit", (event)=>{
		event.preventDefault();
		var movement_id = $("#1rm-movement-selection").val();

		$.ajax({
			url: "/find_1rm",
			method: "POST",
			data: {"movement_id": movement_id},
			success: (data)=>{
				console.log(data[0]["movement_name"])
				$("#setlog-modal-head").html("1 REP MAX ON " + data[0]["movement_name"]);
				$("#setlog-modal-body").html(data[0]["MAX(`weight`)"]);
				$("#setlog-modal").modal("show");
			}
		});
	});


	$("#data-results-body").on("click", "button.get-notes",(me)=>{
		set_commentary(me, "notes", "/find_set_notes", "content");
	});

	$("#data-results-body").on("click", "button.get-conditions",(me)=>{
		set_commentary(me, "conditions", "/find_set_conditions", "condition_name");
	});
	//end 
});