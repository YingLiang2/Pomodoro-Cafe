// holds variables to define and functions set the previous days graphs/charts
var colours = ["grey", "orange", "aqua", "beige", "chartreuse", "darkgreen", "Gold", "Indigo", "Orchid", "blue", "navy"
, "yellow", "teal", "Purple", "SaddleBrown", "Slategrey", "Tomato"]
var colourNum = 0;

function addToWeek(task){
	//add studying for new task

	  var 	newDataset2 = {
      label: task + " Studying",
      data: [0,0,0,0,0,0,0],
      backgroundColor: colours[colourNum],
	  stack: "Studying",
    };
	weekData.datasets.push(newDataset2);
	
	// add break for new task
  var 	newDataset1 = {
      label: task + " Break",
      data: [0,0,0,0,0,0,0],
      backgroundColor: colours[colourNum+1],
	  stack: "Breaks",
    }
	weekData.datasets.push(newDataset1);
	

}
function addToYear(task){
	//add studying for new task
	
	  var 	newDataset2 = {
      label: task + " Studying",
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      backgroundColor: colours[colourNum],
	  stack: "Studying",
    };
	yearData.datasets.push(newDataset2);
	
	// add break for new task
  var 	newDataset1 = {
      label: task + " Break",
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      backgroundColor: colours[colourNum+1],
	  stack: "Breaks",
    }
	yearData.datasets.push(newDataset1);

	
}
// this function adds the new task to all datasets
function updateAllDatasets(taskName){
	updateTasks(taskName);
	addToWeek(taskName);
	addToYear(taskName);
	colourNum +=2;// update so new colours are used for next new task

}

// this function updates the day graph when called
function updateTasks (taskName){

	
	tasks[tasks.length] = taskName;
	

	
	// initialize study and break time for new task as 0
	breaks[breaks.length] = 0;
	study[study.length] = 0;

	
}

function updateDayBreak(){
	breaks[breaks.length] = 15;
}
function updateDayStudy(){
	study[study.length] = 50;
}
/*

*/

function updateDayStudy(task, value){
	study[task] += value;
}
function updateDayBreak(task, value){
	breaks[task] += value;
}
function updateWeekStudy(task, value){
	weekData.datasets[(2*value)].data[6] += value;// update the correct studying dataset for last day of week
}
function updateWeekBreak(task, value){
	weekData.datasets[(2*value)+1].data[6] += value;// update the correct break dataset for last day of week
}
function updateYearStudy(task, value){
	yearData.datasets[(2*value)].data[11] += value;// update the correct studying dataset for last month of year
}
function updateYearBreak(task, value){
	yearData.datasets[(2*value)+1].data[11] += value;// update the correct break dataset for last month of year
}
function updateAllGraphData(value, breakBoo, task){
	
	
	if (breakBoo){
		study[task] += value;	// days
		weekData.datasets[(2*task)].data[6] += value;	// weeks
		yearData.datasets[(2*task)].data[11] += value;	//years
	}  else {  // add to break
	
		//jank try catch because idk wtf is happening here.
		try {
			breaks[task] += value;		// days	
			weekData.datasets[(2*task)+1].data[6] += value;	// weeks
			yearData.datasets[(2*task)+1].data[11] += value;	//years
		}
		catch(err) {
			
		}		
	}

	



	
	


	
	
}
/*
	console.log("update day");
	console.log(dayData);
	console.log(dayData.datasets);
	console.log(dayData.datasets[0]);
	console.log(dayData.datasets[0].data);
	dayData.datasets[0].data[1] +=21;
	console.log(dayData.datasets[0].data);
	console.log(dayData.datasets[0].data.length);
	console.log(dayData.datasets[1]);
	console.log(dayData.datasets[2]);
*/
