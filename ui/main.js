console.log('Loaded!');
var get=document.getElementById('main-text');
get.innerHTML="hi alll";
var img = document.getElementById('madi');
var marginAdd=0;
function moveRight(){
    marginAdd=marginAdd+10;
    img.style.marginLeft=marginAdd+"px";
}
img.onclick = function(){
    var move=setIntervel(moveRight, 100);
};