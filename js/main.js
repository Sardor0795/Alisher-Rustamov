const elLangBox = document.querySelector(".js-lang-box");
const elLangSelected = document.querySelector(".js-lang-selected");
const elLangCloser = document.querySelector(".js-lang-closer");
const elLangUz = document.querySelector(".js-lang-uz");
const elLangEn = document.querySelector(".js-lang-en");

elLangSelected.addEventListener("click", function () {
  toggle();
});

elLangCloser.addEventListener("click", function () {
  remove();
});

elLangEn.addEventListener("click", function () {
  elLangSelected.textContent = "English";
  remove();
});

elLangUz.addEventListener("click", function () {
  elLangSelected.textContent = "O‘zbek";
  remove();
});

function remove() {
  elLangBox.classList.remove("open");
  elLangSelected.classList.remove("open");
  elLangCloser.classList.remove("open");
}

function toggle() {
  elLangBox.classList.toggle("open");
  elLangSelected.classList.toggle("open");
  elLangCloser.classList.toggle("open");
}
