// Part 2: Functions with parameters and return values
function changeBoxColor(color) {
  let box = document.getElementById("box");
  box.style.background = color;
  return `Box color changed to ${color}`;
}

function calculateDouble(number) {
  return number * 2;
}

// Demonstrating scope
let globalMessage = "Hello from global scope!";

function scopeDemo() {
  let localMessage = "Hello from local scope!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible only inside this function
}

// Part 3: Combining CSS and JS
document.getElementById("animateBtn").addEventListener("click", () => {
  let box = document.getElementById("box");
  box.classList.remove("animate"); // reset animation if already applied
  void box.offsetWidth; // trick to restart animation
  box.classList.add("animate");

  // Use our function
  console.log(changeBoxColor("lightgreen"));
  console.log("Double of 5 is:", calculateDouble(5));
  scopeDemo();
});

// Popup logic
const popup = document.getElementById("popup");
document.getElementById("popupBtn").addEventListener("click", () => {
  popup.classList.remove("hidden");
  popup.classList.add("visible");
});

document.getElementById("closePopup").addEventListener("click", () => {
  popup.classList.remove("visible");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 500); // wait for fade-out
});
