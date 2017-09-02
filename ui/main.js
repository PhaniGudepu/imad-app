console.log('Loaded!');
var get=document.getElementById('main-text');
get.innerHTML="hi alll";
var img = document.getElementById('madi');
function moveRight(){
     img.style.marginLeft='10px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};