
fullname="anshul gautiyal";
console.log(fullname);
price=367.44;
console.log("the price is ",price);
x=null;
console.log(x);
y=undefined;
console.log(y);

//non primitive (objects)
const profile = {
    fullname: "Anshul gautiyal",
    followers:1000,
    following : 678,
    isFollow: true,
}
console.log(profile);


//operators:
let a=2;
let b=7;

c=a+b;
console.log("a:",a,"& b:",b);

console.log("a + b: ",c);

//Conditional statements
let age=23;
if(age<18){
    console.log("you can vote..");
}
else{
    console.log("you can't vote");
}

//Ternary operator
let height = 185;
let result = height>=170 ? "go to army" : "not go to army";

console.log(result);
