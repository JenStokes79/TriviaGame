var questionOne = {
	question: "How long is the avergae ISS mission?",
	choices: ["6 months", "3 Months", "1 Year", "8 Months"],
	answer: 0
},
questionTwo = {
	question: "What can be seen in late September through March, usually only if you are very far north?",
	choices: ["Sun Spots", "Aurora Borealis", "Solar Flares", "Aurora Glitteralus"],
	answer: 1
},
questionThree = {
	question: "How old is the Universe?",
	choices: ["500 Million Million Years", "4.6 Billion Years", "13.8 Billion Years", "No one really knows"],
	answer: 2
},
questionFour = {
	question: "What has a gravitational pull so strong that not even light can escape it?",
	choices: ["A Black Hole", "A Supernova", "The Sun", " A Nebula"],
	answer: 0
},
questionFive = {
	question: "What was the last space flight to the Moon?",
	choices: ["Shuttle Discovery", "Mercury 7", "Apollo 13", "Apollo 17"],
	answer: 3
},
questionSix = {
	question: "What is the longest time any person has spent in space continuously?",
	choices: ["180 Days", "34 Days", "437 Days", "365 Days"],
	answer: 2
},
questionSeven = {
	question: "How big is the Moon relative to Earth?",
	choices: ["27%", "25%", "50%", "34%"],
	answer: 0
}




var correctCounter = 0;
var incorrectCounter = 0;




//console.log(questionFive.choices)






$("#start").click(launchQuiz);

function launchQuiz() {
	$("#start").hide(); //hides 'Launch Quiz' button
	$(".questions").toggle();
	$(".end").toggle();
	$(".timer").toggle();
	

var count=5;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer() {
	  count--;
  if (count <= 0) {
     clearInterval(counter);
     return;
  }
 $(".timer").html(count + "sec left")
	}
setTimeout(function(){
  $(".timer").html("game over")
}, 5000);
}









$("#submit").click(showResults);

function showResults(){
	if ($("#correct1").is(':checked')){
		correctCounter++
	} else if ($("#incorrect1").is(':checked')){
		incorrectCounter++
	
	} else if ($("#incorrect11").is(':checked')){
		incorrectCounter++
	}else if ($("#incorrect111").is(':checked')){
		incorrectCounter++

	}


	if ($("#correct2").is(':checked')){
		correctCounter++
	} else if($("#incorrect2").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect22").is(':checked')){
		incorrectCounter++

	}else if($("#incorrect222").is(':checked')){
		incorrectCounter++

	}


	if ($("#correct3").is(':checked')){
		correctCounter++
	} else if($("#incorrect3").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect33").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect333").is(':checked')){
		incorrectCounter++
	}




	if ($("#correct4").is(':checked')){
		correctCounter++
	} else if($("#incorrect4").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect44").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect444").is(':checked')){
		incorrectCounter++

	}


	if ($("#correct5").is(':checked')){
		correctCounter++
	} else if($("#incorrect5").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect55").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect555").is(':checked')){
		incorrectCounter++
	
	}

	if ($("#correct6").is(':checked')){
		correctCounter++
	} else if($("#incorrect6").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect66").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect666").is(':checked')){
		incorrectCounter++
	}



	if ($("#correct7").is(':checked')){
		correctCounter++
	} else if($("#incorrect7").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect77").is(':checked')){
		incorrectCounter++
	}else if($("#incorrect777").is(':checked')){
		incorrectCounter++
	}

	//if (correctCounter >= 4){
	//	$("#rank").html("Rank Cadet")
	//}


	$(".results1").toggle();
	$("#play").toggle();
	$(".questions").hide();
	$("#submit").hide();
	$("#correct").html("Correct: " + correctCounter);
	$("#incorrect").html("Incorrect: " + incorrectCounter);

}

$("#play").click(playAgain);
function playAgain(){
	launchQuiz();
	$(".results1").hide();
	$("#play").hide();


}



//need timer, ability to only choose one option, 
//make it so they have to choose, Rank(optional)





