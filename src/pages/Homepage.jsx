import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CarouselHome from "../utilities/CarrouselHome";
import The1000Goals from "../utilities/The1000GoalChart";
import CareerDetails from "./CareerDetails";

function Homepage() {
  const divRef = useRef(null);
  const goToRef = () => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const [fadeInHome, setFadeInHome] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setFadeInHome(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hero bg-gray-900 w-full max-h-full overflow-x-hidden">
      <div className="relative">
        <img
          src="src/assets/cristiano_ronaldo_5k_2.jpg"
          alt="CR7 homepage img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-row justify-between items-center text-white text-7xl px-50">
          <span
            className={`${fadeInHome ? "fade-home" : ""} cursor-default hover:text-red-600 transition-colors font-syncopate`}
          >
            Cristiano
          </span>
          <span
            className={`${fadeInHome ? "fade-home" : ""} cursor-default hover:text-red-600 transition-colors font-syncopate`}
          >
            Ronaldo
          </span>
        </div>
        <button
          onClick={goToRef}
          className={`${fadeInHome ? "fade-home" : ""} absolute right-90 -translate-x-1/2 bottom-80 z-20`}
        >
          <ArrowDownIcon className="size-10 text-white cursor-pointer hover:text-red-600" />
        </button>
      </div>

      <div ref={divRef} className="mt-30 text-red-600">
        <h2 className="p-15 font-syncopate">Teams preview</h2>
        <CareerDetails />
      </div>

      <div className=" text-red-600 mt-40">
        <h2 className="p-15 font-syncopate">The GOAT through the history</h2>
        <CarouselHome />
      </div>

      <div className="text-red-500">
        <h2 className="p-15 font-syncopate">Full profile</h2>
      </div>

      <div className="relative flex flex-row justify-center items-center gap-4 text-red-600 text-4xl font-dm-sans">
        <div
          className={`flex flex-col text-center mb-60 transition-opacity duration-500 ease-in-out cursor-default`}
        >
          <span className="w-70">
            Full name: Cristiano Ronaldo da Silva Medeiros
          </span>
          <hr className="text-white" />
          <span>Pos: CF/ST</span>
          <hr className="text-white" />
          <span></span>
        </div>

        <Link to="/full-info">
          <img
            src="src/assets/Cr7-PNG-HD-2540334386.png"
            alt="Individual Awards"
            className="object-contain w-80"
          />
        </Link>
        <div
          className={`flex flex-col text-center mb-60 transition-opacity duration-500 ease-in-out cursor-default`}
        >
          <span>8x player of the year</span>
          <hr className="text-white" />
          <span>4x UEFA best player</span>
          <hr className="text-white" />
          <span className="w-100">12x Footballer of the year</span>
        </div>
      </div>

      <div className="text-red-600 p-15 mt-20 font-syncopate">
        <h2>By the Portugal&apos;s national team</h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-25">
        <img
          src="src/assets/Portugal_national_football_team_logo_crest-2592173146.png"
          alt=""
          className="w-99 h-full object-contain"
        />
        <div className="flex flex-col self-start w-125">
          <span className="text-gray-300 font-syncopate">
            Achivements <br />
            <span className="text-red-600 text-[35px] font-dm-sans">
              1x Euro League champion
              <br />
              1x Nations League champion
            </span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Apperances <br />
            <span className="text-red-600 text-4xl font-dm-sans">233</span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Goals <br />
            <span className="text-red-600 text-4xl font-dm-sans">146</span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Assists <br />
            <span className="text-red-600 text-4xl font-dm-sans">45</span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Minutes played <br />
            <span className="text-red-600 text-4xl font-dm-sans">
              18.537&apos;
            </span>
          </span>
        </div>
      </div>

      <div className="p-15 text-red-600 mt-20 font-syncopate">
        <h2>Road to to 1000 goals</h2>
      </div>

      <div>
        <The1000Goals />
      </div>
    </div>
  );
}

export default Homepage;
