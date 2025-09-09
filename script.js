// const modalOpenBtn = document.querySelector(".comments-btn");
// const modalCloseBtn = document.querySelector(".modal-close-btn");
// const modalOverlay = document.querySelector(".modal-overlay");

// modalOpenBtn.addEventListener("click", () => {
//   modalOverlay.classList.add("is-open");
// });

// modalCloseBtn.addEventListener("click", () => {
//   modalOverlay.classList.remove("is-menu-open");
// });

//!++++++++++++++++++++++++++++

const mobileOpenBtn = document.querySelector(".burger-menu");
const mobileCloseBtn = document.querySelector(".close-mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-menu-open");
});

mobileCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-menu-open");
});
