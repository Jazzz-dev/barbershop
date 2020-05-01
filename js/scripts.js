
var open = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var open2 = document.querySelector(".map");
var popup2 = document.querySelector(".modal-map");
var close2 = document.querySelector(".modal-map .modal-close");
var overlay = document.querySelector(".overlay-off");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-on");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-on");
});

open2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.add("modal-show");
  overlay.classList.add("overlay-on");
});

close2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.remove("modal-show");
  overlay.classList.remove("overlay-on");
});
