// ==UserScript==
// @name          Bialystook
// @namespace     http://youngpup.net/userscripts
// @description	  Zamienia "Lubię to" na "Dla mnie się to podoba"
// @include       http://www.facebook.com/*
// ==/UserScript==

var btn_replacer = function() {
	var spans = document.getElementsByClassName("default_message");
	for(var i=0; i<spans.length; i++) {
	//  if (spans[i].innerHTML == "Lubię to!") {
	    spans[i].innerHTML = "Dla mnie się to podoba!";
	//  }
	}
        setTimeout(btn_replacer, 5000);
};
setTimeout(btn_replacer, 2000);
