$(document).ready(()=>{
	$("#controls-box").hide();

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

			if (data === "success") {
				$("#controls-box").show();
				$("#login-box").hide();
			} else {
				console.log("wrong password")
			}
		})
	});

});