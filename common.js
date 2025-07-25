window.onload = function() {
  var namee = localStorage.getItem('wechat_username');
  if (namee) {
    var displayy = document.getElementById("displayname");
    if (displayy) displayy.textContent = namee;
  }
}

var contentt = document.getElementById(inputmail);
var namee=contentt.value;
var displayy = document.getElementById("displayname");
displayy.textContent=namee;