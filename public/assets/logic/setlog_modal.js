$("#setlog-modal").modal();

// send request querying db for either set_notes or set_conditions
// then load data into setlog-modal 
function set_commentary(element, commentary_type, route, property){
	var set_id = element;
	console.log(commentary_type, set_id);

	$.ajax({
		url: route,
		method: "POST",
		datatype: "json",
		data: {"set_id": set_id}
	}).done((data)=>{
		// LOAD MODAL WITH DATA
		console.log(data);
		// MODAL FOOTER (user input)
		// load form submit buttons with this set_id
		$(".submit-commentary").val(data[0].set_id)
		$("#setlog-modal-head").html(commentary_type + " for set id #" + data[0].set_id);
		$("#setlog-modal-body").html("");
		// `content`= notes // `
		if (property === "content") {
			// data[1] indicates that NOTE exists for set_id
			if (data.length > 1) {
				// load data into form textarea to reflect existing notes
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
		// MODAL BODY (commentary data)
		// ! to be implemented !
		// ! condition data needs to be loaded with a button to remove !
		// IF SET_CONDITIONS EXISTS
		if ((data.length > 1) && (property === "condition_name")) {
			// clear previous data
			selected_set_conditions = [];
			for (var i = 1; i < data.length; i++) {
				selected_set_conditions.push(data[i]["condition_id"]);

				var condition_element = "<p class='remove-condition'>" + data[i]["condition_name"] + "</p>";
				$("#setlog-modal-body").append(condition_element);
			}
		// FOR SET_NOTE EXISTS
		} else if ((data.length > 1) && (property === "content")) {
			// create element that contains the set note and append to the modal
			var note_element = "<p>" + data[1]["content"] + "</p>";
			$("#setlog-modal-body").append(note_element);
		// IF NO COMMENTARY DATA EXISTS
		} else if (data.length === 1) {
			$("#setlog-modal-body").html("no data");
		}
		$("#setlog-modal").modal("show");
	});
};
// ajax call for creating or updating NOTES
function note_ajax(route, req) {
	$.ajax({
		url: route,
		method: "POST",
		data: req,
		success: (response)=>{
			console.log("UPDATE NOTE SUCCESS", response)
			$("#setlog-modal").modal('hide');
			$("#setlog-alert-message").html(" UPDATED NOTES ");
			$("#setlog-alert-id").html(req.set_id);
			$("#bad-condition-alert").hide();
			$("#setlog-alert").show();
		}
	});
};

// array contains the conditions for the selected set
// when adding conditions, check to see if condition is in set
var selected_set_conditions = [];

$(document).ready(()=>{
	$("#setlog-alert").hide();
	$("#bad-condition-alert").hide();
	$("[data-hide]").on("click", ()=>{
        $("#setlog-alert").hide();
        $("#bad-condition-alert").hide();
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
		var set_id = $("#submit-condition-id").val();
		var condition_id = parseInt($("#condition-selection").val());

		// duplicate set_conditions for an individual set record will cause duplicate primary key error in db
		// so check input against array selected_set conditions 
		if (selected_set_conditions.includes(condition_id)) {
			$("#setlog-modal").modal('hide');
			$("#setlog-alert").hide();
			$("#bad-condition-alert").show();
		} else {
			$.ajax({
				url: "add_set_condition",
				method: "POST",
				data: {
					"set_id": set_id,
					"condition_id": condition_id
				},
				success: (response)=>{
					console.log("ADD SET SUCCESS", response);
					$("#setlog-modal").modal('hide');
					$("#setlog-alert-message").html(" UPDATED CONDITIONS FOR ");
					$("#setlog-alert-id").html(set_id);
					$("#bad-condition-alert").hide();
					$("#setlog-alert").show();
				}
			});
		};
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

		// create new note if it doesnt exist, otherwise update the existing 
		if (modal_body === "no data") {
			note_ajax("add_set_note", request);
		} else {
			note_ajax("update_set_note", request);
		}
	});
	//end 
});