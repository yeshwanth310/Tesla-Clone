const menu = document.querySelector(".menu");
const active = document.querySelector(".active");
const activebg = document.querySelector(".active-bg");
const whitebg = document.querySelector(".white-bg");
const textbg = document.querySelector(".text-bg");
const close = document.querySelector(".fa-times");
menu.addEventListener("click", () => {
  whitebg.classList.add("active-bg");

  textbg.style.display = "block";
  close.style.display = "block";
  textbg.classList.add("active");
  close.addEventListener("click", () => {
    whitebg.classList.remove("active-bg");
    textbg.style.display = "none";
    textbg.classList.remove("active");
    close.style.display = "none";
  });
});
