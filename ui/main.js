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
  //making the request
  request.open("GET", 'http://glrphani.imad.hasura-app.io/counter');
  request.send(null);
};

//submitting names to the server
var nameInput = document.getElementById("name");
var name =nameInput.value;
var submit = document.getElementById("submit-btn");
submit.onclick = function(){
  //name list
  var names = ["name1","name2","name3"];
  var list = "";
  for(var i=0;i<names.length;i++)
  {
      list += "<li>" +names[i]+ "</li>";
      }
      var ul = document.getElementById('ull');
      ul.innerHTML = list;
};