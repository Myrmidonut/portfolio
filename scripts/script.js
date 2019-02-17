const burger = document.querySelector("#burger")
const navBottom = document.querySelector("#nav-bottom")
const burgerMenuLink = document.querySelectorAll(".burger-menu-link");

burger.addEventListener("click", e => {
  e.preventDefault()
  navBottom.classList.toggle("nav-bottom-hide")
})

burgerMenuLink.forEach(e => {
  e.addEventListener("click", () => {
    navBottom.classList.toggle("nav-bottom-hide")
  })
})