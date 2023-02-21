const toggle = document.querySelector("#dark-mode-toggle");
const root = document.querySelector(":root");

toggle.addEventListener("click", () => {
  root.classList.toggle("dark-mode");
});
