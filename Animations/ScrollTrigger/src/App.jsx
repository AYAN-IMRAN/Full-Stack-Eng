import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-col gap-[10vh] py-24 min-h-[500vh] bg-[#1e1e1e]">
      <Card
        title="Hello Scroll 1"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error ad cupiditate nam deserunt vel."
        img="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-classic-brown-coffee-cup-with-saucer-png-image_14727217.png"
      />
      <Card
        title="Hello Scroll 2"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error ad cupiditate nam deserunt vel."
        img="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-classic-brown-coffee-cup-with-saucer-png-image_14727217.png"
      />
      <Card
        title="Hello Scroll 3"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error ad cupiditate nam deserunt vel."
        img="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-classic-brown-coffee-cup-with-saucer-png-image_14727217.png"
      />
      <Card
        title="Hello Scroll 4"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error ad cupiditate nam deserunt vel."
        img="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-classic-brown-coffee-cup-with-saucer-png-image_14727217.png"
      />
    </div>
  );
}

export default App;
