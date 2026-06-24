const display = document.getElementById("numberDisplay");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.innerText;
    display.innerText = expression;
  });
});

const resets = document.getElementById("reset");

resets.addEventListener("click", () => {
  display.innerText = expression = expression.slice(0, 0); 
});

const IsEqualsTo = document.getElementById("isEqual");

IsEqualsTo.addEventListener("click", () => {
  expression1 = eval(expression);
  display.innerText = expression1;
});


const deletes = document.getElementById("del")
const  Delete = "";
del.addEventListener("click",()=>
  
{
   display.innerText =   expression = expression.slice(0, expression.length - 1);

})
