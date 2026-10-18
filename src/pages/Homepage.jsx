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
          alt=""
          className=" w-full h-200 md:w-full md:h-full object-cover"
        />
        <div
          className="absolute inset-0 left-40 bottom-70 z-10 flex flex-col justify-center items-center text-white text-3xl md:text-6xl 
            md:justify-between
            md:flex-row
            md:px-50
            md:inset-0"
        >
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
          className={`${fadeInHome ? "fade-home" : ""} absolute bottom-20 left-45 
            md:left-270 
            md:-translate-x-1/2 
            md:bottom-55
            z-20
          `}
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
      <div className="relative flex flex-row justify-center items-center gap-10 font-dm-sans">
        <div
          className={`flex flex-col text-center text-4xl mb-70 transition-opacity duration-500 ease-in-out cursor-default`}
        >
          <span className="font-syncopate text-6xl w-96 text-center text-red-600">
            Cristiano Ronaldo
          </span>
          <hr className="text-white" />
          <div className="w-90 grid grid-cols-3 gap-4 justify-center items-center mt-10">
            <a href="https://www.fpf.pt/pt/selecoes/futebol-masculino/selecao-a">
              <img
                src="src/assets/Portugal_national_football_team_logo_crest-2592173146.png"
                alt="portugal"
              />
            </a>
            <a href="https://www.sporting.pt/">
              <img
                src="src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png"
                alt="sporting"
              />
            </a>
            <a href="https://www.manutd.com/en">
              <img
                src="src/assets/Manchester_United_FC_crest.svg"
                alt="Manchester United"
              />
            </a>
            <a href="https://www.realmadrid.com/en-US">
              <img src="src/assets/Real_Madrid_CF.svg" alt="Real Madrid" />
            </a>
            <a href="https://www.juventus.com/en/">
              <img
                src="src/assets/juventus--white.ddcefc5a-2839346283.png"
                alt="Juventus"
              />
            </a>
            <a href="https://alnassr.sa/">
              <img src="src/assets/Nassr_FC_Logo.svg.webp" alt="Al-Nassr" />
            </a>
          </div>
        </div>

        <Link to="/full-info">
          <img
            src="src/assets/Cr7-PNG-HD-2540334386.png"
            alt="Individual Awards"
            className="object-contain w-80"
          />
        </Link>
        <hr className="text-white" />
        <div
          className={`flex flex-col text-center text-4xl text-red-600 max-h-85 mb-100 overflow-y-auto transition-opacity duration-500 ease-in-out cursor-default`}
        >
          <span className="w-96">5x The Ballon Dor&apos;s winner</span>
          <hr className="text-white" />
          <span className="w-90">5x UEFA Champions league winner</span>
          <hr className="text-white" />
          <span className="w-90">2x UEFA Super Cup Winner</span>
          <hr className="text-white" />
          <span className="w-90">2x UEFA Nations League winner</span>
          <hr className="text-white" />
          <span>4x UEFA best player</span>
          <hr className="text-white" />
          <span>2x spanish champion</span>
          <hr className="text-white" />
          <span>3x english champion</span>
          <hr className="text-white" />
          <span>2x italian champion</span>
          <hr className="text-white" />
          <span className="w-90">1x english FA Cup winner</span>
          <hr className="text-white" />
          <span className="w-90">2x english league cup winner</span>
          <hr className="text-white" />
          <span>1x italian Cup Winner</span>
          <hr className="text-white" />
          <span className="w-90">2x italian super cup Winner</span>
          <hr className="text-white" />
          <span className="w-90">2x spanish super cup winner</span>
          <hr className="text-white" />
          <span className="w-90">1x english super cup winner</span>
          <hr className="text-white" />
          <span className="w-90">1x saudi arabian champion</span>
          <hr className="text-white" />
          <span className="w-90">1x portuguese super cup winner</span>
          <hr className="text-white" />
          <span>8x player of the year</span>
          <hr className="text-white" />
          <span className="w-90">12x Footballer of the year</span>
          <hr className="text-white" />
          <span>22x top goal scorer</span>
          <hr className="text-white" />
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
