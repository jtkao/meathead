$(document).ready(()=>{
	$("#controls-box").hide();
	$("#bad-password-alert").hide();

	$("#login-box").on("submit", (event)=>{ event.preventDefault();
		var password = $("#password-input").val().trim();

		var cred = {
			"password": password
		};

		$.ajax({
			url: "/authenticate",
			method: "POST",
			data: cred
		}).then((data)=>{
			console.log(data)

			if (data === "SUCCESS") {
				$("#bad-password-alert").hide();
				$("#controls-box").show();
				$("#auth-box").hide();
			} else {
				$("#bad-password-alert").show();
			}
		})
	});

});