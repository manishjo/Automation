// This code login's to your facebook account and takes snap shot of it.

var page = require('webpage').create();

var fillLoginInfo = function(){
  	var frm = document.getElementById("login_form");
    frm.elements["email"].value = 'your fb email/username';
    frm.elements["pass"].value = 'password';
    frm.submit();
}

page.onLoadFinished = function(){
	if(page.title == "Welcome to Facebook - Log In, Sign Up or Learn More"){
		page.evaluate(fillLoginInfo);
		return;
	}
	else
		page.render('./screens/some.png');
	console.log("completed");
	phantom.exit();
}

page.open('https://www.facebook.com/');