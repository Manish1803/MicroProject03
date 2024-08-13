const button = document.querySelectorAll("button");
const input = document.querySelector("input");
const cal = document.querySelector(".cal");

let string = "";

button.forEach((value) => {
  value.addEventListener("click", (e) => {
    if (e.target.innerText == "DEL") {
      string = input.value.slice(0, input.value.length - 1);
      input.value = string;
      // input.value = input.value.slice(0, input.value.length - 1);
    } else if (e.target.innerText == "RESET") {
      string = "";
      input.value = string;
      // input.value = input.value.slice(0, input.value.length - 1);
    } else if (e.target.innerText == "=") {
      document.querySelector(".screen").style.backgroundColor = "#000000";
      let cond = string[string.length - 1];
      if (cond == "+" || cond == "-" || cond == `-` || cond == `*`) {
        string = input.value.slice(0, input.value.length - 1);
      }
      string = eval(string);
      input.value = string;
    } else {
      document.querySelector(".screen").style.backgroundColor = "#181f32";
      if (e.target.textContent == "x") {
        string += "*";
      } else {
        string += e.target.textContent;
      }
      input.value = string;
    }
  });
});

// button.addEventListener("click", function (ent) {
//   console.log(ent.target.textContent);

//   input.textContent += ent.target.textContent;
// });

// cal.addEventListener("click", function () {
//   const number = Number(input.textContent);
//   console.log(number);
// });
