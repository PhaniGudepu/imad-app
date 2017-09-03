var button = document.getElementById("butt");
button.onclick = function() {
  //create a request object 
  var request = new XMLHttpRequest();
  //capturing the request
  request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE);{
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById("spn");
             span.innerHTML = counter.toString();
         }
     }
      
  };
};