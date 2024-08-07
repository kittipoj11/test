let myname = "Nathapat Soontornpurmsap(POJ)";
console.log(`Hello ${myname}`);
console.log(`Hello ${myname}`);
myname = "123";
console.log(`Hello ${myname}`);
console.log(`Hello ${myname}`);
console.log(`This type is ${typeof myname}.`);

let x = document.getElementsByTagName("h1");
x[0].innerHTML = "Hi!";
x[0].style.backgroundColor = "gold";
x[1].style.backgroundColor = "yellow";

//The querySelectorAll() method returns all elements that matches a CSS selector(s).
//The querySelectorAll() method returns a NodeList(an array-like collection (list) of nodes.The list can be accessed by index. The index starts at 0.).
let y = document.querySelectorAll(".o");
y[0].innerHTML = "สวัสดี";
y[0].style.backgroundColor = "blue";
y[1].style.backgroundColor = "orange";

//The querySelector() method returns the first element that matches a CSS selector.
document.querySelector("#x").style.backgroundColor = "green";
document.querySelector("[iid=xy]").style.backgroundColor = "red";


// myNumber = parseInt(prompt("Enter your number(0-9)."));
// myRandom = Math.floor(Math.random() * 10);
// if (myNumber == myRandom) {
//   y[1].innerHTML = `You guessed the number correctly. which is the number ${myRandom}`;
// }
// else {
//   y[1].innerHTML = `You guessed the wrong number and the random number was ${myRandom} but the number you chose was ${myNumber}.
//   `;
  
// }



function check() {
  myNumber = parseInt(document.getElementById("myInput").value);
  myRandom = Math.random();
  document.getElementById("result").innerHTML = `เลขที่ออกคือ ${
    myRandom * 4
  } => ${Math.floor(myRandom*4)}`;
  if (myNumber == Math.floor(myRandom*4)) {
    document.getElementById("result_description").innerHTML = "คุณถูก";
    // document.getElementsByTagName("button")[0].style.backgroundColor = "green";
    document.querySelector("button").style.backgroundColor = "green";
  } else {
    document.getElementById("result_description").innerHTML = "คุณผิด";
    // document.getElementsByTagName("button")[0].style.backgroundColor = "red";
    document.querySelector("button").style.backgroundColor = "red";
  }
}


function sum() {
  let total = 0;
  let myNumbers = document.querySelectorAll("input[type='text']");
  for (let i = 0; i < myNumbers.length; i++) {
    console.log(parseInt(myNumbers[i].value));
    total += parseInt(myNumbers[i].value);
  }
  console.log(total);
  document.getElementById("sum").innerHTML = total;
  document.querySelector("button").style.backgroundColor = "red";
  //querySelectorAll
}

// การใช้ eventListener
//1. อ้างอิง element ที่จะทำให้เกิดเหตุการณ์
const menu = document.querySelector("#menu");
//2. เขียน event
menu.addEventListener('change', getMenu);
//3. สร้างฟังก์ชั่น
function getMenu() {
    const display = document.querySelector("#display");
    display.innerHTML = menu.value;
}

let elementsArray = document.querySelectorAll("button");

elementsArray.forEach(function (obj) {
  obj.addEventListener("click", myclick);
});

function myclick() {
  // alert("Welcome to my website");
  obj.style.background = "red";
  document.querySelector("button").style.backgroundColor = "red";
}
