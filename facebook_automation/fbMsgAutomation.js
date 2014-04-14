
var page = require('webpage').create();

var fillLoginInfo = function(){
  	var frm = document.getElementById("login_form");
    frm.elements["email"].value = 'joshimaneesh26@gmail.com';
    frm.elements["pass"].value = '12345';
    frm.submit();
}

page.onLoadFinished = function(){
	if(page.title == "Welcome to Facebook - Log In, Sign Up or Learn More"){
		page.evaluate(fillLoginInfo);
		return;
	}
	else
		page.render('./screens/some.png');
	console.log(page.title);
    console.log("1st step completed");
    phantom.exit();
}

page.open('https://www.facebook.com/');