// let num=prompt("Enter a number:")
// if(num%5===0){
//     console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"is not a multiple of 5");
// }


let num=prompt("enter the number:");
let grade;

if (num>=90 && num<=100){
    grade="A";
}
else if(num>=70 && num<=90){
    grade="B";
}
else if(num>=60 && num<=69){
    grade="C";
}
else if(num>=50 && num<=60){
    grade="D";
}
else{
    grade="F";
}

console.log("according to your score your grade is:",grade);