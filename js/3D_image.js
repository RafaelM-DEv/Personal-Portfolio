const container = document.querySelector(".home")
const card = document.querySelector(".home__card")
const img = document.querySelector('#me')

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX ) / 100
  let yAxis = (window.innerHeight / 2 - e.pageY) / 100
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", (e) => {
  card.style.transition = 'none'
  img.style.transform = 'translateZ(20px)'
})

container.addEventListener("mouseleave", (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
})

img.addEventListener("mousedown", (e) => {
  img.style.transform = 'translateZ(0px)'
})

img.addEventListener("mouseup", (e) => {
  img.style.transform = 'translateZ(20px)'
})