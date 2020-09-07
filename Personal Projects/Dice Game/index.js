function rst(){
	document.location.reload(true);
}

function diceGame() {
    var nameOne = document.getElementById("nameOne").value;
    var nameTwo = document.getElementById("nameTwo").value;

    var randNum2 = Math.floor((Math.random() * 6) + 1);
    var randNum1 = Math.floor((Math.random() * 6) + 1);

    var diceImageP1 = "p1_" + randNum1 + ".png";
    var diceImageP2 = "p2_" + randNum2 + ".png";

    var diceImageSrc1 = "img/" + diceImageP1;
    var diceImageSrc2 = "img/" + diceImageP2;
    
    document.getElementById("dice1").setAttribute("src", diceImageSrc1);
    document.getElementById("dice2").setAttribute("src", diceImageSrc2);

    if (randNum1 > randNum2) {
        document.getElementById("hdr").innerHTML = nameOne + " wins";
    } else if (randNum1 < randNum2) {
        document.getElementById("hdr").innerHTML = nameTwo + " wins";

    } else {
    	document.getElementById("hdr").innerHTML ="It's a tie! Roll Again";
    }
}

    document.getElementById("btn").addEventListener("click", diceGame);

    document.getElementById("rst").addEventListener("click", rst);
