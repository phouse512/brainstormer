var timerVal = 90;

var whoArray = [];
var whatArray = [];
var functionArray = [];

var currentWho;
var currentWhat;
var currentFunction;

var opener = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Welcome</h2><div class="row"><div class="col-xs-6 col-sm-6"><img src="img/PostIt.png" id="postIt" class="imgLeft" width="50" height="50" /></div><div class="col-xs-6 col-sm-6"><img src="img/BBB.png" id="BBB" class="imgRight" width="50" height="50" /></div><div class="col-xs-6 col-sm-6"><img src="img/3in1.png" id="threeinone" class="imgLeft" width="50" height="50" /></div><div class="col-xs-6 col-sm-6"><img src="img/Snake.png" id="snake" class="imgRight" width="50" height="50" /></div></div></div>';
var page1 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Post-it Brainstorm</h2><h3 class="centerText">Ingredients:</h3><h4 class="ingredients">&#149 post-it notes<br />&#149 writing utensils <br />&#149 brainstorming topic <br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success openPageTwo"><img src = "img/ForwardButton.png" style ="cursor:pointer"></button></div></div>';
var page2 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Let\'s Get Started!</h2><h3 class="centerText">Basic Rules:</h3><h4 class="ingredients">&#149 focus on quantity<br />&#149 withhold criticism<br />&#149 welcome unusual ideas<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageOne"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></button></div></div>';
var page3 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Brief the group on the problem you would like to solve!</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageTwo"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFour"><img src="img/ForwardButton.png" style="cursor:pointer"></button></button></div></div>';
var page4 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Individually write ideas on post-its</h2><h4 class="setTime">Set Time</h4><div class="row"><div class="col-xs-1 col-xs-offset-3 col-lg-1 col-lg-offset-4 timerSetter"><div class="adjustButtons"><div class="adjustButton"><button class="btn btn-info upButton">&#8593</button></div><div class="adjustButton"><button class="btn btn-info downButton">&#8595</button></div></div></div><div class="col-xs-6 col-lg-2"><div class="timerDisplay2">5:00</div></div></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFive"><img src="img/ForwardButton.png" style="cursor:pointer"></button></button></div></div>';
var page5 = '<div class="col-lg-12 col-xs-12"><div class="row"><div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 timerDisplay countdown"><button class="btn btn-block btn-success timerToggle">Go</button></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFour"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSix"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page6 = '<div class="col-lg-12 col-xs-12"><h1 class="topSpace">Put Up Post-Its!</h1><div class="row bottomBar3"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFive"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSeven"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page7 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Discuss Ideas:</h3><h4 class="ingredients">&#149 Go one by one<br />&#149 Explain each thought<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSix"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageEight"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page8 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Group Common Ideas</h3><h4 class="ingredients">&#149 Group by type<br />&#149 i.e. location, theme<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSeven"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" id="return" class="btn btn-block btn-success showPageNine">Restart</button></div></div></div>';
var page1Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Three-In-One Brainstorm</h2><h3 class="centerText">Ingredients:</h3><h4 class="ingredients">&#149 Five people, five places, and five functions <br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success openPageTwoThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div>';
var page2Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Let\'s Get Started!</h2><h3 class="centerText">Basic Rules:</h3><h4 class="ingredients">&#149 focus on quantity<br />&#149 withhold criticism<br />&#149 welcome unusual ideas<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageOneThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageThreeThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div>';
var page3Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">The next few slides will ask you to input various ideas</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageTwoThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFourThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div>';
var page4Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Input 5 \'who\' ideas:</h2><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="who" class="form-control inputSpace" id="who1" placeholder="who"><input type="who" class="form-control inputSpace" id="who2" placeholder="who"><input type="who" class="form-control inputSpace" id="who3" placeholder="who"><input type="who" class="form-control inputSpace" id="who4" placeholder="who"><input type="who" class="form-control inputSpace" id="who5" placeholder="who"></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageThreeThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFiveThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page5Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Input 5 \'where\' ideas:</h2><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="what" class="form-control inputSpace" id="what1" placeholder="what"><input type="what" class="form-control inputSpace" id="what2" placeholder="what"><input type="what" class="form-control inputSpace" id="what3" placeholder="what"><input type="what" class="form-control inputSpace" id="what4" placeholder="what"><input type="what" class="form-control inputSpace" id="what5" placeholder="what"></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFourThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSixThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page6Three = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">5 functions of the product?</h3><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="function" class="form-control inputSpace" id="function1" placeholder="function.."><input type="function" class="form-control inputSpace" id="function2" placeholder="function.."><input type="function" class="form-control inputSpace" id="function3" placeholder="function.."><input type="function" class="form-control inputSpace" id="function4" placeholder="function.."><input type="function" class="form-control inputSpace" id="function5" placeholder="function.."></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFiveThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSevenThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page7Three = '<div class="col-lg-12 col-xs-12"><h3 style="margin-bottom: 30px;" class="topSpace">Brainstorm Topics</h3><div id="output"><h4 class="randomOutput">Who: Bob</h4><h4 class="randomOutput">What: Shopping</h4><h4 class="randomOutput">Function: streamlining shopping lists</h4></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSixThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageEightThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page8Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Now, please have each person draw something for this combination! You will have a timer to use on the next slide.</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSevenThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageNineThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div>';
var page9Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Draw Ideas</h2><div id="output"></div><h4 class="setTime">Set Time</h4><div class="row"><div class="col-xs-1 col-xs-offset-3 col-lg-1 col-lg-offset-4 timerSetter"><div class="adjustButtons"><div class="adjustButton"><button class="btn btn-info upButton">&#8593</button></div><div class="adjustButton"><button class="btn btn-info downButton">&#8595</button></div></div></div><div class="col-xs-6 col-lg-2"><div class="timerDisplay2">5:00</div></div></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageEightThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageTenThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></button></div></div>';
var page10Three = '<div class="col-lg-12 col-xs-12"><div class="row"><div style="margin-top: 30px; margin-left: 30px;" id="output"></div><div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 timerDisplay countdown"><button class="btn btn-block btn-success timerToggle">Go</button></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageNineThree"><img src="img/BackButton.png" style="cursor:pointer"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageElevenThree"><img src="img/ForwardButton.png" style="cursor:pointer"></button></div></div></div>';
var page11Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Would you like to do another combination?</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="button" class="btn btn-block btn-danger showPageSevenThree">Yes</button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" class="btn btn-block btn-success showPageTwelveThree">No</button></div></div>';
var page12Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">You\'re done!</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"></div></div>';
var error = '<div class="col-lg-12 col-xs-12"><div style="margin: 30px;" class="panel panel-danger"><div class="panel-heading">Sorry! This page hasn\'t been built yet</div><div class="panel-body"><button type="button" id="return" class="btn btn-block btn-danger">Return</button></div></div></div>';

function updateTimer(){
	var minute = Math.floor(timerVal/60);
	var seconds = timerVal - (minute*60);
	var secondsTens = Math.floor(seconds/10);
	var secondsOnes = seconds-secondsTens*10
	
	$(".timerDisplay2").html(minute + ":" + secondsTens + secondsOnes);
}

function displayError(){
	$(".displayWindow").html(error);
	$("#return").on("click", function() {
		displayOpener();
	});
}

function displayOpener(){
	$(".displayWindow").html(opener);
	$("#postIt").on("click", function() {
		displayPageOne();
	});
	$("#BBB").on("click", function(){
	    displayError();
	});
	$("#threeinone").on("click", function(){
	    displayPageOneThree();
	});
	$("#snake").on("click", function(){
	    displayError();
	});
}

function displayPageOneThree(){
	$(".displayWindow").html(page1Three).slideDown(1000);
	$(".openPageTwoThree").on("click", function(){
		displayPageTwoThree();
	});
}

function displayPageTwoThree(){
	$(".displayWindow").html(page2Three).slideDown(1000);
	$(".showPageOneThree").on("click", function(){
		displayPageOneThree();
	});
	$(".showPageThreeThree").on("click", function(){
		displayPageThreeThree();
	});
}

function displayPageThreeThree(){
	$(".displayWindow").html(page3Three).slideDown(1000);
	$(".showPageTwoThree").on("click", function(){
		displayPageTwoThree();
	});
	$(".showPageFourThree").on("click", function(){
		displayPageFourThree();
	});
}

function displayPageFourThree(){
	$(".displayWindow").html(page4Three).slideDown(1000);


	$(".showPageThreeThree").on("click", function(){
		displayPageThreeThree();
	});
	$(".showPageFiveThree").on("click", function(){
		var list = new Array();
		$("input[type=who]").each(function() {
   			console.log('hi');
   			list.push($(this).val());
		});

		whoArray = list;
		displayPageFiveThree();
	});
}

function displayPageFiveThree(){
	$(".displayWindow").html(page5Three).slideDown(1000);
	$(".showPageFourThree").on("click", function(){
		displayPageFourThree();

	});
	$(".showPageSixThree").on("click", function(){
		var list = new Array();
		$("input[type=what]").each(function() {
   			list.push($(this).val());
		});

		whatArray = list;
		displayPageSixThree();
	});
}

function displayPageSixThree(){
	$(".displayWindow").html(page6Three).slideDown(1000);
	$(".showPageFiveThree").on("click", function(){
		displayPageFiveThree();
	});
	$(".showPageSevenThree").on("click", function(){
		var list = new Array();
		$("input[type=function]").each(function() {
   			list.push($(this).val());
		});

		functionArray = list;
		displayPageSevenThree();
	});
}

function displayRandomOutput(){
	var output = '<h4 class="randomOutput">Who: ' + currentWho + '</h4><h4 class="randomOutput">Where: ' + currentWhat + '</h4><h4 class="randomOutput">Function: ' + currentFunction +'</h4>';
	$("#output").html(output);
}

function displayPageSevenThree(){
	$(".displayWindow").html(page7Three).slideDown(1000);

	currentWho = whoArray[Math.floor(Math.random()*whoArray.length)];
	currentWhat = whatArray[Math.floor(Math.random()*whatArray.length)];
	currentFunction = functionArray[Math.floor(Math.random()*functionArray.length)];
	displayRandomOutput();

	$(".showPageSixThree").on("click", function(){
		displayPageSixThree();
	});
	$(".showPageEightThree").on("click", function(){
		displayPageEightThree();
	});
}

function displayPageEightThree(){
	$(".displayWindow").html(page8Three).slideDown(1000);
	$(".showPageSevenThree").on("click", function(){
		displayPageSevenThree();
	});
	$(".showPageNineThree").on("click", function(){
		displayPageNineThree();
	});
}

function displayPageNineThree(){
	$(".displayWindow").html(page9Three).slideDown(1000);
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
	$(".showPageEightThree").on("click", function(){
		displayPageEightThree();
	});
	$(".showPageTenThree").on("click", function(){
		displayPageTenThree();
	});
}

function displayPageTenThree(){
	$(".displayWindow").html(page10Three).slideDown(1000);

	//$(".showPageElevenThree").hide();

    countdownTime = timerVal;
    updateCountdown();
    displayRandomOutput();
    intervalID = setInterval(function(){
        if(countdownTime == 0){
            clearInterval(intervalID);
            //$(".showPageElevenThree").show();
        } else {
            countdownTime--;
        }
        updateCountdown();
    }, 1000)

	$(".showPageNineThree").on("click", function(){
		displayPageNineThree();
	});
	$(".showPageElevenThree").on("click", function(){
		displayPageElevenThree();
	});
}

function displayPageElevenThree(){
	$(".displayWindow").html(page11Three).slideDown(1000);
	$(".showPageSevenThree").on("click", function(){
		displayPageSevenThree();
	});
	$(".showPageTwelveThree").on("click", function(){
		displayOpener();
	});
}

function displayPageTwelveThree(){
	$(".displayWindow").html(page12Three).slideDown(1000);
	$(".showPageTwelveThree").on("click", function(){
		displayPageTwelveThree();
	});
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
	//$(".showPageSix").hide();

    countdownTime = timerVal;
    updateCountdown();
    intervalID = setInterval(function(){
        if(countdownTime == 0){
            clearInterval(intervalID);
            //$(".showPageSix").show();
        } else {
            countdownTime--;
        }
        updateCountdown();
    }, 1000)


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
		displayOpener();
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



