// variables for the permanent (past) graphs
var tasksPer = ["Math","Geography","History"];// used in all graphs
// permanent variables for non changing year graph
var months2 = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthsMathPer = [400,300,600,300,0,0,0,0,410,380,610,460];
const monthsGeogPer = [300,400,300,300,0,0,0,0,400,550,750,390];
const monthsHistPer = [200,600,155,800,00,0,0,700,340,670,800];


const monthsBreakMathPer = [40,30,60,30,0,0,0,0,41,30,61,46];
const monthsBreakGeogPer = [40,30,60,30,0,0,0,0,40,38,70,40];
const monthsBreakHistPer = [40,30,90,30,0,0,0,0,110,80,10,60];

// variables for non changing  week graph for the dynamic graph

const daysMathPer = [30,30,60,30,45,18,66];
const daysGeogPer = [30,40,30,30,35,22,96];
const daysHistPer = [20,60,155,80,75,88,15];

const daysBreakMathPer = [5,6,15,8,10,3,21];
const daysBreakGeogPer = [4,10,7,3,15,2,10];
const daysBreakHistPer = [8,15,3,12,33,28,0];

//variables for non changing day graph
const breaksPer = [15, 7, 33];
const studyPer = [60, 30, 155];

// data for year chart
var yearDataPer = {
  labels: months2,
  datasets: [
    {
      label: tasksPer[0] + " Studying",
      data: monthsMathPer,
      backgroundColor: "red",
	  stack: "Studying",
    },    	{
      label: tasksPer[0] + " Break",
      data: monthsBreakMathPer,
      backgroundColor: "pink",
	  stack: "Breaks",
    },  {
      label: tasksPer[1] + " Studying",
      data: monthsGeogPer,
      backgroundColor: "blue",
	  stack: "Studying",
    },	{
      label: tasksPer[1] + " Break",
      data: monthsBreakGeogPer,
      backgroundColor: "navy",
	  stack: "Breaks",
    }, 	{
      label: tasksPer[2] + " Studying",
      data: monthsHistPer,
      backgroundColor: "yellow",
	  stack: "Studying",
    },	{
      label: tasksPer[2] + " Break",
      data: monthsBreakHistPer,
      backgroundColor: "teal",
	  stack: "Breaks",
    },
  ]
};

// set data variables to year chart and create the graph
function setYearPer(){

	displayChart.data = yearDataPer;
	displayChart.options = yearOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();
	
}

//week stacked bar chart ----------
// day chart dataset

var weekDataPer = {
  labels: days2,
  datasets: [
    {
      label: tasksPer[0] + " Studying",
      data: daysMathPer,
      backgroundColor: "red",
	  stack: "Studying",
    },	{
      label: tasksPer[0] + " Break",
      data: daysBreakMathPer,
      backgroundColor: "pink",
	  stack: "Breaks",
    },	{
      label: tasksPer[1] + " Studying",
      data: daysGeogPer,
      backgroundColor: "blue",
	  stack: "Studying",
    },	{
      label: tasksPer[1] + " Break",
      data: daysBreakGeogPer,
      backgroundColor: "navy",
	  stack: "Breaks",
    },  {
      label: tasksPer[2] + " Studying",
      data: daysHistPer,
      backgroundColor: "yellow",
	  stack: "Studying",
    },	{
      label: tasksPer[2] + " Break",
      data: daysBreakHistPer,
      backgroundColor: "teal",
	  stack: "Breaks",
    },
  ]

};
// set data variables to week chart and create the graph
function setWeekPer(){

	displayChart.data = weekDataPer;
	displayChart.options = weekOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();

}

// ----------------
// dataset for day chart

// data variable for day chart -----
var dayDataPer = {
    labels: tasksPer,
    datasets: [{
	  label: "Breaks",	
      backgroundColor: "blue",
	  //barThickness: 50,  
      data: breaksPer
	  
    }, {
		
	  label: "Studied",
	  backgroundColor: "red",
      data: studyPer
    }]
  };
 
// create a graph for the past days data
function setDayPer(){	

	displayChart.data = dayDataPer;
	displayChart.options = dayOptions;
	displayChart.options.title.text = title; // update the charts title
	
	displayChart.update();
	
}