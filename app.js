const img1 = document.querySelector(".img");
const arrow = document.querySelector(".arrow");
const mob = document.querySelector(".mobile__search__area");
const mob1 = document.querySelector(".mobile__navbar__area");
img1.addEventListener("click", () => {
  mob.classList.add("active");
  mob1.classList.add("active");
});

arrow.addEventListener("click", () => {
  mob.classList.remove("active");
  mob1.classList.remove("active");
});
