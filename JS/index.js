let bars = document.querySelector(".fa-bars"),
  times = document.querySelector(".fa-times"),
  menu = document.querySelector(".menu"),
  link = document.querySelectorAll(".menu__link");

bars.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});
times.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
  });
}
AOS.init();
