/*
this folder contains functions the day/week/year button calls and
calls the functions needed for the correct stats actions to occure on each button click
and if neccisary set some variables
*/
function dayButton(){
	title = "Today";
	viewDay = true;// set currently viewing day
	viewWeek = false;
	viewYear = false;
	setDayNav();
	setDay();
	
}
function weekButton(){
	title = "This Week";
	
	viewDay = false;// set currently viewing day
	viewWeek = true;
	viewYear = false;
	
	setWeekNav();
	setWeek();
	
	
}
function yearButton(){
	title = "This Year";
	viewDay = false;// set currently viewing year
	viewWeek = false;
	viewYear = true;
	setYearNav();
	setYear();
	
}