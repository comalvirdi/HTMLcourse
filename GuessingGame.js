var secretNumber = 54

var guess = Number(prompt("Guess a number"));


while(guess !== secretNumber){
    if (guess > secretNumber){
        alert("too high, guess again");
        guess = Number(prompt("Guess Again"))
    }
    else{
        alert("too low, guess again");
        guess = Number(prompt("Guess Again"))
    }
}
alert("You got it right!");