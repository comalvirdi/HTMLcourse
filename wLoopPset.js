
console.log("print all numbers between -10 and 19");
var count = -10;
while (count < 20){
    console.log(count);
    count++
}

console.log("print all even numbers between 10 and 40");
var secCount = 10;
while (secCount < 41){
    console.log(secCount);
    secCount+=2;
}

console.log("print all odd numbers between 300 and 333");
var thrCount = 301;
while (thrCount < 334){
    console.log(thrCount);
    thrCount+=2;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var fourCount = 5;
while (fourCount < 51){
    if (fourCount % 3 === 0){
        console.log(fourCount)
    }
    fourCount +=5
}

