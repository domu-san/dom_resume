var boxes = ["one", "two", "three", "four"];
var startGame = false;
var level = 0;
var gamePattern = [];
var userClickedPattern = [];

$(document).keypress(function(){
	
	if(!startGame){
		startGame = true;
		$('h1').text("level " + level);
		gameSequence();		
	}
	
});

$(document).click(function(){
	if(!startGame){
		startGame = true;
		$('h1').text("level " + level);
		setTimeout(gameSequence, 200);		
	}
});

$(".btn").click(function(){
	var clickedBox = $(this).attr("id");
	userClickedPattern.push(clickedBox);

	playSound(clickedBox);
	animate(clickedBox);

	checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
	if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
		if(userClickedPattern.length === gamePattern.length){
			setTimeout(function(){
				gameSequence();
			}, 1000);
		}
	}else{
		playSound("wrong");
		$("body").addClass("game-over");
		$("h1").text("Game Over, Press Any Key to restart");

		setTimeout(function(){
			$("body").removeClass("game-over");
		}, 200);
		
		startAgain();
	}

}

function gameSequence(){
	userClickedPattern = [];
	level++
	$("h1").text("Level " + level);
	var rand = Math.floor(Math.random()*4);
	var randomChosenBox = boxes[rand];
	gamePattern.push(randomChosenBox);

	$("#" + randomChosenBox).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenBox);
	
}

function playSound(name){
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animate(box){
	$('#' + box).addClass(".pressed");
	setTimeout(function(){
		$('#' + box).removeClass(".pressed");
	}, 100);
}

function startAgain(){
	level = 0;
	gamePattern = [];
	startGame = false;
}
