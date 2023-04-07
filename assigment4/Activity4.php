<!DOCTYPE html>
<html>
<head>
	<title>Registiration Form</title>
	<link rel="stylesheet" href="index.css">
</head>
<body>
	<h2>Registiration Form</h2>
	<form method="post" action="process.php">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name"><br>

		<label for="surname">Surname:</label>
		<input type="text" id="surname" name="surname"><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password"><br>

		<label for="address">Address:</label>
		<input type="text" id="address" name="address"><br>

		<label for="zip">Zip Code:</label>
		<input type="text" id="zip" name="zip"><br>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email"><br>

		<label for="language">Language:</label>
		<select id="language" name="language">
			<option value="English">English</option>
			<option value="Spanish">Spanish</option>
			<option value="French">French</option>
			<option value="German">German</option>
		</select><br>

		<label for="country">Country:</label>
		<select id="country" name="country">
			<option value="USA">USA</option>
			<option value="Canada">Canada</option>
			<option value="Germany">Germany</option>
			<option value="Italy">Italy</option>
		</select><br>

		<label for="gender">Gender:</label>
		<input type="checkbox" id="gender" name="gender" value="male">Male
		<input type="checkbox" id="gender" name="gender" value="female">Female<br>

		<input type="submit" name="submit" value="Submit">
	</form>
</body>
</html>
