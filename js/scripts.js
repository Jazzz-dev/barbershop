
var open = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector(".login-form");
var open2 = document.querySelector(".map");
var popup2 = document.querySelector(".modal-map");
var close2 = document.querySelector(".modal-map .modal-close");
var overlay = document.querySelector(".overlay-off");
var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("login");
} catch (error) {
  isStorageSupport = false;
}
open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-on");
  if(storage) {
    login.value = storage;
    password.focus();
  } else {
      login.focus();
  }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    form.querySelector(".submit").innerHTML="Введите логин или пароль!";
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
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


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-on");
    }
    if (popup2.classList.contains("modal-show")) {
      popup2.classList.remove("modal-show");
      overlay.classList.remove("overlay-on");
    }
  }

});
