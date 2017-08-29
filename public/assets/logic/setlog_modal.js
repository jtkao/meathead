$("#setlog-modal").modal();

// set commentary = [NOTES, CONDITIONS] 
function set_commentary(element, message, route, property){
	// SET_ID indicates row in table `sets` 
	var set_id = element;
	console.log(message, set_id)
	$.ajax({
		url: route,
		method: "POST",
		datatype: "json",
		data: {"set_id": set_id}
	}).done((data)=>{
		console.log(data)
		// assign selected SET_ID to both form submit buttons 
		$(".submit-commentary").val(data[0].set_id)
		$("#setlog-modal-head").html(message + " for set id #" + data[0].set_id);
		$("#setlog-modal-body").html("");
		// **conditional toggles form inputs based on type of commentary
		// 	property CONTENT indicates that this is a NOTE
		if (property === "content") {
			// data[1] indicates that NOTE exists for SET_ID
			if (data.length > 1) {
				// update textarea to reflect existing NOTE
				$("#note-content").val(data[1]["content"]);
			} else {
				$("#note-content").val("");
			}
			$("#add-set-condition").hide();
			$("#add-set-note").show();
		} else {
			$("#add-set-condition").show();
			$("#add-set-note").hide();
		}
		// if there is commentary data, load it
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
	})
}
// ajax call for creating or updating NOTES
function note_ajax(route, req) {
	$.ajax({
		url: route,
		method: "POST",
		data: req
	}).done((response)=>{
		console.log(response)
		var set_id = req.set_id
		set_commentary(set_id, "notes", "/find_set_notes", "content");		
	})
}

$(document).ready(()=>{
	// return 1 rep maximum for a MOVEMENT
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
	// get NOTES for a set, load modal with data, **prepare form for user input**
	$("#data-results-body").on("click", "button.get-notes",(me)=>{
		var set_id = me.target.value;
		set_commentary(set_id, "notes", "/find_set_notes", "content");
	});
	// get CONDITIONS for a set, load modal with data, **prepare form for user input**
	$("#data-results-body").on("click", "button.get-conditions",(me)=>{
		var set_id = me.target.value;
		set_commentary(set_id, "conditions", "/find_set_conditions", "condition_name");
	});
	// SUBMIT REQUEST containing user input to ADD CONDITION
	$("#add-set-condition").on("submit", (event)=>{
		event.preventDefault();
		console.log(event)
		var set_id = $("#submit-condition-id").val();
		var condition_id = $("#condition-selection").val();

		var request = {
			"set_id": set_id,
			"condition_id": condition_id,
			"condition_name": condition_name
		}

		console.log(request)

		$.ajax({
			url: "add_set_condition",
			method: "POST",
			data: request
		}).done((response)=>{
			console.log("SUCCESSFUL CONDITION ADD", response)
			console.log("added", request)
			location.reload(false);
		})
	});
	// SUBMIT REQUEST containing user input to CREATE or UPDATE NOTE 
	$("#add-set-note").on("submit", (event)=>{
		event.preventDefault();
		var set_id = $("#submit-condition-id-note").val();
		var content = $("#note-content").val();
		var request = {
			"set_id": set_id,
			"content": content
		}
		var modal_body = $("#setlog-modal-body").html();
		// if modal_body !data, create a new note
		if (modal_body === "no data") {
			note_ajax("add_set_note", request);
		// else update the existing note
		} else {
			note_ajax("update_set_note", request);
		}
	});
	//end 
});