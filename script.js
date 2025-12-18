const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
let index = 0;
let interval;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = i;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  let newIndex = (index + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (index - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 4000); // كل 4 ثواني
}

function stopAutoSlide() {
  clearInterval(interval);
}

rightArrow.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

leftArrow.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

startAutoSlide();
