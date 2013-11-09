var timerVal = 300;

var page1 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Post-it Brainstorm</h2><h3 class="centerText">Ingredients:</h3><h4 class="ingredients">&#149 post-it notes<br />&#149 writing utensils <br />&#149 brainstorming topic <br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success openPageTwo">Next</button></div></div>';
var page2 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Let\'s Get Started!</h2><h3 class="centerText">Basic Rules:</h3><h4 class="ingredients">&#149 focus on quantity<br />&#149 withhold criticism<br />&#149 welcome unusual ideas<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageOne">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageThree">Next</button></div></div>';
var page3 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Brief the group on the problem you would like to solve!</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageTwo">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageFour">Next</button></div></div>';
var page4 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Individually write ideas on post-its</h2><h4 class="setTime">Set Time</h4><div class="row"><div class="col-xs-1 col-xs-offset-3 col-lg-1 col-lg-offset-4 timerSetter"><div class="adjustButtons"><div class="adjustButton"><button class="btn btn-info upButton">&#8593</button></div><div class="adjustButton"><button class="btn btn-info downButton">&#8595</button></div></div></div><div class="col-xs-6 col-lg-2"><div class="timerDisplay2">5:00</div></div></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageThree">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageFive">Next</button></div></div>'
var page5 = '<div class="col-lg-12 col-xs-12"><div class="row"><div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 timerDisplay countdown"><button class="btn btn-block btn-success timerToggle">Go</button></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageFour">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageSix">Next</button></div></div></div>';
var page6 = '<div class="col-lg-12 col-xs-12"><h1 class="topSpace">Put Up Post-Its!</h1><div class="row bottomBar3"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageFive">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageSeven">Next</button></div></div></div>';
var page7 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Discuss Ideas:</h3><h4 class="ingredients">&#149 Go one by one<br />&#149 Explain each thought<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageSix">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageEight">Next</button></div></div></div>';
var page8 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Group Common Ideas</h3><h4 class="ingredients">&#149 Group by type<br />&#149 i.e. location, theme<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageSeven">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageNine">Restart</button></div></div></div>';

function updateTimer(){
	var minute = Math.floor(timerVal/60);
	var seconds = timerVal - (minute*60);
	var secondsTens = Math.floor(seconds/10);
	var secondsOnes = seconds-secondsTens*10
	
	$(".timerDisplay2").html(minute + ":" + secondsTens + secondsOnes);
}

function displayPageOne(){
	$(".displayWindow").html(page1);
	$(".openPageTwo").on("click", function() {
		displayPageTwo();
	});
}

function displayPageTwo(){
	$(".displayWindow").html(page2);
	$(".showPageOne").on("click", function(){
		displayPageOne();
	});
	$(".showPageThree").on("click", function(){
		displayPageThree();
	});
}

function displayPageThree(){
	$(".displayWindow").html(page3);
	$(".showPageTwo").on("click", function(){
		displayPageTwo();
	});
	$(".showPageFour").on("click", function(){
		displayPageFour();
	});
}

function displayPageFour(){
	$(".displayWindow").html(page4);
	updateTimer();
    $(".upButton").on("click", function(){
        if(timerVal < 570){
            timerVal += 30;
        }
        updateTimer();
    });

    $(".downButton").on("click", function(){
        if(timerVal > 0){
            timerVal -= 30;
        }
        updateTimer();
    });
    $(".showPageThree").on("click", function(){
    	displayPageThree();
    });
    $(".showPageFive").on("click", function(){
    	displayPageFive();
    });
}

function displayPageFive(){
	//var page5 = '<div class="col-lg-12 col-xs-12"><div class="row"><div class="col-xs-8 col-xs-offset-2 clockSpace"><script type="application/javascript">var myCountdown2 = new Countdown({time: ' + timerVal + ', width:200, height:80, rangeHi:"minute"});</script></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success">Next</button></div></div></div>';
	$(".displayWindow").html(page5);

	$(".timerToggle").on("click", function(){
	    countdownTime = timerVal;
	    updateCountdown();
	    intervalID = setInterval(function(){
	        if(countdownTime == 0){
	            clearInterval(intervalID);
	        } else {
	            countdownTime--;
	        }
	        updateCountdown();
	    }, 1000)
	});

	$(".showPageFour").on("click", function(){
		displayPageFour();
		clearInterval(intervalID);
	});

	$(".showPageSix").on("click", function() {
		displayPageSix();
	})
}

function displayPageSix(){
	$(".displayWindow").html(page6);
	$(".showPageFive").on("click", function(){
		displayPageFive();
	});
	$(".showPageSeven").on("click", function(){
		displayPageSeven();
	})
}

function displayPageSeven(){
	$(".displayWindow").html(page7);
	$(".showPageSix").on("click", function(){
		displayPageSix();
	});
	$(".showPageEight").on("click", function(){
		displayPageEight();
	});
}

function displayPageEight(){
	$(".displayWindow").html(page8);
	$(".showPageSeven").on("click", function(){
		displayPageSeven();
	});
	$(".showPageNine").on("click", function(){
		displayPageOne();
	});
}

function displayTimer(){
	//var script = 'var myCountdown2 = new Countdown({time: ' + timerVal + ', width:200, height:80, rangeHi:"minute"	});';
	//$(".clockSpace").html(eval(script));

	document.write('<!DOCTYPE html><html><head><title>Brainstormer</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Bootstrap --><link href="css/bootstrap.min.css" rel="stylesheet"><link href="css/application.css" rel="stylesheet"><link href="css/flipclock.css" rel="stylesheet"><!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --><!-- WARNING: Respond.js doesn\'t work if you view the page via file:// --><!--[if lt IE 9]><script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script><script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script><![endif]--><script src="https://code.jquery.com/jquery.js"></script><!-- Include all compiled plugins (below), or include individual files as needed --><script src="js/bootstrap.min.js"></script><script src="js/countdown.js"></script><script type=\'text/javascript\'>$(document).ready(function() {});</script></head><body><div class="row displayWindow"><div class="col-lg-12 col-xs-12"><div class="row"><div class="col-xs-8 col-xs-offset-2 clockSpace"><script type="application/javascript">var myCountdown2 = new Countdown({time: ' + timerVal + ', width:200, height:80, rangeHi:"minute"});</script></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger">Previous</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success">Next</button></div></div></div></div></body></html>');
}

function updateCountdown(){
    var minute = Math.floor(countdownTime/60);
    var seconds = countdownTime - (minute*60);
    var secondsTens = Math.floor(seconds/10);
    var secondsOnes = seconds-secondsTens*10;

    $(".countdown").html(minute + ":" + secondsTens + secondsOnes);
}



