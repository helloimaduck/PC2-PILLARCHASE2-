// let red = document.querySelector("header");
// red.style.backgroundColor = "red"
let burger = document.querySelector(".burger");
burger.addEventListener("click" , work);

let show = document.querySelector("nav ul");


function work (){
    burger.classList.toggle("active");
    show.classList.toggle("show");
}

window.onscroll = function () {
    const btn = document.getElementById("toTopBtn");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Прокрутка наверх при клике
  document.getElementById("toTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });