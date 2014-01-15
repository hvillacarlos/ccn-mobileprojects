document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("touchstart", function() {}, false);
//alert("Calling main for Cordova..")

function onDeviceReady() {
//    alert("Calling main on device ready..")
	navigator.splashscreen.hide();
	document.getElementById('btnOpenPDF').onclick = function() {
		var app = new Application();
		app.Run();
	}
}

function Application() {
}
//    alert("Calling main on the application..")
    Application.prototype.Run = function() {
        alert("Calling main on the application RUN..")
	if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
		alert("Not Supported in Simulator.");
	}
	else {
		var infoDiv = document.getElementById("infoField");
		var path = this.getWorkingFolder().replace('http://', 'file://') + "Sample.pdf";
		infoDiv.innerText = path;
        
		if (device.platform === 'Android') {
			window.open(path, '_system');
		}
		else {
			window.open(path, '_blank');
		}
	}
}

Application.prototype.getWorkingFolder = function() {
    alert("Calling main on the application get working folder..")
	var path = window.location.href.replace('index.html', '');
	return path;
}
