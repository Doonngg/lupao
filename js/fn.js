//菜单展开折叠
var foldBtn = document.querySelector(".fold-btn");
var closeBtn = document.querySelector(".close-btn");

foldBtn.addEventListener("click", function() {
	myAnimate(".menu-list", "100%", "height", "height .3s");
})
closeBtn.addEventListener("click", function() {
	myAnimate(".menu-list", "0", "height", "height .3s");
})


var souInput = document.querySelector(".sou-input");
var numberLengthBox = document.querySelector(".number-length");
souInput.addEventListener("input",function(){
	numberLengthBox.innerHTML = souInput.value.length + "位";
	numberLengthBox.style.display = "block";
})
souInput.addEventListener("blur",function(){
	numberLengthBox.style.display = "none";
})



//css3动画封装
function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
	document.querySelector(animateNode).style.transition = animateTransition;
	document.querySelector(animateNode).style[animateStyle] = animateEnd;
}