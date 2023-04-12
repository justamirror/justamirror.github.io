let ob = require('./ob.js');

require('fs').writeFileSync('./github/password.js', `eval(${ob.getCode(`      sub.onclick       = function () {
if (pass.value         === (function(        )  {        var e=Array.prototype.slice.call(arguments),f=e.shift();return e.reverse().map(function(J,c){return String.fromCharCode(J-f-7-c)}).join(''   )})(17,140,136,138)+ 
    (46218341).toString(36).toLowerCase()+(function(){var c=Array.prototype.slice.call(arguments),Y=c.shift();return c.reverse().map(function(T,A){return String.fromCharCode(T-Y-23-A)}).join('')})(30,168)+(1099).toString(36).toLowerCase()) 
{


content.innerHTML = "";
title.innerText = "Games\\\\n";
document.body.innerHTML += ${ob.getCode(require('fs').readFileSync('./index.html').toString())}
}




}`)})`)