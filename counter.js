let count = 0;
const screen = document.querySelector(".screen")
const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
const resetBtn = document.getElementById("reset")
function updateScreen() {
  screen.textContent = count
  if (count > 0) {
    screen.style.color = "green"
  } else if (count < 0) {
    screen.style.color = "red"
  } else {
    screen.style.color = "white" 
  }
}
minusBtn.addEventListener("click", () => {
  count--
  updateScreen()
});
plusBtn.addEventListener("click", () => {
  count++;
  updateScreen()
});
resetBtn.addEventListener("click", () => {
  count = 0
  updateScreen()
});
updateScreen()
