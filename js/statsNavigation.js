/*
this file contains the functions and variables used to look at various 
days/weeks/years stats
*/
// the following 3 set X functions change the buttons display text appropriatly when called
var backNum = 0;
const yearNum = 2021;
// max periods of time a user can look back on (to represent users not beingable to view noneexistent data)
const maxYearBack = 3;
const maxWeekBack = 15;
const maxDayBack = 30;

var titleMesage = " day(s) ago";
	var nb1 = null;
	var nb2 = null;
	var nb3 = null;
	// set the navigation button variables
function setNavButtonVars(){	
	nb1 = document.getElementById("nb1");
	nb2 = document.getElementById("nb2");
	nb3 = document.getElementById("nb3");
	currentTime (); // set backnum to 0
}	
	
function setDayNav (){
	nb1.innerText = "< Previous Day";
	nb2.innerText = "Next Day >";
	nb3.innerText = "Current Day";
	currentTime ();// reset backnum to 0

}
function setWeekNav (){
	nb1.innerText = "< Previous Week";
	nb2.innerText = "Next Week >";
	nb3.innerText = "This Week";	
	currentTime ();

}
function setYearNav (){
	nb1.innerText = "< Previous Year";
	nb2.innerText = "Next Year >";
	nb3.innerText = "This Year";		
	currentTime (); 
}

function backTime (){
	backNum +=1;
	setRightGraph()
	updateGraphTitle();
	disableNav();
	

}
function forwardTime (){
	if (backNum > 0){// prevents a negative backNum
		backNum -=1;
		setRightGraph()
		updateGraphTitle();
		disableNav();
	}
	

}
function currentTime (){// reset backNum to 0
	backNum = 0;
	setRightGraph()
	updateGraphTitle();
	disableNav();
	

}
// sets the graph title depending on what stats are being viewed
function updateGraphTitle(){
	setTitleMessage()
	title = titleMesage;
	displayChart.options.title.text = title;
	displayChart.update();
	

}
// sets the message for the graph title depending on which stats are being looked at
function setTitleMessage(){
	if (viewDay){
		if (backNum == 0){
			titleMesage = "Today";
		} else if (backNum == maxDayBack){
			titleMesage = "Last Day";
		}else {
			titleMesage = backNum + " day(s) ago";
		}
	} else if (viewWeek){
		if (backNum == 0){
			titleMesage = "This Week";
		}	else if (backNum == maxWeekBack){
			titleMesage = "Last Week";
		}else {	
			titleMesage = backNum + " Week(s) ago";
		}
	} else if (viewYear){
		if (backNum == 0){
			titleMesage = "This Year";
		} else if (backNum == maxYearBack){
			titleMesage = "Last Year";
		}else {		
			titleMesage = backNum + " Year(s) ago";
		}
	}
	
}
// disable/enable the correct  buttons when called
function disableNav(){
	if (backNum == 0){// if on current time disably & indicate forward/current buttons are disabled
		nb2.disabled = true;
		nb3.disabled = true;
		nb2.style.opacity = 0.5;
		nb3.style.opacity = 0.5;
//		nb3.pointer-events = none;
	//	nb2.pointer-events = none;
		

	} else {// display buttons normaly
		nb2.disabled = false;
		nb3.disabled = false;	
		nb2.style.opacity = 1;
		nb3.style.opacity = 1;
//		nb3.pointer-events = auto;
	//	nb2.pointer-events = auto;

	}
	
	if (backNum == maxDayBack && viewDay){
		nb1.disabled = true;
		nb1.style.opacity = 0.5;
//		nb1.pointer-events = none;
	}else if (backNum == maxWeekBack && viewWeek){
		nb1.disabled = true;
		nb1.style.opacity = 0.5;
//		nb1.pointer-events = none;		
	}
	else if (backNum == maxYearBack && viewYear){
		nb1.disabled = true;
		nb1.style.opacity = 0.5;
//		nb1.pointer-events = none;		
	} else {
		nb1.disabled = false;
		nb1.style.opacity = 1;
//		nb1.pointer-events = auto;		
	}

	
}
// if on current day set current graph, if not set previous days graph depending 
//on which time period should be displayed 
function setRightGraph(){
	if (backNum == 0){
		if (viewDay){setDay();}
		else if (viewWeek){setWeek();}
		else if (viewYear){	setYear();}
		
	} else{
		if (viewDay){setDayPer();}
		else if (viewWeek){setWeekPer();}
		else if (viewYear){	setYearPer();}
		
	}
	
}
	
	







