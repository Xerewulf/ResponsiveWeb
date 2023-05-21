$(document).ready(function() {
    // Form submission
    $('form').submit(function(e) {
      e.preventDefault(); // Prevent form from submitting

      // Perform form validation
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      if (name.trim() === '') {
        alert('Please enter your name.');
        return;
      }

      if (email.trim() === '') {
        alert('Please enter your email address.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (message.trim() === '') {
        alert('Please enter your message.');
        return;
      }

      // Submit the form or perform further actions
      alert('Form submitted successfully!');
      // You can perform additional actions like sending an email or storing the form data in a database.

      // Reset the form
      $('form')[0].reset();
    });

    // Email validation function
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });