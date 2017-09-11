$(document).ready(()=>{
	$("#good-delete-alert").hide();
	$("#update-setdate-alert").hide();
	$("[data-hide]").on("click", ()=>{
        $("#good-delete-alert").hide();
        $("#update-setdate-alert").hide();
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
		var set_id = $("#delete-sets-input").val();
		console.log("deleting all set record for id#", set_id);

		$.ajax({
			url: "delete_set_record",
			method: "POST",
			data: {"set_id": set_id}
		}).then((response)=>{
			console.log(response);
		});
		
		$("#good-delete-alert-message").html(set_id);
		$("#good-delete-alert").show();
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