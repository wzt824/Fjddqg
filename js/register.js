$(function(){
    logintab();
     resignpatt(); 
    resignsql();
    SuiJi();
    clickyzm();
    emailpatt();
    emailsql();
})


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
//正则
function resignpatt(){
    $("#userphone")[0].onblur=function(){
        $(this).next("span").addClass("checkspan");
        console.log( $(this).next("span"))
        $('.tishi').html('');
        var patternNum=/^[1](3|5|7|8)[\d]{9}/g;
        var Num=patternNum.test($("#userphone")[0].value);
        if(Num){
            $("#checkphone").css({"color":"green"});
            $("#checkphone").html("√");
            let xhr = new XMLHttpRequest();
            //设置open参数
            xhr.open("get","php/checkUser.php?username="+this.value,true);
            //回调函数
            xhr.onreadystatechange = function(){
                //接受响应
                if(xhr.readyState==4 && xhr.status==200){
                    let str = xhr.responseText;
                    if(str=='1'){
                         $('.tishi').html('该号码可以使用');
                         $('.tishi').css({"color":"green"});

                    }else{
                        $('.tishi').html('已被注册，请重输');
                    }
                }
            }
            //发送请求
            xhr.send();
        }else{
            $("#checkphone").css({"color":"red"});
            $("#checkphone").html("×");
        } 
        }
    $("#userpass1")[0].onblur=function(){
        $(this).next("span").addClass("checkspan");
        var pattern=/^[a-zA-Z]\w{5,17}$/;
        var str=pattern.test($("#userpass1")[0].value);
        if(str){
            $("#checkpsw1")[0].style.color="green";
            $("#checkpsw1")[0].innerHTML="√";
        }else{
            $("#checkpsw1")[0].style.fontSize="10px";
            $("#checkpsw1")[0].style.lineHeight="16px";
            $("#checkpsw1")[0].style.color="red";
            $("#checkpsw1")[0].innerHTML="请输入以字母开头，长度在6-18之间";
        }
    }
    $("#checkagain")[0].onblur=function(){
        $(this).next("span").addClass("checkspan");
        var str1=$("#checkagain")[0].value;
        var str2=$("#userpass1")[0].value;
        // if(str1==""){
        //     $("#checkpsw2")[0].style.color="red";
        //     // $("#checkpsw2")[0].style.fontSize="10px";
        //     $("#checkpsw2")[0].innerHTML="请输入内容";
        // }
        if(str1==str2){
            $("#checkpsw2")[0].style.color="green";
            $("#checkpsw2")[0].innerHTML="√";
        }else{
            $("#checkpsw2")[0].style.color="red";
            $("#checkpsw2")[0].style.fontSize="10px";
            $("#checkpsw2")[0].innerHTML="两次输入不一致";
        }
    }

}
function clickyzm(){
    $(".printf").click(function(){
        SuiJi();
        this.style.cursor='pointer';
    })
}
function SuiJi(){
            var str = ""; 
            for(var i = 0 ; i < 6; i++){
                var a = String.fromCharCode(random(48,57));
                var b = String.fromCharCode(random(65,90));
                var c = String.fromCharCode(random(97,122));
                var d = String.fromCharCode(random(97,122));
                str += a+b+c+d;
            }
            var kk = '';
            for(var j=0; j<4; j++){
                kk += str[random(0,str.length-1)];
            }
            $(".printf").html(kk);
            getColor();
        }
 function random(m,n){
         return Math.round(Math.random()*(n-m))+m;
}       
        //随机颜色
function getColor(){
    var str="#";
     for(var i=0;i<6;i++){
        str+=(parseInt(Math.random()*16)).toString(16);
    }
    $(".printf").css({"background":"skyblue"})
     $(".printf").css({"color":str});
}        
//链接数据库 手机号
function  resignsql(){
    $("#registerbtn")[0].onclick=function(){
        //1.创建对象
        console.log(111)
            let xhr=new XMLHttpRequest();
            //2.open设置请求参数
            xhr.open("post","php/regSave.php",true);
            //3.设置回调函数

            xhr.onreadystatechange=function(){
                if(xhr.readyState == 4 && xhr.status==200){
                    //5.接受响应
                    let str=xhr.responseText;
                    if(str=="1"){
                        $("#resultinfo")[0].innerHTML="注册成功";
                        $("#resultinfo")[0].style.color="green";
                    }else if(str=="0"){
                        $("#resultinfo")[0].innerHTML="注册失败";
                    }
                    else{
                        $("#resultinfo")[0].innerHTML="注册失败，用户名已经存在";
                    }
                }
            }
            //4.发送请求
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            let str="username="+$("#userphone")[0].value+"&userpass="+$("#userpass1")[0].value;//此时的username和userpass的值为id或者name的值
            xhr.send(str);


    }
}


//邮箱正则
function emailpatt(){
    $("#useremail")[0].onblur=function(){
        $(this).next("span").addClass("checkspan");
        $('.tishi').html('');
        var pattern=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g;;
        var str=pattern.test($("#useremail")[0].value);
        if(str){
            $("#checkemail")[0].style.color="green";
            $("#checkemail")[0].innerHTML="√";
            let xhr = new XMLHttpRequest();
            //设置open参数
            xhr.open("get","php/checkemail.php?username="+this.value,true);
            //回调函数
            xhr.onreadystatechange = function(){
                //接受响应
                if(xhr.readyState==4 && xhr.status==200){
                    let str = xhr.responseText;
                    if(str=='1'){
                         $('.tishi').html('该邮箱可以使用');
                         $('.tishi').css({"color":"green"});

                    }else{
                        $('.tishi').html('已被注册，请重输');
                    }
                }
            }
            //发送请求
            xhr.send();
        }else{
            $("#checkemail")[0].style.fontSize="10px";
            $("#checkemail")[0].style.lineHeight="39px";
            $("#checkemail")[0].style.color="red";
            $("#checkemail")[0].innerHTML="请输入有效的邮箱名";
        }
        
    }
    $("#userpss")[0].onblur=function(){
        $(this).next("span").addClass("checkspan");
        var pattern=/^[a-zA-Z]\w{5,17}$/;
        var str=pattern.test($("#userpss")[0].value);
        if(str){
            $("#checkpswe")[0].style.color="green";
            $("#checkpswe")[0].innerHTML="√";
        }else{
            $("#checkpswe")[0].style.fontSize="10px";
            $("#checkpswe")[0].style.lineHeight="16px";
            $("#checkpswe")[0].style.color="red";
            $("#checkpswe")[0].innerHTML="请输入以字母开头，长度在6-18之间";
        }
    }
     $("#checkagain2")[0].onblur=function(){
        var str1=$("#checkagain2")[0].value;
        var str2=$("#userpss")[0].value;
        if(str1==str2){
            $("#checkpswee")[0].style.color="green";
            $("#checkpswee")[0].innerHTML="√";
        }else{
            $("#checkpswee")[0].style.color="red";
            $("#checkpswee")[0].style.fontSize="10px";
            $("#checkpswee")[0].innerHTML="两次输入不一致";
        }
    }

}
function  emailsql(){
    $("#regbtn")[0].onclick=function(){
        console.log(1)
        //1.创建对象
            let xhr=new XMLHttpRequest();
            //2.open设置请求参数
            xhr.open("post","php/regemailSave.php",true);
            //3.设置回调函数

            xhr.onreadystatechange=function(){
                if(xhr.readyState == 4 && xhr.status==200){
                    //5.接受响应
                    let str=xhr.responseText;
                    if(str=="1"){
                        $("#info").html("注册成功");
                        $("#info").css({"color":"green"});
                    }else if(str=="0"){
                        $("#info").html("注册失败");
                    }
                    else{
                        $("#info").html("注册失败，用户名已经存在");


                    }
                }
            }
            //4.发送请求
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            let str="username="+$("#useremail")[0].value+"&userpass="+$("#userpss")[0].value;//此时的username和userpass的值为id或者name的值
            xhr.send(str);


    }
}
