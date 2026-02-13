"use strict";
alert("WELCOME TO ONLINE HAND CRICKET");
let num = 0, i, opbat = 0, total = 0;
let ch = Number(prompt("ENTER 1 FOR CRAZY MODE AND 2 FOR NORMAL MODE"));
const overs = prompt("ENTER THE NUMBER OF OVERS TO BE PLAYED");
const toss = prompt("ENTER H FOR HEADS AND T FOR TAILS");
let op = Math.random() < 0.5 ? "BL" : "BT";
function mybat(overs) {
    for (i = 1; i <= overs * 6; i++) {
        let bowl = Math.floor(Math.random() * 11);
        num = prompt("Enter a number to score in the " + i + "th ball");
        if (num != bowl - 1 && num != bowl + 1) {
            console.log("Scored " + num + " in the " + i + "th ball");
            total = total + Number(num);
        }
        else
            if (i == 1 && (num === bowl - 1 || num === bowl + 1)) {
                console.log("Bowled at 1st ball");
                console.log("Scored 0 runs");
                num = 0;
                break;
            }
            else {
                alert("Bowled");
                console.log("Bowled! at " + i + "th ball");
                break;
            }
    }
}
function mybowl(overs) {
    for (i = 1; i <= overs * 6; i++) {
        let bat = Math.floor(Math.random() * 11);
        num = prompt("Enter a number to to defend the ball");
        if (bat != num - 1 && bat != num + 1) {
            console.log("Scored " + bat +" in "+i+"th ball");
            opbat = opbat + Number(bat);
        }
        else
            if (i == 1 && (num == bat - 1 || num == bat + 1)) {
                console.log("Bowled at 1st ball");
                console.log("Scored 0 runs");
                bat = 0;
                break;
            }
            else {
                alert("Opponent got Bowled");
                console.log("Bowled! at " + i + "th ball");
                break;
            }
    }
}
function normybat(overs){
    for (i = 1; i <= overs * 6; i++) {
        let bowl = Math.floor(Math.random() * 11);
        num = prompt("Enter a number to score in the " + i + "th ball");
        if (num != bowl) {
            console.log("Scored " + num + " in the " + i + "th ball");
            total = total + Number(num);
        }
        else
            if (i == 1 && (num === bowl)) {
                console.log("Bowled at 1st ball");
                console.log("Scored 0 runs");
                num = 0;
                break;
            }
            else {
                alert("Bowled");
                console.log("Bowled! at " + i + "th ball");
                break;
            }
    }
}
function normybowl(overs) {
    for (i = 1; i <= overs * 6; i++) {
        let bat = Math.floor(Math.random() * 11);
        num = prompt("Enter a number to to defend the ball");
        if (bat != num) {
            console.log("Scored " + bat +" in "+i+"th ball");
            opbat = opbat + Number(bat);
        }
        else
            if (i == 1 && (num === bat)) {
                console.log("Bowled at 1st ball");
                console.log("Scored 0 runs");
                bat = 0;
                break;
            }
            else {
                alert("Opponent got Bowled");
                console.log("Bowled! at " + i + "th ball");
                break;
            }
    }
}
let t = Math.random() < 0.5 ? "H" : "T";
switch (ch) {
    case 1:
        if (toss.toUpperCase() == t) {
            alert("you won the toss");
            let choice = prompt("ENTER 1 TO BAT AND 2 TO  BOWL");
            if (choice == 1) {
                console.log("choose to bat first");
                mybat(overs);
                console.log("Target given : " + Number(total+1));
                alert("Target given : " + Number(total+1));
                mybowl(overs);
            }
            else {
                console.log("choose to bowl first");
                mybowl(overs);
                alert("Target to chase : " + Number(opbat+1));
                console.log("Target to chase :" + Number(opbat+1));
                mybat(overs);
            }
            if (total > opbat) { console.log("Won by " + (total - opbat) + " runs"); }
            else
                if (total < opbat) { console.log("Lost by " + (opbat - total) + " runs"); }
                else {
                    console.log("MAtch draw");
                }
        }
        else {
            alert("you lost the toss");
            if (op == "BL") {
                console.log("opponent choice is to bowl first.");
                mybat(overs);
                alert("Target given : " + Number(total+1));
                console.log("Target given : " + Number(total+1));
                mybowl(overs);
            }
            else {
                console.log("opponent choice is to bat first.");
                mybowl(overs);
                alert("Target to chase : " + Number(opbat+1));
                console.log("Target to chase :" + Number(opbat+1));
                mybat(overs);
            }
            if (total > opbat) { console.log("Won by " + (total - opbat) + " runs"); }
            else
                if (total < opbat) { console.log("Lost by " + (opbat - total) + " runs"); }
                else {
                    console.log("MAtch draw");
                }
        }
        break;
    case 2:
        if (toss == t) {
            alert("you won the toss");
            let choice = prompt("ENTER 1 TO BAT AND 2 TO  BOWL");
            if (choice == 1) {
                console.log("choose to bat first");
                normybat();
                console.log("Target given : " + Number(total+1));
                normybowl();
            }
            else {
                console.log("choose to bowl first");
                normybowl();
                console.log("Target to chase :" + Number(opbat+1));
                normybat();
            }
            if (total > opbat) { console.log("Won by " + (total - opbat) + " runs"); }
            else
                if (total < opbat) { console.log("Lost by " + (opbat - total) + " runs"); }
                else {
                    console.log("MAtch draw");
                }
        }
        else {
            alert("you lost the toss");
            if (op == "BL") {
                console.log("opponent choice is to bowl first.");
                normybat();
                console.log("Target given : " + Number(total+1));
                normybowl();
            }
            else {
                console.log("opponent choice is to bat first.");
                normybowl();
                console.log("Target to chase :" + Number(opbat+1));
                normybat();
            }
            if (total > opbat) { console.log("Won by " + (total - opbat) + " runs"); }
            else
                if (total < opbat) { console.log("Lost by " + (opbat - total) + " runs"); }
                else {
                    console.log("MAtch draw");
                }
        }
        break;
    default: console.log("Wrong choice! Try again");
}

