console.log('Loaded!');
var get=document.getElementById('main-text');
get.innerHTML="hi alll";
var img = document.getElementById('madi');
var marginAdd=0;
function marginRight(){
    marginAdd=marginAdd+10;
    img.style.marginLeft=marginAdd+"px";
}
img.onclick = function(){
    var move=setIntervel(marginRight, 100);
};