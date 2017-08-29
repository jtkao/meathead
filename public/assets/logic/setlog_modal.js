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
		// console.log(data)

		if (property === "content") {
			$("#submit-condition-id").val(data[0].set_id);
		} else {
			$("#submit-condition-id-note").val(data[0].set_id);
		}
	
		$("#setlog-modal-head").html(message + " for set id #" + data[0].set_id);
		$("#setlog-modal-body").html("");

		if (data.length > 1) {

			for (var i = 1; i < data.length; i++) {
				var element = "<p>" + data[i][property] + "</p>";
				$("#setlog-modal-body").append(element);
			}

			$("#setlog-modal").modal("show");
		} else if (data.length === 1) {
			$("#setlog-modal-body").html("no data");
			$("#setlog-modal").modal("show");
		}

		if (property === "content") {
			$("#add-set-condition").hide();
			$("#add-set-note").show();
		} else {
			$("#add-set-condition").show();
			$("#add-set-note").hide();
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
				$("#add-set-condition").hide();
				$("#add-set-note").hide();
			}
		});
	});


	$("#data-results-body").on("click", "button.get-notes",(me)=>{
		set_commentary(me, "notes", "/find_set_notes", "content");
	});

	$("#data-results-body").on("click", "button.get-conditions",(me)=>{
		set_commentary(me, "conditions", "/find_set_conditions", "condition_name");
	});

	$("#add-set-condition").on("submit", (event)=>{
		event.preventDefault();
		var set_id = $("#submit-condition-id").val();
		var condition_id = $("#condition-selection").val();
		console.log(condition_id)
		var request = {
			"set_id": set_id,
			"condition_id": condition_id
		}

		$.ajax({
			url: "add_set_condition",
			method: "POST",
			data: request
		}).done((response)=>{
			console.log(response)
		})
	});

	$("#add-set-note").on("submit", (event)=>{
		console.log("hello")
		event.preventDefault();
		var set_id = $("#submit-condition-id-note").val();
		var content = $("#note-content").val();

		var request = {
			"set_id": set_id,
			"content": content
		}

		$.ajax({
			url: "add_set_note",
			method: "POST",
			data: request
		}).done((response)=>{
			console.log(response)
		})
	})
	//end 
});