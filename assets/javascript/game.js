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

var goalNumber = setGoal();
var yourTotal = 0;

var wins = 0;
var losses = 0;

var crystalValues = [setCrystal(), setCrystal(), setCrystal(), setCrystal()]
console.log("crystal values array: " + crystalValues);

var winsText = $("#winsAmount");
var lossesText = $("#lossesAmount");
var goalNumberText = $("#goalNumber");
var totalNumberText = $("#yourTotal");

// reset(); //runs the reset function to initialize the game or to reset it after a win or loss


// diplays wins, losses, goal number and user total 
winsText.text(wins);
lossesText.text(losses);
goalNumberText.text(goalNumber);
totalNumberText.text(yourTotal);


console.log("goalNumber= " + goalNumber);
// console.log("Crystal 0 value is " + crystal0Value)
// console.log("Crystal 1 value is " + crystal1Value)
// console.log("Crystal 2 value is " + crystal2Value)
// console.log("Crystal 3 value is " + crystal3Value)

// Create crystals for each index in crystalValues array and create a <img> tag with class="crystal-image" and crystal-value-data set to crystalValues[i]. Then, push to the DOM (our original empty crystal-container in the HTML) via .append. whew! :) 
for (var i = 0; i < crystalValues.length; i++) {
    var crystalImage = $("<img>");

    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", ("assets/images/crystal-" + [i] + ".png"));
    crystalImage.attr("crystal-value-data", crystalValues[i]);
    $("#crystal-container").append(crystalImage);
}

// click event to trigger the next action(s). Also, this event listens to ALL crystals on the page (because they all have the same class...)
$(".crystal-image").on("click", function(){
    //
    var crystalValue = ($(this).attr("crystal-value-data"));
    crystalValue = parseInt(crystalValue);
    console.log("clicked crystal Value= " + crystalValue);
    //
    yourTotal += crystalValue;
    console.log("your Total= " + yourTotal);
    $("#yourTotal").text(yourTotal);

    if (yourTotal === goalNumber) {
        alert("You WIN!!!");
    } else if (yourTotal >= goalNumber) {
        alert("You LOSE!!!");
    };
    });



// function to set goalNumber to a random value between 19 and 120
function setGoal() {
    return Math.floor(Math.random() * (120 - 19) + 19); 
};

// sets crystal value (for each index in the crystalValues array)
function setCrystal() {
    return Math.floor(Math.random() * (12 - 1) + 1); 
};





// function to set crystal values between 1 and 12
// function setCrystal0() {
    // return Math.floor(Math.random() * (12 - 1) + 1); 
// };
// console.log("Crystal 0 value is " + crystal0Value)

// function setCrystal1() {
    // return Math.floor(Math.random() * (12 - 1) + 1); 
// };
// console.log("Crystal 1 value is " + crystal1Value)

// function setCrystal2() {
//     return Math.floor(Math.random() * (12 - 1) + 1); 
// };
// console.log("Crystal 2 value is " + crystal2Value)

// function setCrystal3() {
//     return Math.floor(Math.random() * (12 - 1) + 1); 
// };
// console.log("Crystal 3 value is " + crystal3Value)


// reset function - runs at the beginning and every time the player wins or loses
function reset() {
    // crystal0Value = setCrystal0();
    // crystal1Value = setCrystal1();
    // crystal2Value = setCrystal2();
    // crystal3Value = setCrystal3();
    setCrystal();
    yourTotal = 0;
    goalNumber = setGoal();

};





// reset(); //runs the reset function to initialize the game or to reset it after a win or loss
// console.log("goalNumber= " + goalNumber);
// console.log("Crystal 0 value is " + crystal0Value)
// console.log("Crystal 1 value is " + crystal1Value)
// console.log("Crystal 2 value is " + crystal2Value)
// console.log("Crystal 3 value is " + crystal3Value)

}); // *fin* do not delete