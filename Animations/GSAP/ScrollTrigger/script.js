document.querySelectorAll('.card').forEach(card =>{
    gsap.to(card, {
  scale: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: card,
    start: "top 15%",   // jab card ka top screen ke 70% par aaye
    end: "bottom 15%",  // jab card ka bottom 20% tak chala jaye
    scrub: 0.3,        // animation smooth scroll ke sath chalegi
    // markers: true
  }
});

})