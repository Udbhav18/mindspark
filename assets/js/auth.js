const sign_in_button = document.querySelector("#sign-in-btn");
const sign_up_button = document.querySelector("#sign-up-btn");
const container = document.querySelector(".conta");

sign_up_button.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_button.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
