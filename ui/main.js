var button = document.getElementById("butt");
var counter = 0;
button.onclick = function() {
  counter = counter +1;
  var span = document.getElementById("spn");
  span.innerHTML = counter.toString();
};