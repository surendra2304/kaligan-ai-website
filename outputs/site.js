document.querySelectorAll(".faq-list button").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("open"));
});
