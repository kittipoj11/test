
document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll("input[type='text']");
  let iCount = 0;
  let iRandom = 0;
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      // this.style.backgroundColor = "red";
      this.select();
    });
    // input.value = Math.floor(Math.random() * 100);
    // document.querySelector("button").innerHTML =Math.floor(Math.random()*10);
    
    iCount = 0;
    iRandom = 0;
    do {
      iRandom = Math.floor(Math.random() * 10);
      iCount++;
    } while (iRandom != 0);
    input.value = iCount;
    
  });
  sum();
});

function sum() {
  let total = 0;
  let myNumbers = document.querySelectorAll("input[type='text']");
  for (let i = 0; i < myNumbers.length; i++) {
    console.log(parseInt(myNumbers[i].value));
    total += parseInt(myNumbers[i].value);
  }
  console.log(total);
  // document.getElementById("sum").innerHTML = total;
  document.getElementById("sum").textContent = total;
  document.querySelector("button").style.backgroundColor = "red";
  document.querySelector("button").textContent = "Re Calc";
  //querySelectorAll
}



btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', sum);

function myClick(obj) {
  obj.select();
  document.querySelector("button").innerHTML = Math.floor(Math.random() * 10);
}
