$(function(){
    logintab();
    showewm();
    loginsql();
    sendlogin();
})

//login部分的js
function logintab(){
    var lis=$(".logintab").find("li");
    var loginconnect=$(".loginconnect");
    for(let i=0;i<lis.length;i++){
       lis[i].onclick=function(){ 
        for(let j=0;j<lis.length;j++){
            lis[j].id="";
            loginconnect[j].style.display="none";
        }
         this.id="clickcss"; 
        loginconnect[i].style.display="block";
     }
  }
}
//二维码
function showewm(){
    $(".logininfo").mouseenter(function(){
        $(".ewminfo").css({"display":"block"});
         $(".bgDiv").animate({
                opacity:0
            },10)
       $(".ewmimg").animate({
            left:"0px"
        },300,function(){
            $(".ewminfo").css({"display":"block"});
        });
    });
     $(".logininfo").mouseleave(function(){
        $(".ewminfo").css({"display":"none"});
        $(".ewmimg").animate({
            left:"64px"
        },600,function(){
             $(".bgDiv").animate({
                opacity:0.7
            },100000)
        });
    })

}

//正则判断
function loginsql(){
    $("#username")[0].onblur=function(){
        // var pattern=/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
        var patternNum=/^[1](3|5|7|8)[\d]{9}/g;
        var Num=patternNum.test($("#username")[0].value);
        var patternEmail=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        var Email=patternEmail.test($("#username")[0].value);
        if(Num||Email){
            $("#checkuser")[0].innerHTML="√";
        }else{
            $("#checkuser")[0].innerHTML="×";
        }
    }
    $("#userpass")[0].onblur=function(){
        // var pattern=/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
        var pattern=/^[a-zA-Z]\w{5,17}$/;
        var str=pattern.test($("#userpass")[0].value);
        if(str){
            $("#checkpsw")[0].innerHTML="√";
        }else{
            $("#checkpsw")[0].innerHTML="×";
        }
    }
}

//发送请求
function sendlogin(){
    $("#loginbtnn")[0].onclick=function(){
        console.log(111);
        var cname=$("#username")[0];
        var name=$("#username")[0].value;
        var pass=$("#userpass")[0].value;
        if(name&&pass){
            let xhr = new XMLHttpRequest();
            xhr.open("post","php/logincheck.php",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4 && xhr.status==200){
                    let str = xhr.responseText;
                    if(str=='1'){
                        setCookie("username","$('#username')[0].value",30);
                         location.href="index.html";
                    }else{
                        $('.successcheck').html('用户名与密码不匹配');
                    }
                }
            }
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            let str="username="+$("#username")[0].value+"&userpass="+$("#userpass")[0].value;
            xhr.send(str);
        }else{
            $("#userpass")[0].value="内容不能为空";
            $("#username")[0].value="内容不能为空";
        }
           
    }
}

