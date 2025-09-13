function page1Animation() {
    let tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// 🟢 Navbar - sab ek saath flash in
tl.from(["nav h1", "nav h4", "nav button"], {
  opacity: 0,
  y: -100,
  duration: 0.9,
  stagger: 0,
});

// 🟢 Left Heading
tl.from(".center-part .left h1", {
  opacity: 0,
  x: -80,
  duration: 0.7
}, "-=0.2");

// 🟢 Left Paragraph
tl.from(".center-part .left p", {
  opacity: 0,
  x: -50,
  duration: 0.6
}, "-=0.3");

// 🟢 Left Button (quick pop-in)
tl.fromTo(".left button", 
  { opacity: 0, scale: 0.9 }, 
  { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
);

// 🟢 Right Image
tl.from(".right img", {
  opacity: 0,
  x: 80,
  duration: 0.5
}, "-=0.3");

// 🟢 Logos Section (fast stagger)
tl.from(".logos img", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6
}, "-=0.2");

}

// page1Animation()

