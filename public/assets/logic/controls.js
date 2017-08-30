$(document).ready(()=>{
	$("#add-t-movements").on("submit", ()=>{
		var movement = $("#t-movements-input").val().trim();
		console.log(movement);

		$.ajax({
			url: "new_t_movement",
			method: "post",
			data: {"movement_name": movement}
		})
	})

	$("#add-t-conditions").on("submit", ()=>{
		var condition = $("#t-conditions-input").val().trim();
		console.log(condition);

		$.ajax({
			url: "new_t_condition",
			method: "post",
			data: {"condition_name": condition}
		})
	})
})