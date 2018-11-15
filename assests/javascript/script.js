alert("Welcome Too The World of Diamonds Baby")
// creat an array of crystal image links
var crystalImages = ["./assests/images/diamond.jpg", "./assests/images/purple rain.jpg", "./assests/images/mount tola.jpg", "./assests/images/city of diamonds.jpg"];
function creatCrystals() {
    $("#images").empty();
}
// Solution will be held here.
var choosenNum = "";
//  userNum is the ongoing sum of gem values user has picked
var userNum = [];
//  initialize global variables and game counter
var wins = 0;
var losses = 0;
var gemOneValue = creatCrystals[0];
var gemTwoValue = creatCrystals[1];
var gemThreeValue = creatCrystals[2];
var gemFourValue = creatCrystals[3];
// randomComputerNumber will pick a number between 19 and 120
var randomComputerNumber = 19 + Math.floor(Math.random() * 102);

// startGame()  
// Game restarts win player win or loses
function startGame() {
    // This does nothing. If you're trying to call your creatCrystals function, you do that like "creatCrystals();" but Idk what you're trying to get out of that function since all it does is delete your crystal images from your webpage
    userNum = creatCrystals[Math.floor(Math.random() * crystalImages.length)];
    // Reset the guesses back to 0.
    // Solution is chosen randomly from randomComputerNumber

    //loop through the array of image link
    // choose random number for each crystalImages
    crystalImages.forEach(function (imageurl, index) {
        // Don't know how this works, but if you look at my js, you'll see how I assign my pictures values at the top of my js
        // for each one:
        // create a new 'img' element
        var crystal = $("<img>");
        // set src equal to crystal image link
        crystal.attr("src", imageurl)
        // set random value (points value)
        crystal.attr("data-points", Math.floor(Math.random() * 12) + 1);
        // add unqiue id
        crystal.attr("id", "crystal-" + (index + 1));
        // add class        
        crystal.addClass("crystal");
        // put the crystal image on the page
        $("#images").append(crystal)
    });
}
$(document).on("click", ".crystal", function () {
    // "this" does nothing since you are in a window; you are not in an object, reference your code here
    console.log(this);
    var crystalVal = $(this).attr("data-points");
    alert(crystalVal);
})
// set initial value of user's ongoing gem selections sum to 0
// This contradicts earlier, when you set userNum = to an image in your array; I assume that was a mistake
userNum = 0;
// update the html for the game board
$("#winsNum").html("Wins: " + wins);
$("#lossesNum").html("Losses: " + losses);
$("#randomNumber").html(randomComputerNumber);
$("#userScore").html(userNum);
consoleLogVariables();

// function to check if user has won or lost
// increment wins / losses in either case
// and then re-initialize variables for new round
// if user hasn't won or lost then nothing happens
function hasUserWonOrLost() {
    // check if user has lost
    if (userNum > randomComputerNumber) {
        losses++;
        console.log("User Lost");
        alert("This shit crazy right");
        initializeVariables();
    }
    // check if user has won
    if (userNum == randomComputerNumber) {
        wins++;
        console.log("User Won");
        alert(" It good to be this lucky!");
        initializeVariables();
    }
}
// debugging functionality function
function consoleLogVariables() {
    console.log("wins: " + wins + " losses: " + losses);
    console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
    console.log("randomComputerNumber: " + randomComputerNumber + " userNum: " + userNum);
    console.log("----------------------------------");
}
// initializeVariables(); you don't have this function, so I took it out from the above function and commented it out, obviously

// listen for clicks on any of the gems by targeting the gem class
$(".gem").on("click", function () {
    // each gem has a value attribute of gem1, gem2, gem3, or gem 4
    // use this attribute to identify which gem the user actually clicked
    // "this" does nothing because you are not in an object, but a function
    var pressed = $(this).attr("value");
    console.log(pressed);
    // add the value of the gem to the user's ongoing score tally
    if (pressed == "gem1") {
        userNum += gemOneValue;
    } else if (pressed == "gem2") {
        userNum += gemTwoValue;
    } else if (pressed == "gem3") {
        userNum += gemThreeValue;
    } else if (pressed == "gem4") {
        userNum += gemFourValue;
    } else {
        console.log("error");
    }
    // then update the html for the user score
    $("#userScore").html(userNum);
    consoleLogVariables();
    // call the function to see if user has won or lost
    hasUserWonOrLost();
});
startGame();