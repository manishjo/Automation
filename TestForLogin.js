var LoginPage = require('webpage').create();

var FillInfo = function(){
	document.getElementById('user_login').value='step2013';
	document.getElementById('user_password').value='step2013';
	document.getElementsByTagName('input')[4].click();

}

var DoLogin = function(){
	LoginPage.evaluate(FillInfo);
	LoginPage.onLoadFinished = function(){
		var result = LoginPage.evaluate(function(){
			return document.getElementById('notice').innerHTML;
		});
		console.log(result);
		phantom.exit();
	};
};
LoginPage.open('http://sabu:8080/programs',DoLogin);