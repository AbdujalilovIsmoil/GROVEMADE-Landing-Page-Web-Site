this.addEventListener("DOMContentLoaded", () => {
  // ****NAVBAR CODES START****
  $(".fa-bars").addEventListener("click", () => {
    $(".menu").classList.add("active");
  });
  $(".fa-times").addEventListener("click", () => {
    $(".menu").classList.remove("active");
  });

  for (let i = 0; i < $$(".menu__link").length; i++) {
    $$(".menu__link")[i].addEventListener("click", () => {
      $(".menu").classList.remove("active");
    });
  }

  // ****NAVBAR CODES END****

  // ****AOS ANIMATION LIBRARY****
  AOS.init();
});
