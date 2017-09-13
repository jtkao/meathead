$("#confirm-delete-modal").modal();

var selected_to_delete = 0;
// prevent sending duplicate delete requests 
// session is ok becase refreshing page will also refresh `set_id` select options
var deleted_this_session = [];

$(document).ready(()=>{
	$("#set-delete-alert").hide();
	$("#bad-delete-alert").hide();
	$("#update-setdate-alert").hide();
	$("[data-hide]").on("click", ()=>{
        $("#set-delete-alert").hide();
        $("#update-setdate-alert").hide();
        $("#bad-delete-alert").hide();
    });

	$("#add-t-movements").on("submit", (event)=>{ 
		event.preventDefault();
		var movement = $("#t-movements-input").val().trim().toUpperCase();
		var data_movement = {"movement_name": movement};
		console.log(data_movement)

		$.ajax({
			url: "new_t_movement",
			method: "POST",
			data: data_movement
		}).then((response)=>{
			console.log(response)
		})

	});

	$("#add-t-conditions").on("submit", (event)=>{ 
		event.preventDefault();
		var condition = $("#t-conditions-input").val().trim().toUpperCase();
		var data_condition = {"condition_name": condition};
		console.log(data_condition)

		$.ajax({
			url: "new_t_condition",
			method: "POST",
			data: data_condition
		}).then((response)=>{
			console.log(response)
		})

	});

	$("#delete-sets-box").on("submit", (event)=>{ 
		event.preventDefault();
		var set_id = parseInt($("#delete-sets-input").val());
		selected_to_delete = set_id;

		$("#confirm-delete-id").html(set_id);
		$("#confirm-delete-modal").modal('show');
	});


	$("#btn-cancel-delete").on("click", (event)=>{
		event.preventDefault();
		selected_to_delete = 0;
		$("#confirm-delete-modal").modal('hide');
	});

	$("#btn-confirm-delete").on("click", (event)=>{
		event.preventDefault();
		console.log("selected_to_delete", selected_to_delete)

		if ((selected_to_delete != 0) && !(deleted_this_session.includes(selected_to_delete))) {
			$.ajax({
				url: "delete_set_record",
				method: "POST",
				data: {"set_id": selected_to_delete}
			}).then((response)=>{
				console.log(response);
				$("#confirm-delete-modal").modal('hide');
				$("#set-delete-alert-message").html(selected_to_delete);
				$("#bad-delete-alert").hide();
				$("#set-delete-alert").show();
				deleted_this_session.push(selected_to_delete);
				selected_to_delete = 0;
			});
		} else {
			$("#confirm-delete-modal").modal('hide');
			$("#set-delete-alert").hide();
			$("#bad-delete-alert").show();
		}
	});

	$("#update-setdate-box").on("submit", (event)=>{ 
		event.preventDefault();
		var set_date = $("#update-setdate-date-input").val();
		var set_id = $("#update-setdate-id-input").val();

		$.ajax({
			url: "update_setdate",
			method: "POST",
			data: {
				"set_id": set_id,
				"set_date": set_date
			}
		}).then((response)=>{
			console.log(response);
		});

		$("#update-setdate-alert-id").html(set_id + " ");
		$("#update-setdate-alert-date").html(" " + set_date);
		$("#update-setdate-alert").show();
	});

});