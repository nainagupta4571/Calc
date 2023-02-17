
const screen2 = document.getElementById("screen2");
const screen1 = document.getElementById("screen1");
const clearBtn = document.getElementById("clear");
const sqrtBtn = document.getElementById("sqrt");
const enterBtn = document.getElementById("enter");
const delBtn = document.getElementById("del");
const ansBtn = document.getElementById("ans");
const oppositeBtn = document.getElementById("opposite");
const numBtns = document.querySelectorAll(".number");
const oprBtns = document.querySelectorAll(".operator");

clearBtn.addEventListener("click", function () {
     screen2.value = "";
     screen1.value = "";
});

sqrtBtn.addEventListener("click", function () {
     var val = screen2.value;
     screen2.value = `Math.sqrt( ${val} )`;
});

enterBtn.addEventListener("click", function () {
     var text = screen2.value;
     var result = eval(text);
     screen2.value = result;
     screen1.value = text;
});

delBtn.addEventListener("click", function () {
     var value = screen2.value;
     screen2.value = value.slice(0, -1);
});

ansBtn.addEventListener("click" ,function()
{
     var text =screen2.value ;
     var result =eval(text);
     screen2.value = result;
})

oppositeBtn.addEventListener("click", function () {
     var n = parseFloat(screen2.value);
     if (n) {
          screen2.value = n > 0 ? -n : Math.abs(n);
     }
});

numBtns.forEach(function (btn) {
     btn.addEventListener("click", function () {
          clk(btn.value);
     });
});

oprBtns.forEach(function (btn) {
     btn.addEventListener("click", function () {
          clk(btn.value);
     });
});

function clk(val) {
     if (val === "+" || val === "-" || val === "*" || val === "/" || val === "." || val === "(" || val === ")") {
          if (screen2.value.slice(-1) === "+" || screen2.value.slice(-1) === "-" || screen2.value.slice(-1) === "*" || screen2.value.slice(-1) === "/" || screen2.value.slice(-1) === "." || screen2.value.slice(-1) === "(" || screen2.value.slice(-1) === ")") {
               screen2.value = screen2.value.slice(0, -1) + val;
          } else {
               screen2.value += val;
          }
     } else {
          screen2.value += val;
     }
}