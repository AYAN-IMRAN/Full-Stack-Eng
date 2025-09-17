import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, desc, img }) => {
useEffect(() => {
  gsap.utils.toArray(".card").forEach((card) => {
    gsap.to(card, {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: card,   // ✅ har card ka apna trigger
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
        markers: true,
      },
    });
  });
}, []);


  return (
    <div
      className="card w-[320px] h-[420px] mx-auto p-5 rounded-xl 
                 text-center text-[#f1e7dd] 
                 bg-[#6f4e37] shadow-[0_8px_25px_rgba(0,0,0,0.5)]
                 sticky top-[15vh]"
    >
      {/* Image */}
      <div className="h-[55%] flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl mt-4 text-[#f5deb3] font-semibold">{title}</h1>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[#fff9f0] mt-3">{desc}</p>
    </div>
  );
};

export default Card;
