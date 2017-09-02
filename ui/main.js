console.log('Loaded!');
var get=document.getElementById('main-text');
get.innerHTML="hi alll";
var img = document.getElementById('madi');
var margin = 0;
function moveRight(){
    margin = margin + 10;
     img.style.marginLeft=margin+'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};