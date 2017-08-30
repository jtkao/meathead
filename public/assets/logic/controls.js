$(document).ready(()=>{
	$("#add-t-movements").on("submit", (event)=>{
		var movement = $("#t-movements-input").val().trim();
		console.log(movement);
		var data_movement = {"movement_name": movement};

		$.ajax({
			url: "new_t_movement",
			method: "POST",
			data: {"movement_name": data_movement}
		});
	})

	$("#add-t-conditions").on("submit", (event)=>{
		var condition = $("#t-conditions-input").val().trim();
		console.log(condition);
		var data_condition = {"condition_name": condition};

		$.ajax({
			url: "new_t_condition",
			method: "POST",
			data: {"condition_name": data_condition}
		});
	})
})