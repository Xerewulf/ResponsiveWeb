$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	// move the focus to the first text box
	$("#arrival_date").focus();
	$("#arrival_date").datepicker({
		minDate: 0, 
		maxDate: "+90D", 
		dateFormat: "yy-mm-dd" 
	});
	
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;

			// validate the requested arrival date
			var arrivalDate = $("#arrival_date").val().trim();
			if (arrivalDate == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");
			}
			$("#arrival_date").val(arrivalDate);

			// validate the number of nights
			var nights = $("#nights").val().trim();
			if (nights == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN($("#nights").val())) {
				$("#nights").next().text("This field must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}
			$("#nights").val(nights);

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);

			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") {
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if (!emailPattern.test(email)) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			// validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") {
					$("#phone").next().text("This field is required.");
					isValid = false;
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);

		
			if (isValid == false) {
				event.preventDefault();
			}
		} // end function
	);	
	$('#tabs > div').hide();
	$('#tabs > div:first').show();
	$('#tabs ul li:first').addClass('active');

	$('#tabs ul li a').click(function() {
		$('#tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#tabs > div').hide();
		$(currentTab).fadeIn();
		return false;
	});

	$("#policies").click(function() {
		$("#dialog").dialog({
			modal: true, 
			width: 400, 
			buttons: {
				Close: function() {
					$(this).dialog("close"); 
				}
			}
		});
	});
}); // end ready