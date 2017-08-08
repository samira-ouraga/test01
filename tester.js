/*
console.log('hi,youuuu!')

var num = 12;


console.log(num); 
for (var i=0; i<10 ; i++){ for loop is used if I know how many times i will loop
    console.log (i);
}
let i = 0;
while ( i < 10){
    console.log(i++);
}

for (var i=0; i<= 100; i= i+ 3){
    console.log(i);
}

let i=0;
while (i<= 1000){
    console.log( i+=3);
}
for ( i =1; i<=100; i++){
    if (i%5 ===0){
        console.log("divisible by 5");
    }
    if (i%4 === 0){
        console.log("divisible by 4");
    }
    else if (i%5 !== 0 && i%4 !==0){
        console.log(i);
    }
function leapYear(){
for (var i=0; i<=2017; i++){
    if (i%4){
        console.log(i+"leap year");
    }
    else  (i%100 && i%400!==0){
        console.log(i+"not a leap year");
   
}
}
leapYear();

console.log("Leap Year");
for (var i = 0; i <= 2017; i++) {
   if (i % 4 ===0) {
       if (i % 100 ===0) {
           if (i % 400 === 0) {
               console.log(i + "is a leap year");
           }
       } else {
           console.log(i);
       }
   }
}

function createArr(arr){
    var arr = [];
    for (var i =1; i<=255; i++){
        arr[i-1]=i;
    }
    console.log(arr);
}
createArr();

function addingArr(arr){
    var theSum =0;
    for (var i=0; i< arr.length; i++){
        theSum +=arr[i];
    }
    return theSum;
}
console.log(addingArr([2,3,4,5,6,78]));
}*/
function addingArr(arr){
    var theSum =0;
    var number;
    for (var i=0; i< arr.length; i++){
        if (typeof arr[i]=== number){
        theSum +=arr[i];
        }
    else{
        console.log("bohoo bohoo try again!")
    }
    }
    return theSum;
}
console.log(addingArr([2,3,4,"5",6,"t",78]));

