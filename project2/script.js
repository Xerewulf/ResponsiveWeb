$(document).ready(function(){
    $('#mySlider').slick({
      slidesToShow: 3,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
  });



  $(document).ready(function ($) {
    $('.open-popup').magnificPopup({
        type: 'inline',

        fixContentPos: true,

        closeBtnInside: false,
        preloader: false,

        removalDelay: 160,

        mainClass: 'mfp-fade'
    });
});

$(document).ready(function() {
    // Facebook share button click event
    $('#facebook-share').on('click', function() {
      // Replace 'your-url' with the actual URL you want to share on Facebook
      var shareUrl = 'www.google.com';
      var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
      window.open(facebookUrl, '_blank');
    });

    // Twitter share button click event
    $('#twitter-share').on('click', function() {
      // Replace 'your-text' and 'your-url' with the actual content you want to share on Twitter
      var shareText = 'your-text';
      var shareUrl = 'your-url';
      var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl);
      window.open(twitterUrl, '_blank');
    });

    // LinkedIn share button click event
    $('#linkedin-share').on('click', function() {
      // Replace 'your-url' with the actual URL you want to share on LinkedIn
      var shareUrl = 'your-url';
      var linkedinUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl);
      window.open(linkedinUrl, '_blank');
    });
  });