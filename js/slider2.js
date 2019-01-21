
//项目中有哪些类：轮播图
function Slider2(
			divs,doudouSize,doudouColor,doudouHighColor,
				isCircle,direction,timeSpace,bannerRight,divWidth,){
	this.liDoms = [];//存储所有的li标签,DOM对象
	this.divDoms=[];
	this.divs=divs;//内容数组
	this.divWidth=divWidth;
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;
	this.direction = direction;//左还是右
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.bannerRight=bannerRight;
	this.createUI();
	this.addEvent();
	// this.changeDiv();
}

Slider2.prototype.createUI= function(){
	this.bannerRight.style.position = "relative";
	this.bannerRight.style.overflow = "hidden";	
	//3.内容数组
	for(let i=0;i<this.divs.length;i++){
		console.log(this.divs.length);
		let divDom =document.createElement("div");
		divDom.innerHTML=this.divs[i];
		divDom.style.cssText = "position:absolute;top:0px;left:0";
		divDom.style.width = this.divWidth+"px";
		if(i==0){
			divDom.style.left = "0px";		
		}else{
			divDom.style.left = this.divWidth+"px";
		}
		this.bannerRight.appendChild(divDom);
		this.divDoms.push(divDom);//把创建的图片标签放入数组中
	}



	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:80px;top:100px;list-style:none;z-index:2;";
	this.bannerRight.appendChild(ulDom);
	//2)、豆豆
	for(let i=0;i<this.divs.length;i++){
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:20px;";
		liDom.style.width = this.doudouSize+"px";
		liDom.style.height = this.doudouSize+"px";
		if(i==0){
			liDom.style.backgroundColor = this.doudouHighColor;
		}else{
			liDom.style.backgroundColor = this.doudouColor;
		}
		if(this.isCircle){
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
}	
Slider2.prototype.showDiv = function(inOrd,outOrd){
	if(inOrd==outOrd){
		return;
	}
	
	//1)、滑入滑出前的准备工作
	this.divDoms[inOrd].style.left = this.divWidth+"px";
	
	//2）、滑入滑出效果
	moveObj05(this.divDoms[inOrd],"left",0,300);
	moveObj05(this.divDoms[outOrd],"left",-1*this.divWidth,300);
	function moveObj05(domObj,attr,endValue,timeLong){
		
		let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
		let direction = endValue>currValue?1:-1;
		let timeSpace = 16;
		let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
		
		let myTimer = setInterval(function(){
			//1、改变数据
			currValue = currValue+direction*step;
			//2、处理边界
			if(Math.abs(currValue-endValue)<=step){
				currValue = endValue;
				clearInterval(myTimer);
			}		
			//3、改变外观
			let temp = currValue;
			if(attr!="opacity"){
				temp = temp+"px";
			}
			domObj.style[attr] = temp;		
		},timeSpace);
	}
}


Slider2.prototype.showLi=function(){
	//    B、改豆豆		
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].style.backgroundColor = this.doudouColor;

	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

// 1、自动播放图片
// Slider2.prototype.changeDiv=function(){
	
// 	this.myTimer = setInterval(()=>{
// 		//1）、数据：改变图片的当前序号（加加），并考虑边界
// 		//currOrd = ++currOrd>4?0:currOrd;
// 		let outOrd = this.currOrd;
// 		this.currOrd++;
// 		if(this.currOrd>this.divs.length-1){
// 			this.currOrd=0;
// 		}
		
// 		//2）、外观：
// 		//A、改图片
// 		this.showDiv(this.currOrd,outOrd);
// 		//B、改豆豆
// 		this.showLi();

// 	},this.timeSpace);
// }

//2、停止播放
Slider2.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider2.prototype.goDiv=function(transOrd){//1
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;
	this.num=this.currOrd;

	//2）、外观：
	//A、改图片
	this.showDiv(this.currOrd,outOrd);
	//B、改豆豆
	this.showLi();
}

Slider2.prototype.addEvent = function(){	
	let obj = this;//this是Slider2的对象
	this.bannerRight.onmouseover = function(){
		obj.stopChange();
	}
	// this.bannerRight.onmouseout = function(){
	// 	obj.changeDiv();
	// } 	
	
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].onclick = ()=>{
			this.goDiv(i);
		}		
   }

}
 