const outputEl = document.querySelector(".text");
const valEl = document.querySelectorAll(".val");
const ClearEl = document.querySelector(".AC");
const deleteEl = document.querySelector(".DEL");
const equalEl = document.querySelector(".equal");

valEl.forEach((val) => {
  val.addEventListener("click", () => {
    outputEl.value += val.value;
  });
});

equalEl.addEventListener("click", () => {
  try {
    outputEl.value = eval(outputEl.value);
  } catch (error) {
    alert(error);
  }
});

ClearEl.addEventListener("click", () => {
  outputEl.value = "";
});

deleteEl.addEventListener("click", () => {
  outputEl.value = outputEl.value.slice(0, -1);
});
