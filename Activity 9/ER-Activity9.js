$(document).ready(function() {
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

      
    $("#image_list a").click(function(evt) {
        // Prevent default action of the link
        evt.preventDefault();

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // Fade out 
        $("#caption, #image").fadeOut(1000, function() {
            // Update 
            $("#image").attr("src", imageURL);
            $("#caption").text(caption);

        
            $("#caption, #image").fadeIn(1000);
        });
    });

    // Move focus to the first thumbnail
    $("li:first-child a").focus();
});
