// ==UserScript==
// @name         Ukraine Agenda remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes unneeded things from cool site about hacking consoles
// @author       Fagirton
// @match        https://customfw.xyz/*
// @match        https://*.customfw.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=customfw.xyz
// ==/UserScript==

var a = document.getElementsByTagName('link');
for (var idx= 0; idx < a.length; ++idx){
    if (a[idx].href == "https://customfw.xyz/stay-for-ukraine/css/stay_for_ukraine.css"){
      a[idx].remove();
    };
}
a = document.getElementsByTagName('script');
for (idx= 0; idx < a.length; ++idx){
    if (a[idx].src == "https://customfw.xyz/stay-for-ukraine/js/stand_for_ukraine.js"){
      a[idx].remove();
    };
}
a = document.getElementsByTagName('a');
for (idx= 0; idx < a.length; ++idx){
    if (a[idx].href == "https://customfw.xyz/donations"){
      a[idx].remove();
    };
}
document.getElementById('stay-for-ukraine-popup').remove();
document.getElementById('ukranian-flag').remove();
var b = document.getElementsByClassName('notice--danger');
for (idx= 0; idx < b.length; ++idx){
    console.log(b[idx]);
    if (b[idx].innerHTML.indexOf("НЕ ИДИТЕ ВОЕВАТЬ В УКРАИНУ!") != -1){
      b[idx].remove();
    };
}
