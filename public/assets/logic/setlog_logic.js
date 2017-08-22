$(document).ready(()=>{
	$(".get-notes").on("click", (me)=>{
		var set_id = me.target.value;
		console.log("notes for set id#", set_id)

		return $.ajax({
			url: "/find_set_notes",
			method: "POST",
			datatype: "json",
			data: {
				"set_id": set_id
			}
		}).done((data)=>{
			console.log(data[0].content)
		})
	});

	$(".get-conditions").on("click", (me)=>{
		var set_id = me.target.value;
		console.log("conditions for set id#", set_id)

		return $.ajax({
			url: "/find_set_conditions",
			method: "POST",
			datatype: "json",
			data: {
				"set_id": set_id
			}
		}).done((data)=>{
			if (data.length > 0) {
				data.forEach((condition)=>{
					console.log(condition.condition_name);
				});
			} else {
				console.log("no conditions!")
			}
		});
	});

	//end 
});