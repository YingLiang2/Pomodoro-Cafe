

const achievementStateObj = new achievementState(0);
console.log("Achievement state obj has been succesfully created.. \n")

const NUM_MUGS = 4;

function achievementState(currency){
    this.currency = currency;
    this.addCurrency = addCurrency;
    this.setCurrency = setCurrency;
    this.displayCurrency = displayCurrency;
    this.selectedMug = 0;
    this.buyList = [0];
}

function setCurrency(new_currency) {
    achievementStateObj.currency = new_currency;
}

function addCurrency(new_currency) {
    achievementStateObj.currency += new_currency;
}

function displayCurrency() {
    document.getElementById("currency_display").innerHTML = "Points: " + achievementStateObj.currency;
}

function updateAnimation(){

}

function updateSelectionMenu(){

    displayCurrency();

    for(var i=0; i<NUM_MUGS; i++){

        if(i == achievementStateObj.selectedMug){
            document.getElementById("Menu_item_" + i).innerHTML = "Selected"
        }// if

        else{
            if(achievementStateObj.buyList.indexOf(i) >= 0){
                document.getElementById("Menu_item_" + i).innerHTML = "Owned"
            }
            else{
                document.getElementById("Menu_item_" + i).innerHTML = "Price: 15"
            }

        }

    }//for

}//updateSelectionMenu


//Takes HTML collection of items as input and updates the 
function updateBreakTimeMug(){

    let c = document.getElementsByClassName("cup");

    //Change the colour of the mug
    switch(achievementStateObj.selectedMug){
        case 0:
            c[0].style.background = "linear-gradient(to right, #8a8987, #d9d9d9 )"; // default
            break;
        case 1:
            c[0].style.background = "linear-gradient(to right, #ffb6ff, #914e99 )"; //pink
        break;

        case 2:
            c[0].style.background = "linear-gradient(to right, #eddd00, #00eddd )"; // default
        break;

        case 3:
            c[0].style.background = "linear-gradient(to right, #83f47f, #f47f83 )"; // default

        break;

    }

}

function buyMug(mugNum, mugPrice){

    // make sure the mug is not already bought and that we have enought currency
    if(!(mugNum in achievementStateObj.buyList)){
        
        if (achievementStateObj.currency >= mugPrice){
           
            var confirmationBool = confirm("Are you sure you want to purchase this mug?");
            if(confirmationBool){
                achievementStateObj.currency -= mugPrice;
                achievementStateObj.buyList.push(mugNum);
                updateSelectionMenu();
            }//if
            
        }//if

        else{
            alert("Not enough funds");
        }
    }

    else{
        alert("You have already purchased this mug!");
    }

    

}//buyMug


function selectMug(mugClicked){

    if(achievementStateObj.buyList.indexOf(mugClicked) >= 0){
        achievementStateObj.selectedMug = mugClicked;
        updateSelectionMenu();
    }
    else{
        alert("You have not purchased this mug.");
    }
   

}// updateSelection

