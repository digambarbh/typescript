// interface is a way to defining a object 
interface User{
    id:number,
    name:string,
    phone:number
}

let u1:User={id:10,name:"digambar",phone:8261908822};

console.log(u1);

//readonly arrays 

let arr:readonly number[]=[1,4,5,8]

// Array methods 
//push() method to add 
//pop()     remove last 
//map()     transform each element and return a new array 
//filter()  keeps element that passes a condition and returns a new arrya . may be shorter 
//reduce ()      combines a all element into a one array (sum , max )
//foreach ()    traverse array its just a advanced versionn of the for loop 
//includes ()  it checks a if the value appears in the array or not . returns a boolean values 
