// simple single animation
// gsap.to(".box", { x: 300, duration: 2, rotate: 180 });

// timeline (multiple animations in order)
// let tl = gsap.timeline();
// tl.from(".heading", { y: -100,x:-200, opacity: 0, duration: 1 })
//   .from(".text", { opacity: 0, duration: 1 })
//   .to(".circle", { x: 200, rotate: 360, duration: 2 });

// gsap.from(".section", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   scrollTrigger: ".section"
// });


// Navbar Animation 
// let tl = gsap.timeline();

// tl.from("h1", {
//   y: -100,
//   opacity: 0,
//   duration: 1
// });
 
// tl.from(".nav" ,{
//     y:-100,
//     opacity:0,
//     duration:1,
// })


// tl.from(".box" ,{
//   opacity:0,
//   x:400,
//   duration:2,
//   rotate:360,
//   scrollTrigger: {
//     trigger: ".box",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: 2,
//     markers: true
//   }
// })

// tl.from(".box1" ,{
//   opacity:0,
//   x:-400,
//   duration:2,
//   rotate:360,
//   scrollTrigger: {
//     trigger: ".box",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: 2,
//     markers: true
//   }
// })


  // gsap.registerPlugin(ScrollTrigger);

  // // Timeline create
  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".hero",
  //     start: "top center",
  //     end: "bottom top",
  //     scrub: true,
  //     pin: true,   // hero section pinned rahega scroll ke time
  //     markers: false // debugging ke liye true kar sakte ho
  //   }
  // });

  // // Heading animation
  // tl.from(".heading", {
  //   y: -100,
  //   opacity: 0,
  //   duration: 1
  // });

  // // Text animation
  // tl.from(".text", {
  //   x: -200,
  //   opacity: 0,
  //   duration: 1
  // });

  // // Box animation
  // tl.to(".box", {
  //   x: 300,
  //   rotate: 360,
  //   opacity: 1,
  //   duration: 2
  // });




// gsap.to(".ball", {
//   x: 100,   // move right
//   y: 50,    // move down
//   duration: 2,
//   ease: "bounce.out"
// });


//   const string = document.querySelector(".string");

//   string.addEventListener("mouseenter", () => {
//     gsap.to(string, {
//       attr: { y1: 70, y2: 80 }, // bend karke vibration
//       duration: 0.1,
//       yoyo: true,
//       repeat: -1,
//       ease: "sine.inOut"
//     });
//   });

//   string.addEventListener("mouseleave", () => {
//     gsap.killTweensOf(string); // stop vibration
//     gsap.to(string, {
//       attr: { y1: 75, y2: 75 }, // wapis straight
//       duration: 0.2,
//       ease: "power2.out"
//     });
//   });

// const main = document.querySelector(".main");
// const cursor = document.querySelector(".cursor");
// const image = document.querySelector(".image");
// const overlay = document.querySelector(".overlay");

// main.addEventListener("mousemove", function (e) {
//   gsap.to(cursor, {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.2,
//     ease: "power2.out",
//   });
// });

// image.addEventListener("mouseenter", function () {
//   gsap.to(cursor, { scale: 2, duration: 0.4, ease: "power2.out" });
//   // gsap.to(overlay, { opacity: 1, duration: 0.4, ease: "power2.out" });
// });

// image.addEventListener("mouseleave", function () {
//   gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
//   // gsap.to(overlay, { opacity: 0, duration: 0.4, ease: "power2.out" });
// });
