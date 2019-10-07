function printReverse(arr){
    for (var i = (arr.length - 1); i > -1; i--){
        console.log(arr[i]);
    }
}

printReverse([4,3,2,1]);
printReverse([6,7,8,9,10]);

function isUniform(arr){
    var check = arr[0];
    for (i = 1; i< arr.length; i++) {
        if (arr[i] !== check) {
            return false;
        }
    }
    return true;

}
isUniform([1,1,1]);
isUniform([1,2,2,2]);

function sumArray(arr){
    var total = 0;
    arr.forEach(function(item){
        total += item;
    });
    console.log(total);
}

sumArray([1,1,1]);
sumArray([1,2,3]);

function max(arr){
    var max = arr[0];
    arr.forEach(function(item){
        if (max < item){
            max = item;
        }
    });
    console.log(max)
}

max([1,2,3,4,5]);
max([2,3,6,7,3,10,2,]);