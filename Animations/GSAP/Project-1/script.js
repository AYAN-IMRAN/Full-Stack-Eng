const tl = gsap.timeline();

tl.to(".full",{
  right:0,
  duration:0.8,
  padding: 40,
})

tl.from(".full h4" ,{
  x:150,
  duration:0.6,
  opacity:0,
  stagger:0.2,
})

tl.from(".full i" ,{
  duration:0.6,
  opacity:0,
  stagger:0.1,
})

tl.pause();

const menu = document.querySelector(".nav i");
const cros = document.querySelector(".full i");

menu.addEventListener("click" ,()=> {
  tl.play()
})

cros.addEventListener("click" ,()=> {
  tl.reverse()
})

