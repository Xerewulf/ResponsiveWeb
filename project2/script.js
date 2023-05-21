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
  $('#myTable').DataTable({
    searching: true,
    paging: true
  });
});


$(document).ready(function() {
  $('#accordion').accordion({
    collapsible: true,
    active: 1
  });
});