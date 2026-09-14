import { useRef, useState } from "react";

function Homepage() {
  const [mouseOverSpan, setMouseOverSpan] = useState(null);

  return (
    <div className="hero">
      <div className="relative">
        <img
          src="src/assets/cristiano_ronaldo_5k_2.jpg"
          alt="CR7 homepage img"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex flex-row justify-center items-center gap-160 text-white text-7xl">
          <span
            className="cursor-default"
            onMouseEnter={() => setMouseOverSpan(1)}
            onMouseLeave={() => setMouseOverSpan(null)}
            style={{ color: mouseOverSpan === 1 ? "red" : "white" }}
          >
            Cristiano
          </span>
          <span
            className="cursor-default"
            onMouseEnter={() => setMouseOverSpan(2)}
            onMouseLeave={() => setMouseOverSpan(null)}
            style={{ color: mouseOverSpan === 2 ? "red" : "white" }}
          >
            Ronaldo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
