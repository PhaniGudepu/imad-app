var button = document.getElementById("butt");
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