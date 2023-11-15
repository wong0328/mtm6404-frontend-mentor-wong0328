const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");
const menuMobileActive = document.getElementById("menuMobileActive");

closeBtn.addEventListener("click", () => {
  menuMobileActive.classList.add("hidden");
  console.log("close");
});
openBtn.addEventListener("click", () => {
  menuMobileActive.classList.remove("hidden");
  console.log("open");
});
