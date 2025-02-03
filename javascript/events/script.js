// let button = document.querySelector("button");

// button.onclick = () =>{
//     console.log("button was clicked");
// }

// let div = document.querySelector("div");

// div.onmouseover = () =>{
//     console.log("you are inside the box");
// }


// button.addEventListener("click",()=>{
//     console.log("buttton was clicked - HANDLER 1");
// });

// button.addEventListener("click",()=>{
//     console.log("buttton was clicked - HANDLER 2");
// });


// const HANDLER3 =()=>{
//     console.log("buttton was clicked - HANDLER 3")
// }
// button.addEventListener("click",HANDLER3); 


// button.addEventListener("click",()=>{
//     console.log("buttton was clicked - HANDLER 4");
// });


// button.removeEventListener("click",HANDLER3);




let mybtn = document.querySelector(".mode");
let currmode = "light";

mybtn.addEventListener("click",()=>{
    if (currmode === "light"){
        currmode = "dark";
        let body = document.querySelector("body")
        body.style.backgroundColor = "black";
    }
    else{
        currmode = "light";
        let body = document.querySelector("body")
        body.style.backgroundColor = "white";
    }
    console.log(currmode);
});


