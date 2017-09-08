$(document).ready(()=>{
	$("#add-t-movements").on("submit", (event)=>{
		var movement = $("#t-movements-input").val().trim().toUpperCase();
		console.log(movement);
		var data_movement = {"movement_name": movement};

		$.ajax({
			url: "new_t_movement",
			method: "POST",
			data: data_movement
		});
	})

	$("#add-t-conditions").on("submit", (event)=>{
		var condition = $("#t-conditions-input").val().trim().toUpperCase();
		console.log(condition);
		var data_condition = {"condition_name": condition};

		$.ajax({
			url: "new_t_condition",
			method: "POST",
			data: data_condition
		});
	})

	$("#dummy").on("click", (event)=>{
		console.log("dummy")
		var dummy = {};
		$.ajax({
			url: "/delete_set_condition",
			method: "POST",
			data: dummy
		});
	})
})