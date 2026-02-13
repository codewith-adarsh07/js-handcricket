'strict';
alert("WELCOME TO ONLINE HAND CRICKET");
let num = 0, runs = 0, rund = 0, i, t, bt, balls, counter;
const ch = prompt("ENTER 1 FOR CRAZY MODE AND 2 FOR NORMAL MODE");
const overs = prompt("ENTER THE NUMBER OF OVERS TO BE PLAYED");
const toss = prompt("ENTER H FOR HEADS AND T FOR TAILS");
t = Math.random() < 0.5 ? "H" : "T";
op = Math.random() < 0.5 ? "BL" : "BT";
if (overs > 0) {
    switch (ch) {
        case '1':
            if (toss.toUpperCase() === t) {
                alert("YOU WON THE TOSS");
                let t1 = prompt("ENTER BT FOR BATTING AND BL FOR BOWLING ").toUpperCase();
                switch (t1) {
                    case 'BT':
                        alert("YOU WON THE TOSS AND CHOOSE TO BAT");
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                runs = runs + Math.pow(num, 2);
                                alert("HITS DOUBLE💥💥");
                                alert(`${Math.pow(num, 2)} IN ${counter + 1} BALL
                            TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                            else
                                if ((num - 1) == i || (num + 1) == i) {
                                    alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                    console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                                    balls = 0;
                                    break;
                                }
                                else {
                                    runs = runs + Number(num);
                                    alert(`${num} RUN IN ${counter + 1} BALL
                                    TOTAL : ${runs} RUNS`);
                                    counter++;
                                }
                        }
                        if (counter === 0) {
                            console.log(`YOU SCORED : 0 RUNS`);
                        }
                        else {
                            console.log(`YOU SCORED : ${runs} RUNS IN ${counter + 1} BALLS`);
                        }
                        alert("TIME TO DEFEND");
                        console.log(`TIME TO DEFEND ${runs + 1} RUNS`);
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                rund = rund + Math.pow(num, 2);
                                alert("OPPONENT HITS DOUBLE💥💥");
                                alert(`${Math.pow(i, 2)} IN ${counter + 1} BALL
                            TOTAL : ${rund} RUNS`);
                                counter++
                            }
                            else
                                if ((num - 1) == i || (num + 1) == i) {
                                    alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                    console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1}  BALL`);
                                    balls = 0;
                                    break;
                                }
                                else {
                                    rund = rund + Number(i);
                                    alert(`${i} RUN IN ${counter + 1} BALL
                                 TOTAL : ${rund} RUNS`);
                                    counter++;
                                }
                        }
                        if (counter === 0) {
                            console.log(`THEY SCORED : 0 RUNS`);
                        }
                        else {
                            console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`);
                        }
                        if (runs > rund) {
                            console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                        }
                        else
                            if (runs == rund) {
                                console.log("MATCH DRAW");
                            }
                            else
                                console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                        break;
                    case 'BL':
                        alert("YOU WON THE TOSS AND CHOOSE TO BOWL");
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                rund = rund + Math.pow(num, 2);
                                alert("OPPONENT HITS DOUBLE💥💥");
                                alert(`${Math.pow(i, 2)} IN ${counter + 1} BALL
                            TOTAL : ${rund} RUNS`);
                                counter++;
                            }
                            else
                                if ((num - 1) == i || (num + 1) == i) {
                                    alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                                    console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                                    balls = 0;
                                    break;
                                }
                                else {
                                    rund = rund + Number(i);
                                    alert(` ${i} RUN IN ${counter + 1} BALL
                            TOTAL : ${rund} RUNS`);
                                    counter++;
                                }
                        }
                        if (counter === 0) {
                            console.log(`THEY SCORED : 0 RUNS`);
                        }
                        else {
                            console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`);
                        }
                        alert("TIME TO CHASE THE TARGET");
                        console.log(`TIME TO CHASE ${rund + 1} RUNS`);
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                runs = runs + Math.pow(num, 2);
                                alert("HITS DOUBLE💥💥");
                                alert(`${Math.pow(i, 2)} IN ${counter + 1} BALL
                             TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                            else
                                if ((num - 1) == i || (num + 1) == i) {
                                    alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                    console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                                    balls = 0;
                                    break;
                                }
                                else {
                                    runs = runs + Number(num);
                                    alert(`${num} RUN IN ${counter + 1} BALL
                                 TOTAL : ${runs} RUNS`);
                                    counter++;
                                }
                        }
                        if (counter === 0) {
                            console.log(`YOU SCORED : 0 RUNS`);
                        }
                        else {
                            console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALL`);
                        }
                        if (runs > rund) {
                            console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                        }
                        else
                            if (runs == rund) {
                                console.log("MATCH DRAW");
                            }
                            else
                                console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                }
            }
            else {
                alert("YOU LOST THE TOSS");
                if (op === "BT") {
                    alert("OPPONENT CHOOSE TO BAT FIRST");
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            rund = rund + Math.pow(num, 2);
                            alert("OPPONENT HITS DOUBLE💥💥");
                            alert(`${Math.pow(i, 2)} IN ${counter + 1} BALL
                        TOTAL : ${rund} RUNS`);
                            counter++;
                        }
                        else
                            if ((num - 1) == i || (num + 1) == i) {
                                alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                                console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                rund = rund + Number(i);
                                alert(`${i} RUN IN ${counter + 1} BALL
                             TOTAL : ${rund} RUNS`);
                                counter++;
                            }
                    }
                    if (counter === 0) {
                        console.log(`THEY SCORED : 0 RUNS`);
                    }
                    else {
                        console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`);
                    }
                    alert("TIME TO CHASE");
                    console.log(`TIME TO CHASE ${rund + 1} RUNS`);
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            runs = runs + Math.pow(num, 2);
                            alert("HITS DOUBLE💥💥");
                            alert(`${Math.pow(num, 2)} IN ${counter + 1} BALL
                        TOTAL : ${runs} RUNS`);
                            counter++;
                        }
                        else
                            if ((num - 1) == i || (num + 1) == i) {
                                alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL
                                 TOTAL : ${runs} RUNS`);
                                balls = 0;
                                break;
                            }
                            else {
                                runs = runs + Number(num);
                                alert(`${num} RUN IN ${counter + 1} BALL
                             TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                    }
                    if (counter === 0) {
                        console.log(`YOU SCORED : 0 RUNS`);
                    }
                    else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                    if (runs > rund) {
                        console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                    }
                    else
                        if (runs == rund) {
                            console.log("MATCH DRAW");
                        }
                        else
                            console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`)
                }
                else {
                    alert("OPPONENT CHOOSE TO BOWL FIRST");
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            runs = runs + Math.pow(num, 2);
                            alert("HITS DOUBLE💥💥");
                            alert(`${Math.pow(num, 2)} IN ${counter + 1} BALL
                        TOTAL : ${runs} RUNS`);
                            counter++;
                        }
                        else
                            if ((num - 1) == i || (num + 1) == i) {
                                alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                runs = runs + Number(num);
                                alert(`${num} RUN IN ${counter + 1} BALL
                                 TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                    }
                    if (counter === 0) {
                        console.log(`YOU SCORED : 0 RUNS`);
                    }
                    else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                    alert("TIME TO DEFEND");
                    console.log(`TIME TO DEFEND ${runs + 1} RUNS`);
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            rund = rund + Math.pow(num, 2);
                            alert("OPPONENT HITS DOUBLE💥💥");
                            alert(`${Math.pow(i, 2)} IN ${counter + 1} BALL
                        TOTAL : ${rund} RUNS`);
                            counter++;
                        }
                        else
                            if ((num - 1) == i || (num + 1) == i) {
                                alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1}  BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                rund = rund + Number(i);
                                alert(`${i} RUN IN ${counter + 1} BALL
                             TOTAL : ${rund} RUNS`);
                                counter++;
                            }
                    }
                    if (counter === 0) {
                        console.log(`THEY SCORED : 0 RUNS`);
                    }
                    else { console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`); }
                    if (runs > rund) {
                        console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                    }
                    else
                        if (runs == rund) {
                            console.log("MATCH DRAW");
                        }
                        else
                            console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                }
            }
            break;
        case '2':
            if (toss.toUpperCase() === t) {
                alert("YOU WON THE TOSS");
                let t2 = prompt("ENTER BT FOR BATTING AND BL FOR BOWLING ").toUpperCase();
                switch (t2) {
                    case 'BT':
                        alert("YOU WON THE TOSS AND CHOOSE TO BAT");
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                runs = runs + Number(num);
                                alert(`${num} RUN IN ${counter + 1} BALL
                                TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                        }
                        if (counter === 0) {
                            console.log(`YOU SCORED : 0 RUNS`);
                        }
                        else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                        alert("TIME TO DEFEND");
                        console.log(`TIME TO DEFEND ${runs + 1} RUNS`);
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                                console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                rund = rund + Number(i);
                                alert(`${i} RUN IN ${counter + 1} BALL
                                TOTAL : ${rund} RUNS`);
                                counter++;
                            }
                        }
                        if (counter === 0) {
                            console.log(`THEY SCORED : 0 RUNS`);
                        }
                        else { console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`); }
                        if (runs > rund) {
                            console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                        }
                        else
                            if (runs === rund) {
                                console.log("MATCH DRAW");
                            }
                            else
                                console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                        break;
                    case 'BL':
                        alert("YOU WON THE TOSS AND CHOOSE TO BOWL");
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                                console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                rund = rund + Number(i);
                                alert(`${i} RUN IN ${counter + 1} BALL
                                TOTAL : ${rund} RUNS`);
                                counter++;
                            }
                        }
                        if (counter === 0) {
                            console.log(`THEY SCORED : 0 RUNS`);
                        }
                        else { console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`); }
                        console.log(`TARGET : ${rund + 1} RUNS IN ${counter} BALLS`);
                        alert("TIME TO CHASE");
                        console.log(`TIME TO CHASE ${rund + 1} RUNS`);
                        counter = 0;
                        balls = overs * 6;
                        for (balls = overs * 6; balls > 0; balls--) {
                            i = Math.floor(Math.random() * 11);
                            num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                            if (num == i) {
                                alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                                console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                                balls = 0;
                                break;
                            }
                            else {
                                runs = runs + Number(num);
                                alert(`${num} RUN IN ${counter + 1} BALL
                                  TOTAL : ${runs} RUNS`);
                                counter++;
                            }
                        }
                        if (counter === 0) {
                            console.log(`YOU SCORED : 0 RUNS`);
                        }
                        else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                        if (runs > rund) {
                            console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                        }
                        else
                            if (runs === rund) {
                                console.log("MATCH DRAW");
                            }
                            else {
                                console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                            }
                }
            }
            else {
                alert("YOU LOST THE TOSS");
                let op = Math.random() < 0.5 ? "BL" : "BT";
                op == "BT" ? alert("OPPONENT CHOOSE TO BAT FIRST") : alert("OPPONENT CHOOSE TO BALL FIRST");
                if (op === "BT") {
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                            console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                            balls = 0;
                            break;
                        }
                        else {
                            rund = rund + Number(i);
                            alert(`${i} RUN IN ${counter + 1} BALL
                            TOTAL : ${rund} RUNS`);
                            counter++;
                        }
                    }
                    if (counter === 0) {
                        console.log(`THEY SCORED : 0 RUNS`);
                    }
                    else { console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`); }
                    console.log(`TARGET : ${rund} RUNS IN ${counter} BALLS`);
                    alert("TIME TO CHASE THE TARGET");
                    console.log(`TIME TO CHASE ${rund + 1} RUNS`);
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                            console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                            balls = 0;
                            break;
                        }
                        else {
                            runs = runs + Number(num);
                            alert(`${num} RUN IN ${counter + 1} BALL
                             TOTAL : ${runs} RUNS`);
                            counter++;
                        }
                    }
                    if (counter === 0) {
                        console.log(`YOU SCORED : 0 RUNS`);
                    }
                    else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                    if (runs > rund) {
                        console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                    }
                    else
                        if (runs === rund) {
                            console.log("MATCH DRAW");
                        }
                        else
                            console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`)
                }
                else {
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            alert(`WICKET
                                      TOTAL : ${runs} RUNS`);
                            console.log(`YOU LOST THE WICKET AT ${counter + 1} BALL`);
                            balls = 0;
                            break;
                        }
                        else {
                            runs = runs + Number(num);
                            alert(`${num} RUN IN ${counter + 1} BALL
                            TOTAL : ${runs} RUNS`);
                            counter++;
                        }
                    }
                    if (counter === 0) {
                        console.log(`YOU SCORED : 0 RUNS`);
                    }
                    else { console.log(`YOU SCORED : ${runs} RUNS IN ${counter} BALLS`); }
                    alert("TIME TO DEFEND");
                    console.log(`TIME TO DEFEND ${runs + 1} RUNS`);
                    counter = 0;
                    balls = overs * 6;
                    for (balls = overs * 6; balls > 0; balls--) {
                        i = Math.floor(Math.random() * 11);
                        num = Number(prompt("ENTER A NUMBER BETWEEN 0 AND 10"));
                        if (num == i) {
                            alert(`WICKET
                                      TOTAL : ${rund} RUNS`);
                            console.log(`HOW'S THAT!!!!! \n OPPONENT LOST THE WICKET AT ${counter + 1} BALL`);
                            balls = 0;
                            break;
                        }
                        else {
                            rund = rund + Number(i);
                            alert(`${i} IN ${counter + 1} BALL
                            TOTAL : ${rund} RUNS`);
                            counter++;
                        }
                    }
                    if (counter === 0) {
                        console.log(`THEY SCORED : 0 RUNS`);
                    }
                    else { console.log(`THEY SCORED : ${rund} RUNS IN ${counter} BALLS`); }
                    if (runs > rund) {
                        console.log(`YOU WON THE MATCH BY  ${runs - rund} RUNS`);
                    }
                    else
                        if (runs === rund) {
                            console.log("MATCH DRAW");
                        }
                        else
                            console.log(`OPPONENT WON THE MATCH BY ${rund - runs} RUNS`);
                }
            }
            break;
        case 'default':
            console.log(`WRONG INPUT REFRESH AND RETRY AGAIN`);
            break;
    }
}
else {
    alert(`NO GAME PLAYED`);
}
let rating = prompt("GIVE US A RATING FOR THIS GAME BETWEEN 1 TO 5");
console.log(`USER GAVE A ${rating}-STAR RATING`);
console.log(`RADHE-RADHE`);
