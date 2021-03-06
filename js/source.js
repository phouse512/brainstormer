function preOpeningPage(){
	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".restartButton").off("click");
	$(".pageContent").off("click");
	$(".backButton").hide();
	$(".nextButton").hide();
	$(".restartButton").hide();
	var page = $("<div class='pageContent'>");
	page.append("<h2>Welcome to the Brainstormer! Is this your first time?</h2>");

	page.append("<div class='firstPage'></div>");
	var tlist = page.find(".firstPage");
	//tlist.append("<div class='technique'><img src='css/img/BackButton.png' id='No' class='techniqueImg'><div class='techniqueDesc'><p>No</p></div></div>");
	//tlist.append("<div class='technique'><img src='css/img/ForwardButton.png' id='Yes' class='techniqueImg'><div class='techniqueDesc'><p>Yes</p></div></div>");
	//page.append("<button class='btn btn-success randomButton' id = 'Yes'>Yes</button>");
	//page.append("<button class='btn btn-success randomButton' id = 'No'>No</button>");
	tlist.append("<div class='techniqueHomeLogo'></div>");
	tlist.append("<div class='techniqueHome'><button class='btn btn-success homeButton' id = 'Yes'>Yes</button><div class='techniqueDesc'></div></div>");
	tlist.append("<div class='techniqueHome'><button class='btn btn-success homeButton' id = 'No'>No</button><div class='techniqueDesc'></div></div>");
	$(".pageContent").html(page.html());

	$("#Yes").on("click", function(){
		preOpeningPage2();
	});
	$("#No").on("click", function(){
		openingPage();
	});
}

function preOpeningPage2(){
	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".restartButton").off("click");
	$(".pageContent").off("click");
	$(".backButton").hide();
	$(".nextButton").hide();
	$(".restartButton").hide();
	var page = $("<div class='pageContent'>");
	page.append("<div class = 'homeLayout' <p>This app will help coach you through facilitating a group brainstorm. Do not be nervous, you can do this, and we are here to help you every step of the way.</p><br><p>On the following screen, there are two brainstorming methods you can choose from.</p><h3>Post-It Notes:</h3><br><p>This method is a classic brainstorm approach that combines quick individual idea generation with group discussion. You will find that individuals will come up with similar ideas for the problem. After you discuss the ideas as a group, you can cluster these common thoughts and keep refining your ideas to help solve your problem.</p><br><h3>Brute Think: </h3><br><p>This method allows you to reframe a problem by forcing connections with a random noun. The app will prompt you with a random word, and individually everyone will come up with ideas that connect the random word with the problem. After the individual ideas are shared, you will hopefully have discovered a new idea or way to solve your problem!</p><br><p>The app will coach you through either method step by step, and you will be amazed at how effective these tools can be. Good luck! </p></h3></div>");
	page.append("<div class='techniqueHome'><button class='btn btn-success homeButton' id = 'Ok'>Ok</button><div class='techniqueDesc'></div></div>");
	page.append("<div class='firstPage'></div>");
	var tlist = page.find(".firstPage");
	$(".pageContent").html(page.html());
	$("#Ok").on("click", function(){
	openingPage();
	});

}

function openingPage(){
	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".restartButton").off("click");
	$(".pageContent").off("click");
	$(".backButton").hide();
	$(".nextButton").hide();
	$(".restartButton").hide();



	var page = $("<div class='pageContent'>");
	page.append("<h2>Welcome!</h2>");
	page.append("<div class='techniqueList'></div>");
	var tlist = page.find(".techniqueList");
	tlist.append("<div class='technique'><img src='css/img/PostIt.png' id='postIt' class='techniqueImg'><div class='techniqueDesc'><p>Generate lots of ideas</p><p>Post-It</p></div></div>");
	tlist.append("<div class='technique'><img src='css/img/3in1.png' id='threeinone' class='techniqueImg'><div class='techniqueDesc'>Create new product concepts - 3 X 1</div></div>");
	tlist.append("<div class='technique'><img src='css/img/brute think.png' id='bruteThink' class='techniqueImg'><div class='techniqueDesc'><p>Reframe your problem</p><p>Brute Think</p></div></div>");

	$(".pageContent").html(page.html());
	$("#threeinone").parent().hide();
	$("#postIt").on("click", function(){
		postIt();
	});
	$("#threeinone").on("click", function(){
		threeInOne();
	});
	$("#bruteThink").on("click", function(){
		bruteThink();
	});
}

function dynamicHeight(){
	console.log("Dynamic Height");
	height = $(document).height();
	console.log(height);
	if(height > 750){
		$("ul").css("line-height", "100px");
	} else if (height < 750 & height > 400 ) {
		$("ul").css("line-height", "60px");
	} else {
		$("ul").css("line-height", "40px");
	}
	if($(".pageContent").height() > height){
		$("ul").css("line-height", "25px");
		$("ul").css("font-size", "1em");
	}
}

function postIt(){
	var timerVal = 90;
	var countdownTime;
	var pages = [];
	var page_counter = 0;
	var timerIntervalID;
	var backIntervalID;
	var SET_TIMER_PAGE = 3;
	var COUNTDOWN_PAGE = 4;
	var RESTART_PAGE = 3; //the page that you jump to when you hit restart

	pages.push(generateStandardPage("Post-It Brainstorm", "Ingredients&#58", ["post-it notes", "writing utensils", "3+ people", "open wall", "brainstorming topic"]));
	pages.push(generateStandardPage("Let's Get Started!", "Basic Rules&#58", ["focus on quantity", "withhold criticism", "welcome unusual ideas"]));
	pages.push(generateStandardPage("Brief the group on the problem you would like to solve!"));
	pages.push(generateSetTimerPage("Have everyone individually write ideas on post-its; One idea per post-it. Set timer from 1 to 5 minutes.", timerVal, 
		function(){
			updateTimer(timerVal);
		},
		function(){
			updateTimer(timerVal);
			clearInterval(timerIntervalID);
		}
	));
	pages.push(generateCountdownPage("",timerVal,
		function(){
			countdownTime = timerVal;
			updateTimer(countdownTime);
			timerIntervalID = setInterval(function(){
		        if(countdownTime == 0){
		            clearInterval(timerIntervalID);
		            if(page_counter == COUNTDOWN_PAGE){
		        	    backIntervalID = setInterval(bgFlashing, 500);
		        	}
		        } else {
		            countdownTime--;
		        }
		        updateTimer(countdownTime);
		    }, 1000);
		},
		function(){
			updateTimer(countdownTime);
		}));
	pages.push(generateStandardPage("Put Up Post-Its! Everyone please place them on the wall and gather around to discuss <div class = 'postItPic'>"));
	pages.push(generateStandardPage("Discuss Ideas&#58", "", ["Go one by one", "Explain each thought", "keep it brief"]));
	pages.push(generateStandardPage("Group Common Ideas", "", ["Group by type", "i.e. location, theme <div class = 'postItPic2'>"]));
	pages.push(generateFinalPage("Now Focus on the best ideas or grouped themes and reframe your problem as a team", "Do another iteration and expand on your new ideas?", "File away your ideas and return to the main menu?"));


	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".backButton").show();
	$(".nextButton").show();
	$(".pageContent").off("click");
	$(".backButton").on("click", function(){
		resetBG(backIntervalID);
		if(page_counter > 0){
			page_counter--;
		} else {
			clearInterval(timerIntervalID);
			openingPage();
			return;
		}
		if(page_counter == pages.length-2){
			$(".nextButton").show();
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["backFn"]();
	});
	$(".nextButton").on("click", function(){
		resetBG(backIntervalID);
		page_counter++;
		if(page_counter >= pages.length){
			clearInterval(timerIntervalID);
			openingPage();
			return;
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["nextFn"]();
		if(page_counter == pages.length-1){
			$(".nextButton").hide();
		}
	});
	$(".pageContent").on("click", ".upButton", function(){
		if(timerVal < 300){
            timerVal += 30;
        }
        updateTimer(timerVal);
	});
	$(".pageContent").on("click", ".downButton", function(){
		if(timerVal > 30){
            timerVal -= 30;
        }
        updateTimer(timerVal);
	});
	$(".pageContent").on("click", ".repeatButton", function(){
		page_counter = RESTART_PAGE;
		clearInterval(timerIntervalID);
		resetBG(backIntervalID);
		$(".nextButton").show();
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["nextFn"]();
	});
	$(".pageContent").on("click", ".exitButton", function(){
		clearInterval(timerIntervalID);
		resetBG(backIntervalID);
		openingPage();
	});

	$(".pageContent").html(pages[page_counter]["html"].html());
	pages[page_counter]["nextFn"]();
}

function threeInOne(){
	var timerVal = 90;
	var countdownTime;
	var pages = [];
	var page_counter = 0;
	var timerIntervalID;
	var backIntervalID;
	var SET_TIMER_PAGE = 7;
	var COUNTDOWN_PAGE = 8;
	var RESTART_PAGE = 2; //the page that you jump to when you hit restart
	var WHO_PAGE = 3;
	var WHAT_PAGE = 4;
	var WHERE_PAGE = 5;
	var RANDOM_PAGE = 6;

	var who_array = [];
	var where_array = [];
	var what_array = [];

	var currentWho;
	var currentWhat;
	var currentWhere;

	pages.push(generateStandardPage("Three-In-One Brainstorm", "Ingredients&#58", ["Paper and pens", "3-5 people", "Open wall", "Overarching product idea you want to expand on"]));
	pages.push(generateStandardPage("Let's Get Started!", "Basic Rules&#58", ["Focus on quantity", "Withhold criticism", "Welcome unusual ideas"]));
	pages.push(generateStandardPage("The next few slides will ask you to input various ideas"));
	pages.push(generateInputPage("Who will use this product?", "who"));
	pages.push(generateInputPage("What functions will this product perform?", "what"));
	pages.push(generateInputPage("Where will this product be used?", "where"));
	pages.push(generateStandardPage("Use this combination to generate concepts around your overarching product idea", "", []));
	pages.push(generateSetTimerPage("Have each person draw a product concept for this combination!", timerVal));
	pages.push(generateCountdownPage([], timerVal));
	pages.push(generateStandardPage("Have everyone quickly discuss their concept individually and then place them on the wall"));

	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".restartButton").off("click");
	$(".restartButton").hide();
	$(".backButton").show();
	$(".nextButton").show();
	$(".pageContent").off("click");
	$(".restartButton").on("click", function(){
		page_counter = RESTART_PAGE;
		clearInterval(timerIntervalID);
		$(".restartButton").hide();
		$(".pageContent").html(pages[page_counter]["html"].html());
	});
	$(".backButton").on("click", function(){
		resetBG(backIntervalID);
		if(page_counter > 0){
			if(page_counter == pages.length-1){
				$(".restartButton").hide();
			}
			if(page_counter == WHO_PAGE){
				for(i = 1; i <= 5; i++){
					pages[page_counter]["html"].find("#who" + i).val($("#who" + i).val());
				}
			}
			else if(page_counter == WHAT_PAGE){
				for(i = 1; i <= 5; i++){
					pages[page_counter]["html"].find("#what" + i).val($("#what" + i).val());
				}
			}
			else if(page_counter == WHERE_PAGE){
				for(i = 1; i <= 5; i++){
					pages[page_counter]["html"].find("#where" + i).val($("#where" + i).val());
				}
			}
			page_counter--;
		} else {
			clearInterval(timerIntervalID);
			openingPage();
			return;
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		if(page_counter == SET_TIMER_PAGE){
			updateTimer(timerVal);
			clearInterval(timerIntervalID);
		}
		if(page_counter == COUNTDOWN_PAGE){
			updateTimer(countdownTime);
		}
	});
	$(".nextButton").on("click", function(){
		resetBG(backIntervalID);
		if(page_counter == WHO_PAGE){
			for(i = 1; i <= 5; i++){
				pages[page_counter]["html"].find("#who" + i).val($("#who" + i).val());
			}
		}
		else if(page_counter == WHAT_PAGE){
			for(i = 1; i <= 5; i++){
				pages[page_counter]["html"].find("#what" + i).val($("#what" + i).val());
			}
		}
		else if(page_counter == WHERE_PAGE){
			for(i = 1; i <= 5; i++){
				pages[page_counter]["html"].find("#where" + i).val($("#where" + i).val());
			}
		}
		page_counter++;
		if(page_counter >= pages.length){
			clearInterval(timerIntervalID);
			openingPage();
			return;
		} else if(page_counter == RANDOM_PAGE){
			who_array = [];
			where_array = [];
			what_array = [];
			pages[WHO_PAGE]["html"].find("input[type=who]").each(function(){
				var value = $(this).val();
				if(value.length > 0){
					who_array.push(value);
				}
			});
			pages[WHAT_PAGE]["html"].find("input[type=what]").each(function(){
				var value = $(this).val();
				if(value.length > 0){
					what_array.push(value);
				}
			});
			pages[WHERE_PAGE]["html"].find("input[type=where]").each(function(){
				var value = $(this).val();
				if(value.length > 0){
					where_array.push(value);
				}
			});
			currentWho = who_array[Math.floor(Math.random()*who_array.length)];
			currentWhat = what_array[Math.floor(Math.random()*what_array.length)];
			currentWhere = where_array[Math.floor(Math.random()*where_array.length)];
			pages[RANDOM_PAGE] = generateStandardPage("Use this combination to generate concepts around your overarching product idea", "", ["Who&#58 " + currentWho, "What&#58 " + currentWhat, "Where&#58 " + currentWhere]);
			pages[COUNTDOWN_PAGE] = generateCountdownPage(["Who&#58 " + currentWho, "What&#58 " + currentWhat, "Where&#58 " + currentWhere], timerVal);
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		if(page_counter == SET_TIMER_PAGE){
			updateTimer(timerVal);
		}
		if(page_counter == COUNTDOWN_PAGE){
			countdownTime = timerVal;
			updateTimer(countdownTime);
			timerIntervalID = setInterval(function(){
		        if(countdownTime == 0){
		            clearInterval(timerIntervalID);if(page_counter == COUNTDOWN_PAGE){
		        	    backIntervalID = setInterval(bgFlashing, 500);
		        	}
		        } else {
		            countdownTime--;
		        }
		        updateTimer(countdownTime);
		    }, 1000);
		}
		if(page_counter == pages.length-1){
			$(".restartButton").show();
		}
	});
	$(".pageContent").on("click", ".upButton", function(){
		if(timerVal < 570){
            timerVal += 30;
        }
        updateTimer(timerVal);
	});
	$(".pageContent").on("click", ".downButton", function(){
		if(timerVal > 30){
            timerVal -= 30;
        }
        updateTimer(timerVal);
	});

	$(".pageContent").html(pages[page_counter]["html"].html());
}

function bruteThink(){
	var timerVal = 300;
	var countdownTime;
	var pages = [];
	var page_counter = 0;

	var timerIntervalID;
	var backIntervalID;
	var SET_TIMER_PAGE = 5;
	var COUNTDOWN_PAGE = 6;
	var RESTART_PAGE = 2; //the page that you jump to when you hit restart
	var RANDOM_PAGE = 2;
	var currentWord = ""
	var text_file = "brutethink-nouns.txt";
	var dictionary = [];
	var pagesRequiringUpdates = [3, 5]; //contains the index of every page that has currentWord in it, so that we can update them when currentWord changes

	var query = "https://www.google.com/search?q="+currentWord+"&rlz=1C1LENN_enUS500US500&espv=210&es_sm=122&source=lnms&tbm=isch&sa=X&ei=Yl-ZUtjCLoj6oASM8YH4CA&ved=0CAkQ_AUoAQ&biw=1364&bih=706";

	pages.push(generateStandardPage("Brute Think", "Ingredients&#58", ["paper and pens", "1-5 people", "a problem you want to reframe stated in the form of a question,","for example:","How can I increase traffic to my website?","How do I improve relationship with my boss?","How can I get my kids to eat vegetables?"]));
	pages.push(generateStandardPage("Let's Get Started!", "Basic Rules&#58", ["focus on quantity", "withhold criticism", "welcome unusual ideas"]));
	pages.push(generateRandomWordPage("Pick a Random Word!",
		function(){
			if(currentWord.length <= 0){ //if word hasn't been set
				currentWord = dictionary[Math.floor(Math.random()*dictionary.length)];
				updatePages();
				$(".randomWord").html(currentWord);
			}
		}));
	pages.push(generateStandardPage("<p>Write down a list of things that are associated with <span class = 'randomWordColor'>" + currentWord + "</span>.</p> <p>What are its characteristics?</p> <p>What does it do?</p> <p>What can you do with it?</p>"));
	pages.push(generateStandardPage("Force connections between your problem and the list you just made for 5 minutes. Press next to begin."));
	/*pages.push(generateSetTimerPage("List your ideas", timerVal,
		function(){
			updateTimer(timerVal);
			$(".upButton").hide();
			$(".downButton").hide();
		},
		function(){
			updateTimer(timerVal);
			clearInterval(timerIntervalID);
			$(".upButton").hide();
			$(".downButton").hide();
		}));*/
	pages.push(generateCountdownPage("Need a hint? Draw picture of <span class='randomWordColor'>" + currentWord + "</span> to force connections", timerVal, 
		function(){
			clearInterval(timerIntervalID);
			$(".timerHeader").hide();
			countdownTime = timerVal;
			updateTimer(countdownTime);
			timerIntervalID = setInterval(function(){
		        if(countdownTime == 0){
		            clearInterval(timerIntervalID);
		            if(page_counter == COUNTDOWN_PAGE){
		        	    backIntervalID = setInterval(bgFlashing, 500);
		        	}
		        } else {
		            countdownTime--;
		            if(countdownTime == 180){
		            	$(".timerHeader").show();
		            }
		        }
		        updateTimer(countdownTime);
		    }, 1000);
		},
		function(){
			updateTimer(countdownTime);
			if(countdownTime <= 180){
				$(".timerHeader").show();
			} else {
				$(".timerHeader").hide();
			}
		}));
	pages.push(generateStandardPage("Have each person share how their ideas might solve the original problem."));
	pages.push(generateFinalPage("By forcing connections between these two things, you can get a different perspective.", "Would you like to try again with a different word?", "Return to main menu?"));
	readFile(text_file, function(data){
		dictionary = storeDictionary(data);
	});

	$(".backButton").off("click");
	$(".nextButton").off("click");
	$(".backButton").show();
	$(".nextButton").show();
	$(".pageContent").off("click");
	$(".backButton").on("click", function(){
		resetBG(backIntervalID);
		if(page_counter > 0){
			page_counter--;
		} else {
			clearInterval(timerIntervalID);
			openingPage();
			return;
		}
		if(page_counter == pages.length-2){
			$(".nextButton").show();
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["backFn"]();
	});
	$(".nextButton").on("click", function(){
		resetBG(backIntervalID);
		page_counter++;
		if(page_counter >= pages.length){
			clearInterval(timerIntervalID);
			openingPage();
			return;
		}
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["nextFn"]();
		if(page_counter == pages.length-1){
			$(".nextButton").hide();
		}
	});
	$(".pageContent").on("click", ".upButton", function(){
		if(timerVal < 570){
            timerVal += 30;
        }
        updateTimer(timerVal);
	});
	$(".pageContent").on("click", ".downButton", function(){
		if(timerVal > 30){
            timerVal -= 30;
        }
        updateTimer(timerVal);
	});
	$(".pageContent").on("click", ".randomButton", function(){
		currentWord = dictionary[Math.floor(Math.random()*dictionary.length)];
		updatePages();
		$(".randomWord").html(currentWord);
	});
	$(".pageContent").on("click", ".repeatButton", function(){
		page_counter = RESTART_PAGE;
		clearInterval(timerIntervalID);
		resetBG(backIntervalID);
		$(".nextButton").show();
		$(".pageContent").html(pages[page_counter]["html"].html());
		pages[page_counter]["nextFn"]();
	});
	$(".pageContent").on("click", ".exitButton", function(){
		page_counter = RESTART_PAGE;
		clearInterval(timerIntervalID);
		resetBG(backIntervalID);
		openingPage();
	});

	$(".pageContent").html(pages[page_counter]["html"].html());
	pages[page_counter]["nextFn"]();

	function updatePages(){
		pages[RANDOM_PAGE]["html"].find(".randomWord").html(currentWord);
		for(i = 0; i < pagesRequiringUpdates.length; i++){
			pages[pagesRequiringUpdates[i]]["html"].find("span").each(function(){
				$(this).html(currentWord);
			});
		}
	}
}

function generateSetTimerPage(heading, defaultTime, nextAction, backAction){
	var page_obj = {};
	var page = $("<div class='pageContent'>");
	page.append("<div class='timerHeader'></div>");
	page.append("<div class='timerContainer'></div>");
	if(heading){
		if(heading instanceof Array){
			var listHTML = "<ul>";
			for(i = 0; i < heading.length; i++){
				listHTML += "<li>" + heading[i] + "</li>";
			}
			listHTML += "</ul>";
			page.find(".timerHeader").html("<h2>" + listHTML + "</h2>");
		} else {
			page.find(".timerHeader").html("<h2>" + heading + "</h2>");
		}
	}
	if(defaultTime){
		var minute = Math.floor(defaultTime/60);
		var seconds = defaultTime - (minute*60);
		var secondsTens = Math.floor(seconds/10);
		var secondsOnes = seconds-secondsTens*10;

		page.find(".timerContainer").html("<div class='timerDisplay'><h4></h4><div class='timerButtons'><button class='btn btn-info iconButton upButton'></button><button class='btn btn-info iconButton downButton'></button></div><div class='clock'>" + minute + " : " + secondsTens + secondsOnes + "</div></div>");
	}
	page_obj["html"] = page;
	if(nextAction){
		page_obj["nextFn"] = nextAction;
	} else {
		page_obj["nextFn"] = function(){};
	}
	if(backAction){
		page_obj["backFn"] = backAction;
	} else {
		page_obj["backFn"] = function(){};
	}
	return page_obj;
}

function generateCountdownPage(heading, defaultTime, nextAction, backAction){
	var page_obj = {};
	var page = $("<div class='pageContent'>");
	page.append("<div class='timerHeader'></div>");
	page.append("<div class='timerContainer'></div>");
	if(heading){
		if(heading instanceof Array){
			var listHTML = "<ul>";
			for(i = 0; i < heading.length; i++){
				listHTML += "<li>" + heading[i] + "</li>";
			}
			listHTML += "</ul>";
			page.find(".timerHeader").html("<h2>" + listHTML + "</h2>");
		} else {
			page.find(".timerHeader").html("<h2>" + heading + "</h2>");
		}
	}
	if(defaultTime){
		var minute = Math.floor(defaultTime/60);
		var seconds = defaultTime - (minute*60);
		var secondsTens = Math.floor(seconds/10);
		var secondsOnes = seconds-secondsTens*10;

		page.find(".timerContainer").html("<div class='timerDisplay'><div class='clock'>" + minute + " : " + secondsTens + secondsOnes + "</div></div>");
	}
	page_obj["html"] = page;
	if(nextAction){
		page_obj["nextFn"] = nextAction;
	} else {
		page_obj["nextFn"] = function(){};
	}
	if(backAction){
		page_obj["backFn"] = backAction;
	} else {
		page_obj["backFn"] = function(){};
	}
	return page_obj;
}

function generateFinalPage(heading, repeatText, exitText, nextAction, backAction){
	var page_obj = {};
	var repeat = "";
	var exit = "";
	if(repeatText) repeat = repeatText;
	if(exitText) exit = exitText;
	var page = $("<div class='pageContent'><div class='heading'>");
	if(heading){
		page.find('.heading').append("<h2>" + heading + "</h2>");
	}
	page.append("<div class='finalPageButtons'></div>");
	var buttons = page.find(".finalPageButtons");
	buttons.append("<button class='btn btn-success finalPageButton repeatButton'>" + repeat + "</button>");
	buttons.append("<button class='btn btn-success finalPageButton exitButton'>" + exit + "</button>")
	page_obj["html"] = page;
	page_obj["nextFn"] = function(){
		if(nextAction) nextAction();
		dynamicHeight();
	}
	page_obj["backFn"] = function(){
		if(backAction) backAction();
		dynamicHeight();
	}
	return page_obj;
}

function generateStandardPage(h2, h3, listArray, nextAction, backAction){
	var page_obj = {};
	var page = $("<div class='pageContent'><div class='heading'>");
	if(h2){
		page.find('.heading').append("<h2>" + h2 + "</h2>");
	}
	if(h3){
		page.find('.heading').append("<h3>" + h3 + "</h3>");
	}
	if(listArray){
		var listHTML = "<ul>";
		for(i = 0; i < listArray.length; i++){
			listHTML += "<li>" + listArray[i] + "</li>";
		}
		listHTML += "</ul>";
		page.append(listHTML);
	}
	page_obj["html"] = page;
	page_obj["nextFn"] = function(){
		if(nextAction) nextAction();
		dynamicHeight();
	}
	page_obj["backFn"] = function(){
		if(backAction) backAction();
		dynamicHeight();
	}
	return page_obj;
}

function generateInputPage(prompt, placeholder, nextAction, backAction){
	var page_obj = {};
	var page = $("<div class='pageContent'>");
	if(prompt){
		page.append("<h2>" + prompt + "</h2>");
	}
	page.append("<div class='inputForm'></div>");
	var form = $(page).find(".inputForm");
	for(i = 1; i <= 5; i++){
		form.append("<input type=" + placeholder + " class='form-control inputSpace' id='" + placeholder + i + "' placeholder='" + placeholder + "'>");
	}
	page_obj["html"] = page;
	if(nextAction){
		page_obj["nextFn"] = nextAction;
	} else {
		page_obj["nextFn"] = function(){};
	}
	if(backAction){
		page_obj["backFn"] = backAction;
	} else {
		page_obj["backFn"] = function(){};
	}
	return page_obj;
}

function generateRandomWordPage(heading, nextAction, backAction){
	var page_obj = {};
	var page = $("<div class='pageContent'>");
	if(heading){
		page.append("<h2>" + heading + "</h2>");
	}
	page.append("<div class='randomWord'></div>");
	page.append("<button class='btn btn-success randomButton'>Pick Again!</button>");
	page_obj["html"] = page;
	if(nextAction){
		page_obj["nextFn"] = nextAction;
	} else {
		page_obj["nextFn"] = function(){};
	}
	if(backAction){
		page_obj["backFn"] = backAction;
	} else {
		page_obj["backFn"] = function(){};
	}
	return page_obj;
}

function updateTimer(timerVal){
	var minute = Math.floor(timerVal/60);
	var seconds = timerVal - (minute*60);
	var secondsTens = Math.floor(seconds/10);
	var secondsOnes = seconds-secondsTens*10
	
	$(".clock").html(minute + ":" + secondsTens + secondsOnes);
	console.log("update Timer");
}

function readFile(file, callback){
	$.ajax({
		url: file,
		type: 'GET',
		dataType: 'text',
		success: function(data, textStatus, xhr){
			callback(data);
		},
		error: function(xhr, textStatus, errorThrown){
			console.log(xhr + textStatus + errorThrown);
		}
	});
}

function storeDictionary(textData){
	return textData.split(" ");
}

function bgFlashing(){
	var colors = ["#FF8000","#fff"];

	var bodybgarrayno = Math.floor(Math.random() * colors.length);
    var selectedcolor = colors[bodybgarrayno];
    $("body").css("background-color",selectedcolor);
}

function resetBG(id){
	clearInterval(id);
	$("body").css("background-color", "#fff");
}




/*var timerVal = 90;

var whoArray = [];
var whatArray = [];
var functionArray = [];

var currentWho;
var currentWhat;
var currentFunction;

var opener = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Welcome</h2><div class="row"><div class="col-xs-6 col-lg-offset-4 col-xs-offset-4 col-sm-6"><div class="row"><div class="col-xs-4 col-lg-4"><img src="img/PostIt.png" id="postIt" class="" width="50" height="50" /></div><div class="col-xs-8 col-lg-8"><p>Post-Its</p></div></div><div style="margin-top: 20px" class="row"><div class="col-xs-4 col-lg-4"><img src="img/3in1.png" id="threeinone" class="" width="50" height="50" /></div><div class="col-xs-8 col-lg-8"><p>3 in 1</p></div></div></div></div></div>';
var page1 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Post-it Brainstorm</h2><h3 class="centerText">Ingredients:</h3><h4 class="ingredients">&#149 post-it notes<br />&#149 writing utensils <br />&#149 brainstorming topic <br /></h4><div class="row bottomBar"><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showHomePage"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success openPageTwo"><img src = "img/ForwardButton.png" style ="cursor:pointer" class="arrowButton"></button></div></div>';
var page2 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Let\'s Get Started!</h2><h3 class="centerText">Basic Rules:</h3><h4 class="ingredients">&#149 focus on quantity<br />&#149 withhold criticism<br />&#149 welcome unusual ideas<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageOne"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></button></div></div>';
var page3 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Brief the group on the problem you would like to solve!</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageTwo"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFour"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></button></div></div>';
var page4 = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Individually write ideas on post-its</h2><h4 class="setTime">Set Time</h4><div class="row"><div class="col-xs-1 col-xs-offset-3 col-lg-1 col-lg-offset-4 timerSetter"><div class="adjustButtons"><div class="adjustButton"><button class="btn btn-info upButton"><img src="img/Timer Up Button.png" style="cursor:pointer" class="arrowButton"></button></button></div><div class="adjustButton"><button class="btn btn-info downButton"><img src="img/Timer Down Button.png" style="cursor:pointer" class="arrowButton"></button></button></div></div></div><div class="col-xs-6 col-lg-2"><div class="timerDisplay2">5:00</div></div></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFive"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></button></div></div>';
var page5 = '<div class="col-lg-12 col-xs-12"><div class="row"><div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 timerDisplay countdown"><button class="btn btn-block btn-success timerToggle">Go</button></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFour"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSix"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page6 = '<div class="col-lg-12 col-xs-12"><h1 class="topSpace">Put Up Post-Its!</h1><div class="row bottomBar3"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFive"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSeven"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page7 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Discuss Ideas:</h3><h4 class="ingredients">&#149 Go one by one<br />&#149 Explain each thought<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSix"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageEight"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page8 = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">Group Common Ideas</h3><h4 class="ingredients">&#149 Group by type<br />&#149 i.e. location, theme<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSeven"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="button" id="return" class="btn btn-block btn-success showPageNine">Restart</button></div></div></div>';
var page1Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Three-In-One Brainstorm</h2><h3 class="centerText">Ingredients:</h3><h4 class="ingredients">&#149 Five people, five places, and five functions <br /></h4><div class="row bottomBar"><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showHomePage"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-6 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success openPageTwoThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div>';
var page2Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Let\'s Get Started!</h2><h3 class="centerText">Basic Rules:</h3><h4 class="ingredients">&#149 focus on quantity<br />&#149 withhold criticism<br />&#149 welcome unusual ideas<br /></h4><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageOneThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageThreeThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div>';
var page3Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">The next few slides will ask you to input various ideas</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageTwoThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFourThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div>';
var page4Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Input 5 \'who\' ideas:</h2><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="who" class="form-control inputSpace" id="who1" placeholder="who"><input type="who" class="form-control inputSpace" id="who2" placeholder="who"><input type="who" class="form-control inputSpace" id="who3" placeholder="who"><input type="who" class="form-control inputSpace" id="who4" placeholder="who"><input type="who" class="form-control inputSpace" id="who5" placeholder="who"></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageThreeThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageFiveThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page5Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Input 5 \'where\' ideas:</h2><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="what" class="form-control inputSpace" id="what1" placeholder="what"><input type="what" class="form-control inputSpace" id="what2" placeholder="what"><input type="what" class="form-control inputSpace" id="what3" placeholder="what"><input type="what" class="form-control inputSpace" id="what4" placeholder="what"><input type="what" class="form-control inputSpace" id="what5" placeholder="what"></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFourThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSixThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page6Three = '<div class="col-lg-12 col-xs-12"><h3 class="topSpace">5 functions of the product?</h3><div class="row"><div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1"><input type="function" class="form-control inputSpace" id="function1" placeholder="function.."><input type="function" class="form-control inputSpace" id="function2" placeholder="function.."><input type="function" class="form-control inputSpace" id="function3" placeholder="function.."><input type="function" class="form-control inputSpace" id="function4" placeholder="function.."><input type="function" class="form-control inputSpace" id="function5" placeholder="function.."></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageFiveThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageSevenThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page7Three = '<div class="col-lg-12 col-xs-12"><h3 style="margin-bottom: 30px;" class="topSpace">Brainstorm Topics</h3><div id="output"><h4 class="randomOutput">Who: Bob</h4><h4 class="randomOutput">What: Shopping</h4><h4 class="randomOutput">Function: streamlining shopping lists</h4></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSixThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageEightThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
var page8Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Now, please have each person draw something for this combination! You will have a timer to use on the next slide.</h2><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageSevenThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageNineThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div>';
var page9Three = '<div class="col-lg-12 col-xs-12"><h2 class="topSpace">Draw Ideas</h2><div id="output"></div><h4 class="setTime">Set Time</h4><div class="row"><div class="col-xs-1 col-xs-offset-3 col-lg-1 col-lg-offset-4 timerSetter"><div class="adjustButtons"><div class="adjustButton"><button class="btn btn-info upButton"><img src="img/Timer Up Button.png" style="cursor:pointer" class="arrowButton"></button></div><div class="adjustButton"><button class="btn btn-info downButton"><img src="img/Timer Down Button.png" style="cursor:pointer" class="arrowButton"></button></div></div></div><div class="col-xs-6 col-lg-2"><div class="timerDisplay2">5:00</div></div></div></div><div class="row bottomBar2"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageEightThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageTenThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></button></div></div>';
var page10Three = '<div class="col-lg-12 col-xs-12"><div class="row"><div style="margin-top: 30px; margin-left: 30px;" id="output"></div><div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 col-lg-4 col-lg-offset-4 timerDisplay countdown"><button class="btn btn-block btn-success timerToggle">Go</button></div></div><div class="row bottomBar"><div class="col-lg-2 col-xs-offset-1 col-xs-5"><button type="image" class="btn btn-block btn-danger showPageNineThree"><img src="img/BackButton.png" style="cursor:pointer" class="arrowButton"></button></div><div class="col-lg-2 col-lg-offset-9 col-xs-5  col-sm-4 col-sm-offset-6 col-md-3 col-md-offset-7"><button type="image" class="btn btn-block btn-success showPageElevenThree"><img src="img/ForwardButton.png" style="cursor:pointer" class="arrowButton"></button></div></div></div>';
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
	$("#threeinone").on("click", function(){
	    displayPageOneThree();
	});
}

function displayPageOneThree(){
	$(".displayWindow").html(page1Three).slideDown(1000);
	$(".openPageTwoThree").on("click", function(){
		displayPageTwoThree();
	});
	$(".showHomePage").on("click", function(){
		displayOpener();
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

	var i =0;
	$("input[type=who]").each(function(){
		if(typeof whoArray[i] == 'undefined'){
			i=i+1;
		} else {
			$(this).val(whoArray[i]);
			i = i+1;
		}
	});

	$(".showPageThreeThree").on("click", function(){
		displayPageThreeThree();
	});
	$(".showPageFiveThree").on("click", function(){
		var list = new Array();
		$("input[type=who]").each(function() {
   			if (!isBlank($(this).val())){
   				list.push($(this).val());
   			}
		});

		whoArray = list;
		displayPageFiveThree();
	});
}

function displayPageFiveThree(){
	$(".displayWindow").html(page5Three).slideDown(1000);

	var i = 0;
	$("input[type=what]").each(function(){
		if(typeof whatArray[i] == 'undefined'){
			i=i+1;
		} else {
			$(this).val(whatArray[i]);
			i = i+1;
		}
	});
	$(".showPageFourThree").on("click", function(){
		displayPageFourThree();

	});
	$(".showPageSixThree").on("click", function(){
		var list = new Array();
		$("input[type=what]").each(function() {
   			if (!isBlank($(this).val())){
   				list.push($(this).val());
   			}
		});

		whatArray = list;
		displayPageSixThree();
	});
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function displayPageSixThree(){
	$(".displayWindow").html(page6Three).slideDown(1000);
	var i =0;
	$("input[type=function]").each(function(){
		if(typeof functionArray[i] == 'undefined'){
			i=i+1;
		} else {
			$(this).val(functionArray[i]);
			i = i+1;
		}
	});

	$(".showPageFiveThree").on("click", function(){
		displayPageFiveThree();
	});
	$(".showPageSevenThree").on("click", function(){
		var list = new Array();
		$("input[type=function]").each(function() {
   			if (!isBlank($(this).val())){
   				list.push($(this).val());
   			}
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
		clearInterval(intervalID);
	});
	$(".showPageElevenThree").on("click", function(){
		displayPageElevenThree();
		clearInterval(intervalID);
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
		$(".showHomePage").on("click", function(){
		displayOpener();
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
		clearInterval(intervalID);
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

*/

