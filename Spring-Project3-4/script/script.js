$(document).ready(function(){
    $('#mySlider').slick({
      slidesToShow: 3,
      autoplay: true//Autoplay is showing img fluently
    });
  });



  $(document).ready(function() {
    $('.open-popup').magnificPopup({
      type: 'inline',
      closeBtnInside: true,
      removalDelay: 300,
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

/*For plugings ı use Magnific-Popup for make a pop up when I clicked,
-slick for making image show on background,
-dataTables for making a table. 
For widget I use
-Accordion in the home page top of the app*/ 