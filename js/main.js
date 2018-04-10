var currentYear = 1;
var currentSeason = 1;
var currentField = 0;
var ambientWeather = 1;
var ritualWeather = 1;
var updatingWeather = 1;
var cField = 0;
var seasonString = "Spring";
var lastguy = 45;
var tImg = 0;
var lastTip = 45;
var didyouwin = false;
//1 = Rain, 2 = Sun, 3 = Wind, 4 = Clouds

//plant type, season, weather
//season: 1 = spring, 2 = summer, 3 = fall, 4 = winter
//weather: 1 = Rain, 2 = Sun, 3 = Wind, 4 = Cloudy



var tulipMods = [
[0,0,0,0,0],
[0,2,1,-1,-1],
[0,1,2,0,1],
[0,-1,1,-1,1],
[0,-2,-1,-2,-2]
];

var treeMods = [
[0,0,0,0,0],
[0,1,1,0,0],
[0,1,1,1,-1],
[0,1,2,-2,0],
[0,-1,-1,-2,-1]
];


var evergreenMods = [
[0,0,0,0,0],
[0,0,1,0,0],
[0,1,1,0,1],
[0,-1,1,0,1],
[0,-1,0,-1,-1]
];
var plantMods = [tulipMods,treeMods,evergreenMods];

var plantGrowth = [1,1,1]; //0 = tulip, 1 = tree, 2 = evergreen

var youGrew = [];

function sunTime(){
	switch(currentSeason){
		case 1:
			logFunc("The sun shines.");
			break;
		case 2:
			logFunc("The sun shines brightly.");
			break;
		case 3:
			logFunc("Falling leaves glint in the sunlight.");
			break;
		case 4:
			logFunc("The sunlight reflects off fresh snow.");
			break;
		default:
			alert("???");
			break;
	}
}

function rainTime(){
	switch(currentSeason){
		case 1:
			logFunc("Torrential downpours.");
			break;
		case 2:
			logFunc("Sporadic light showers.");
			break;
		case 3:
			logFunc("The rain pours down.");
			break;
		case 4:
			logFunc("It snows heavily.");
			break;
		default:
			alert("???");
			break;
	}
}

function windTime(){
	switch(currentSeason){
		case 1:
			logFunc("The wind howls.");
			break;
		case 2:
			logFunc("A gentle breeze blows.");
			break;
		case 3:
			logFunc("Leaves are tossed about by fierce gusts.");
			break;
		case 4:
			logFunc("A winter storm rages.");
			break;
		default:
			alert("???");
			break;
	}
}

function cloudTime(){
	switch(currentSeason){
		case 1:
			logFunc("Clouds cover the sky.");
			break;
		case 2:
			logFunc("The sun pokes through the clouds.");
			break;
		case 3:
			logFunc("The clouds blot out the sun.");
			break;
		case 4:
			logFunc("Snow begins to fall.");
			break;
		default:
			alert("???");
			break;
	}
}

function updateInfo(){
	currentSeason += 1;
	if (currentSeason > 4){
		currentSeason = 1;
		currentYear++;
	}
	
	seasonStringUpdate();
	
	switch(currentSeason){
		case 1:
			document.getElementById("yearSeason").innerHTML = "Year " + currentYear + ". It is currently Spring.";
			document.getElementById("seasonPic").src = "images/spring.png"; //for each season, create a new src with a new image
			document.getElementById("bgimg").src = "images/bg_spring.png";
			break;
		case 2:
			document.getElementById("yearSeason").innerHTML = "Year " + currentYear + ". It is currently Summer.";
			document.getElementById("seasonPic").src = "images/summer.png";
			document.getElementById("bgimg").src = "images/bg_summer.png";
			break;
		case 3:
			document.getElementById("yearSeason").innerHTML = "Year " + currentYear + ". It is currently Fall.";
			document.getElementById("seasonPic").src = "images/fall.png";
			document.getElementById("bgimg").src = "images/bg_fall.png";
			break;
		case 4:
			document.getElementById("yearSeason").innerHTML = "Year " + currentYear + ". It is currently Winter.";
			document.getElementById("seasonPic").src = "images/winter.png";
			document.getElementById("bgimg").src = "images/bg_winter.png";
			break;
		default:
			alert("???");
			break;
	}
	document.getElementById("info").innerHTML += "<br>Your Tulips grew by " + youGrew[0] + " this season.<br>";
	document.getElementById("info").innerHTML += "Your Tree grew by " + youGrew[1] + " this season.<br>";
	document.getElementById("info").innerHTML += "Your Evergreen grew by " + youGrew[2] + " this season.<br>";
}

function randomizeWeather(){
	var randWeather = (Math.floor(Math.random()*4))+1;
	ambientWeather = randWeather;
	switch(ambientWeather){
		case 1: //rain
			document.getElementById("cWeather").innerHTML = "It is raining this season.";
			document.getElementById("currentWeather").src = "images/rainy.png";
			break;
		case 2: //sun
			document.getElementById("cWeather").innerHTML = "It is sunny this season.";
			document.getElementById("currentWeather").src = "images/sunny.png";
			break;
		case 3: //wind
			document.getElementById("cWeather").innerHTML = "It is windy this season.";
			document.getElementById("currentWeather").src = "images/windy.png";
			break;
		case 4: //cloud
			document.getElementById("cWeather").innerHTML = "It is cloudy this season.";
			document.getElementById("currentWeather").src = "images/cloudy.png";
			break;
		default:
			alert("???");
			break;
	}
}

function updatePlant(){
	plantGrowth[cField] += plantMods[cField][currentSeason][updatingWeather];
	youGrew[cField] = plantMods[cField][currentSeason][updatingWeather];
	plantImageUpdate();
}

function plantImageUpdate(){
	tImg = plantGrowth[cField];
	//alert(tImg);
	if (tImg > 9){
		tImg = 9;
	}
	else if (tImg < 1) {
		tImg = 1;
	}
	//alert(tImg);
	switch(cField){
			case 0: //Tulip
				tulipImage();
				break;
			case 1: //Tree
				treeImage();
				break;
			case 2: //Evergreen
				evergreenImage();
				break;
			default:
				alert("???");
				break;
		}
}

function tulipImage(){
	var imgGet = "images/Tulip_" + tImg + ".png";
	//alert(imgGet);
	document.getElementById("tulip").src = imgGet;
	//alert(tImg);
}

function treeImage(){
	var imgGet = "images/Tree_" + tImg + ".png";
	document.getElementById("apple").src = imgGet;
}

function evergreenImage(){
	var imgGet = "images/Evergreen_" + tImg + ".png";
	document.getElementById("everG").src = imgGet;
}

/*function whichField(){
	var curField = document.getElementsByClassName("fields");
	
	for (i = 0; i < curField.length; i++) {
		if (curField[i].checked == true){
			currentField = i;
		}
	}
}*/

function logFunc(inputText){
	document.getElementById("info").innerHTML += "Year " + currentYear + ", " + seasonString + ", Field " + cField +  ": " + inputText + "<br>";
}

function performWeather(){
	//clears the info section
	document.getElementById("info").innerHTML = "";
	
	for (var j=0; j<3; j++) {
		if (j == currentField){
			updatingWeather = ritualWeather; //use the selected ritual for the weather for that field
		}
		else {
			updatingWeather = ambientWeather; //else use the actual weather
		}
		cField = j;
		switch(updatingWeather){
			case 1: //Rain
				rainTime();
				break;
			case 2: //Sun
				sunTime();
				break;
			case 3: //Wind
				windTime();
				break;
			case 4: //Clouds
				cloudTime();
				break;
			default:
				alert("???");
				break;
		}
		updatePlant();
	}
	randomizeWeather();
	updateInfo();
	updateGrowth();
	randomizeGuy();
	winOrLose();
}

function rainClick(){
	ritualWeather = 1;
	performWeather();
}

function sunClick(){
	ritualWeather = 2;
	performWeather();
}

function windClick(){
	ritualWeather = 3;
	performWeather();
}

function cloudClick(){
	ritualWeather = 4;
	performWeather();
}

function seasonStringUpdate(){
	switch(currentSeason){
		case 1:
			seasonString = "Spring";
			break;
		case 2:
			seasonString = "Summer";
			break;
		case 3:
			seasonString = "Fall";
			break;
		case 4:
			seasonString = "Winter";
			break;
		default:
			alert("???");
			break;
	}
}

function updateGrowth(){
	document.getElementById("info").innerHTML += "<br>Tulip: " + plantGrowth[0] + "<br>Tree: " + plantGrowth[1] + "<br>Evergreen: " + plantGrowth[2] + "<br>";
}

function gameStart(){
	randomizeWeather();
	randomizeGuy();
	document.getElementById("yearSeason").innerHTML = "Year " + currentYear + ". It is currently Spring.";
}

function setField1(){
	document.getElementById("dTulip").style.borderColor = "red";
	document.getElementById("dTree").style.borderColor = "black";
	document.getElementById("dEvergreen").style.borderColor = "black";
	currentField = 0;
}

function setField2(){
	document.getElementById("dTulip").style.borderColor = "black";
	document.getElementById("dTree").style.borderColor = "red";
	document.getElementById("dEvergreen").style.borderColor = "black";
	currentField = 1;
}

function setField3(){
	document.getElementById("dTulip").style.borderColor = "black";
	document.getElementById("dTree").style.borderColor = "black";
	document.getElementById("dEvergreen").style.borderColor = "red";
	currentField = 2;
}

function randomizeGuy(){
	do {
		var randGuy = (Math.floor(Math.random()*12))+2;
	} while (randGuy == lastguy);
	lastguy = randGuy;
	
	var imgGet = "images/Man_" + lastguy + ".png";
	document.getElementById("dGuy").src = imgGet;
}

function winOrLose(){
	for (var k = 0; k < 3; k++){
		if (plantGrowth[k] <=0){
			alert("You lost.");
			highScore();
		}
	}
	if (plantGrowth[0] >= 9 && plantGrowth[1] >= 9 && plantGrowth[2] >= 9 ){
		alert("You win!");
		didyouwin = true;
		highScore();
	}
}

function highScore(){
	var highScores = [];
	highScores[0] = 17;
	highScores[1] = 19;
	highScores[2] = 20;
	highScores[3] = 22;
	highScores[4] = 23;
	highScores[5] = 25;
	highScores[6] = 27;
	highScores[7] = 30;
	highScores[8] = 38;
	
	var winners = [];
	winners[0] = "Miguel";
	winners[1] = "Ivan";
	winners[2] = "Ivan";
	winners[3] = "Miguel";
	winners[4] = "Lucas";
	winners[5] = "Miguel";
	winners[6] = "Ivan";
	winners[7] = "Lucas";
	winners[8] = "Lucas";
	
	var yourScore = (currentYear * 4) + currentSeason - 4;
	var cPlace = 1;
	var notYetPlaced = true;
	if (didyouwin == false) {
		notYetPlaced = false; 
	}
	
	$("#hsscreen").show();
	$("#closeSS").show();
	
	for (var n = 0; n < highScores.length; n++){
	document.getElementById("scorescreen").innerHTML += cPlace + ". ";
	if (notYetPlaced == true && yourScore <= highScores[n]){
		document.getElementById("scorescreen").innerHTML += "You won in " + yourScore + " months! <br>";
		cPlace++;
		document.getElementById("scorescreen").innerHTML += cPlace +". ";
		notYetPlaced = false;
	}
	document.getElementById("scorescreen").innerHTML += winners[n] + " won in " + highScores[n] + " months!<br>";
	cPlace++;
	}
	if (notYetPlaced == true){
		document.getElementById("scorescreen").innerHTML += cPlace +". ";
		document.getElementById("scorescreen").innerHTML += "You won in " + yourScore + " months! <br>";
		notYetPlaced = false;
	}
}

var tips = [
"Rain in the spring makes the tulips VERY happy.",
"No one likes a windy spring.",
"Rain in the summer is nice.",
"A sun in the fall makes it much warmer.",
"A cloudy autumn is the standard.",
"Windy winters are worrisome.",
"There is no rain in the winter...only snow."
]

function giveATip(){
	var rTip = tips[0];
	do {
		var randTip = Math.floor(Math.random()*tips.length);
	} while (randTip == lastTip);
	rTip = tips[randTip];
	alert(rTip);
	lastTip = randTip;
	}

function exitGame() {
	window.location.href='index.html';
}

$(document).ready(function() {
	gameStart();
});