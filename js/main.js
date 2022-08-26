const elLangBox = document.querySelector(".js-lang-box");
const elLangSelected = document.querySelector(".js-lang-selected");

elLangSelected.addEventListener("click", function () {
  elLangBox.classList.toggle("open");
  elLangSelected.classList.toggle("open");
});
