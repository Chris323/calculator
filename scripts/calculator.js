const calcInput = document.querySelector(".calc-input");
const allButtons = document.querySelectorAll(".button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (value === "=") {
      if (calcInput.innerText.includes("+")) {
        const splitStuff = calcInput.innerText.split("+");
        operate("+", splitStuff[0], splitStuff[1]);
      }

      if (calcInput.innerText.includes("-")) {
        const splitStuff = calcInput.innerText.split("-");
        operate("-", splitStuff[0], splitStuff[1]);
      }

      if (calcInput.innerText.includes("/")) {
        const splitStuff = calcInput.innerText.split("/");
        operate("/", splitStuff[0], splitStuff[1]);
      }

      if (calcInput.innerText.includes("*")) {
        const splitStuff = calcInput.innerText.split("*");
        operate("*", splitStuff[0], splitStuff[1]);
      }
    }
    calcInput.innerText += value;

    if (value === "clear") {
      calcInput.innerText = "";
    }
    //console.log(e.target.dataset.value);
  });
});

const operate = (operator, value1, value2) => {
  const num1 = Number(value1);
  const num2 = Number(value2);

  if (operator === "/") {
    calcInput.innerText = num1 / num2;
  }

  if (operator === "+") {
    calcInput.innerText = num1 + num2;
  }

  if (operator === "*") {
    calcInput.innerText = num1 * num2;
  }

  if (operator === "-") {
    calcInput.innerText = num1 - num2;
  }

  //console.log(operator, value1, value2);
};

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }
