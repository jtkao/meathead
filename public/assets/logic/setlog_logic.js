$(document).ready(()=>{
	$("#control-box").hide();

	$(".get-notes").on("click", (me)=>{
		var set_id = me.target.value;
		console.log("notes for set id#", set_id)

		$.ajax({
			url: "/find_set_notes",
			method: "POST",
			datatype: "json",
			data: {
				"set_id": set_id
			}
		}).done((data)=>{
			if (data.length > 0) {
				console.log(data[0].content)
			} else {
				console.log("no notes!")
			}
		})
	});

	$(".get-conditions").on("click", (me)=>{
		var set_id = me.target.value;
		console.log("conditions for set id#", set_id)

		$.ajax({
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

	$("#data-controls").on("click", ()=>{
		var control_box = $("#control-box");
		if (control_box.is(":visible")) {
			$("#data-controls").html("show");
			control_box.hide();
		} else {
			$("#data-controls").html("hide");
			control_box.show();
		};
	});

	$("#get-month").on("click", ()=>{
		var month = $("#month-selection").val();
		console.log(month);

		$.ajax({
			url: "/setlog_month",
			method: "POST",
			data: {
				"month": month
			}
		});
	});
	//end 
});