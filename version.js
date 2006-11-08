var currentver = "0.13";
if (location.search) {
	var re = /ver=(.*)$/;
	re.test(location.search);
	var ver = RegExp.$1;
	document.writeln("You have LiveHTTPHeaders version <strong>" + ver + "</strong> installed!");
	if (currentver > ver) {
		document.writeln('<br><br><span class="warn">LiveHTTPHeaders version <strong>' + currentver + '</strong> is available!</span><br>You should upgrade to the newest version!<BR>Note: you must install it GLOBALLY if you already have v0.8 or less installed!');
	} else if (currentver == ver) {
		document.writeln("<br>You already have the latest version!");
	}
	document.images.afs.src = "http://www2.addfreestats.com/cgi-bin/connect.cgi?usr=00220215P008";
} else {
	document.writeln("LiveHTTPHeaders version <strong>" + currentver + "</strong> is available!");
}

