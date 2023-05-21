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
        return;//Check if email is valid or not with func.
      }

      if (message.trim() === '') {
        alert('Please enter your message.');
        return;
      }

      alert('Form submitted successfully!');
      

      $('form')[0].reset();
    });

    function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//regex for validation
      return re.test(email);
    }
  });