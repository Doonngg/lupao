//马拉松百科详细内容，展开折叠
var flag = 0;
var i = 0;
//拿到所有“显示全部”按钮
var flod = document.querySelectorAll(".fold-btn");
for (let i = 0; i < flod.length; i++) {
	this.index = i;
	flod[i].addEventListener("click",function(){
		//flag为0展开全部内容
		if(flag == 0){
			document.querySelectorAll(".marathon-baike-box-bottom")[i].classList.add("marathon-baike-box-bottom-open");
			flag = 1;
		//flag为1展开隐藏部分内容
		} else{
			document.querySelectorAll(".marathon-baike-box-bottom")[i].classList.remove("marathon-baike-box-bottom-open");
			flag = 0;
		}
	})
}

var closeBtn= document.querySelector(".close-btn");
var topFold = document.querySelector(".top-fold");
topFold.addEventListener("click",function(){
	myAnimate(".header-list", "100%" ,"height","height .3s");
})
closeBtn.addEventListener("click",function(){
	myAnimate(".header-list", 0 ,"height","height .3s");
})

//轮播图 by:Dong
dlunbo(5000);
function dlunbo(time){
		let bListBox = document.querySelector(".banner-list");
		let listTab = document.querySelector(".banner-list-tab");
		let bTabs = listTab.children;
		let bBox = document.querySelector(".b-box");
		let bannerBox = document.querySelectorAll(".banner-box");
		let prevBtn = document.querySelector(".prev-btn");
		let nextBtn = document.querySelector(".next-btn");
		let i = 0;
		let t = 0;
		let a = 0;
		listTab.style.width = bBox.offsetWidth + "px";
		bListBox.style.width = bBox.offsetWidth * bListBox.children.length + "px";
		prevBtn.addEventListener("click",function(){
			prev();
		})
		nextBtn.addEventListener("click",function(){
			next();
		})
		setInterval(next,time);
		for(t = 0 ;t<bListBox.children.length;t++){
			let newLi = document.createElement("li");
			listTab.appendChild(newLi);
			listTab.children[0].classList.add("banner-list-tab-active");
			bannerBox[t].style.width = bBox.offsetWidth + "px";
		}
		
		for( i = 0; i < bTabs.length ; i ++){
			bTabs[i].addEventListener("click",function(){
				for( i = 0; i < bTabs.length ; i ++){
					bTabs[i].setAttribute("data-i",i);
					myAnimate(".banner-list", "-" + this.getAttribute("data-i") * bBox.offsetWidth + "px","left","left .5s");
					bTabs[i].parentNode.children[i].classList.remove("banner-list-tab-active");
				}
				this.classList.add("banner-list-tab-active");
				i=this.getAttribute("data-i");
			})
		}
		function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
			document.querySelector(animateNode).style.transition = animateTransition;
			document.querySelector(animateNode).style[animateStyle] = animateEnd;
		}
		function prev(){
			for(a = 0; a < bTabs.length ; a++){
				bTabs[a].parentNode.children[a].classList.remove("banner-list-tab-active");
			}
			i--;
			if(i<0){
				i=bannerBox.length-1;
			}
			myAnimate(".banner-list", "-" + i * bBox.offsetWidth + "px","left","left .5s");
			bTabs[i].classList.add("banner-list-tab-active");
		}
		function next(){
			for(a = 0; a < bTabs.length ; a++){
				bTabs[a].parentNode.children[a].classList.remove("banner-list-tab-active");
			}
			if(i>bannerBox.length-1){
				i = 0;
			}
			i++;
			if(i>bannerBox.length-1){
				i = 0;
			}
			myAnimate(".banner-list", "-" + i * bBox.offsetWidth + "px","left","left .5s");
			bTabs[i].classList.add("banner-list-tab-active");
		}
	}
		
function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
			document.querySelector(animateNode).style.transition = animateTransition;
			document.querySelector(animateNode).style[animateStyle] = animateEnd;
		}