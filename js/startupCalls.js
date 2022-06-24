

window.onload = createStartGoals;
// calls all functions to be called on startup
function startupInit(){
	initialize();
	createStartGoals();
}

function createStartGoals(){
	
console.log("in startup");	
	createGoal2("Math", 1, 0, 1, 0);
	createGoal2("Geography", 0, 5, 0, 8);
	createGoal2("History", 4, 5, 6, 7);
}

