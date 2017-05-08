// Открытие и закрытие модального окна с картой
var map_open = document.querySelector(".contacts img");
var bigmap = document.querySelector(".map-popup-structure");
var map_close = bigmap.querySelector(".close-button");
map_open.addEventListener("click", function(evt){
  evt.preventDefault();
  bigmap.classList.add("popup-show");
});
map_close.addEventListener("click", function(){
  bigmap.classList.remove("popup-show");
  // console.log("Клик по карте");
});

// Открытие и закрытие модального окна с формой обратной связи
var feedback_open = document.querySelector(".write-us");
var bigform = document.querySelector(".feedback-popup-structure");
var feedback_close = bigform.querySelector(".close-button");
feedback_open.addEventListener("click", function(evt){
  evt.preventDefault();
  bigform.classList.add("popup-show");
// console.log("Клик по кнопке");
});
feedback_close.addEventListener("click", function(){
  bigform.classList.remove("popup-show");
});
