document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
        alert ("TESTING 1...");
	navigator.splashscreen.hide();
	document.getElementById('btnOpenPDF2').onclick = function() {
		var app = new Application();
		app.Run();                
	}
}

function Application() {
}
Application.prototype.Run = function() {
    alert ("TESTING 2...");
	if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
		alert("Not Supported in Simulator.");
	}
	else {
		var infoDiv = document.getElementById("tabstrip-home");
		var path = this.getWorkingFolder().replace('http://', 'file://') + "Sample.pdf";
		infoDiv.innerText = path;
        alert (path);
        
		if (device.platform === 'Android') {
			window.open(path, '_system');
		}
		else {
			window.open(path, '_blank');
		}
	}
}

Application.prototype.getWorkingFolder = function() {
	var path = window.location.href.replace('index.html', '');
	return path;
}
