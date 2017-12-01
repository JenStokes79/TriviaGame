
//variables
var correctCounter = 0;
var incorrectCounter = 0;

//starts game on-click event
$("#start").click(launchQuiz);

//starts the timer, shows the questions & answers, hides the start button
//shows the submit button
function launchQuiz() {
	$("#start").hide(); //hides 'Launch Quiz' button
	$(".questions").toggle();
	$(".end").toggle();
	$(".timer").toggle();
	
//variables for timer
//timer starts when user clicks "launch quiz"
//counts down from 90 seconds. 
var count = 90;
var counter = setInterval(timer, 1000);

function timer() {
	  count--;
  if (count <= 0) {
     clearInterval(counter);

     return;
	 }

//shows timer in game
$(".timer").html("T-Minus: " + count)
}

//if user does not click "submit" before
//timer runs out, questions will hide and user gets "game over" notification
setTimeout(function(){
  $(".timer").html("Game Over")
  $(".questions").hide();
}, 90000);

$("#submit").click(function () {
       clearTimeout(counter);

    });
}

//submit button tally's score and notifies user of correct & incorrect answers

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

	//gives a ranking of either "lift off"(pass), or "you failed to launch"(fail)
	//gifs show for fun

	if (correctCounter >= 4) {
	$("#rank").html("LIFT OFF!" + '<img src= "CSS/images/launch.gif">');
	
	} else if (correctCounter <= 3) {

		$("#rank").html("SORRY, YOU FAILED TO LAUNCH!" + '<img src= "CSS/images/fail.gif">')
	}


	$(".results1").toggle(); //shows results
	$("#play").toggle(); // gives option to play again
	$(".questions").hide(); //hides questions
	$("#submit").hide(); //hides submit button
	$("#correct").html("Correct: " + correctCounter); //shows correct number of answers on HTML
	$("#incorrect").html("Incorrect: " + incorrectCounter); //shows incorrect number of answers on HTML

}


	//to restart game
	$("#play").click(playAgain);
	
	function playAgain(){
	$(document).scrollTop(0); //scrolls to top of page
	$(".results1").hide(); // removes the results
	$("#submit").show(); // option to submit new game
	$("#play").hide(); // hides re-launch quiz button
	$(".questions").toggle(); //shows questions & answers
	$("#rank").hide(); //removes gifs
	var correctCounter = 0; //should reset correct answers to 0 - doesn't work
	var incorrectCounter = 0; //should reset incorrect answers to 0 - dosen't work

	//this function clears the radio buttons for new game
	$(':radio').each(function () {
		$(this).removeAttr('checked');
		$('input[type="radio"]').prop('checked', false);
	})
};


//what does work:
//launch quiz and all toggles (hide & show buttons on click)
//Game Over if time runs out
//results, win/lose 
//shows corrects gifs on win/lose
//restart quiz, radio buttons reset, submit button works



//does not work:
//timer does not actually stop
//timer does not reset 
//tallys do not clear on reset





