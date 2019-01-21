<?php
  header("content-type:text/html;charset=utf-8");
  //1，接收数据
  $username = $_GET['username'];
  //form只能根据name属性来获取值
  //2.处理

  //1）.链接数据库
  $con=mysql_connect("localhost","root","root");
  if(!$con){
  	echo "数据路链接失败";
  }else{
  	//2).选择数据库(目的地)
  	mysql_select_db("jdqqg",$con);
  	//3).执行语句
  	$sqlstr="select * from user where username='$username'";
  	$result=mysql_query($sqlstr,$con);
    //4).关闭数据库
      mysql_close($con);
      //3.响应
  	$rows=mysql_num_rows($result);
  	if($rows==0){//表明没有有用户注册
  		echo "1";
  	}else{
  		echo "0";	
  	}
  }
?>