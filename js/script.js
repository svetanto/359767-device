// Открытие и закрытие модального окна с картой
var map_open = document.querySelector(".contacts img");
var bigmap = document.querySelector(".map-popup-structure");
var map_close = bigmap.querySelector(".close-button");
map_open.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigmap.classList.add("popup-show");
});
map_close.addEventListener("click", function() {
  bigmap.classList.remove("popup-show");
  // console.log("Клик по карте");
});

// Открытие и закрытие модального окна с формой обратной связи
var feedback_open = document.querySelector(".write-us");
var bigform = document.querySelector(".feedback-popup-structure");
var feedback_close = bigform.querySelector(".close-button");
var username = bigform.querySelector("[name=name]");
var usermail = bigform.querySelector("[name=email]");
var userletter = bigform.querySelector("[name=letter]");
var form = bigform.querySelector("form");

var username_storage = localStorage.getItem("username");
var usermail_storage = localStorage.getItem("usermail");


feedback_open.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigform.classList.add("popup-show");
  username.focus();
  if (username_storage) {
    username.value = username_storage;
    usermail.focus();
  }
  if (usermail_storage) {
    usermail.value = usermail_storage;
    userletter.focus();
  }
// console.log("Клик по кнопке");
});
form.addEventListener("submit", function(evt) {
  if (!username.value) {
    evt.preventDefault();
    username.classList.add("input-invalid");
  } else {
    localStorage.setItem("username", username.value);
  }
  if (!usermail.value) {
    evt.preventDefault();
    usermail.classList.add("input-invalid");
  } else {
    localStorage.setItem("usermail", usermail.value);
  }
  if (!userletter.value) {
    evt.preventDefault();
    userletter.classList.add("input-invalid");
  }
});
username.addEventListener("focus", function() {
  username.classList.remove("input-invalid");
});
usermail.addEventListener("focus", function() {
  usermail.classList.remove("input-invalid");
});
userletter.addEventListener("focus", function() {
  userletter.classList.remove("input-invalid");
});
feedback_close.addEventListener("click", function() {
  bigform.classList.remove("popup-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    if (bigform.classList.contains("popup-show")) {
      bigform.classList.remove("popup-show");
    }
    if (bigmap.classList.contains("popup-show")) {
      bigmap.classList.remove("popup-show");
    }
  }
});
