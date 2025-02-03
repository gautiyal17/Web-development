//Asynchronous programming
//three and four ne wait nhi kiya hello ka kyoki ye javascript Asynchronous programming

// console.log("one");
// console.log("two");

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);

// console.log("three");
// console.log("four");




//Callbacks function
// function sum(a,b) {
//     console.log(a + b);
// }

// function calculate(a,b,sum){
//     sum(a,b);
// }

// calculate(1,2,sum);



// Promises 
// let promise = new Promise((resolve, reject) => {
//     console.log("i'm a promise");
//     resolve("success");
// });




// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i'm a promise");
//         resolve(" network success");
//         // reject(" network error");
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// // This will only print when it will get rejected
// promise.catch((err)=>{
//     console.log("rejected has some error",err);
// })





// function getdata(dataId, nextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data is =", dataId);
//             resolve("success");
//             if(nextdata){
//                 nextdata();
//             }
//         },5000);

//     })
// }


// let promise = getdata(234);



// Promise Chain

// 2nd
// function asynchfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("success");
//         },5000);
//     })
// }

// //1st
// console.log("fetching the data.....");

// // 3rd
// let p1 = asynchfunc();
// p1.then((res)=>{
// console.log(res);
// })



// This is the promise chaining...
// function asynchfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asynchfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data 1.....");
// let p1 =  asynchfunc1();
// p1.then((res) =>{
//     console.log("fetching data 2.....");
//     let p2 = asynchfunc2();
//     p2.then((res)=>{

//     })
// });


// Async and Await...

// async function hello(){
//     console.log("hello");
// }


// function getdata(dataId){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success"); //200 means success
//         },2000);
//     });
// };

// async function getalldata(){
//     console.log("fetching all data..");
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);

// }

// getalldata();



//Fetch API
// const URL = "https://cat-fact.herokuapp.com/facts";
// const paragraph = document.querySelector("#para");
// const mybtn = document.querySelector("#btn");


// const getfacts = async () =>{
//     console.log("getting data....")
//     let response = await fetch(URL);
//     console.log(response);//JSON format
//     let data = await response.json();
//     paragraph.innerText = data[4].text;
    
// }

// mybtn.addEventListener("click",getfacts);