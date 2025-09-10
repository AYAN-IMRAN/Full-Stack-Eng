let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  let deltaY = currentScrollY - lastScrollY; // 👈 wheel ka replacement
  lastScrollY = currentScrollY;

  if (deltaY > 0) {
    gsap.to(".marque", {
      x: "-100%",   
      duration: 0.6,
      ease: "none"
    });
  } else {

    gsap.to(".marque", {
      x: "0%", 
      duration: 0.6,
      ease: "none"
    });
  }
});


// window.addEventListener("scroll", () => {
//   // scroll progress (0 to 1)
//   let progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

//   // map progress -> move element
//   gsap.to(".marque", {
//     x: -progress * 100 + "%", // 👈 jitna scroll utna translate
//     duration: 0.3,            // thoda smooth lag k
//     ease: "power2.out"
//   });
// });

// gsap.to(".marque" ,{
//     transfom:'translatex(-100%)',
//     duration:1,
//     ease:'none'
// })