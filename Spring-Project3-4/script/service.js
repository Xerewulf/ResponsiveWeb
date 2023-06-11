


//--Below code is an exapmle of gettin xml data and print on the div--//




$(document).ready(function() {
    $('#myButton').click(function() {
$.ajax({
    type: "GET",
    url: "../data/data.xml",// I get the data from xml
    beforeSend: function() {$("#posted").html("Loading...");},
    timeout: 10000,
        error: function(xhr, status, error) 
        {
        alert("Error: " + xhr.status + " - " + error);
        },
        
    dataType: "xml",
        success: function(data) 
        {
        $("#posted").html("");
        $(data).find("data").children().each(function() {
        var xmlDoc = $(this);// in here I get the required data and write onto web
        $("#posted").append("<h3>" +
        xmlDoc.find("name").text() + "</h3>" +
        xmlDoc.find("email").text() + "<br>" +
        xmlDoc.find("comment").text() + "<br>");
        });
        }
   });
});
});
//--------------------------------------------------------------------


//--Below code is the examlpe of the  web based data ajax method--//
$(document).ready(function() {

      
  $('#postButton').click(function() {
            var requestData = {//getting required parameters
              param1: $('#name').val(),
              param2: $('#email').val(),
              param3: $("#comment").val()
            };
        
            $.ajax({
              url: 'http://localhost:8081/pages/services.html', // get the request to this link
              type: 'GET', 
              dataType: 'text',
              contentType: 'text', 
              
              success: function(response) {
                html = "<h3>"+ requestData.param1 + "</h3>";
                html += "<h3>"+ requestData.param2 + "</h3>";
                $("#photos").html(html);
              },
              error: function(xhr, status, error) {
                
                console.log(error);
              }
             
              
            });
          });
          


       

  });



