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
var unansweredCounter = 0;
var questions = [];
//console.log(questionFive.choices)



$("#start").click(launchQuiz);




function launchQuiz() {
	$("#start").hide(); //hides 'Launch Quiz' button
	$(".questions").toggle();

	}
	







