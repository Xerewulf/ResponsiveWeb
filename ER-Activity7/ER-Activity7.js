var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus(); 
	
};



function displayResults()
{
	var hscore=scores[0];
	var name=names[0];
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	for(var i=1;i<scores.length;i++){
		if(hscore<scores[i]){
			hscore=scores[i];
			name=names[i];
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> Highes score is "+name + " with a score: "+hscore+"<br \> "

}

function displayScores()
{


	var tableBody = document.getElementById("scores_table");
	tableBody.innerHTML="<h2> Scores </h2><br />"

	var row = tableBody.insertRow(i);
	var temp1 = row.insertCell(0);
	var temp2 = row.insertCell(1);
	temp1.innerHTML="<b>Names</b>";
	temp2.innerHTML="<b>Scores</b>";

	for (var i = 1; i < names.length+1; i++) {
	  var row = tableBody.insertRow(i);
	  var nameCell = row.insertCell(0);
	  var scoreCell = row.insertCell(1);
	  nameCell.innerHTML = names[i-1];
	  scoreCell.innerHTML = scores[i-1];

}
}


function addScore()
{


	var nameInput = $("name");
	var scoreInput = $("score");
	
	var score = parseFloat(scoreInput.value);
	if (nameInput.value.trim() === "" || isNaN(score) || score < 0 || score > 100) {
	  alert("You must enter a name and a valid score");
	  nameInput.value = "";
	  scoreInput.value = "";
	  nameInput.focus();
	  return;
	}
	
	names.push(nameInput.value.trim());
	scores.push(score);
	
	nameInput.value = "";
	scoreInput.value = "";
	nameInput.focus();
  }



