import { ArrowDownIcon } from "@heroicons/react/16/solid";
import CarouselHome from "./utilities/CarrouselHome";
import TeamsDisplay from "./utilities/TeamsDisplay";
import { useRef } from "react";

function Homepage() {
  const divRef = useRef(null);
  const goToRef = () => divRef.current.scrollIntoView();

  return (
    <div className="hero">
      <div className="relative">
        <img
          src="src/assets/cristiano_ronaldo_5k_2.jpg"
          alt="CR7 homepage img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-row justify-between items-center text-white text-7xl px-50">
          <span className="cursor-default hover:text-red-600 transition-colors">
            Cristiano
          </span>
          <span className="cursor-default hover:text-red-600 transition-colors">
            Ronaldo
          </span>
        </div>
        <button
          onClick={goToRef}
          className="absolute right-90 -translate-x-1/2 bottom-80 z-20"
        >
          <ArrowDownIcon className="size-10 text-white hover:text-red-600 cursor-pointer transition-colors" />
        </button>
      </div>

      <div ref={divRef} className="mt-30">
        <h2></h2>
        <TeamsDisplay />
      </div>

      <div className="mt-30">
        <CarouselHome />
      </div>

      <h2 className="p-15">Statistics</h2>
      <div className="flex flex-row justify-center items-center">
        <img
          src="src/assets/IMG_3895_480x480-2299050960.png"
          alt="CR7 profile"
        />
        <div className="flex flex-col self-start">
          <div className="flex flex-row gap-20">
            <span className="text-3xl">Total goals:</span>
            <span className="text-3xl">979</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
