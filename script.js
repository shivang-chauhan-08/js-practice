// 1) Prime Number between 0 to n

// function isPrime(n){
//     if(n <= 1)
//         return false;
//     for(let i=2; i<n; i++){
//         if(n % i == 0)
//             return false;
//     }
//     return true;
// }

// document.getElementById("submit-btn").addEventListener("click", () => {
//     const value = document.getElementById("prime").value;
//     let div = document.getElementById("prime-numbers");
//     div.innerText = "";
// 
//     for(let i=0; i<=value; i++){
//         if(isPrime(i)){
//             div.innerText += i + " ";
//         }
//     }
// });



// 2) odd / even list between 0 to n

// document.getElementById("odd-btn").addEventListener("click", () => {
//     const value = document.getElementById("odd-even").value;
//     let div = document.getElementById("odd-even-numbers");
//     div.innerText = "";

//     for(let i=0; i<=value; i++){
//         if(i % 2 != 0){
//             div.innerText += i + " ";
//         }
//     }
// });

// document.getElementById("even-btn").addEventListener("click", () => {
//     const value = document.getElementById("odd-even").value;
//     let div = document.getElementById("odd-even-numbers");
//     div.innerText = "";

//     for(let i=0; i<=value; i++){
//         if(i % 2 == 0){
//             div.innerText += i + " ";
//         }
//     }
// });



// 3) StopWatch with 3 buttons for start, stop , restart

// let hour = 0;
// let minute = 0;
// let second = 0;
// let interval = null;

// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minute");
// const secondEl = document.getElementById("second");

// function updateDisplay() {
//     hourEl.innerText = hour;
//     minuteEl.innerText = minute;
//     secondEl.innerText = second;
// }

// document.getElementById("start").addEventListener("click", () => {
//     interval = setInterval(() => {
//         second++;

//         if(second === 60){
//             second = 0;
//             minute++;
//         }
//         if(minute === 60){
//             minute = 0;
//             hour++;
//         }
        
//         updateDisplay();
//     }, 1000);
// });

// document.getElementById("stop").addEventListener("click", () => {
//     clearInterval(interval);
//     interval = null;
// });

// document.getElementById("reSet").addEventListener("click", () => {
//     clearInterval(interval);
//     interval = null;

//     second = 0;
//     minute = 0;
//     hour = 0;
//     updateDisplay();
// });



// 4) Traffic Light

// let red = document.getElementById("red");
// let yellow = document.getElementById("yellow");
// let green = document.getElementById("green");
// let counter = 0;

// function displayLight() {
//     red.style.backgroundColor = "grey";
//     yellow.style.backgroundColor = "grey";
//     green.style.backgroundColor = "grey";

//     if(counter == 0){
//         red.style.backgroundColor = "red";
//     }
//     else if(counter == 1){
//         yellow.style.backgroundColor = "yellow";
//     }
//     else{
//         green.style.backgroundColor = "green";
//     }

//     counter = (counter + 1) % 3;
// }

// setInterval(displayLight, 1000);



// 5) Fibonaccie Series

// document.getElementById("submit-btn").addEventListener("click", () => {
//     const value = document.getElementById("fib").value;
//     let div = document.getElementById("fib-series");
//     div.innerText = "";

//     let fib1 = 0;
//     let fib2 = 1;
//     div.innerText += fib1;
//     let fib = fib1 + fib2;
//     for(let i=0; i<value; i++){
//         div.innerText += fib + " ";
//         fib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = fib;
//     }
// });



// 6) every 2 sec, image should change

// let image = document.getElementById("image")
// let current = 0;

// setInterval(() => {
//     if(current == 0){
//         image.src = "images/0.jpg"
//     }
//     else if(current == 1){
//         image.src = "images/1.jpg"
//     }
//     else if(current == 2){
//         image.src = "images/2.jpg"
//     }
//     else if(current == 3){
//         image.src = "images/3.jpg"
//     }
//     current = (current + 1) % 4;

// }, 2000)



// 7) String Operation
// let str = "  Hello World  ";
// console.log(str)
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())
// console.log(str.slice(2, 9))
// console.log(str.substring(2, 9))
// console.log(str.replace("World", "JavaScript"))
// console.log("aa cc bb aa".replaceAll("aa", "cc"))
// console.log("apple,banana,cake".split(","))
// console.log(str.includes("Hello"))      // true
// console.log(str.includes("hello"))      // false
// console.log(str.indexOf("e"))
// console.log(str.indexOf("World"))




// 8) Difference Between Slice & Splice
    // slice(start, end)	                splice(start, deleteCount)
    // Does NOT modify original array	    Modifies original array
    // Returns new array	                Removes / adds elements
    // Used for copying	                    Used for editing

    // start → index to begin (included)    start → index to begin
    // end → index to stop (excluded)       deleteCount → how many elements to remove

    // let arr = [1,2,3,4];

    // console.log(arr.slice(1,3)); 
    // [2,3]
    // original unchanged

    // let newArr = arr.splice(1,3);
    // console.log(newArr)     // it returns [2, 3, 4], which are deleted by splice
    // console.log(arr)        // original array becomes [1]
    // removes [2,3, 4]
    // original becomes [1]    




