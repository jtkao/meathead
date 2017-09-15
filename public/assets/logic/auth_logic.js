$(document).ready(()=>{
	$("#controls-box").hide();
	$("#bad-password-alert").hide();

	$("#login-box").on("submit", (event)=>{ event.preventDefault();
		var password = $("#password-input").val().trim();

		$.ajax({
			url: "/authenticate",
			method: "POST",
			data: {"password": password}
		}).then((data)=>{
			console.log(data)

			if (data === "SUCCESS_SUCCESS") {
				$("#bad-password-alert").hide();
				$("#controls-box").show();
				$("#auth-box").hide();
			} else {
				$("#bad-password-alert").show();
			};
		});
	});

});