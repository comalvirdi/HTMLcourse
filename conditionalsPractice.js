var age = Number(prompt("How old are you?"))
if (age < 0){
    console.log()
}
if (age === 21){
    console.log("happy 21st birthday!")
}
if(age % 2 === 1 ){
    console.log("your age is odd!")
}
if (Number.isInteger(Math.sqrt(age))) {
    console.log("Perfect Square!")
}