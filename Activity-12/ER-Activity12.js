$(document).ready(function() {
    
	$("#nav_list a").click(function(e) {
		e.preventDefault();
		var fileName = $(this).attr("title") + ".json";
		loadSpeakerData(fileName);
	});

	function loadSpeakerData(fileName) {
		$("#data").empty();

		$.getJSON("json_files/" + fileName, function(data) {

			var title = $("<h1>").text(data.speakers[0].title);
			var image = $("<img>").attr("src", data.speakers[0].image);
			var month = $("<h2>").text(data.speakers[0].month);
			var text = $("<p>").text(data.speakers[0].text);


			$("#data").append(title, image, month, text);
        });
    }});