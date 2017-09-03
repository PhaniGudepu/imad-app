var button = document.getElementById("butt");
button.onclick = function(){
//making the request
var request = new XMLHttpRequest();
// capturing the requst
request.onreadyStateChange = function(){
  if(request.readyState === XMLHttpRequest().DONE){
      if(request.status === 200){
          var counter = request.responceText;
          var span = document.getElementById("spn");
          span.innerHTML = counter.toString();
      }
  }
};
request.open("GET", 'glrphani.imad.hasura-app.io/counter');
request.send(null);
};
