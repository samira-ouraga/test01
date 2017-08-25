// console.log('hi there');

/*
var num = '12';

// console.log(num);

// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

// let counter = 1;
// while (counter <= 10) {
//     console.log(counter);
//     if (counter > 5) {
//         counter += 1;
//     } else {
//         counter += 3;
//     }
// }




function reverseThemAll(arr){

var i = arr.length -1;
var j = 0;
while (i>j){
    var tempB = arr[i];
    var tempA = arr[j];

    arr[i] = tempA;
    arr[j] = tempB;
    i--;
    j++  ; 
}
return arr;
}

console.log(reverseThemAll([32,34,13,45,4, 5]));

*/
// here we are moving elts in array to the left and putting 1st elt to last position, so [3,4,5] becomes [4,5,3]
function shifty(arr){
    var lastPosition = arr.length -1; // var is at last position 
    
    var firstPosition = arr[0];

    for (var i=1; i<=lastPosition; i++){// star at 1 because we r movin w take 1st value and put at the end. 
        arr[i-1] = arr[i];
    }
    arr[lastPosition] = firstPosition; 
    return arr;
}

function shiftyN(arr,n){
    for (i=1;i<n;i++){
        shifty(arr)
    }
    return arr;
}

var newArray = [4,6,87,9,98,67];
console.log(shiftyN(newArray,2));