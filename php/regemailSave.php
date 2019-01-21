<?php
  header("content-type:text/html;charset=utf-8");
  //1，接收数据
  $username=$_POST["username"];
  $userpass=$_POST["userpass"];
  
  //2.处理
  //1）.链接数据库
  $con=mysql_connect("localhost","root","root");
  if(!$con){
    echo "数据路链接失败";
  }else{
    //2).选择数据库(目的地)
    mysql_select_db("jdqqg",$con);
    //3).执行语句
    $sqlstr="select * from useremail where username='$username'";
    $result=mysql_query($sqlstr,$con);
    $rows=mysql_num_rows($result);
    if($rows<=0){//表明没有用户注册
      
      $sqlstr="insert into useremail values('$username','$userpass')";
      $result=mysql_query($sqlstr,$con);
      //3，响应
      if($result==1){
        echo "1";//注册成功
      }else{
        echo "0";//注册失败
      }
    }else{
      echo "-1";//注册失败:用户名已经存在
    }
     //4).关闭数据库
      // mysql_close($con);

}


?>