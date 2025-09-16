import React, { useRef } from "react";
import { motion, useScroll,useSpring, useTransform } from "motion/react";
import "./App.css";

function App() {

  const { scrollYProgress } = useScroll({

  });

  // Smooth spring effect add karo (ye GSAP scrub ka feel deta hai)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // jitna strong spring
    damping: 30,    // kitna resistance
    mass: 0.5,      // halka rakho to smooth lagega
  });

  // Progress ko transform karo (0 -> 1 scaleX)
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div className=".nav">

      <motion.div
        className="progressBar"
        style={{
          scaleX:scaleX,
        }}

      />


        <h1>Ayan Ahmed</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, atque
          dicta. Praesentium debitis odio reiciendis impedit distinctio natus
          illum nam quam, quasi sit laborum quos quia incidunt non. Distinctio
          autem odit, ex voluptatibus quod, quisquam modi animi officiis earum
          dolor excepturi est. Quia nulla, officia minima blanditiis sapiente
          nihil maiores odit, culpa similique aut excepturi harum laborum animi
          et vitae labore mollitia placeat nam dolore minus laboriosam! Officiis
          hic odio pariatur temporibus reprehenderit architecto dicta provident
          ab quasi numquam eligendi aperiam vero, corrupti explicabo possimus
          tempora consequatur ipsa sequi quod qui! Non quidem accusantium soluta
          nulla, ullam quos voluptatem quia!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde
          assumenda tempore nihil dignissimos maiores facere sequi. Eaque amet
          esse aperiam praesentium nisi. Consectetur dignissimos repellat rerum
          veniam obcaecati distinctio, qui nesciunt cupiditate beatae delectus
          cum commodi culpa illum sequi perferendis adipisci ut accusamus iusto
          voluptate est quos, ullam exercitationem!
        </p>

        <p>
          {/* repeat lorem multiple times for scroll */}
          {Array(20)
            .fill(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero temporibus quae alias, magnam vel veritatis excepturi repellat pariatur minima vitae."
            )
            .join(" ")}
        </p>
    </div>
  );
}

export default App;
