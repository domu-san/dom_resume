var pOneScore = 0;
var pTwoScore = 0;


const selectionScreen = document.querySelector(".startItems");
const mainPage = document.querySelector(".mainPage");
const scoreBoard = document.querySelector(".scoreBoard")

function rst() {
    document.location.reload(true);
}


document.getElementById("rst").addEventListener("click", rst);

document.getElementById("bestOfThree").addEventListener("click", function() {

    selectionScreen.classList.add("fadeOut");
    mainPage.classList.add("fadeIn");
    document.getElementById("btn").addEventListener("click", ()=>{
    
    var nameOne = document.getElementById("nameOne").value;
    var randNum1 = Math.floor((Math.random() * 6) + 1);
    var diceImageP1 = "p1_" + randNum1 + ".png";
    var diceImageSrc1 = "img/" + diceImageP1;
    document.getElementById("dice1").setAttribute("src", diceImageSrc1);

    //for name two
    var nameTwo = document.getElementById("nameTwo").value;
    var randNum2 = Math.floor((Math.random() * 6) + 1);
    var diceImageP2 = "p2_" + randNum2 + ".png";
    var diceImageSrc2 = "img/" + diceImageP2;
    document.getElementById("dice2").setAttribute("src", diceImageSrc2);

    document.querySelector(".pTwoScore h3").innerHTML = nameTwo + "'s" + " Score"
    document.querySelector(".pOneScore h3").innerHTML = nameOne + "'s" + " Score"
    
    if (randNum1 > randNum2) {
        pOneScore++
        document.getElementById("hdr").innerHTML = pOneScore + " points for " + nameOne;
        
        if (pOneScore === 2){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else{

        }

        document.querySelector(".pOneScore p").innerHTML = pOneScore;
        scoreBoard.classList.add("fadeIn");
    

    } else if (randNum1 < randNum2) {
        pTwoScore++
        document.getElementById("hdr").innerHTML = pTwoScore + " points for " + nameTwo;
         
        if (pTwoScore === 2){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else {

        }

        document.querySelector(".pTwoScore p").innerHTML = pTwoScore;
        scoreBoard.classList.add("fadeIn");
    

    } else {
        document.getElementById("hdr").innerHTML = "It's a tie! Roll Again";
        scoreBoard.classList.add("fadeIn");
    }

    });
   
});

document.getElementById("bestOfFive").addEventListener("click", function() {

    selectionScreen.classList.add("fadeOut");
    mainPage.classList.add("fadeIn");
    document.getElementById("btn").addEventListener("click",()=>{
        var nameOne = document.getElementById("nameOne").value;
    var randNum1 = Math.floor((Math.random() * 6) + 1);
    var diceImageP1 = "p1_" + randNum1 + ".png";
    var diceImageSrc1 = "img/" + diceImageP1;
    document.getElementById("dice1").setAttribute("src", diceImageSrc1);

    //for name two
    var nameTwo = document.getElementById("nameTwo").value;
    var randNum2 = Math.floor((Math.random() * 6) + 1);
    var diceImageP2 = "p2_" + randNum2 + ".png";
    var diceImageSrc2 = "img/" + diceImageP2;
    document.getElementById("dice2").setAttribute("src", diceImageSrc2);

    document.querySelector(".pTwoScore h3").innerHTML = nameTwo + "'s" + " Score"
    document.querySelector(".pOneScore h3").innerHTML = nameOne + "'s" + " Score"
    
    if (randNum1 > randNum2) {
        pOneScore++
        document.getElementById("hdr").innerHTML = pOneScore + " points for " + nameOne;
        
        if (pOneScore === 3){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else{

        }

        document.querySelector(".pOneScore p").innerHTML = pOneScore;
        scoreBoard.classList.add("fadeIn");
    

    } else if (randNum1 < randNum2) {
        pTwoScore++
        document.getElementById("hdr").innerHTML = pTwoScore + " points for " + nameTwo;
         
        if (pTwoScore === 3){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else {

        }

        document.querySelector(".pTwoScore p").innerHTML = pTwoScore;
        scoreBoard.classList.add("fadeIn");
    

    } else {
        document.getElementById("hdr").innerHTML = "It's a tie! Roll Again";
        scoreBoard.classList.add("fadeIn");
    }

    });
 });

document.getElementById("bestOfSeven").addEventListener("click", function() {

    selectionScreen.classList.add("fadeOut");
    mainPage.classList.add("fadeIn");
    document.getElementById("btn").addEventListener("click", ()=>{
        var nameOne = document.getElementById("nameOne").value;
    var randNum1 = Math.floor((Math.random() * 6) + 1);
    var diceImageP1 = "p1_" + randNum1 + ".png";
    var diceImageSrc1 = "img/" + diceImageP1;
    document.getElementById("dice1").setAttribute("src", diceImageSrc1);

    //for name two
    var nameTwo = document.getElementById("nameTwo").value;
    var randNum2 = Math.floor((Math.random() * 6) + 1);
    var diceImageP2 = "p2_" + randNum2 + ".png";
    var diceImageSrc2 = "img/" + diceImageP2;
    document.getElementById("dice2").setAttribute("src", diceImageSrc2);

    document.querySelector(".pTwoScore h3").innerHTML = nameTwo + "'s" + " Score"
    document.querySelector(".pOneScore h3").innerHTML = nameOne + "'s" + " Score"
    
    if (randNum1 > randNum2) {
        pOneScore++
        document.getElementById("hdr").innerHTML = pOneScore + " points for " + nameOne;
        
        if (pOneScore === 4){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else{

        }

        document.querySelector(".pOneScore p").innerHTML = pOneScore;
        scoreBoard.classList.add("fadeIn");
    

    } else if (randNum1 < randNum2) {
        pTwoScore++
        document.getElementById("hdr").innerHTML = pTwoScore + " points for " + nameTwo;
         
        if (pTwoScore === 4){
            alert(nameOne + " Wins!")
            document.querySelector("HTML").addEventListener("click", rst);
        } else {

        }

        document.querySelector(".pTwoScore p").innerHTML = pTwoScore;
        scoreBoard.classList.add("fadeIn");
    

    } else {
        document.getElementById("hdr").innerHTML = "It's a tie! Roll Again";
        scoreBoard.classList.add("fadeIn");
    }

    });

    });

