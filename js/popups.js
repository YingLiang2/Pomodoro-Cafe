/*
 * popups.js
 *
 * Handles the opening and closing of various popups.
 */
 
/* Login */

/*
 * openLoginForm
 * 
 * Open the login form and reset the text fields.
 */
function openLoginForm() {
	closeGoalsPopup();
	closeStatsPopup();
	closeAchievementsPopup();
	
	document.getElementById("login").style.display = "block";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("usernameError").innerHTML = "";
	document.getElementById("passwordError").innerHTML = "";
}

/*
 * closeLoginForm
 * 
 * Make the login form invisible again.
 */
function closeLoginForm() {
  document.getElementById("login").style.display = "none";
}

/* Goals */
 
/*
 * openGoalsPopup
 *
 * Open the goals popup.
 */
function openGoalsPopup() {
	/* Make sure no other popup is open. */
	closeLoginForm();
	closeStatsPopup();
	closeAchievementsPopup();
		
	//initialize the goal variables, then send to a constructor.
	document.getElementById("goalName").value = "";	
	document.getElementById("dailyGoal").value = "";
	document.getElementById("weeklyGoal").value = "";
	document.getElementById("workMinutes").value = "";
	document.getElementById("workSeconds").value = "";
		
	document.getElementById("goalNameBlock").style.border = '1px solid white';
	document.getElementById("goalNameError").innerHTML = "";
	
	document.getElementById("hourGoals").style.border = '1px solid white';
	document.getElementById("dailyGoalError").innerHTML = "";
	document.getElementById("weeklyGoalError").innerHTML = "";
	
	document.getElementById("workPeriodInput").style.border = '1px solid white';
	document.getElementById("workPeriodError").innerHTML = "";
	
	document.getElementById("breakPeriodInput").style.border = '1px solid white';
	document.getElementById("breakNumberError").innerHTML = "";
	document.getElementById("breakPeriodError").innerHTML = "";
	
	document.getElementById("breaks").value = "";
	document.getElementById("breakMinutes").value = "";
	document.getElementById("breakSeconds").value = "";

	document.getElementById("goals").style.display = "block";
	document.getElementById("goals").scrollTop = 0; //resets the scroll bar.
}
 
/*
 * closeGoalsPopup
 *
 * Close the goals popup.
 */
function closeGoalsPopup() {	
	document.getElementById("goals").style.display = "none";
}

/* Stats */
 
/*
 * openStatsPopup
 *
 * Open the stats popup.
 */
function openStatsPopup() {
	/* Make sure no other popup is open. */
	closeLoginForm();
	closeGoalsPopup();
	closeAchievementsPopup();
	
		
		createGraph();// create initial graph
		setNavButtonVars();// set navigation button variables
	document.getElementById("stats").style.display = "block";
}
 
/*
 * closeStatsPopup
 *
 * Close the stats popup.
 */
function closeStatsPopup() {
	if(!(displayChart === null)) {
		displayChart.destroy();// clear chart from canvas
	}
	
	document.getElementById("stats").style.display = "none";
}

/* Achievements */
 
/*
 * openAchievementsPopup
 *
 * Open the achievements popup.
 */
function openAchievementsPopup() {
	/* Make sure no other popup is open. */
	closeLoginForm();
	closeGoalsPopup();
	closeStatsPopup();
	
	/* Display the user's and selected mugs*/ 
	updateSelectionMenu();	
	
	document.getElementById("achievements").style.display = "block";
}
 
/*
 * closeAchievementsPopup
 *
 * Close the achievements popup.
 */
function closeAchievementsPopup() {
	document.getElementById("achievements").style.display = "none";
}