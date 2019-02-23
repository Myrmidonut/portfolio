// NAVBAR

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

// CANVAS
const canvas = document.querySelector("canvas")

canvas.width = document.querySelector("body").scrollWidth
canvas.height = window.innerHeight

const centerX = canvas.width / 2
const centerY = canvas.height / 2 - 50;
const heightThird = canvas.height / 100 * 70
const heightHalf = canvas.height / 2 - 50
const radius = Math.sqrt(Math.pow(canvas.height, 2) + Math.pow(canvas.width, 2))

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

setTimeout(() => {
  const title = canvas.getContext("2d")
  const titleText = "FREDERIK"

  title.font = `${canvas.height / 7.5}px Grenadier`
  title.textBaseline = "middle"
  title.fillStyle = "white"
  title.textAlign = "center"

  const titleWidth = title.measureText(titleText).width

  title.fillText("FREDERIK", centerX, heightHalf)

  const subtitle = canvas.getContext("2d")
  const subtitleText = "developer"

  subtitle.font = `${canvas.height / 10.3}px Grenadier`
  subtitle.textBaseline = "middle"
  subtitle.fillStyle = "white"
  subtitle.textAlign = "center"

  const subtitleWidth = title.measureText(subtitleText).width

  subtitle.fillText("developer", centerX, heightThird)

  const horizontalBars = canvas.getContext("2d")

  horizontalBars.beginPath();

  // frederik
  horizontalBars.moveTo(centerX, heightHalf * 0.8)
  horizontalBars.lineTo(centerX + titleWidth / 2 + 15, heightHalf * 0.8)
  horizontalBars.moveTo(centerX, heightHalf * 0.8)
  horizontalBars.lineTo(centerX - titleWidth / 2 - 15, heightHalf * 0.8)

  horizontalBars.moveTo(centerX, heightHalf * 1.15)
  horizontalBars.lineTo(centerX + titleWidth / 2 + 15, heightHalf * 1.15)
  horizontalBars.moveTo(centerX, heightHalf * 1.15)
  horizontalBars.lineTo(centerX - titleWidth / 2 - 15, heightHalf * 1.15)

  // developer
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird)
  horizontalBars.lineTo(canvas.width - 10, heightThird)
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird * 0.96)
  horizontalBars.lineTo(canvas.width - 10, heightThird * 0.96)
  horizontalBars.moveTo(centerX + subtitleWidth / 2 + 10, heightThird * 1.04)
  horizontalBars.lineTo(canvas.width - 10, heightThird * 1.04)

  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird)
  horizontalBars.lineTo(10, heightThird)
  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird * 0.96)
  horizontalBars.lineTo(10, heightThird * 0.96)
  horizontalBars.moveTo(centerX - subtitleWidth / 2 - 10, heightThird * 1.04)
  horizontalBars.lineTo(10, heightThird * 1.04)

  horizontalBars.lineWidth = 7
  horizontalBars.strokeStyle = "#ce8f00"

  horizontalBars.stroke()
}, 100)