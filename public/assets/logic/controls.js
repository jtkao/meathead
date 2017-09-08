$(document).ready(()=>{
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
			console.log(response)
		})
		
	});

});