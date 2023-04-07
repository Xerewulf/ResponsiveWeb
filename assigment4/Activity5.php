<!DOCTYPE html>
<html>
<head>
	<title>Form Data</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
	<h2>Form Data</h2>

	<?php
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$password = $_POST['password'];
	$address = $_POST['address'];
	$zip = $_POST['zip'];
	$email = $_POST['email'];
	$language = $_POST['language'];
	$country = $_POST['country'];
	$gender = $_POST['gender'];

	echo "<p>Name: ".$name."</p>";
	echo "<p>Surname: ".$surname."</p>";
	echo "<p>Password: ".$password."</p>";
	echo "<p>Address: ".$address."</p>";
	echo "<p>Zip Code: ".$zip."</p>";
	echo "<p>Email: ".$email."</p>";
	echo "<p>Language: ".$language."</p>";
	echo "<p>Country: ".$country."</p>";
	echo "<p>Gender: ".$gender."</p>";
	?>
</body>
</html>
