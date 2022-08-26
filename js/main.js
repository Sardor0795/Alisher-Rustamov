const elLangBox = document.querySelector(".js-lang-box");
const elLangSelected = document.querySelector(".js-lang-selected");
const elLangCloser = document.querySelector(".js-lang-closer");



elLangSelected.addEventListener("click", function () {
  elLangBox.classList.toggle("open");
  elLangSelected.classList.toggle("open");
  elLangCloser.classList.toggle("open");
});

elLangCloser.addEventListener("click", function () {
    elLangBox.classList.remove("open");
    elLangSelected.classList.remove("open");
    elLangCloser.classList.remove("open");
  });