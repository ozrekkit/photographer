var domEl = document.getElementsByClassName("myBlocks");
var contBlock = document.getElementById("page-cont");
for(var i = 0; i <= domEl.length; i++){
    console.log(domEl[i]);
}

//$('#menu_bottom').height(); jQuery
var mainContEl = document.getElementById("imgMark");
console.log(mainContEl.clientHeight);
var mainWidth = contBlock.clientWidth;
//domEl[0].style.backgroundColor = "red";
domEl[0].style.left = (mainWidth/3)+"px";
//domEl[1].style.backgroundColor = "blue";
domEl[1].style.left = (mainWidth/3*2)+"px";
contBlock.style.height = (mainContEl.clientHeight)+"px";