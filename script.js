const radioBtn = document.querySelectorAll(".radio-btn");
const radioBtnInner = document.querySelectorAll(".radio-btn-inner");

radioBtn[0].addEventListener("click", () => {
  radioBtnInner[0].classList.add("show");
  radioBtnInner[1].classList.remove("show");
});

radioBtn[1].addEventListener("click", () => {
  radioBtnInner[0].classList.remove("show");
  radioBtnInner[1].classList.add("show");
});
