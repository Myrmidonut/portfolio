// NAVBAR
const burger = document.querySelector("#burger")
const navBottom = document.querySelector("#nav-bottom")
const burgerMenuLink = document.querySelectorAll(".burger-menu-link");
const homeMenuLink = document.querySelector(".home-menu-link")

burger.addEventListener("click", e => {
  e.preventDefault()
  navBottom.classList.toggle("nav-bottom-hide")
})

burgerMenuLink.forEach(e => {
  e.addEventListener("click", () => {
    navBottom.classList.toggle("nav-bottom-hide")
  })
})

homeMenuLink.addEventListener("click", () => {
  navBottom.classList.add("nav-bottom-hide")
})

// CANVAS
window.addEventListener("resize", () => {
	drawCanvas()
}, false);

window.onload = drawCanvas

function drawCanvas() {
  const canvas = document.querySelector("canvas")

  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

  const centerX = canvas.width / 2
  let heightThird = canvas.height / 100 * 70
  const heightHalf = canvas.height / 2 - 50
  const radius = Math.sqrt(Math.pow(canvas.height, 2) + Math.pow(canvas.width, 2))

  if (canvas.height <= 400) {
    heightThird -= 30
  }

  // RAYS
  const rays = canvas.getContext("2d")

  rays.beginPath();

  for (let degree = 0; degree < 360; degree += 2) {
    if (degree >= 90 && degree <= 270) {
      const rand = degree * Math.PI / 180

      rays.moveTo(centerX, heightThird + 50)
      rays.lineTo(centerX + radius * Math.sin(rand), heightThird + 50 + radius * Math.cos(rand))
    }
  }

  const gradient = rays.createLinearGradient(0, 0, 0, heightThird)

  gradient.addColorStop(0, "#b37f01")
  gradient.addColorStop(1, "#1b1b1b")

  rays.lineWidth = 2
  rays.strokeStyle = gradient

  rays.stroke()

  // TITLE
  const title = canvas.getContext("2d")
  const titleText = "FREDERIK"
  let titleHeight

  if (canvas.width <= 450) {
    titleHeight = canvas.width / 8
  } else {
    titleHeight = canvas.height / 10
  }

  title.font = `100 ${titleHeight}pt Grenadier`
  title.textBaseline = "alphabetic"
  title.fillStyle = "white"
  title.textAlign = "center"

  const titleWidth = title.measureText(titleText).width

  title.fillText(titleText, centerX, heightHalf + titleHeight / 2)

  // SUBTITLE
  const subtitle = canvas.getContext("2d")
  const subtitleText = "DEVELOPER"
  let subtitleHeight

  if (canvas.width <= 450) {
    subtitleHeight = canvas.width / 17
  } else {
    subtitleHeight = canvas.height / 20
  }

  subtitle.font = `100 ${subtitleHeight}pt Grenadier`
  subtitle.textBaseline = "alphabetic"
  subtitle.fillStyle = "white"
  subtitle.textAlign = "center"

  const subtitleWidth = title.measureText(subtitleText).width

  subtitle.fillText(subtitleText, centerX, heightThird + subtitleHeight / 2)

  // BARS
  const horizontalBars = canvas.getContext("2d")

  horizontalBars.beginPath();

  // BARS TITLE
  horizontalBars.moveTo(centerX, heightHalf - titleHeight / 2 - 10)
  horizontalBars.lineTo(centerX + titleWidth / 2 + 15, heightHalf - titleHeight / 2 - 10)
  horizontalBars.moveTo(centerX, heightHalf - titleHeight / 2 - 10)
  horizontalBars.lineTo(centerX - titleWidth / 2 - 15, heightHalf - titleHeight / 2 - 10)

  horizontalBars.moveTo(centerX, heightHalf + titleHeight / 2 + 10)
  horizontalBars.lineTo(centerX + titleWidth / 2 + 15, heightHalf + titleHeight / 2 + 10)
  horizontalBars.moveTo(centerX, heightHalf + titleHeight / 2 + 10)
  horizontalBars.lineTo(centerX - titleWidth / 2 - 15, heightHalf + titleHeight / 2 + 10)

  // BARS SUBTITLE
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird)
  horizontalBars.lineTo(canvas.width - 10, heightThird)
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird - subtitleHeight / 2 + 2)
  horizontalBars.lineTo(canvas.width - 10, heightThird - subtitleHeight / 2 + 2)
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird + subtitleHeight / 2 - 2)
  horizontalBars.lineTo(canvas.width - 10, heightThird + subtitleHeight / 2 - 2)

  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird)
  horizontalBars.lineTo(10, heightThird)
  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird - subtitleHeight / 2 + 2)
  horizontalBars.lineTo(10, heightThird - subtitleHeight / 2 + 2)
  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird + subtitleHeight / 2 - 2)
  horizontalBars.lineTo(10, heightThird + subtitleHeight / 2 - 2)

  horizontalBars.lineWidth = 5
  horizontalBars.strokeStyle = "#ce8f00"

  horizontalBars.stroke()
}