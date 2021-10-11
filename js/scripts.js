const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

let cost = 250; // стоимость билета
let totalPrice = 0; // итоговая цена, изначально 0

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    // если место не занято, добавляем класс активный
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length; // количество выбранных мест
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice; // записываем итоговую цену
  }
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open"); // класс, когда показывать меню
});
