//isEven returns whether or not a function is even
function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


// factorial returns the factorial of a number
function factorial(num){
    var total = 1;
    for (var i = num; i > 0; i--){
        total *= i
    }
    return total
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(kebCaseStr){
    var snakeCase = '';
    for (var i = 0; i < kebCaseStr.length; i++){
        if (kebCaseStr[i] === '-'){
            snakeCase += '_'
        }
        else{
            snakeCase+= kebCaseStr[i]
        }
    }
    return snakeCase
}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));



function sing(){
    console.log("twinkle, twinkle ...");
    console.log("how i wonder...");
}

//setInterval(sing, 1000);