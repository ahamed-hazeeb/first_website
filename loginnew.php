<?php

$host ="localhost";
$user = "root";
$password ="1234";
$db ="login";

mysql_connect($host,$user ,$password);
mysql_select_db($db);

if(isset($_POST['username'])){

	$uname=$_POST['username'];
	$password=$_POST['password'];

	$sql="select * from login_db where user='".$uname."' AND pass ='".$password."'limit 1";

	$result =mysql_query($sql);

	if (mysql_num_rows($result)==1) {
		echo "You have sucessfully logged in ";
		exit();
	}
	else{
		echo "You have entered incorrect password";
		exit();
	}
}

?>





<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" type="text/css" href="loginnew.css">
	<title>Login Form Design</title>
</head>
<body>
<div class="loginbox">
	<img src="pic\a.png" class="a">
	<h1>Login Here</h1>
	<form method="POST" action="#">
		<div class="box">
		<label>User Name</label>
		<input type="text" name="username" required="" placeholder="Enter User Name">
		</div>
		<div class="box">
		<label>Password</label>
		<input type="Password" name="password" required="" placeholder="Password">
		</div>
		<input type="submit" name="" value="Login">
		<a href="#">Lost your Password?</a><br>
		<a href="#">Don't have anh account?</a>

	</form>
</div>
</body>
</html>