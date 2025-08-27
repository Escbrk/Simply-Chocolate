const modalOpenBtn = document.querySelector(".comments-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalOpenBtn.addEventListener("click", () => {
  modalOverlay.classList.add("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("is-open");
});
