<?php
     header("content_type:text/html;charset=utf-8");
     //1.接受数据
     $username = $_POST['username'];
     $userpass = $_POST['userpass'];
     //2.处理
      //1).链接数据库
      $con=mysql_connect("localhost","root","root");
      if(!$con){
      	echo '连接失败';
      }else{
      	 //2).选择数据库
      	mysql_select_db("jdqqg",$con);
      	//3).执行语句
      	$sqlstr="select * from user where username='$username' and userpass='$userpass'";
      	$result=mysql_query($sqlstr,$con);//会返回个表格
      	//4).关闭数据库
      	mysql_close($con);
      	//3.响应
      	$rows=mysql_num_rows($result);
      	if($rows==0){//表示没有查到相关数据
      		echo "0" ;
      	}else{
      		echo "1";//登录成功
      		// header("location:index.html");
      	}
      }
     

?>