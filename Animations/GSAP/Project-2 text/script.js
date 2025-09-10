function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  // split characters
  let splitedText = h1Text.split("");
  let halfValue = Math.floor(splitedText.length / 2);

  let words = "";

  splitedText.forEach((elem, index) => {
    if (elem === " ") elem = "&nbsp;"; // preserve space

    if (index < halfValue) {
      words += `<span class="left">${elem}</span>`;
    } else {
      words += `<span class="right">${elem}</span>`;
    }
  });

  h1.innerHTML = words;
}

breakText();

// GSAP animations
gsap.from("h1 .left", {
  y: 80,
  opacity: 0,
  duration: 0.7,
  stagger: 0.16,
  delay: 0.7,
  ease: "power3.out"
});

gsap.from("h1 .right", {
  y: 80,
  opacity: 0,
  duration: 0.7,
  delay: 0.7,
  stagger: -0.16,
  ease: "power3.out"
});
