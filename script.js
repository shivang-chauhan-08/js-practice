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



// 10) Factorial of a number

// document.getElementById("fact-btn").addEventListener("click", () => {
//     const value = document.getElementById("fact-input").value;

//     let fact = 1;
//     for(let i=value; i>0; i--){
//         fact *= i;
//     }

//     document.getElementById("fact").innerText = "Factorial : " + fact;
// })



//  11) Palindrome or not

// document.getElementById("palindrome-btn").addEventListener("click", () => {
//     let str = document.getElementById("palindrome-input").value.toString();
//     let revStr = "";

//     for(let i=str.length-1; i>=0; i--){
//         revStr += str[i];
//     }
    
//     if(str == revStr)
//         document.getElementById("palindrome").innerText = "Palindrome ? True";
//     else
//         document.getElementById("palindrome").innerText = "Palindrome ? False";
// })

// 12) Todo List App

// document.getElementById("todo-btn").addEventListener("click", () => {
//     const todo = document.getElementById("todo-input").value;
//     document.getElementById("todo-input").value = "";

//     let list = document.getElementById("todo");
//     let liElement = document.createElement("li");
//     liElement.innerText = todo;
//     list.appendChild(liElement);
// })


// 13) Live Search Filter

// const items = [
//   "apple", "alien", "amazon", "banana", "ball",
//   "cat", "car", "dog", "elephant", "fish"
// ];

// const searchInput = document.getElementById("search");
// const results = document.getElementById("results");

// searchInput.addEventListener("input", () => {
//     const value = searchInput.value.toLowerCase();

//     results.innerHTML = "";

//     const filtered = items.filter(item => item.toLowerCase().includes(value));

//     filtered.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item;
//         results.appendChild(li);
//     });
// })



// 14) Debounced Live Search

// const searchInput = document.getElementById("search");
// const results = document.getElementById("results");

// const items = [
//   "apple", "alien", "amazon", "banana", "ball",
//   "cat", "car", "dog", "elephant", "fish"
// ];

// function debounce(fn, delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn();
//         }, delay);
//     }
// }

// function showResults(){
//     const value = searchInput.value.toLowerCase();
//     results.innerHTML = "";
//     const filtered = items.filter(item => item.toLowerCase().includes(value));
//     filtered.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item;
//         results.appendChild(li);
//     });
// }

//searchInput.addEventListener("input", debounce(showResults, 500))


// 15) Remove Duplicate from Array

// const nums = [2, 2, 3, 4, 4, 5, 1];

// function getUnique(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(getUnique(nums));


// 16) Using reduce, transform this into:
        // {
        //      22: ["Shiv", "Raj", "Pooja"],
        //      25: ["Amit", "Neha"]
        // }

// const users = [
//   { name: "Shiv", age: 22 },
//   { name: "Amit", age: 25 },
//   { name: "Raj", age: 22 },
//   { name: "Neha", age: 25 },
//   { name: "Pooja", age: 22 }
// ];

// const grouped = users.reduce((acc, user) => {
//     if(!acc[user.age]){
//         acc[user.age] = [];
//     }
//     acc[user.age].push(user.name);

//     return acc;
// }, {});

// console.log(grouped);


// 17) Using reduce, return:
        // {
        //   Shiv: 1200,
        //   Amit: 400,
        //   Raj: 200
        // }

// const orders = [
//   { id: 1, user: "Shiv", amount: 500 },
//   { id: 2, user: "Amit", amount: 300 },
//   { id: 3, user: "Shiv", amount: 700 },
//   { id: 4, user: "Raj", amount: 200 },
//   { id: 5, user: "Amit", amount: 100 }
// ];

// const grouped = orders.reduce((acc, order) => {
//     if(!acc[order.user]){
//         acc[order.user] = 0;
//     }
//     acc[order.user] += order.amount;

//     return acc;
// }, {});

// console.log(grouped);


// 18) From the same orders array, return :
        // [
        //      { user: "Shiv", total: 1200 },
        //      { user: "Amit", total: 400 },
        //      { user: "Raj", total: 200 }
        // ]

// const orders = [
//   { id: 1, user: "Shiv", amount: 500 },
//   { id: 2, user: "Amit", amount: 300 },
//   { id: 3, user: "Shiv", amount: 700 },
//   { id: 4, user: "Raj", amount: 200 },
//   { id: 5, user: "Amit", amount: 100 }
// ];        

// const grouped = orders.reduce((acc, { user, amount }) => {
//     if (!acc[user]) {
//       acc[user] = { user, total: 0 };
//     }

//     acc[user].total += amount;

//     return acc;
//   }, {})

// console.log(grouped)


// 19) Fetch users from API (use async/await), Filter only users with age >= 18
// Map them into <li> elements, Render inside #userList, Handle errors properly

// (async function loadUsers(){
//     try{
//         const users = [
//             { id: 1, name: "Shiv", age: 22 },
//             { id: 2, name: "Amit", age: 17 },
//             { id: 3, name: "Neha", age: 25 }
//         ];

//         const filtered = users.filter(user => user.age >= 18).map(user => `
//                 <li>${user.name} - ${user.age}</li>
//             `).join("");

//         document.getElementById("userList").innerHTML = filtered;
//     }
//     catch(e){
//         console.log(e);
//     }
// })();


// 20) Dynamic Product Filter + Total Price

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Phone", price: 20000 },
//   { id: 3, name: "Tablet", price: 15000 },
//   { id: 4, name: "Camera", price: 30000 }
// ];

// let list = document.getElementById("productList");
// let price = document.getElementById("total");
// function renderProducts(arr){
//     list.innerHTML = "";
//     price.innerText = "";
//     arr.forEach(element => {
//         let li = document.createElement("li");
//         li.innerText = element.name;
//         list.appendChild(li);
//         price.innerText += element.price;
//     });
// };
// renderProducts(products);

// document.getElementById("search").addEventListener("input", () => {
//     let value = document.getElementById("search").value.toLowerCase();

//     let filtered = products.filter(item => item.name.toLowerCase().includes(value));

//     renderProducts(filtered);
// });


// 21) Counter App With Limit

// let inc = document.getElementById("inc")
// let des = document.getElementById("dec")
// let reset = document.getElementById("reset")
// let counter = document.getElementById("count")
// let count = 0;

// inc.addEventListener("click", () => {
//         if(count == 10){
//                 return;
//         }
//         count++;
//         counter.innerText = count;
// });

// des.addEventListener("click", () => {
//         if(count == 0){
//                 return;
//         }
//         count--;
//         counter.innerText = count;
// });

// reset.addEventListener("click", () => {
//         count = 0;
//         counter.innerText = count;
// });


// 22) Find Longest word from given string

// let str = "JavaScript is the best language in the world";
// let longest = "";
// let words = str.split(" ");

// for(let i=0; i<words.length; i++){
//         if(words[i].length > longest.length){
//                 longest = words[i];
//         }
// }

// console.log(longest);


// 23) Live Character Counter
// let counter = document.getElementById("count");

// document.getElementById("message").addEventListener("input", () => {
//         let value = document.getElementById("message").value.length;
//         counter.innerText = value;
// });


// 24) Reverse Each Word (Not Whole String)
// let str = "hello world js";
// let words = str.split(" ");

// for(let j=0; j<words.length; j++) {
//         let rev = "";
//         for(let i=words[j].length-1; i>=0; i--){
//                 rev += words[j][i];
//         };
//         words[j] = rev;
// };

// let revStr = words.join(" ");
// console.log(revStr);


// 25) Move All Zeros to End

// let nums = [0, 1, 0, 3, 12];
// let count = 0;
// let newNums = [];

// for(let i=0; i<nums.length; i++){
//         if(nums[i] === 0){
//                 count++;
//                 continue;
//         }
//         newNums.push(nums[i]);
// }       

// for(let i=0; i<count; i++){
//         newNums.push(0);
// }

// console.log(newNums);


// 26) Find Second Largest Number

// let nums = [10, 5, 20, 8, 20];

// let uniqueNums = nums.filter((num, index) => nums.indexOf(num) === index);
// let max = uniqueNums[0];
// let index = 0;

// for(let i=1; i<uniqueNums.length; i++){
//         if(uniqueNums[i] > max){
//                 max = uniqueNums[i];
//                 index = i;
//         }
// }

// uniqueNums[index] = 0;
// max = uniqueNums[0]

// for(let i=1; i<uniqueNums.length; i++){
//         if(uniqueNums[i] > max)
//                 max = uniqueNums[i];
// }

// console.log(max);


// 27) Create a btn that changes div between flex row & column

// let btn = document.getElementById('btn');
// let container = document.getElementById('container');

// btn.addEventListener("click", () => {
//         if(container.style.flexDirection == "column")
//                 container.style.flexDirection ="row"
//         else
//                 container.style.flexDirection ="column"
// })


// 28) Divide the div into given number

// let btn = document.getElementById("btn");
// let right = document.getElementById("right");
// let inp = document.getElementById("inp");

// btn.addEventListener("click", () => {

//     let n = Number(inp.value);

//     if(n <= 0){
//         alert("Enter valid number");
//         return;
//     }

//     let width = right.clientWidth;

//     if(width % n !== 0){
//         alert("Div cannot be divided equally");
//         return;
//     }

//     right.innerHTML = "";   // clear previous parts

//     let partWidth = width / n;

//     for(let i = 0; i < n; i++){
//         let div = document.createElement("div");
//         div.classList.add("part");
//         div.style.width = partWidth + "px";
//         right.appendChild(div);
//     }
// });


// 29) Check if the number is Armstrong or not ???

// document.getElementById("btn").addEventListener("click", () => {
//         let value = document.getElementById("inp").value.toString();
//         let arr = value.split('');
//         let sum = 0;
//         for(let i=0; i<arr.length; i++){
//                 let num = 1;
//                 for(let j=0; j<arr.length; j++){
//                         num *= Number(arr[i]);
//                 }
//                 sum += num; 
//         }
//         if(sum === Number(value)){
//                 alert("Armstrong");
//         }
//         else{
//                 alert("faaaaaaaaaaa");
//         }
// })


// 30) Check if the number is Anagram or not ???

// document.getElementById("btn").addEventListener("click", () => {
//         let val1 = document.getElementById("inp1").value.toLowerCase();
//         let val2 = document.getElementById("inp2").value.toLowerCase();
        
//         let value1 = val1.split('').sort().join('');
//         let value2 = val2.split('').sort().join('');

//         if(value1 === value2){
//                 alert("Anagram");
//         }
//         else{
//                 alert("faaaaaaaaaaa");
//         }
// })


// 31) FizzBuzz
//      Rules:
//      divisible by 3 → Fizz
//      divisible by 5 → Buzz
//      divisible by both → FizzBuzz

// document.getElementById("btn").addEventListener("click", () => {
//   let value = document.getElementById("inp").value;
//   let list = document.getElementById("list");
//   list.innerText = "";

//   for(let i=1; i<=value; i++){
//     let li = document.createElement("li");
//     if(i % 3 === 0 && i % 5 === 0){
//       // fizz-buzz
//       li.innerText = "Fizz-Buzz";
//     }
//     else if(i % 3 === 0){
//       // fizz
//       li.innerText = "Fizz";
//     }
//     else if(i % 5 === 0){
//       // buzz
//       li.innerText = "Buzz";
//     }
//     else{
//       li.innerText = i;
//     }
//     list.appendChild(li);
//   }
// })


// 32) Count Character Frequency

// const str = "hello";
// let freq = {};

// for(let char of str){
//   freq[char] = (freq[char] || 0) + 1;
// }

// console.log(freq);


// 33) Flatten Array

// let arr = [1,[2,3],[4,[5]]];

// console.log(arr.flat(Infinity));

// or

// console.log(arr.reduce((acc, curr) => {
//   return acc.concat(curr);
// }, []));

// or

// console.log(arr.flat(Infinity));

// function flatten(arr) {
//     let result = [];

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             result = result.concat(flatten(item));
//         } else {
//             result.push(item);
//         }
//     }

//     return result;
// }

// console.log(flatten(arr));


