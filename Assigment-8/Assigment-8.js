



$(document).ready(function() {
    $("#bDay").datepicker();
  });


  var lang = ["PHP", "Java", "Javascript", "HTML", "CSS", "Python", "C#", "C", "C++"];



  $(document).ready(function() {
    $( "#name" ).autocomplete({
        source: lang
        });
  });
  
    