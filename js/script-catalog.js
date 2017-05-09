// Появление кнопок на карточках товаров

var itempic = document.querySelector(".item-picture");
var itemoverlay = document.querySelector(".item-card-overlay");

itempic.addEventListener("mouseover", function() {
  // console.log("Mouseover");
  itempic.classList.add("faded");
  itemoverlay.classList.add("overlay-show");
});
