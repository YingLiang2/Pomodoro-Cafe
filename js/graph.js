// variables for setting up the graphs

// variables for year graph
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthsMath = [400,300,600,300,0,0,0,0,410,380,610,460];
var monthsGeog = [300,400,300,300,0,0,0,0,400,550,750,390];
var monthsHist = [200,600,155,800,0,0,0,0,700,340,670,800];


var monthsBreakMath = [40,30,60,30,0,0,0,0,41,30,61,46];
var monthsBreakGeog = [40,30,60,30,0,0,0,0,40,38,70,40];
var monthsBreakHist = [40,30,90,30,0,0,0,0,110,80,10,60];

// variables for week graph for the dynamic graph
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var tasks = ["Math","Geography","History"];// used in all graphs
var daysMath = [30,30,60,30,45,18,66];
var daysGeog = [30,40,30,30,35,22,96];
var daysHist = [20,60,155,80,75,88,15];

var daysBreakMath = [5,6,15,8,10,3,21];
var daysBreakGeog = [4,10,7,3,15,2,10];
var daysBreakHist = [8,15,3,12,33,28,0];

//variables for day graph
var breaks = [15, 7, 33];
var study = [60, 30, 155];


// variables used to make graphs/charts


var displayChart = null;
var title = "Today"; // titel of the graphs
// variables to track which graph is being viewed

var viewDay = true;
var viewWeek = false;
var viewYear = false;


// year bar chart ----------
var yearDataset = [
    {
      label: tasks[0] + " Studying",
      data: monthsMath,
      backgroundColor: "red",
	  stack: "Studying",
    },    	{
      label: tasks[0] + " Break",
      data: monthsBreakMath,
      backgroundColor: "pink",
	  stack: "Breaks",
    },  {
      label: tasks[1] + " Studying",
      data: monthsGeog,
      backgroundColor: "blue",
	  stack: "Studying",
    },	{
      label: tasks[1] + " Break",
      data: monthsBreakGeog,
      backgroundColor: "navy",
	  stack: "Breaks",
    }, 	{
      label: tasks[2] + " Studying",
      data: monthsHist,
      backgroundColor: "yellow",
	  stack: "Studying",
    },	{
      label: tasks[2] + " Break",
      data: monthsBreakHist,
      backgroundColor: "teal",
	  stack: "Breaks",
    },
  ]
// data for year chart
var yearData = {
  labels: months,
  datasets: yearDataset
};
// year Options
  var yearOptions = {
	  title: {
        display: true,
        text: title
    },
	maintainAspectRatio: false,
    scales: {// starts chart y at 0
      xAxes: [{
        stacked: true
      }],
      yAxes: [{  
        stacked: true,
			scaleLabel: {
			  display: true,
			  labelString: 'Minutes'
      }
      }]
    }
  };
// set data variables to year chart and create the graph
function setYear(){

	displayChart.data = yearData;
	displayChart.options = yearOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();
	
}

//week stacked bar chart ----------
// day chart dataset
var weekDataset = [
    {
      label: tasks[0] + " Studying",
      data: daysMath,
      backgroundColor: "red",
	  stack: "Studying",
    },	{
      label: tasks[0] + " Break",
      data: daysBreakMath,
      backgroundColor: "pink",
	  stack: "Breaks",
    },	{
      label: tasks[1] + " Studying",
      data: daysGeog,
      backgroundColor: "blue",
	  stack: "Studying",
    },	{
      label: tasks[1] + " Break",
      data: daysBreakGeog,
      backgroundColor: "navy",
	  stack: "Breaks",
    },  {
      label: tasks[2] + " Studying",
      data: daysHist,
      backgroundColor: "yellow",
	  stack: "Studying",
    },	{
      label: tasks[2] + " Break",
      data: daysBreakHist,
      backgroundColor: "teal",
	  stack: "Breaks",
    },
  ]

var weekData = {
  labels: days,
  datasets: weekDataset
};


// week Options
  var weekOptions = {
	  title: {
        display: true,
        text: title
    },
	maintainAspectRatio: false,
    scales: {// starts chart y at 0
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true,
			scaleLabel: {
			  display: true,
			  labelString: 'Minutes'
      }
      }]
    }
  };
// set data variables to week chart and create the graph
function setWeek(){

	displayChart.data = weekData;
	displayChart.options = weekOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();

}

// ----------------
// dataset for day chart
var dayDataset = [{
	  label: "Breaks",	
      backgroundColor: "blue",
	  //barThickness: 50,  
      data: breaks
	  
    }, {
		
	  label: "Studied",
	  backgroundColor: "red",
      data: study
    }]

// data variable for day chart -----
var dayData = {
    labels: tasks,
    datasets: dayDataset
  };
  // options var for bar chart -----
  var dayOptions = {
	  
	  maintainAspectRatio: false,
	  title: {
        display: true,
        text: title
    },
    scales: {// starts chart y at 0
      yAxes: [{
		scaleLabel: {
			display: true,
			labelString: 'Minutes'
      },
        ticks: {
          beginAtZero: true
        }
      }],
    }
  };
// create a graph for the days data
function setDay(){	

	displayChart.data = dayData;
	displayChart.options = dayOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();
	
}

// ----------------


// this functrion creates a chart to fill the canvas in the stats popup
function createGraph(){
		
	displayChart = new Chart("myChart", {

		
	  type: "bar",
	  data: dayData,
	  options: dayOptions
	});
	
}
function testResize(){
	displayChart.update();
}
function destroyChart(){
	document.getElementById("myChart").remove();
	
}
