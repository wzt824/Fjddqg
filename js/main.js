
$(function () {
    hoverli();
    navleft();
    hoverleft();
    brandshow();
    addBg();
    gotop();
    changetab();
    changeTab2();
    fixguide();
  //  logintab();
});

    //导航栏划过
    function hoverli() {
        $(".hoverli")[0].onmouseover = function () {
            $(".hoverer")[0].style.display = "block";
            $(".hoverli")[0].style.background = "white";
        }
        $(".hoverli")[0].onmouseout = function () {
            $(".hoverer")[0].style.display = "none";
            $(".hoverli")[0].style.background = "none";
        }
    }
    //navleft 
    function navleft(){
        var lists=document.getElementsByClassName('list');
        var guidecons = document.getElementsByClassName("guidecon");
        for(let i=0;i<lists.length;i++){
            lists[i].onmouseenter=function(){  
                this.style.background="white";
                for(let j=0;j<guidecons.length;j++){
                    guidecons[j].style.display="none";
                    guidecons[i].style.display="block";
                    guidecons[i].style.zIndex="999";
                }
            }
            lists[i].onmouseleave= function () {
                this.style.background = "none";
                    guidecons[i].style.display = "none";

            }
        }
    }
    //划过图片向左偏移
    function hoverleft(){
        for(let i=0;i<$(".active").length;i++){
             $(" .active" )[i].onmouseenter=function(){
                let activeobj=this.firstElementChild.nextElementSibling;
               activeobj.style.transform="translateX(-6px)";
                activeobj.style.transition="all 0.2s";
      
            }
            $(" .active" )[i].onmouseleave=function(){
                let activeobj=this.firstElementChild.nextElementSibling;
                activeobj.style.transform="translateX(0)";
                activeobj.style.transition="all 0.4s";
      
            }
        }
       
    }

    //划过品牌显示文字
    function brandshow(){
       var adom=$(".brands").children();
       for(let i=0;i<adom.length;i++){
        adom.mouseenter(function(){
            $(this).find("h6").removeClass("hide");
            $(this).find("img").addClass("hide");
        });
        adom.mouseleave(function(){
            $(this).find("h6").addClass("hide");
            $(this).find("img").removeClass("hide");

        });
       }
    }
    //划过图片添加蒙版
    function addBg(){
        for(let i=0;i<$(".addBg").length;i++){
                var sub=$('.addBg').children();
               sub.hover(
                 function(){
                     $(this).find(".bgdiv").animate({
                        opacity:0.3,
                        width:200,
                        height:200,
                    },1000);
                      $(this).find(".bgdiv2").animate({
                        opacity:0.3,
                        width:200,
                        height:200,
                    },1000);


                },
                function(){ 
                    $(this).find(".bgdiv").animate({
                        opacity:0,
                        width:10,
                        height:10
                    },1000);
                    $(this).find(".bgdiv2").animate({
                        opacity:0,
                        width:10,
                        height:10
                    },1000);
                }
               
                );
    }

}
//gotop
function gotop(){
    let gotop=document.getElementById("gotop");  
    let timer=null;
    // let scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
    // console.log(scrolltop)
    gotop.onclick=function(){ 
        timer=setInterval(function(){
            document.documentElement.scrollTop-=50;
            console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop<=0){
                clearInterval(timer);
            }     
            
        },10);
    }
}
//选项卡1
function changetab(){
    var connectpro=document.getElementsByClassName("connectpro");
    var subtabs=document.getElementsByClassName("subtabs");
    for(let i=0;i<subtabs.length;i++){
        var lis=subtabs[i].children;
        //开始点击切换内容
        for(let j=0;j<lis.length;j++){
            lis[j].onclick=function(){
                for(let k=0;k<lis.length;k++){
                    lis[k].style.background="#f7f5f7";
                    this.style.background="white";
                    lis[k].style.borderTop="none";
                    this.style.borderTop="1px solid black"; 
                    connectpro[k].style.display="none";
                   
                    }
                    
                connectpro[j].style.display="block";
               }  
        }
            
    }

}
//选项卡二
function changeTab2(){
    var connectprotwo=document.getElementsByClassName("connectprotwo");
    var subtabsTwo=document.getElementsByClassName("subtabsTwo");
    var hiddenimg=document.getElementsByClassName("hiddenimg");

    var lis=subtabsTwo[0].children;
    // console.log(subtabsTwo[0].children)
    for(let j=0;j<lis.length;j++){
            lis[j].onclick=function(){
                console.log(111);
                for(let k=0;k<lis.length;k++){
                    lis[k].style.background="#f7f5f7";
                    this.style.background="white";
                    lis[k].style.borderTop="none";
                    this.style.borderTop="1px solid black"; 
                    connectprotwo[k].style.display="none";
                    hiddenimg[k].style.display="none";
                    }
                    
                connectprotwo[j].style.display="block";
                hiddenimg[j].style.display="block";

               }  
        }
}
//固定栏
function fixguide(){
    var banner=document.getElementsByClassName("banner")[0];
    var footer=document.getElementsByClassName("footer");
    var fl = document.getElementsByClassName('fl');
    var floor = document.getElementsByClassName('floor');

    var fixguideline=document.getElementsByClassName('fixguideline')[0];
    window.addEventListener("scroll",check,true);
    function check(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        console.log(scrollTop);
        var top=banner.offsetHeight;
        if(scrollTop>top){
            fixguideline.style.display="block";
        }else{
            fixguideline.style.display="none";
        }
        for(let i in fl){
            if(fl[i].offsetTop>scrollTop){
                that=floor[i];
                for(let j=0;j<floor.length;j++){
                    if(floor[j]!=that){
                        floor[j].style.background="white";
                    }
                }
                floor[i].style.background="pink";
                return false;
               
            }
        }
    }
     //划过变色
      for (var i = 0; i < floor.length; i++) {
        floor[i].onmouseenter=function(){
            this.style.background="pink";
        }
        floor[i].onmouseleave=function(){
            this.style.background="white";
        }
    }
    //锚点
     for (var i = 0; i < floor.length; i++) {
        (function (i) {
            floor[i].addEventListener("click", function () {
                var index = i;
                floor[index].style.background="pink";
                var top=banner.offsetHeight;
                if (fl[i].offsetTop == fl[index].offsetTop) {
                    $("html,body").stop().animate({
                        "scrollTop": fl[i].offsetTop
                    }, 1000, function () {
                        window.addEventListener("scroll", check, true);
                    });
                }
            }, false)
        })(i)
    }
}
