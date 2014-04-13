
var page = require('webpage').create();

var fillLoginInfo = function(){
    document.getElementById('email').value = "joshimaneesh26@gmail.com";
    document.getElementById('pass').value = "123456";
}

var doLogin = function(){
    page.evaluate(fillLoginInfo);
    page.render('./screens/img.png');
    console.log("1st step completed");
}

page.open('https://www.facebook.com/',doLogin);