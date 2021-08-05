

// single line comment

/*
multiline comment
*/

// write console log instuction



// CONSTANTS
console.log  ("CONSTANTS :\n");
const a = 2;
console.log  (a);

// VARIABLES  - declare variables and log the values
console.log  ("VARIABLES :\n");

// data types
console.log  ("DATA TYPES :\n");
z =5;
console.log (typeof (z));

z="JAVA SCRIPT";
console.log (typeof (z));

//assignment operators  = , +=, -=, *=, /= etc
console.log  ("ASSIGNMENT OPERATORS :\n");
var x = 5;
console.log (x);

x+=1;
console.log (x);

// write code for other assignment operations


//arithmetic operators  +, -, *, /, %, ** . ++, -- etc
console.log  ("ARITHMETIC OPERATORS :\n");

// comparison operators  > , < , == 
console.log  ("COMPARISION OPERATORS :\n");
p=6; q = 8;
console.log (p>q);
console.log ("\n\n");


// logical operators  &&, || !
console.log  ("LOGICAL OPERATORS :\n");
p=2;q=0;
console.log (p > 1 && q >1);
console.log (p > 1 || q >1);
console.log (p !=0);
console.log ("\n\n");

// if -then-else  - write an example
console.log  ("CONDITIONAL PROGRAMMING :\n");

//arrays
console.log  ("ARRAYS :\n");
arr1 = [8,2,3,7];
console.log (arr1);
arr1.push(4,5)
console.log (arr1);
arr1.pop ();
console.log (arr1+"\n\n");

// for in loop
console.log  ("FOR IN LOOP :\n");
for (i in arr1)
    console.log (arr1[i]);

console.log ("\n\n");
// for loop  from 1 to 10
console.log  ("FOR  LOOP :\n");

console.log ("\n\n");

// while loop
console.log  ("WHILE LOOP :\n");
var x = 5;
while (x>0) {
    console.log (x);
    x-=1;
 
}

// function
console.log ("\n\n");
console.log  ("FUNCTION :\n");
// write  a function add to add 2 numbers and return sum
console.log ("CLASS");

//class
class rectangle {
    constructor (x,y, w, h){
        // properties
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.color = 'red';
    }

    // methods
    show () {
        fill (this.color);
        stroke (10);
        rect (this.x, this.y, this.width, this.height);
        
    }
}
var rect1 ;
function setup () {
    rect1 = new rectangle (100,100, 50,100);
}
function draw () {

    rect1.show ();
}