
    class BigMirror {
        constructor(obj) {
            let defaultObj = {
                boxDom: obj.boxDom,
                mirrorWidth: 400,
                mirrorHeight: 200,
                mirrorOpacity: 0.4,
                mirrorBgColor: 'white',
                multiple: 2,
                bigImg: null
            }
            for (let key in obj) {
                obj[key] && (defaultObj[key] = obj[key]);
            }
            for (let key in defaultObj) {
                this[key] = defaultObj[key];
            }
            this.createUI();
            this.addEvent();
        }
        createUI() {
            //放大镜
            this.mirrorDom = document.createElement('div');
            this.mirrorDom.style.cssText = "position:absolute;display:none;";
            this.mirrorDom.style.width = this.mirrorWidth + 'px';
            this.mirrorDom.style.height = this.mirrorHeight + 'px';
            this.mirrorDom.style.backgroundColor = this.mirrorBgColor;
            this.mirrorDom.style.opacity = this.mirrorOpacity;
            this.boxDom.appendChild(this.mirrorDom);

            //显示框
            this.showBoxDom = document.createElement('div');
            this.showBoxDom.style.cssText = "position:absolute;display:none;";
            this.showBoxDom.style.width = (this.mirrorWidth * this.multiple) + 'px';
            this.showBoxDom.style.height = (this.mirrorHeight * this.multiple) + 'px';
            this.showBoxDom.style.backgroundImage = 'url(' + this.bigImg + ')';
            this.showBoxDom.style.backgroundSize = this.boxDom.offsetWidth * this.multiple + 'px ' + this.boxDom.offsetHeight *
                this.multiple + 'px';
            this.showBoxDom.style.left = (this.boxDom.offsetWidth + 10) + 'px';
            this.showBoxDom.style.top = 0 + 'px';
             this.showBoxDom.style.zIndex="8";
            this.showBoxDom.className = "showBox";
            this.boxDom.appendChild(this.showBoxDom);
        }
        addEvent() {
            this.boxDom.onmouseover = function () {
                this.mirrorDom.style.display = "block";
                this.showBoxDom.style.display = 'block';
            }.bind(this);
            this.boxDom.onmouseout = function () {
                this.mirrorDom.style.display = "none";
                this.showBoxDom.style.display = 'none';
            }.bind(this);
            this.boxDom.onmousemove = function (ev) {
                var ev = window.event || event;
                //数据
                var currentLeft = ev.pageX - this.boxDom.offsetLeft - this.mirrorWidth / 2;
                var currentTop = ev.pageY - this.boxDom.offsetTop - this.mirrorHeight / 2;
                //判断边界
                if (currentLeft <= 0) {
                    currentLeft = 0;
                } else if (currentLeft >= this.boxDom.offsetWidth - this.mirrorWidth) {
                    currentLeft = this.boxDom.offsetWidth - this.mirrorWidth;
                }
                if (currentTop <= 0) {
                    currentTop = 0;
                } else if (currentTop >= this.boxDom.offsetHeight - this.mirrorHeight) {
                    currentTop = this.boxDom.offsetHeight - this.mirrorHeight;
                }
                //改变外观
                this.mirrorDom.style.left = currentLeft + 'px';
                this.mirrorDom.style.top = currentTop + 'px';
                this.showBoxDom.style.backgroundPosition = (currentLeft * -this.multiple) + 'px ' + (currentTop *
                    -this.multiple) + 'px';
            }.bind(this);

        }
    }
    $(function(){
       addnum();
       showhide();
       fixedshow();
       changeproduct();
    })

    //点击加减
    function addnum(){
       var num=$(".buyNum")[0].value;
       $(".addbtn")[0].onclick=function(){
        this.style.color="#180808";
        num++;
        $(".buyNum")[0].value=num;
       } 
        $(".jianbtn")[0].onclick=function(){
        this.style.color="#180808";
        num--;
        if(num<=1){
            num=1;
        }
        $(".buyNum")[0].value=num;
       } 

    }
    //白条分期
    function showhide(){
        var spans=$(".line6")[0].children;
        for(let i=0;i<spans.length;i++){ 
            // spans[i].setAttribute("index",i);
            spans[i].onclick=function(){
                 spans[i].children[0].style.display="block"; 
                // console.log(this.getAttribute("index"))
                   // for(var j=0;j<spans.length;j++){
                   //   spans[j].children[0].style.display="none";  
                   //   spans[i].children[0].style.display="block"; 
                   // }
            }
        }
    }
    //固定栏动画
    // function fixedshow(){
    //     var anum=$(".barslist").find("a");
    //     for(let i=0;i<anum.length;i++){  
    //         var right=-55;
    //         anum[i].onmouseenter=function(){
    //             console.log(11)
              
    //             var timer=null;
    //             timer=setInterval(function(){
    //                 right++;

    //                 if(right>=35){
    //                     right=35;
    //                     clearInterval(timer);
    //                 }
    //             },10);
    //             // console.log(right);
    //             this.lastElementChild.style.right=right+"px";
    //         }

    //     }
    // }
    function fixedshow(){
        var anum=$(".barslist").find("a");
            anum.mouseenter(function(){
                $(this).find("span").animate({
                    right:"35px"
                },800)
            })
             anum.mouseleave(function(){
                $(this).find("span").animate({
                    right:"-55px"
                },800)
            })
 
    }
    function changeproduct(){
        var top=0;
        $(".btnbott")[0].onclick=function(){
            top=top-203;
            if(top<=-609){
                top=-609;
            }
            $(".ulscon")[0].style.top=top+"px";
        }
        $(".btntop")[0].onclick=function(){
            top=top+203;
            if(top>=0){
                top=0;
            }
            $(".ulscon")[0].style.top=top+"px";
        }
    }