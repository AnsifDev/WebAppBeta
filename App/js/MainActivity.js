
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

if (!window.matchMedia('(display-mode: standalone)').matches) {
  WebRoute.GoTo("./Error.html", {
    EntryCode : 1,
    ErrCode : 1,
    ErrMsg : "Invalid Settings for WebApp"
  });
}

if (localStorage.getItem("PWAS")!="OK") {
  localStorage.setItem("PWAS","OK");
  console.log("Client Repaierd");
}

btn2.onclick = function() {
  localStorage.setItem(input1.value, input2.value);
}
btn3.onclick = function() {
  var val = localStorage.getItem(input3.value);
  alert(input3.value+": "+val);
}
