"use strict";
// like a javascript  we can declare a variable here using a keyworf like a 
//let 
//const 
// var 
let studentName = "digambar";
console.log(studentName);
const rollNumber = 6;
var percentages = 80.5;
console.table({ studentName, rollNumber, percentages });
// tpe inference . if you dont provide a types ts automatically assign according to the dta stored in it 
// once type is infered type is locked . not ael to store he other data in it 
//primitive data types 
console.table(["string", "number", "boolean", "null", "undefined", "bigint", "symbol"]);
// special types in the ts 
//any
let flexibleDataty = 10; // any vvalue is allowed no type ssafty
flexibleDataty = "20"; // assigned string but no error 
//unknown
let notsure = 10;
// notsure=notsure+1; // here we cant directl do this beacuse we dont know the datatype so what oerationn we perform int operations or a string opertions . 
// it means i know the value but i dont know the datatype of it . 
// now narrow it dont . we taake any type of data and narrow it doown to a speific 
if (typeof (notsure) === "number") {
    notsure = notsure + 10;
    console.log(notsure);
}
// a unoion means a value can be of a sevveral types 
let score = 100;
score = "500";
console.log(score);
// literal types means the  variable holdes the onl;y specific values 
let direction;
// the direction variable only holds these specific values 
//arrays and a tuples .
let marks = [10, 56, 42];
let names = ["alice", "bob"];
console.log(marks);
