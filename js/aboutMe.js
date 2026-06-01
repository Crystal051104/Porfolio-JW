const photoStacks = document.querySelectorAll(".photo-stack");

photoStacks.forEach((stack) => {
  const photos = stack.querySelectorAll(".stack-photo");
  let currentIndex = 0;

  setInterval(() => {
    photos[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % photos.length;

    photos[currentIndex].classList.add("active");
  }, 3000);
});

