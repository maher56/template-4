//___________ 7 ___________//
/**
 * Output To Screen 
 * * window.alert() -> show alert massage in the page
 * * document.write() -> write on the main page
 * * console.log() -> wite on console
 */
// window.alert(`hello maher sefo`);
// document.write(`<h1> hello world :( </h1>`);
// document.write(`learning Js`);
// console.log(`learning Js`);
//___________ 8 ___________//
/**
 * Console Methods
 * * log
 * * error
 * * table
 * Styling Console
 * * Directive %c
 * API application programming interface {search about it}
 */
// console.log(`log`);
// console.error(`error`);
// console.table(["Osama" , "Ahmed" , "Sayed"]);
// console.log(`Hello %cFrom %cJS File` , `color: red` , `color: blue ; font-size: 18px`);
//___________ 9 ___________//
/**
 * EcmaScript 6 
 * * ES6
 */
// var myName = "Osama"
// console.log("Hello " + myName); // old way
// console.log(`hello ${myName}`); // new way
//___________ 10 ___________//
/**
 * Data Types Intro
 * * string 
 * * number
 * * array
 * * object
 * * boolean
 * * undefined
 * * null
 */
// console.log(typeof `maher sefo`);
// console.log(typeof `5000`);
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10 , 15 , 17]);
// console.log(typeof [`os` , `ma` , `kh`]);
// console.log(typeof {name: `maher` , age: 18 , country: `syria`});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
//___________ 11 ___________//
/**
 * varibales Intro 
 */
// if i write Id in HTML code i can use it here a global variable
//___________ 13 ___________//
/**
 * type of variables
 * * var
 * * * Redeclare (Yes)
 * * * Access Before Declare (undefined)
 * * * Variable Scope Drama [Added To Window] (Yes)
 * * * Block or function Scope
 * * let
 * * * Redeclare (No => Error)
 * * * Access Before Declare (Error)
 * * * Variable Scope Drama [Added To Window] (No)
 * * * Block or function Scope
 * * const
 * * * Redeclare (No => Error)
 * * * Access Before Declare (Error)
 * * * Variable Scope Drama [Added To Window] (No)
 * * * Block or function Scope
 */
// var a = 1;
// var a = 2
// console.log(a);

// let a = 1;
// let a = 2;
// console.log(a);

// const a = 1;
// a += 1;
// const a = 2;
// console.log(a);

// console.log(a);
// var a = 1;

// console.log(a);
// let a = 1;

// console.log(a);
// const a = 1;

// var ab = 1;
// let abb = 1;
// const abbb = 1;
//___________ 14 ___________//
/**
 * String syntax + Character EScape Sequences
 * \Escape + line continue
 * \n
 */
// console.log(`maher s\efo`);
// console.log("maher \
// sef \
// alden");
// console.log(`maher 
// sef 
// alden`) // ES6
//___________ 15 ___________//
// let a = `we love` , b = `Java Script`;
// a += ' ' + b;
// console.log(a);
// console.log(b , b);
//___________ 16 ___________//
/**
 * Template Literals (Template Strings)
 */
// let a = "we love" , b = "JavaScript" , c = "And" , d = "programming";
// console.log(a + " " + b + " " + c + " " + d);
// console.log(`${a} ${b} ${c} ${d}`); 
// function createcard (a) {
//     document.write(`
//     <div class = "card">
//         <div class = "child">
//             <h2>Title</h2>
//             <p>welcome Mr.${a}</p>
//         </div>
//     </div>`);
// };
// createcard("maher")
//___________ 17 ___________//
// variable and Concatenation Challenge
//___________ 18 ___________//
// Arithmetic Operators
//___________ 19 ___________//
/**
 * + unary Plus [Return Number If Its Not Number]
 * - unary Negation [Return Number If Its Not Number + Negates It]
 * * Tests 
 * * * Normal Number
 * * * String Number
 * * * String Negative Nmuber
 * * * String Text
 * * * Float
 * * * Hexadicmal Numeral System =>
 * * * null
 * * * fals
 * * * true
 */
// console.log(+100);
// console.log(+`100`);
// console.log(+`-100`);
// console.log(+`maher`);
// console.log(+`15.5`);
// console.log(+0xFF);
// console.log(+`0xFF`);
// console.log(+null)
// console.log(+true)
// console.log(+false)
//___________ 20 ___________//
// Casting
//___________ 21 ___________//
// Assignment Operators
//___________ 22 ___________//
// Operators Challenges
//___________ 23 ___________//
/**
 * Number
 * * Syntactic Suger "_"
 * * e
 * * **
 * * With Decimal
 * * Number + BigInt
 * * Number Min Value
 * * Number Max Value
 */
// console.log(100000000);
// console.log(100_000_000);
// console.log(1e8);
// console.log(10 ** 8);
// console.log(100000000.00);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
//___________ 24 ___________//
/**
 * Number Methods
 * * Two Dots To Call A Methods
 * * toString()
 * * toFixed()
 * * parseInt()
 * * ParseFloat()
 * * isInteger()
 * * is NaN()
 */
// console.log((100).toString());
// console.log(100.01.toString());
// console.log(100..toString());
// console.log(100.55555.toFixed(2));
// console.log(parseInt("100"));
// console.log(parseInt("100sws"));
// console.log(parseInt("10sa0sws"));
// console.log(parseFloat("100.243"));
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.22));
// console.log(Number.isInteger(100));
// console.log(Number.isNaN(100));
// console.log(Number.isNaN("100"));
// console.log(Number.isNaN("asd" / 20));
//___________ 25 ___________//
/**
 * Math Object
 * * round()
 * * ceil()
 * * floor()
 * * min()
 * * max()
 * * pow()
 * * random()
 * * trunc() [ES6]
 */
// console.log(Math.min(1 , 3 , 5 , 01 , -1));
// console.log(Math.max(1 , 3 , 5 , 01 , -1));
// console.log(Math.pow(3, 2));
// console.log(Math.random());
// console.log(Math.trunc(88.4));
// console.log(Math.trunc(88.9));
//___________ 26 ___________//
// number Challenge
//___________ 27 ___________//
/**
 * String Methods part 1
 * * Access With Index
 * * Access With charAt()
 * * length
 * * trim()
 * * toUpperCase()
 * * toLowerCase()
 * * Chain Methods
 */
// let theName = `Ahmed`;
// console.log(theName[0]);
// console.log(theName[5]);
// console.log(theName.charAt(5));
// console.log(theName.length);
// theName = `maher sef alden  `;
// console.log(theName.length);
// console.log(theName.trim().length);
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.toUpperCase().charAt(theName.trim().length - 1));
//___________ 28 ___________//
/**
 * String Methods part 2
 * * indexOf(value [Mand] , start [Opt] 0)
 * * lastIndexOf(value [Mand] , start [Opt] length)
 * * slice(start [Mand] , End [Opt] length {not Include End})
 * * repeat(Times) [ES6]
 * * solit(Separator [Opt] , Limit [Opt])
 */
// let a = `Elzero Web School`;
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web" , 8));
// console.log(a.lastIndexOf("Web"));
// console.log(a.lastIndexOf("Web" , 6));
// console.log(a.slice());
// console.log(a.slice(2 , 5));
// console.log(a.slice(-4));
// console.log(a.slice(-4 , -2));
// console.log(a.repeat(5));
// console.log((a + " | ").repeat(5));
// console.log(a.split());
// console.log(a.split(""));
// console.log(a.split("" , 4));
//___________ 29 ___________//
/**
 * String Methods part 3
 * * substring(start [Mand] , End [Opt] , Not Inluding End)
 * * * if(start > End) Will Swap
 * * * if(start < 0) it become 0 
 * * * use Length To Get Last Character 
 * * substr(start [Mand] , Characters To Extract)
 * * * if(start >= length) => ""
 * * * Negative Start From End
 * * Includes(value [Mand] , Start [Opt] 0) [ES6]
 * * starstWith(value [Mand] , Start [Opt]  0) [ES6]
 * * endswith(value [Mand] , length [Opt] length ) [ES6]
 */
// let a = `Elzero Web School`;
// console.log(a.substring(2 , 9));
// console.log(a.substring(9 , 2));
// console.log(a.substring(-10 , 6));
// console.log(a.substr(4));
// console.log(a.substr(4 , 6));
// console.log(a.substr(-4));
// console.log(a.substr(-4 , 2));
// console.log(a.includes("Web"));
// console.log(a.includes("Web" , 9));
// console.log(a.startsWith("Elzero"));
// console.log(a.startsWith("Elzero" , 1));
// console.log(a.endsWith("Elzero"));
// console.log(a.endsWith("Elzero" , 6));
//___________ 30 ___________//
// String Challenge
//___________ 31 ___________//
// Comparison Operators
//___________ 32 ___________//
// logical Operators
//___________ 33 ___________//
// if Conditions
//___________ 34 ___________//
// Nested if Conditions
//___________ 35 ___________//
// Conditional Ternary Operator
//___________ 36 ___________//
/**
 * Logical Or ||
 * * Null + Undefined + Any Falsy Value
 * Nullish Coalescing Operator ??
 * * Null + Undefined
 */
// let price = null;
// let price = undefined;
// let price = 0;
// console.log(`the Price Is ${price || "free"}`);
// console.log(`the Price Is ${price ?? "free"}`);
//___________ 37 ___________//
// if Condition Challenge
//___________ 38 ___________//
// switch Statement
//___________ 39 ___________//
// switch & if Condition Challenges
//___________ 40 ___________//
/**
 * Arrays
 * * Create Arrays [Two Methods] new Array() + []
 * * Access Arrays Elements
 * * Nested Arrays
 * * Change Arrays Elements
 * * Check For Array Array.isArray(arr)
 */
// let arr = [1 , 3 , 5 , "maher" ,["sayed" , "ali" , 'marwan'] ,  "sa"];
// console.log(Array.isArray(arr));
// console.log(arr);
// arr[4] = "sefo";
// console.log(arr);
//___________ 41 ___________//
// using Length With Array
//___________ 42 ___________//
/**
 * Arrays Methods [Adding And Removing]
 * * unshift("" , "" , ...) Add Element To The First
 * * push("" , "" , ...) Add Element To The End
 * * shift() remove First Element from Array 
 * * pop() remove Last Element from Array 
 */
// let a = [1 , 2 , 3 , 4];
// a.unshift(-1 , 0);
// console.log(a);
// a.shift();
// console.log(a);
// a.push(5 , 6);
// console.log(a);
// a.pop();
// console.log(a);
//___________ 43 ___________//
/**
 * Arrays Methods [Search]
 * * indexOf(search Element , from Index [Opt])
 * * lastIndexOf(search Element , from Index [Opt])
 * * includes(valueToFind , fromIndx [Opt]) [ES7]
 */
// let a = [87 , 32 , 324 , 543  , 87, 233 , 123];
// console.log(a.indexOf(87));
// console.log(a.indexOf(87 , 1));
// console.log(a.lastIndexOf(87));
// console.log(a.lastIndexOf(87 , -4));
// console.log(a.lastIndexOf(87 , 3));
// console.log(a.includes(32));
// console.log(a.includes(32 , 2));
//___________ 44 ___________//
/**
 * Arrays Methods [Sort]
 * * sort(Function [Opt])
 * * reverse
 */
// let a = [10 , "maher" , "khalid" , "90" , 1000 , 100 , 20 , "10" , -20 , -10];
// console.log(a);
// a.sort();
// console.log(a);
// a.reverse()
// console.log(a);
//___________ 45 ___________//
/**
 * Array Methods [Slicing]
 * * slice(start [Opt] , end [Opt] {not Including end})
 * * * slice() => All Array
 * * * if(start === undefined)start = 0
 * * * Negative Count from End
 * * * if(End Is Undefined || > Indexes) slice To The End Array.length
 * * * retrun new Array
 * * splice(start [Mand] , DeleteCount [Opt] [0 No Remove] , the Items To Add [Opt])
 * * * If Negative => Start From The End
 */
// let a = [5 , 4 , 3 , 2 , 1];
// console.log(a);
// console.log(a.slice(2));
// console.log(a.slice(2 , 4));
// console.log(a.slice(-2 , -1));
// console.log(a);
// console.log(a.splice(2 , 2 , 10 , 11 , 12 , 13 , 14));
// console.log(a);
//___________ 46 ___________//
/**
 * Array Methods [Joining]
 * * concat(array , array) => return A New Array
 * * join(separator)
 */
// let a = [1 , 2 , 3 , 4 , 5] , b = [6 , 7 ,8];
// console.log(a);console.log(b);
// console.log(a.concat(b , `maher`));
// console.log(a);console.log(b);
// console.log(a.join(` | `));
// console.log(a);console.log(b);
//___________ 47 ___________//
// Array Challenge
//___________ 48 ___________//
// for loop
//___________ 49 ___________//
// loop on Array
//___________ 50 ___________//
// Nested loop
//___________ 51 ___________//
/**
 * loop Control
 * * break
 * * continue
 * * label
 */
// mainLoop:for(let i = 0 ; i < 5; i++){
//     for(let j = 0 ; j < 5 ; j++){
//         if(j == 3) break mainLoop;
//         console.log(j);
//     }
// }
//___________ 52 ___________//
// loop for Advanced Example
//___________ 53 ___________//
// Products Practe
// let products = [`Keyboard` , `Mouse` , `Pen` , `Pad` , `Monitor` , `Iphone`]
// let color = [`Red` , `Green` , `Blue`] , showCount = 5;
// document.write(`<h1> Show ${showCount} Products</h1>`);
// for(let i = 0 ; i < showCount ; i++){
//     document.write(`<div><h3>the Product Is ${products[i]}</h3><p>And We Have Some Color </p>`)
//     // for(let j = 0 ; j < 3 ; j++)document.write(`<span>${color[j]} </span>`);
//     document.write(color.join(" * "));
//     document.write(`</div>`);
// }
//___________ 54 ___________//
// loop while
//___________ 55 ___________//
// loop do while
//___________ 56 ___________//
// loop Challenge
//___________ 57 ___________//
/**
 * Function
 * * What Is Function ?
 * * User-defined vs Built In
 * * Syntax + Basic Usage
 * * Example From Real Life
 * * Practical Example 
 */
// function sayHello(firstName , lastName = `sefo`) {
//     console.log(`Hello ${firstName} ${lastName}`);
// }
// sayHello(`maher`);
//___________ 58 ___________//
// function Advacned Examples
//___________ 59 ___________//
// function return
//___________ 60 ___________//
// function Default Parameters
//___________ 61 ___________//
/** 
 * function
 * * Reset Parameters
 * * Only One Allowed
 * * Must Be Last Element
 */
// function calc(...numbers){
//     let sum = 0;
//     for(let i = 0 ; i < numbers.length ; i++)sum += numbers[i];
//     return sum;
// }
// console.log(calc(1 , 2 , 3 , 4 , 5));
//___________ 62 ___________//
// function Ultimate Practice
// function showInfo(user = "UK" , age = "UK" , rate = 0 , show = true , ...skills) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome , ${user}</h2>`);
//     document.write(`<p>Age:  ${user}</p>`);
//     document.write(`<p>Hour Rate $${rate}</p>`);
//     if(show)(skills.length ? document.write(`<p>Skills: ${skills.join(" , ")}</p>`) : document.write(`<p>There Is No Skills</p>`));
//     else document.write(`<p>Skills Is Hidden</p>`);
//     document.write(`</div>`);
// }
// showInfo(`Maher` , "20" , 4000 , 1 , "HTML" , "CSS" , "JavaScript" , "C++" , "Java" , "python");
//___________ 63 ___________//
// function Challenge
//___________ 64 ___________//
/**
 * function
 * * Anonymous function
 * * Calling Naned function vs Anonymous function
 * * Argument To Other function
 * * Task Without Name
 * * SetTimeout
 */
// let calc = function(num1 , num2) {
//     return num1 + num2;
// }
// console.log(calc(1 , 2));
// setTimeout(function () {
//     console.log(`Good`);
// } , 2000)
//___________ 65 ___________//
// Nested function
//___________ 66 ___________//
/**
 * function
 * * Arrow function
 * * Regular function vs Arrow [param + no param]
 * * Multiple lines
 */
// let print = (num1 , num2) => {
//     let ans = num1 + num2;
//     return ans;
// };
// let print = (num1 , num2) => num1 + num2;
// console.log(print(10 , 20));
//___________ 67 ___________//
// Scope: Global And Local
//___________ 68 ___________//
// Scope: Block [if , switch , for]
//___________ 69 ___________//
// Scope: Lexical
//___________ 70 ___________//
// Arrow function Challenge
//___________ 71 ___________//
/**
 * Higher Order Function
 * * is A function that accepts functions as parameters and/or returns a function
 * 
 * * map
 * * Method Creates a new array
 * * populated with the results of Calling a provided function in every element
 * 
 * Suntax map(CallBackFunction(Element , index , Array) {} , thisArg)
 * * element => the current element being processed in the Array
 * * index => the index of the current element being proccessed in the Array
 * * Array => the current Array
 * 
 * Notes
 * * Map return a New Array
 * 
 * Examples 
 * * Anpnymous function
 * * Named function
 */
// let a = [1 ,2 , 3 , 4 , 5 , 6];
// let b = a.map(function(ele , index ,arr){
//     return ele * 2;
// })
// let b = a.map((ele) => ele * 2);
// function addition(ele) {
//     return ele * 2;
// }
// let b = a.map(addition);
// console.log(b);
//___________ 72 ___________//
/**
 * map
 * * swap Cases
 * * inverted Numbers
 * * ignore Boolean Value
 */
// let swapCases = `elZeRo`;
// console.log(swapCases);
// swapCases = swapCases.split("").map(function(ele){
//     return (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase());
// }).join("");
// console.log(swapCases);

// let inverteNumbers = [1 , -10 , -20 , 15 , 100 , -30];
// console.log(inverteNumbers);
// inverteNumbers = inverteNumbers.map((ele) => -ele);
// console.log(inverteNumbers);

// let ignoreNumbers = `Elz123er048o`;
// console.log(ignoreNumbers)
// ignoreNumbers =  ignoreNumbers.split("").map(function (ele){
//     return (Number.isNaN(parseInt(ele)) ? ele : "");
// }).join("");
// console.log(ignoreNumbers)
//___________ 73 ___________//
/**
 * filter
 * * Method Creates a new array
 * * with all Elements that pass the test implemented by the provided function
 * Suntax filter(CallBackFunction(Element , index , Array) {} , thisArg)
 * * element => the current element being processed in the Array
 * * index => the index of the current element being proccessed in the Array
 * * Array => the current Array
 */
// let a = ["Ahmed" , "Sameh" , "Sayed" , "Asmaa" , "Amged" , "Israa"];
// a = a.filter(function(ele){
//     return ele[0] === 'A';
// });
// console.log(a);

// let b = [11 , 20 , 2 , 5 , 17 , 10];
// b = b.filter(function(ele){
//     return ele % 2 == 0;
// });
// console.log(b);
//___________ 74 ___________//
/**
 * filter
 * * filter Longest Word By Number
 */
// let a = "I Love Foood Code Too Playing Much";
// console.log(a);
// a = a.split(" ").filter((ele => ele.length <= 4)).join(" ");
// console.log(a);

// let ignoreNumbers = `Elz123er048o`;
// console.log(ignoreNumbers);
// ignoreNumbers = ignoreNumbers.split("").filter(function (ele){
//     return Number.isNaN(+ele);
// }).join("");
// console.log(ignoreNumbers);
// let mix = `A13BS9ZX`;
// console.log(mix);
// mix = mix.split("").filter((ele) => !Number.isNaN(+ele)).map((ele) => 2 * ele).join("");
// console.log(mix);
//___________ 75 ___________//
/**
 * Reduce
 * * method executes a reducer function on each element of the Array
 * * resulting in a single output value
 * 
 * Suntax reduce(CallBackFunction(Accumulator ,value ,  index , Array) {} , initialvalue)
 * * Accumulator => the Accumulated value previously returned in the last invocation
 * * value => the current element being processed in the Array
 * * index => the index of the current element being proccessed in the Array
 * * * starts from index 0 if an initialvalue is provided
 * * * otherwise, it starts from index 1;
 * * Array => the current Array
 */
// let num = [10 , 20 , 15 , 30];
// let b = num.reduce(function(acc , ele) {
//     return acc + ele;
// });
// console.log(b);
//___________ 76 ___________//
/**
 * reduce
 * * longest Word
 * * remove Characters + use Reduce
 */
// let a = ["Bla" , "Propaganda" , "other" , "AAA" , "Battery" , "test" , "Propaganda2"];
// a = a.reduce(function(acc , ele) {
//     return (acc.length > ele.length ? acc : ele);
// });
// console.log(a);

// let b = ["E" , "@" , "L" , "@" , "Z" , "@" , "@" , "E" , "R" , "@" , "O"];
// b = b.filter(function (ele){
//     return !ele.startsWith("@");
// }).reduce(function(acc , ele) {
//     return acc + ele;
// });
// console.log(b);
//___________ 77 ___________//
//___________ 78 ___________//
// Higher Order Function Challenge
//___________ 79 ___________//
/**
 * Object
 * * intro and what is Object
 * * Testing window Object
 * * Accessing Object
 */
// let user = {
//     // Properties
//     theName: "maher",
//     theAge: 20,
//     // methods
//     sayhello: function(name) {
//         return `Hello ${name}`;
//     },
// };
// console.log(user.sayhello("maher"));
//___________ 80 ___________//
/**
 * Object
 * * Dig Deeper
 * * Dot Notation vs Bracket Notation
 * * Dynamic property Name
 */
// let money = 100;
// let user = {
//     name: "mahre",
//     "my country": "syria",
//     "100": "$",
// };
// console.log(user["my country"]);
// console.log(user[money]);
// console.log(user[name]);
// console.log(user.money);
//___________ 81 ___________//
/**
 * Object
 * * Nested Object And Trainings
 */
// let user = {
//     name: "Osama",
//     age: 38 , 
//     available: 0,
//     Skills: ["Html" , "css"],
//     country: {
//         syria: {
//             firstplace: "aleppo" ,
//             secondplace: "sad",
//         },
//         ksa: {
//             firstplace:"Riyadh",
//         }
//     },
//     checkAv: function() {
//         return `this person is${this.available ? "" : " Not"} available`;  
//     },
// }
// console.log(user.Skills[0]);
// console.log(user.country.syria.firstplace);
// console.log(user["country"]["syria"]["secondplace"]);
// user.available = 1;
// console.log(user.checkAv());
//___________ 82 ___________//
/**
 * Object
 * * create With New Keyword new Object() 
 */
// let user = {age: 20,};
// let user = new Object({
//     age: 20,
// });
// console.log(user);
// user.age = 38;
// user["country"] = "Egypt";
// console.log(user);
// user.sayHello = function() {
//     return `Hello Maher`;
// };
// console.log(user);
//___________ 83 ___________//
/**
 * function this Keyword
 * * this IntroDuction
 * * this Inside Object Method
 * * * when a function is called as a method of an object
 * * * its this is set to object the method is called on
 * * Global object
 * * Test variables with Window And This
 * * Global Context 
 * * Function Context 
 */
// console.log(this);
// console.log(this === window);
// var x = 100;
// console.log(window.x);
// console.log(this.x);
// function sayHello() {
//     console.log(this);
// };sayHello();

// let user = {
//     age: 20,
//     ageInDays: function() {
//         return this.age * 365;
//     },
// }
// console.log(user.age);
// console.log(user.ageInDays());
//___________ 84 ___________//
/**
 * object
 * * Create Object With create Metod
 */
// let user = {
//     age: 40,
//     doubleAge: function () {
//         return user.age * 2;
//     },
// }
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let user2 = Object.create({});
// console.log(user2);
// let user3 = Object.create(user);
// user3.age = 30;
// console.log(user3);
// console.log(user3.age);
// console.log(user3.doubleAge());
//___________ 85 ___________//
/**
 * Object
 * * create object With assign Method
 */
// let user1 = {
//     p1: 1,
//     meth1: () => this.p1,
// }
// let user2 = {
//     p2: 2,
//     meth2: () => this.p2,
// }
// let target = {
//     p1: 4,
//     p3: 5,
// }
// Object.assign(target , user1 , user2 );
// console.log(target);
// console.log(user1);
// console.log(Object.assign({} , user1 , target));
// console.log(Object.assign({} , user1 , target , {p6: 6}));
//___________ 86 ___________//
/**
 * DOM
 * * What Is DOM
 * * DOM Selectors
 * * * find ELement By ID
 * * * find ELement By TagName
 * * * find ELement By ClassName
 * * * find ELement By CSS Selectors
 * * * find ELement By Collection
 * * * * title
 * * * * body
 * * * * images
 * * * * forms
 * * * * links
 */
// let a = document.getElementById("my-div");
// a.style.color = "red";

// let a = document.getElementsByTagName("p");
// console.log(a[1]);

// let a = document.getElementsByClassName("my-span");
// console.log(a[0]);

// let a = document.querySelector("#my-div");
// console.log(a);

// let a = document.querySelectorAll(".p1");
// console.log(a[0]);

// console.log(document.title);
// console.log(document.body)
// console.log(document.forms[0].one);
// console.log(document.links[1].href);
//___________ 87 ___________//
/**
 * DOM [Get / Set Elements Content And Attributes]
 * * innerHTML
 * * textContent
 * * change Attributes Directly
 * * change Attributes With Methods
 * * * getAttribute
 * * * setAttribute
 */
// let a = document.querySelector(".js");
// console.log(a.innerHTML);
// console.log(a.textContent);
// a.innerHTML = "text from <span>Main.js</span> File";
// a.textContent = "text from <span>Main.js</span> File";
// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alt"
// document.images[0].title = "Picture"
// document.images[0].id = "picture"
// document.images[0].className = "picture"

// let a = document.querySelector(".link");
// console.log(a.getAttribute("href"));
// console.log(a.getAttribute("class"));
// a.setAttribute("class" , "maher");
// a.setAttribute("href" , "@");
// a.setAttribute("twitter" , "@");
// console.log(a.getAttribute("href"));
// console.log(a.getAttribute("class"));
//___________ 88 ___________//
/**
 * DOM [Check Attributes]
 * * Element.attributes
 * * Element.hasAttribute
 * * Element.hasAttributes
 * * Element.removeAttributes
 * * Elememt.removeAttribute
 */
// let a = document.getElementsByTagName("p")[0];
// console.log(a.attributes);
// console.log(a.hasAttribute("class"));
// console.log(a.hasAttributes());
// a.removeAttribute("class");
// a.onclick = function() {
// if(a.hasAttribute("data-src")) {
//     if(a.getAttribute("data-src") === "")
//         a.removeAttribute("data-src");
//     else a.setAttribute("data-src" , "new value");
//     console.log(`found`);
// }else console.log(`not Found`);
// };
//___________ 89 ___________//
/**
 * DOM [Create Elements]
 * * createElement
 * * createComment
 * * createTextNode
 * * createAttribute
 * * appendChild
 */
// let a = document.createElement(`div`);
// let attr = document.createAttribute(`data-custom`);
// let text = document.createTextNode(`product one`);
// let comment = document.createComment("this Is Div");
// a.setAttributeNode(attr);
// a.setAttribute("data-test" , "testing");
// a.className = "product";
// a.appendChild(text);
// a.appendChild(comment);
// document.body.appendChild(a);
//___________ 90 ___________//
/**
 * DOM [Create Elements]
 * * practice Product With Heading And paragraph
 */
// let cot = 100;
// while(cot--){
// let a = document.createElement(`div`) , h3 = document.createElement(`h3`) , p = document.createElement(`p`);
// a.className = `product`;
// h3.append(document.createTextNode(`this is H3 number ${100 - cot}`));
// p.append(document.createTextNode(`this is p number ${cot + 1}`));
// a.appendChild(h3);
// a.appendChild(p);
// document.body.appendChild(a);
// }
//___________ 91 ___________//
/**
 * DOM [Deal With Childrens]
 * * children
 * * childNodes
 * * firstChild
 * * lastChild
 * * firstElementChild
 * * lastElementChild
 */
// let a = document.querySelector("div");
// console.log(a);
// a.children[0].textContent = `hello p from Js`;
// console.log(a.hasChildNodes());
// console.log(a.childNodes);
// console.log(a.children);
// console.log(a.firstChild);
// console.log(a.lastChild);
// console.log(a.firstElementChild);
// console.log(a.lastElementChild);
//___________ 92 ___________//
/**
 * DOM [Events]
 * * use Events On HTML
 * * use Events On JS
 * * * onclick
 * * * oncontextmenu
 * * * onmouseenter
 * * * onmouseleave
 * 
 * * * onload
 * * * onscroll
 * * * onresize
 * 
 * * * onfocus
 * * * onblur
 * * * onsubmit
 */
let mybtn = document.getElementById("btn");
// mybtn.onclick = function() {
//     console.log(`hello world`);
// };
// mybtn.oncontextmenu = function() {
//     console.log(`hello world`);
// };
// mybtn.onmouseenter = function() {
//     console.log(`hello world`);
// };
// mybtn.onmouseleave = function() {
//     console.log(`hello world`);
// };
// window.onscroll = function() {
//     console.log(`hello world`);
// };
// window.onresize = function() {
//     console.log(`hello world`);
// };
// let fo = document.getElementsByTagName('input')[0];
// fo.onfocus = function () {
//     console.log(`hello world`);
// }
// fo.onblur = function () {
//     console.log(`hello world`);
// }
// fo.onsubmit = function () {
//     console.log(`hello world`);
// }
//___________ 93 ___________//
/**
 * DOM [Events]
 * * Validate From Practcie
 * * Prevent Default
  */
// document.links[0].onclick = function (event) {
//     event.preventDefault();
//     console.log(event);
// };

// document.forms[0].onsubmit = function (e) {
//     let userValid = false , ageValid = false;
//     let userInput = this.querySelector("[name = 'username']");
//     let ageInput = this.querySelector("[name = 'age']");
//     if(userInput.value.length <= 10 && userInput.value.length > 0)userValid = true;
//     if(ageInput.value.length && ageInput.value == +ageInput.value)ageValid = true;
//     if(userValid === false || ageValid === false){
//         e.preventDefault();
//     }
// };
//___________ 94 ___________//
/**
 * DOM [Events Simulation]
 * * click
 * * focus
 * * blur
 */
// let two = document.querySelector(`.two`);
// let one = document.querySelector(`.one`);
// window.onload = function () {
//     two.focus();
// };
// one.onblur = function () {
//     document.links[0].click();
// };
// let text1 = document.querySelector("#a1");
// let mainInterval = setInterval(() => { 
//     if(text1.value.length >= 1) {
//         text1.blur();
//         if(text1.getAttribute("id") === "a8")clearInterval(mainInterval);
//         text1 = text1.nextElementSibling;
//         text1.focus();
//     }
// } , 10);
/**
 * HTML
    <input type="text" id="a1">
    <input type="text" id="a2">
    <input type="text" id="a3">
    <input type="text" id="a4">
    <input type="text" id="a5">
    <input type="text" id="a6">
    <input type="text" id="a7">
    <input type="text" id="a8">
 */
//___________ 95 ___________//
/**
 * DOM [Class List]
 * * ClassList
 * * * length
 * * * contains
 * * * item(index)
 * * * add
 * * * remove
 * * * toggle
 */
// let a = document.getElementById("my-div");
// console.log(a.classList);
// console.log(typeof a.classList);
// console.log(a.classList.length);
// console.log(a.classList.contains("one"));
// console.log(a.classList[1]);
// console.log(a.classList.item('1'));
// a.classList.add("three" , "four");
// console.log(a.classList);
// a.classList.remove("one" , "two");
// console.log(a.classList);
// a.onclick = function() {a.classList.toggle("one");};
// console.log(a.classList);
//___________ 96 ___________//
/**
 * DOM [CSS]
 * * style
 * * * cssText
 * * * removeProperty(propertyName) [inline , srylesheet]
 * * * setProperty(propertyName , value , priority) [inline , srylesheet]
 */
// let a = document.getElementById("my-div");
// a.style.color = "red";
// a.style.backgroundColor = "black"
// a.style.cssText = `color: red; background-color: black`;
// a.style.cssText = `color: red; background-color: black`;
// a.style.removeProperty(`color`);
// a.style.setProperty(`color` , `green`);
//___________ 97 ___________//
/**
 * DOM [Deal Wtih Element]
 * * before [Element || string]
 * * after  [Element || string]
 * * append [Element || string]
 * * prepend[Element || string]
 * * before
 */
// let a = document.getElementById("my-div");
// let createdP = document.createElement("p");
// createdP.append(document.createTextNode(`hello from p`));
// a.before(createdP);
// a.after(createdP);
// a.append(createdP);
// a.prepend(createdP);
// createdP.remove();
//___________ 98 ___________//
/**
 * DOM [Traversing]
 * * nextSibling
 * * previousSibling
 * * nextElementSibling
 * * previousElementSibling
 * * parentElement
 */
// let span = document.querySelector(".two");
// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// console.log(span.previousSibling);
// console.log(span.previousElementSibling);
// console.log(span.parentElement);
// span.onclick = function() {
// span.parentElement.style.cssText = `
// transition: .3s;
// color:red;
// transform: translate(50% , 50%);`;
// }
//___________ 99 ___________//
/**
 * DOM [cloning]
 * * colneNode(deep)
 */
// let myP = document.querySelector("p").cloneNode(0);
// let myP = document.querySelector("p").cloneNode(1);
// let mydiv = document.querySelector("div");
// myP.setAttribute("id" , "new-p");
// myP.id = "new-p";
// mydiv.appendChild(myP);
//___________ 100 ___________//
/**
 * DOM[add Event Listener]
 * * addEventListener
 * * use Without on
 * * Attach Multiple Events
 * * Error Test
 * 
 * search
 * * Capture & Bubbling JavaScript
 * * removeEventListener
 */
// let a = document.querySelector(".my-p");
// function one() {console.log(`Hello 1`);};
// function two() {console.log(`Hello 2`);};
// a.onclick = one;
// a.onclick = two;
// a.addEventListener(`click` , one);
// a.addEventListener(`click` , two);
// a.addEventListener(`click` , "string"); // Error
// a.onclick = function () {
      // let newa = a.cloneNode(true);
      // newa.className = "cloned"
      // document.body.appendChild(newa);
// };

// let cloned = document.querySelector(".clone"); // Error
// cloned.onclick = function () {
//         console.log(`i'm Cloned`);
//     };
   
//     document.addEventListener('click' , function (e) {
//             if (e.target.className === `cloned`){
//         console.log(`i'm Cloned`);
//     };
// });
//___________ 101 ___________//
// function createLi(text) {
// let a = document.createElement('a');
// let li = document.createElement('li');
// a.textContent = `${text}`;
// li.append(a);
// li.style.padding = `10px 15px`;
// a.style.cssText = `cursor: pointer; color: #444; text-transform: uppercase;`
// return li;
// };
// createHead = (text) => text;
// let mainHead = document.createElement("div");
// let mainLogo = document.createElement("div");
// let ul = document.createElement('ul');
// mainHead.className = `head`;
// mainLogo.className = `logo`;
// mainLogo.textContent = document.createTextNode(`maher`).textContent;  
// ul.append(createLi(`home`));
// ul.append(createLi(`About`));
// ul.append(createLi(`Service`));
// ul.append(createLi(`Contact`));
// ul.style.cssText = `
// list-style: none;
// display: flex;
// align-items:center;
// `;
// mainHead.append(createHead(mainLogo));
// mainHead.append(createHead(ul));
// mainLogo.style.cssText = `
// font-size: 30px;
// color: green;
// font-weight: bold;
// `;
// document.body.append(mainHead);
// mainHead.style.cssText = `
// list-style: none;
// display: flex;
// justify-content: space-between;
// align-items:center;
// `;
// function createCeil(count) {
//    let ceil = document.createElement(`div`);
//    ceil.className = `ceil`;
//    let p = document.createElement(`p`);
//    p.textContent = `${count}`;
//    let span = document.createElement(`span`);
//    span.textContent = `Product`;
//    p.style.cssText = `
//    padding-top: 10px;
//    padding-bottom: 5px;
//    margin: 0;
//    font-size: 20px;
//    font-weight:bold;
//    `;
//    ceil.append(createHead(p));
//    ceil.append(createHead(span));
//    span.style.cssText = `color: #333`
//    ceil.style.cssText = `
//    background-color:white;
//    padding-top: 15px;
//    padding-bottom: 15px;`
//    return ceil;
// }
// let content = document.createElement(`div`);
// content.className = `content`;
// for(let i = 1 ; i <= 15 ; i++){
//    content.append(createCeil(i));
// };
// content.style.cssText = `
//    display: grid;
//    gap: 15px;
//    padding: 15px;
//    background-color: #eeeeee;
//    grid-template-columns: repeat(auto-fill , minmax(200px , 1fr));
//    text-align:center;
// `;
// document.body.append(content);
// let footer = document.createElement(`div`);
// footer.className = 'footer';
// footer.textContent = 'Copyright 2021';
// footer.style.cssText = `
// padding: 15px;
// color: white;
// background-color: green;
// text-align:center; 
// `;
// document.body.append(footer);
