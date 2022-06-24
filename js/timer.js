/*
 * timer.js
 *
 * This script contains code to enable the use of Timer objects.
 * Timer objects manipulate by an html element with id time by counting down.
 */
var workTimer = new Timer(0, 20),
	breakTimer = new Timer(0, 10),
	currTimer = workTimer;




var breakTime = false;
var workTimerBoo = false;// tracks currend mode timer is in true = break mode, false = work
var goalIDNum = 0;

	
	
var timeGlobal = 0;
function Timer(minutes, seconds) {	
	this.timerInterval;
	this.startMinutes = this.minutes = minutes;
	this.startSeconds = this.seconds = seconds;
	this.setTime = setTime;
	this.startTimer = startTimer;
	this.startTime = startTime;
	this.stopTime = stopTime;
	
	this.startingTime = this.currentTime = 60 * parseInt(this.minutes, 10) + parseInt(this.seconds, 10);
	
}




/*
 * startTimer
 * 
 * Start a timer object of duration seconds.
 */
function startTimer(duration) {
	var obj = this, timer = duration, minutes, seconds;
	this.timerInterval = setInterval(intervalFunction, 1000);


	let newTime = document.getElementsByClassName("grinder_bottom");
	newTime[0].style.animationDuration = timer +'s';
	
	function intervalFunction() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		//the first condition is for padding a zero.
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;		
		
		//update the timer.
		document.getElementById("time").innerHTML = minutes + ":" + seconds;
		
		//use obj because in this context this == the startTimer function.
		obj.currentTime = 60 * parseInt(minutes) + parseInt(seconds);
		timeGlobal = timer;
		//countdown the timer and check if it's done.
		if (--timer < 0) {
			timer = duration;
			workTimerBoo = ! workTimerBoo;
			obj.stopTime(); //prevent the timer from continuing the countdown.
			obj.currentTime = obj.startingTime;
			
			let h = document.getElementsByClassName('drop');

			breakTime = true;

			for (let n of h) {

				n.style.display = "none";
				

			}


			//swaps timers after completion.
			//a bit jank but since we're only using these 2 timers it's fine. ¯\_(ツ)_/¯ Oh well.
			if(currTimer === workTimer) {
				achievementStateObj.addCurrency(15);	/*add currency to the user's bank*/
				startFadeOut();
				
				clearInterval(workTimer.timerInterval);
				currTimer = breakTimer;
				
				document.getElementById("timerButton").innerHTML = "Start Break";
				
				let c = document.getElementsByClassName("cup");
				let t = document.getElementsByClassName("topOfCup");
				let cof = document.getElementsByClassName("coffee");
				let ch = document.getElementsByClassName("cupHandle");
				let smoke = document.getElementsByClassName("smoke");
				
				updateBreakTimeMug();

				c[0].style.display = "flex";
				t[0].style.display = "flex";
				cof[0].style.display = "flex";
				ch[0].style.display = "flex";
				smoke[0].style.display = "flex";
			

			}
			else if(currTimer === breakTimer) {
				clearInterval(breakTimer.timerInterval);
				currTimer = workTimer;
				breakTime = false;
				document.getElementById("timerButton").innerHTML = "Start Work Period";


				let c = document.getElementsByClassName("cup");
				let t = document.getElementsByClassName("topOfCup");
				let cof = document.getElementsByClassName("coffee");
				let ch = document.getElementsByClassName("cupHandle");
				let smoke = document.getElementsByClassName("smoke");
				let smoke_span = document.getElementsByClassName("smoke span");

				c[0].style.display = "none";
				t[0].style.display = "none";
				cof[0].style.display = "none";
				ch[0].style.display = "none";
				smoke[0].style.display = "none";
				
				
			}
			
			//set the start time of the next timer.
			minutes = parseInt(currTimer.startingTime / 60, 10);
			seconds = parseInt(currTimer.startingTime % 60, 10);
			
			//the first condition is for padding a zero.
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;	
			document.getElementById("time").innerHTML = minutes + ":" + seconds;
		} 
		//  else { might not need this code

		// 	breakTime = false;




		// }
	}	
}



/*
 * setTime
 * 
 * Toggle a timer on and off.
 */
function setTime() {

	if(document.getElementById("timerButton").innerHTML.includes("Start") ||
		document.getElementById("timerButton").innerHTML.includes("Resume")) {
		this.startTime();

		let h = document.getElementsByClassName('drop');
		let x = document.getElementsByClassName("grinder");
		let d = document.getElementsByClassName("grinder_bottom");
		let p = document.getElementsByClassName("grinder_handle");
		let s = document.getElementsByClassName("grinder_top");

		if (!breakTime) {

			for (let n of h) {

				n.style.display = "inline";
				
			}

			for (let a of x) {

				a.style.display = "inline";

			}

			for (let b of d) {

				b.style.display = "inline";

			}

			for (let e of p) {

				e.style.display = "inline";

			}

			for (let o of s) {

				o.style.display = "inline";

			}

		} else {

			for (let n of h) {

				n.style.display = "none";
			
			}

			for (let a of x) {

				a.style.display = "none";

			}

			for (let b of d) {

				b.style.display = "none";

			}

			for (let e of p) {

				e.style.display = "none";

			}

			for (let o of s) {

				o.style.display = "none";

			}



		}

	}
	else if(document.getElementById("timerButton").innerHTML.includes("Pause")) {
		this.stopTime();

		let h = document.getElementsByClassName('drop');

		for (let n of h) {

        	n.style.display = "none";
			

    	}

		

	}
}

function takeBreak() {

    currTimer.stopTime();// this solves the "timer continues when take a break pressed error and ensures stats properly updated"
    workTimerBoo = false;// updates the variable informing the mode of the timer
    breakTime = true;// i believe this also hold the mode of the timer and true means the break timer is on


	currTimer.currentTime = currTimer.startingTime;
	clearInterval(currTimer.timerInterval);
	
	currTimer = breakTimer;
	
	//set the start time of the next timer.
	minutes = parseInt(currTimer.startingTime / 60, 10);
	seconds = parseInt(currTimer.startingTime % 60, 10);
			
	//the first condition is for padding a zero.
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;	
	document.getElementById("time").innerHTML = minutes + ":" + seconds;


	let c = document.getElementsByClassName("cup");
	let t = document.getElementsByClassName("topOfCup");
	let cof = document.getElementsByClassName("coffee");
	let ch = document.getElementsByClassName("cupHandle");
	let smoke = document.getElementsByClassName("smoke");
	
	updateBreakTimeMug();

	c[0].style.display = "flex";
	t[0].style.display = "flex";
	cof[0].style.display = "flex";
	ch[0].style.display = "flex";
	smoke[0].style.display = "flex";
	
	let h = document.getElementsByClassName('drop');
	let x = document.getElementsByClassName("grinder");
	let d = document.getElementsByClassName("grinder_bottom");
	let p = document.getElementsByClassName("grinder_handle");
	let s = document.getElementsByClassName("grinder_top");


	for (let n of h) {

		n.style.display = "none";
	
	}

	for (let a of x) {

		a.style.display = "none";

	}

	for (let b of d) {

		b.style.display = "none";

	}

	for (let e of p) {

		e.style.display = "none";

	}

	for (let o of s) {

		o.style.display = "none";

	}


}

/*
 * Resets fade out animation.
 */
function startFadeOut() {
  var el = document.getElementById('pointsIndicator');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
  el.style.animationPlayState = "running";
}

/*
 * startTime
 *
 * sets the timer interval and toggles the html timer button.
 */
function startTime() {
	this.startTimer(this.currentTime);
	
	if(currTimer === workTimer) {
		document.getElementById("timerButton").innerHTML = "Pause Work Period";
	}
	else if(currTimer === breakTimer) {
		document.getElementById("timerButton").innerHTML = "Pause Break";
	}
	
	//run the coffee drip animation.
	document.getElementById("rowGrinderBottom").style.animationPlayState = "running";
}

/*
 * stopTime
 *
 * clears the timer interval and toggles the html timer button.
 */
function stopTime() {
console.log("timer on: " + workTimerBoo);
console.log("goalIDNum " + goalIDNum);
	updateAllGraphData (((this.startingTime - timeGlobal)/60), workTimerBoo, goalIDNum) // /60 to give time in minutes
	clearInterval(this.timerInterval);
	
	if(currTimer === workTimer) {
		document.getElementById("timerButton").innerHTML = "Resume Work Period";
	}
	else if(currTimer === breakTimer) {
		document.getElementById("timerButton").innerHTML = "Resume Break";
	}
	
	//pause the coffee drip animation.
	document.getElementById("rowGrinderBottom").style.animationPlayState = "paused";

}
