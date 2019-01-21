$(function(){
   showmenu();
   brandsName();
   highchoice();
})
function showmenu(){
	$(".navleft")[0].onmouseenter=function(){
		$(".navmenu")[0].style.display="block";
	}
	$(".navleft")[0].onmouseleave=function(){
		$(".navmenu")[0].style.display="none";
	}
}
function brandsName(){
var lis=document.getElementsByClassName("brandsImg")[0].children;
for(let i=0;i<lis.length;i++){
   lis[i].onmouseenter=function(){
   	this.children[0].firstElementChild.style.display="none";
   	this.children[0].lastElementChild.style.display="block";
   }
    lis[i].onmouseleave=function(){
   	console.log(111);
   	this.children[0].firstElementChild.style.display="block";
   	this.children[0].lastElementChild.style.display="none";
   }
 }
}

function highchoice(){
	var lis=document.getElementById("tabbs").children;
	var tabcons=document.getElementById("tabcone").children;
	var moreinfo=document.getElementsByClassName("moreinfo")[0];
	var secti=document.getElementsByClassName("secti")[0];
	secti.onmouseenter=function(){
		moreinfo.style.display="block";
	}
	secti.onmouseleave=function(){
		moreinfo.style.display="none";
	}
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			var index=i;
			this.style.background="white";
			for(let j=0;j<tabcons.length;j++){
				tabcons[j].style.display="none";
				tabcons[index].style.display="block";
			}
		}
	}
}