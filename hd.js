document.addEventListener(
	"DOMContentLoaded",
	function () {
		$.getJSON("https://api.ipify.org?format=json", function (data) {
			$("#ip").html(data.ip);
			console.log(data);
		});
	},
	false
);

function entersecret() {
	let key = document.getElementById("key").value;
	let decryptKey = window.btoa(key);
	let masterKey = "bWlzc2lvbjIwMjI=";

	if (decryptKey == masterKey) {
		window.location.replace("https://google.com");
	} else {
		document.getElementById("warning").style.display = "block";
	}
}
