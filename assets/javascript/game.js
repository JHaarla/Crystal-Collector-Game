$(document).ready(function() {

// var crystal0Value = setCrystal0();
// var crystal1Value = setCrystal1();
// var crystal2Value = setCrystal2();
// var crystal3Value = setCrystal3();

// var goalNumber = setGoal();

var crystal0Value;
var crystal1Value;
var crystal2Value;
var crystal3Value;

var goalNumber;
var yourTotal;

var wins = 0;
var losses = 0;

var winsText = document.getElementById("winsAmount");
var lossesText = document.getElementById("lossesAmount");
var goalNumberText = document.getElementById("goalNumber");
var totalNumberText = document.getElementById("yourTotal");

reset(); //runs the reset function to initialize the game or to reset it after a win or loss


// diplays wins, losses, goal number and user total 
winsText.textContent = wins;
lossesText.textContent = losses;
goalNumberText.textContent = goalNumber;
totalNumberText.textContent = yourTotal;


console.log("goalNumber= " + goalNumber);
console.log("Crystal 0 value is " + crystal0Value)
console.log("Crystal 1 value is " + crystal1Value)
console.log("Crystal 2 value is " + crystal2Value)
console.log("Crystal 3 value is " + crystal3Value)



// function to set goalNumber to a random value between 19 and 120
function setGoal() {
    return Math.floor(Math.random() * (120 - 19) + 19); 
};

// function to set crystal values between 1 and 12
function setCrystal0() {
    return Math.floor(Math.random() * (12 - 1) + 1); 
};
// console.log("Crystal 0 value is " + crystal0Value)

function setCrystal1() {
    return Math.floor(Math.random() * (12 - 1) + 1); 
};
// console.log("Crystal 1 value is " + crystal1Value)

function setCrystal2() {
    return Math.floor(Math.random() * (12 - 1) + 1); 
};
// console.log("Crystal 2 value is " + crystal2Value)

function setCrystal3() {
    return Math.floor(Math.random() * (12 - 1) + 1); 
};
// console.log("Crystal 3 value is " + crystal3Value)


// reset function - runs at the beginning and every time the player wins or loses
function reset() {
    crystal0Value = setCrystal0();
    crystal1Value = setCrystal1();
    crystal2Value = setCrystal2();
    crystal3Value = setCrystal3();
    yourTotal = 0;
    goalNumber = setGoal();

};





// reset(); //runs the reset function to initialize the game or to reset it after a win or loss
console.log("goalNumber= " + goalNumber);
console.log("Crystal 0 value is " + crystal0Value)
console.log("Crystal 1 value is " + crystal1Value)
console.log("Crystal 2 value is " + crystal2Value)
console.log("Crystal 3 value is " + crystal3Value)

}); // *fin* do not delete