/*
 * goals.js
 *
 * This script is responsible for the creation and tracking of goal objects.
 * Goal objects store break and work timer objects.
 */
var accounts = [];
var currAccount, currGoalList = [], currGoal, nextID;

function initialize() {
	nextID = 0;

	currAccount = new Account('Guest', 'password');
	currGoalList = currAccount.goalList;
	
	//test to make sure nothing is broken.
	//var newGoal = new Goal('hi', 1, 1, 1, 1);	
	//appendToGoalSelector(newGoal);
}

function Account(username, password) {
	this.username = username;
	this.password = password;
	
	this.goalList = [];
}
// constructor for creating the 3 goals already in the 1 account


function Goal(name, workMinutes, workSeconds, breakMinutes, breakSeconds) {
	this.id = nextID;
	nextID++;
	
	// add graph for new goal
	if (arguments > 2){
		updateAllDatasets(name);
	}
	
	this.name = name;
	this.workTimer = new Timer(workMinutes, workSeconds);
	this.breakTimer = new Timer(breakMinutes, breakSeconds);
}

/*
 * appendToGoalSelector
 *
 * This function takes the variable item and adds it to our goal selection list.
 */
function appendToGoalSelector(item) {
   var option = document.createElement('option');
   option.value = item.id;
   option.innerHTML = item.name;
   goalSelector.appendChild(option);
}

goalSelector.onchange = function(){
   alert(this.value);
}

/*
 * createGoal
 *
 * Gets the values stored in the new goal form fields and creates a new goal object.
 * Also appends the new goal to the option selector.
 */
function createGoal() {
	
	//initialize the goal variables, then send to a constructor.
	var name = document.getElementById("goalName").value,
		dailyHours = document.getElementById("dailyGoal").value,
		weeklyHours = document.getElementById("weeklyGoal").value,
		workPeriodMinutes = document.getElementById("workMinutes").value === "" ? 0 : document.getElementById("workMinutes").value,
		workPeriodSeconds = document.getElementById("workSeconds").value === "" ? 0 : document.getElementById("workSeconds").value,
		numBreaks = document.getElementById("breaks").value,
		breakPeriodMinutes = document.getElementById("breakMinutes").value === "" ? 0 : document.getElementById("breakMinutes").value,
		breakPeriodSeconds = document.getElementById("breakSeconds").value === "" ? 0 : document.getElementById("breakSeconds").value,
		newGoal,
		nameExists = false;
	
	for(let i = 0; i < currGoalList.length && !nameExists; i++) {
		nameExists = name === currGoalList[i].name;
	}
	
	//error booleans.
	var nameError = Boolean(name === ""),
		dailyError = Boolean(dailyHours === ""),
		weeklyError = Boolean(weeklyHours === ""),
		workPeriodError = Boolean(workPeriodMinutes === 0 && workPeriodMinutes === 0),
		breaksError = Boolean(numBreaks === ""),
		breakPeriodError = Boolean(breakPeriodMinutes === 0 && breakPeriodSeconds === 0),
		error = Boolean(nameExists || nameError || dailyError || weeklyError || workPeriodError || breaksError || breakPeriodError);
	
	//handle errors.
	handleNameError(nameError, nameExists);
	handleHourGoalsError(dailyError, weeklyError);
	handleWorkPeriodError(workPeriodError);
	handleBreakError(breaksError, breakPeriodError);
	
	if(!error) {
		newGoal = new Goal(name, workPeriodMinutes, workPeriodSeconds, breakPeriodMinutes, breakPeriodSeconds);
		
		//add the goal to the account and option selector.
		currAccount.goalList.push(newGoal);
		appendToGoalSelector(newGoal);
		closeGoalsPopup();
	}
}
function createGoal2(name, workPeriodMinutes, workPeriodSeconds, breakPeriodMinutes, breakPeriodSeconds) {
	// send to a constructor.

	var newGoal = new Goal(name, workPeriodMinutes, workPeriodSeconds, breakPeriodMinutes, breakPeriodSeconds);
		

	//add the goal to the account and option selector.
	currAccount.goalList.push(newGoal);
	appendToGoalSelector(newGoal);
	closeGoalsPopup();
}

/*
 * handleNameError
 *
 * Set the name input according to whether there's an error.
 */
function handleNameError(nameError, nameExists) {
	if(nameExists) {
		document.getElementById("goalNameBlock").style.border = '5px solid red';
		document.getElementById("goalNameError").innerHTML = 'This goal name is already in use. Please choose a new one.';
	}
	else if(nameError) { /* Detect errors. */
		document.getElementById("goalNameBlock").style.border = '5px solid red';
		document.getElementById("goalNameError").innerHTML = 'Please enter a goal name.';
	}
	else {
		document.getElementById("goalNameBlock").style.border = '1px solid white';
		document.getElementById("goalNameError").innerHTML = '';
	}
}

/*
 * handleHourGoalsError
 *
 * Set the daily and weekly input according to whether there's an error.
 */
function handleHourGoalsError(dailyError, weeklyError) {
	if(dailyError) {
		document.getElementById("hourGoals").style.border = '5px solid red';
		document.getElementById("dailyGoalError").innerHTML = 'Please enter a daily goal in hours';
	}
	else {
		document.getElementById("dailyGoalError").innerHTML = '';
	}
	
	if(weeklyError) {
		document.getElementById("hourGoals").style.border = '5px solid red';
		document.getElementById("weeklyGoalError").innerHTML = 'Please enter a weekly goal in hours';
	}
	else {
		document.getElementById("weeklyGoalError").innerHTML = '';
	}
	
	if(!dailyError && !weeklyError) {
		document.getElementById("hourGoals").style.border = '1px solid white';
	}
}

/*
 * workPeriodError
 *
 * Set the work period input according to whether there's an error.
 */
function handleWorkPeriodError(workPeriodError) {
	if(workPeriodError) {
		document.getElementById("workPeriodInput").style.border = '5px solid red';
		document.getElementById("workPeriodError").innerHTML = 'Please input a value greater than 0.';
	}
	else {
		document.getElementById("workPeriodInput").style.border = '1px solid white';
		document.getElementById("workPeriodError").innerHTML = '';
	}
}

/*
 * handleBreakError
 *
 * Set the num breaks input according to whether there's an error.
 */
function handleBreakError(breaksError, breakPeriodError) {
	if(breaksError) {
		document.getElementById("breakPeriodInput").style.border = '5px solid red';
		document.getElementById("breakNumberError").innerHTML = 'Input a number of breaks per day.';
	}
	else {
		document.getElementById("breakNumberError").innerHTML = '';
	}
	
	if(breakPeriodError) {
		document.getElementById("breakPeriodInput").style.border = '5px solid red';
		document.getElementById("breakPeriodError").innerHTML = 'Please input a value greater than 0.';
	}
	else {
		document.getElementById("breakPeriodError").innerHTML = '';
	}
	
	if(!breaksError && !breakPeriodError) {
		document.getElementById("breakPeriodInput").style.border = '1px solid white';
	}
}

/*
 * setGoal
 *
 * Uses the currently selected option in the goals popup to
 * set the current timer.
 */
function setGoal() {
	var select = document.getElementById("goalSelector"),
		currentOpt = select.options[select.selectedIndex],
		selectedGoal = currAccount.goalList[select.selectedIndex - 1],
		minutes, seconds,
		textMinutes, textSeconds;
		
	currGoal = selectedGoal;
	minutes = currGoal.workTimer.minutes;
	seconds = currGoal.workTimer.seconds;
	
	textMinutes = parseInt(minutes);
	textSeconds = parseInt(seconds);
	
	//the first condition is for padding a zero.
	textMinutes = minutes < 10 ? "0" + textMinutes : textMinutes;
	textSeconds = seconds < 10 ? "0" + textSeconds : textSeconds;
	
	document.getElementById("time").innerHTML = textMinutes + ":" + textSeconds;
	document.getElementById("taskName").innerHTML = currentOpt.innerHTML;
	
	
	if(!(currTimer === null)) {
		clearInterval(currTimer.timerInterval);
	}
	
	workTimer = currGoal.workTimer;
	breakTimer = currGoal.breakTimer;
	currTimer = workTimer;
	
	goalIDNum = currGoal.id;
	closeGoalsPopup();
	
	//change animation length for coffee dripping animation.
	document.getElementById("rowGrinderBottom").style.animationDuration = workTimer.startingTime + "s";
}

/*
 * submitLoginForm
 * 
 * Submit the login form and change html elements that use usernames and close on success.
 * Fails on either no username or password.
 */
function submitLoginForm() {
	var username = document.getElementById("username").value,
		password = document.getElementById("password").value;
	
	if(username.length > 0 && password.length > 0) {
		setAccount(username, password);
		closeLoginForm();
	}
	else { /* TO DO: Change form CSS to indicate errors. */	
		if(username.length == 0) {
			document.getElementById("usernameError").innerHTML = "Please enter a username.";
		}
		else {
			document.getElementById("usernameError").innerHTML = "";
		}
		
		if(password.length == 0) {
			document.getElementById("passwordError").innerHTML = "Please enter a password.";
		}
		else {
			document.getElementById("passwordError").innerHTML = "";
		}
	}
}

/*
 * setAccount
 * 
 * Set which account is currently logged in according to a username.
 */
function setAccount(username, password) {
	var	goalSelector = document.getElementById("goalSelector"),
		taskLabel = document.getElementById("taskName"),
		goalSelectorArray = goalSelector.options,
		nextAccount = null;
	
	//need to change login div to username.
	document.getElementById("welcome").innerHTML = "Welcome, " + username;
	taskLabel.innerHTML = "Current Task (Not Set)";
		
	//removes all but the first element.
	while(goalSelectorArray.length > 1) {
		goalSelector.remove(1);
	}

	//search the account list for this username.
	for(let i = 0; i < accounts.length && nextAccount === null; i++) {
		if(username === accounts[i].username) {
			nextAccount = accounts[i];
		}
	}
		
	if(nextAccount === null) { //create a new account and add it to the list.
		nextAccount = new Account(username, password);
		currAccount = nextAccount;
		accounts.push(nextAccount);
	}
	else { //add an existing account's goals to the goal selector.
		currAccount = nextAccount;
		currAccount.goalList.forEach(appendToGoalSelector);
	}
}
