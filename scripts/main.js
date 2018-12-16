alert('g');
var mbutton=document.querySelector('button');
var mhead=document.querySelector('h1');
function setUserName(){
var mname=prompt('enter ur name');
localStorage.setItem('name',mname);
mhead.textContent='im cool '+mname;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  mhead.textContent = ' im cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
