$(document).ready(function() {

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


    // diplays wins, losses, goal number and user total 
    winsText.text(wins);
    lossesText.text(losses);
    goalNumberText.text(goalNumber);
    totalNumberText.text(yourTotal);


    // console.log("goalNumber= " + goalNumber);

    // function to set goalNumber to a random value between 19 and 120
    function setGoal() {
        return Math.floor(Math.random() * (120 - 19) + 19); 
    };

    // sets crystal value (for each index in the crystalValues array)
    function setCrystal() {
        return Math.floor(Math.random() * (12 - 1) + 1); 
    };

    // Create crystals for each index in crystalValues array and create a <img> tag with class="crystal-image" and crystal-value-data set to crystalValues[i]. Then, push to the DOM (our original empty crystal-container in the HTML) via .append. whew! :) 
    function demCrystals() {
        for (var i = 0; i < crystalValues.length; i++) {
        var crystalImage = $("<img>");

        crystalImage.addClass("crystal-image");
        crystalImage.attr("src", ("assets/images/crystal-" + [i] + ".png"));
        crystalImage.attr("crystal-value-data", crystalValues[i]);
        $("#crystal-container").append(crystalImage);
    }
    };

    demCrystals();


    // animation effect for the crystal images on mouseenter (don't use hover - deprecated)
        $("#crystal-container").on("mouseenter", ".crystal-image", function() { 
            $(this).addClass("animated pulse") });

        $("#crystal-container").on("mouseleave", ".crystal-image", function() { 
            $(this).removeClass("animated pulse") });  


    // reset function - picks and sets new random values for crystals, kills old crystals & puts new crystals in place, new random goal generated, total reset to 0
    function reset() { 

        crystalValues = [setCrystal(), setCrystal(), setCrystal(), setCrystal()];
       
        $("#crystal-container").empty();

        for (var i = 0; i < crystalValues.length; i++) {

            var crystalImage = $("<img>");
            crystalImage.addClass("crystal-image");
            crystalImage.attr("src", ("assets/images/crystal-" + [i] + ".png"));
            crystalImage.attr("crystal-value-data", crystalValues[i]);
            $("#crystal-container").append(crystalImage);
        }

        yourTotal = 0;
        totalNumberText.text(yourTotal);

        goalNumber = setGoal();
        goalNumberText.text(goalNumber);

        // console.log("reset goal: " + goalNumber);  
    };

    // click event to trigger the next action(s). Also, this event listens to ALL crystals on the page (because they all have the same class...)
    
     // $(".crystal-image").on("click", function(){ this way didn't work - had to use the below line (syntax for event delegation)
        $("#crystal-container").on("click", ".crystal-image", function(){
        var crystalValue = ($(this).attr("crystal-value-data"));
        crystalValue = parseInt(crystalValue);
        console.log("clicked crystal Value= " + crystalValue);
        yourTotal += crystalValue;
        console.log("your Total= " + yourTotal);
        $("#yourTotal").text(yourTotal);

        if (yourTotal === goalNumber) {
            // alert("You WIN!!!");
            wins++;
            winsText.text(wins);
            reset();
        } else if (yourTotal >= goalNumber) {
            // alert("You LOSE!!!");
            losses++;
            lossesText.text(losses);
            reset();
        };
        });

}); // *fin* do not delete