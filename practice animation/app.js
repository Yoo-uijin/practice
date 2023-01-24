let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});

let div = document.querySelectorAll("div");
for (let i = 0; i < [...div].length; i++) {
  observer.observe(div[i]);
}
