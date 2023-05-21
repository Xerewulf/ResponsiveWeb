$(document).ready(function() {
    // Form submission
    $('form').submit(function(e) {
      e.preventDefault(); 

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

      alert('Form submitted successfully!');
      

      $('form')[0].reset();
    });

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });