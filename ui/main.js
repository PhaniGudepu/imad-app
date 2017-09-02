console.log('Loaded!');
var get=document.getElementById('main-text');
get.innerHTML="hi alll";
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function(){
    var intervel = setInerval(moveRight, 100);
};