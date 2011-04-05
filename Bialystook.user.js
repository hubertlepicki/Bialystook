// ==UserScript==
// @name          Bialystook
// @namespace     http://youngpup.net/userscripts
// @description	  Zamienia "Lubię to" na "Dla mnie się to podoba"
// @include       http://www.facebook.com/*
// ==/UserScript==

var btn_replacer = function() {
  var text1 = "Lubię to!";
  var text2 = "Nie lubię";
  var text1_replacer = "Dla mnie się to podoba!";
  var text2_replacer = "Badziewie!";
  
  var spans = document.getElementsByClassName("default_message");
  for(var i=0; i<spans.length; i++) {
    if (spans[i].innerText == text1 || spans[i].innerHTML == text1) {
      spans[i].innerHTML = text1_replacer;
    } else if (spans[i].innerText == text2 || spans[i].innerHTML == text2) {
      spans[i].innerHTML = text2_replacer;
    }
  }
  setTimeout(btn_replacer, 2000);
};
setTimeout(btn_replacer, 2000);
