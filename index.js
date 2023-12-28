console.log("ready");
const dogs = ["бассет", "корги", "бигль", "колли"];
const dogWeight = [30, 12, 10, 28];

// добавить кг в массив dogWeight

const dogFullWeight = dogWeight.map((weight) => weight + " кг");
console.log(dogFullWeight);

// создать новый массив из объектов, в котором рядом с названием собаки будет ее вес

// const dogsFull =

let seasons = ["Spring", "Summer", "Winter"];
console.log("Elements: ".concat(seasons));

let hues = ["Red", "RED", "red", "Green", "Blue"];
let nums = [1, 20, 3, 17, 14, 0.5];

console.log("Colors: " + hues);
console.log("Dictionary Sort: " + hues.sort());
console.log("\nNumbers: " + nums);
console.log("Dictionary Sort: " + nums.sort());

console.log("Numerical Sort: " + nums.sort((a, b) => a - b));
console.log("Numerical Sort: " + nums.sort((a, b) => b - a));
console.log(nums.reverse());

const now = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let year = now.getFullYear();
let month = now.getMonth();
let dayNumber = now.getDate();
let dayName = now.getDay();

console.log(year);
console.log(month);
console.log(dayNumber);
console.log(dayName);

month = months[month];
dayName = days[dayName];

let nowDate = dayName + ", " + month + " " + dayNumber + ", " + year;
let nowDate2 = [dayName, month, dayNumber, year].join(", ");

console.log(nowDate);
console.log(nowDate2);

const mathArr = [0.7, "spring", 1.3, "TREE", 5.5];
console.log(mathArr);

let mathArrNumberOnly = mathArr.filter(Number);

let mathArrStringOnly = mathArr.filter((item) => {
  if (typeof item === "string") return item;
});

console.log(mathArrNumberOnly);
console.log(mathArrStringOnly);
let [arr1, arr2, arr3] = [...mathArrNumberOnly];
console.log(arr1, arr2, arr3);
console.log(Math.max(arr1, arr2, arr3));
console.log(Math.min(arr1, arr2, arr3));

let [str1, str2] = [...mathArrStringOnly];
console.log(str1, str2);

console.log(Math.max(-23, -12, -11, 0, 16));

let myString = "Санкт-Петербург - северная столица России";

console.log(myString.split(" "));

let str = "JavaScript in easy steps";
console.log(str.match("Script")[0]);

const list = document.getElementById("props");
let property = null;
for (property in window) {
  if (property) {
    list.innerHTML += "<li>" + property;
  }
}

const info = document.getElementById("prop");
let width = window.screen.width + "px";
let height = window.screen.height + "px";
let availW = window.screen.availWidth + "px";
let availH = window.screen.availHeight + "px";
let colors = "Unknown";

switch (window.screen.colorDepth) {
  case 8:
    colors = "Low Color";
    break;
  case 16:
    colors = "High Color";
    break;
  case 24:
    colors = "True Color";
    break;
  case 32:
    colors = "Deep Color";
    break;
}

info.innerHTML = "Screen Resolution: " + width + " x " + height + "<br>";
info.innerHTML += "Available Screen Size: " + availW + " x " + availH + "<br>";
info.innerHTML += "Color Capability: " + colors + "<br>";
if (window.screen.orientation) {
  info.innerHTML += "Orientation: " + window.screen.orientation.type;
}

//функция как писать печатающий текст. осталось добавить событие - прокрутка, щелчок или загрузка, при котором оно запускается
let myName = "Привет! Меня зовут Мария!";
const count = (function () {
  let num = 0;
  console.log(num);
  console.log(myName[num]);
  return function () {
    return num++;
  };
})();

function countDown() {
  const info = document.getElementById("info");
  let timerId = null;
  let num = count();
  if (num >= 0 && num <= 24) {
    info.innerHTML += "<span>" + myName[num] + "</span>";
    timerId = window.setTimeout(countDown, 100);
  } else {
    info.innerHTML += "<span> Готово !</span>";
    window.clearTimeout(timerId); //отменяет таймер
  }
}
//событие добавить здесь
countDown();

//обекты, свойства и методы window
console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);

//как работать с обьектом styleSheet и установить новые свойства
const stylesheet = document.styleSheets[0];
const newRule = [...stylesheet.cssRules].find((r) => r.selectorText === "form");
console.log(newRule);

newRule.style.setProperty("width", "600px");

//cookie

function setCookie(key, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie =
    key + "=" + encodeURI(value) + "; expires=" + d.toUTCString() + ";";
}

function getCookie(key) {
  if (document.cookie) {
    const pairs = decodeURI(document.cookie).split(";");
    let i, name, value;
    for (i = 0; i < pairs.length; i++) {
      name = pairs[i].split("=")[0].trim();
      if (name === key) {
        value = pairs[i].split("=")[1];
      }
    }
    return value;
  }
}

setCookie("User", "Mike McGrath,12345", 7);

const list1 = document.getElementById("list");
let i,
  value = getCookie("User");
if (value.indexOf(",")) {
  value = value.split(",");
}
for (i = 0; i < value.length; i++) {
  list.innerHTML += "<li>" + value[i];
}

//json обьекты

let obj = { category : 'Fashion', 
models : [ { name : 'Alice', age : 21, city : 'New York' } ,
{ name : 'Kelly', age : 23, city : 'Las Vegas' } ] }

let json_obj = JSON.stringify( obj )
console.log( json_obj )

let new_obj = JSON.parse( json_obj )
console.log( new_obj )

console.log( new_obj[ 'category' ] )
console.log( new_obj.models[ 0 ].name )
console.log( new_obj[ 'models' ][ 1 ][ 'name' ] )

//promise

const promise = new Promise( function( resolve, reject ) 
{
let random = Math.round(Math.random( ) * 10 ) 
if ( random % 2 === 0 )
{ setTimeout( function( ) { resolve( random ) }, 1000 ) }
else
{ setTimeout( function( ) { reject ( random ) }, 1000 ) }
} )

promise
.then(console.log( promise ) )
.then(function( res ) { console.log( res + ' Is Even' ) } )
.catch(function( err ) { console.log( err + ' Is Odd' ) } )

//fetch

fetch( 'https://github.com/MariaProgrammer/testJson.git' )
.then( response => response.json( ) )
.then( data => list10( data ) )
.catch( err => console.log( err ) )

function list10( data ) {
  const values = Object.values( data )
  let i = 0
  while( i < values.length ) { console.log( values[ i ] ); i++ }
  }

  



