import { ArrowDownIcon } from "@heroicons/react/16/solid";
import CarouselHome from "./utilities/CarrouselHome";
import TeamsDisplay from "./utilities/TeamsDisplay";
import { useRef, useState } from "react";
import The1000Goals from "./utilities/The1000GoalChart";

function Homepage() {
  const divRef = useRef(null);
  const goToRef = () => divRef.current.scrollIntoView();

  const [onCr7Card, setOnCr7Card] = useState(false);

  return (
    <div className="hero bg-gray-900">
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

      <div ref={divRef} className="mt-30 text-red-600">
        <h2 className="p-15">Teams preview</h2>
        <TeamsDisplay />
      </div>

      <div className=" text-red-600 mt-40">
        <h2 className="p-15">The GOAT through the history</h2>
        <CarouselHome />
      </div>

      <div className="text-red-500">
        <h2 className="p-15">Individual awards</h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 text-red-600 text-3xl uppercase font-semibold">
        <div
          className={`flex flex-col text-center transition-opacity duration-500 ease-in-out ${onCr7Card === true ? "opacity-100" : "opacity-0"}`}
        >
          <span className="w-90">5x The Ballon D&apos;or winner</span>
          <hr className="text-white" />
          <span>22x top goal scorer</span>
          <hr className="text-white" />
          <span className="w-90">
            3x The Best FIFA Men&apos;s Player winner
          </span>
        </div>

        <img
          src="src/assets/IMG_3895_480x480-2299050960.png"
          alt="Individual Awards"
          className="object-contain w-110 bg-gray-800 rounded-tl-[30px] rounded-tr-[30px] border-3 border-red-600 cursor-pointer "
          onMouseEnter={() => setOnCr7Card(true)}
          onMouseLeave={() => setOnCr7Card(false)}
        />

        <div
          className={`flex flex-col text-center transition-opacity duration-500 ease-in-out ${onCr7Card === true ? "opacity-100" : "opacity-0"}`}
        >
          <span>8x player of the year</span>
          <hr className="text-white" />
          <span>4x UEFA best player</span>
          <hr className="text-white" />
          <span className="w-80">12x Footballer of the year</span>
        </div>
      </div>

      <div className="text-red-600 p-15 mt-50">
        <h2>By the Portugal&apos;s national team</h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-30">
        <img
          src="src/assets/Portugal_national_football_team_logo_crest-2592173146.png"
          alt=""
          className="w-95 h-full object-contain"
        />
        <div className="flex flex-col self-start w-125">
          <span className="text-gray-300">
            Achivements <br />
            <span className="text-red-600 text-[35px]">
              2x europian champion
            </span>
          </span>{" "}
          <hr className="text-white" />
          <span className="text-gray-300">
            Apperances <br />
            <span className="text-red-600 text-4xl">233</span>
          </span>{" "}
          <hr className="text-white" />
          <span className="text-gray-300">
            Goals <br /> <span className="text-red-600 text-4xl">146</span>
          </span>{" "}
          <hr className="text-white" />
          <span className="text-gray-300">
            Assists <br /> <span className="text-red-600 text-4xl">45</span>
          </span>{" "}
          <hr className="text-white" />
          <span className="text-gray-300">
            Minutes played <br />
            <span className="text-red-600 text-4xl">18.537&apos;</span>
          </span>{" "}
        </div>
      </div>

      <div className="p-15 text-red-600 mt-50">
        <h2>Road to to 1000 goals</h2>
      </div>

      <div>
        <The1000Goals />
      </div>
    </div>
  );
}

export default Homepage;
