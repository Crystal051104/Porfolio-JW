// PROJECTS SLIDESHOW
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

leftBtn.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

rightBtn.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Show the first slide initially
showSlide(currentSlide);


//FIGMA SLIDESHOW
let figmaImages = document.querySelectorAll(".figma-img");
let figmaIndex = 0;

function showNextFigmaImage() {
  figmaImages[figmaIndex].classList.remove("active");

  figmaIndex = (figmaIndex + 1) % figmaImages.length;

  figmaImages[figmaIndex].classList.add("active");
}

setInterval(showNextFigmaImage, 3000);


//ensure the correct slide is shown when navigating directly to a project section

const hash = window.location.hash.substring(1);

if (hash) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.classList.remove("active");

    if (slide.id === hash) {
      slide.classList.add("active");
    }
  });
}