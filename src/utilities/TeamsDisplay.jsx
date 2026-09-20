import { useState } from "react";
import { Link } from "react-router-dom";

const teamLogo = [
  "src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png",
  "src/assets/Manchester_United_FC_crest.svg",
  "src/assets/Real_Madrid_CF.svg",
  "src/assets/juventus--white.ddcefc5a-2839346283.png",
  "src/assets/Nassr_FC_Logo.svg.webp",
];

function TeamsDisplay() {
  const [isOnLogo, setIsOnLogo] = useState(null);
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div
          className={`relative flex justify-center items-center p-5 ${isOnLogo === 0 ? "z-50" : "z-0"}`}
        >
          <img
            src={teamLogo[0]}
            alt=""
            className="w-32 z-20 transition-transform duration-300 ease-in-out hover:scale-150"
            onMouseEnter={() => setIsOnLogo(0)}
            onMouseLeave={() => setIsOnLogo(null)}
          />
          <div
            className={`absolute -left-1 top-33 -translate-y-1/2 h-78 w-0 p-4 bg-gray-700 rounded text-white 
            pointer-events-none transition-all duration-350 ease-out 
            ${isOnLogo === 0 ? "opacity-100 translate-x-0 w-180 z-10" : "opacity-0 translate-0 z-0 w-0"}`}
          >
            <div className="flex flex-col ml-55 mt-3">
              <span className="text-5xl text-red-600">Sporting Portugal</span>
              <span className="text-xl text-gray-300 mt-2">2003-2009</span>
              <hr className="text-white" />
              <ul className="p-0">
                <li>1x Portuguese Super Cup Winner</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`relative flex justify-center items-center p-5 ${isOnLogo === 1 ? "z-50" : "z-0"}`}
        >
          <img
            src={teamLogo[1]}
            alt=""
            className="w-40 z-20 transition-transform duration-300 ease-in-out hover:scale-150"
            onMouseEnter={() => setIsOnLogo(1)}
            onMouseLeave={() => setIsOnLogo(null)}
          />
          <div
            className={`absolute -left-1 top-32 -translate-y-1/2 h-78 w-0 p-4 bg-gray-700 rounded text-white 
            pointer-events-none transition-all duration-360 ease-out 
            ${isOnLogo === 1 ? "opacity-100 translate-x-0 w-210 z-10" : "opacity-0 translate-0 z-0 w-0"}`}
          >
            <div className="flex flex-col ml-60">
              <span className="text-5xl text-red-600">
                Manchester United FC
              </span>
              <span className="text-xl text-gray-300 mt-2">
                2009-2010 | 2021-2022
              </span>
              <hr className="text-white" />
              <div className="flex gap-2">
                <ul className="p-0">
                  <li>3x English Champion</li>
                  <li>1x UCL Champion</li>
                  <li>1x English Super Cup Champion</li>
                </ul>
                <ul className="p-0">
                  <li>1x English FA Cup Champion</li>
                  <li>2x English League Cup Champion</li>
                  <li>1x FIFA Club World Cup Champion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative flex justify-center items-center p-5 ${isOnLogo === 2 ? "z-50" : "z-0"}`}
        >
          <img
            src={teamLogo[2]}
            alt=""
            className="w-30 z-20 transition-transform duration-300 ease-in-out hover:scale-150"
            onMouseEnter={() => setIsOnLogo(2)}
            onMouseLeave={() => setIsOnLogo(null)}
          />
          <div
            className={`absolute -left-1 top-32 -translate-y-1/2 h-78 w-0 p-4 bg-gray-700 rounded text-white 
            pointer-events-none transition-all duration-350 ease-out 
            ${isOnLogo === 2 ? "opacity-100 translate-x-0 w-170 z-10" : "opacity-0 translate-0 z-0 w-0"}`}
          >
            <div className="flex flex-col ml-50">
              <span className="text-5xl text-red-600">Real Madrid CF</span>
              <span className="text-xl text-gray-300 mt-2">2010-2018</span>
              <hr className="text-white" />
              <ul className="p-0">
                <li>1x Portuguese Super Cup Winner</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`relative flex justify-center items-center p-5 ${isOnLogo === 3 ? "z-50" : "z-0"}`}
        >
          <img
            src={teamLogo[3]}
            alt=""
            className="w-30 z-20 transition-transform duration-300 ease-in-out hover:scale-150"
            onMouseEnter={() => setIsOnLogo(3)}
            onMouseLeave={() => setIsOnLogo(null)}
          />
          <div
            className={`absolute -right-1 top-28 -translate-y-1/2 h-76 w-0 p-4 bg-gray-700 rounded text-white 
            pointer-events-none z-0 transition-all duration-350 ease-out 
            ${isOnLogo === 3 ? "opacity-100 translate-x-0 w-160 z-10" : "opacity-0 translate-x-20 z-0 w-0"}`}
          >
            <div className="flex flex-col ml-0 mt-3 gap-y-3">
              <span className="text-5xl">Juventus FC</span>
              <span className="text-xl text-gray-200">2018-2021</span>
              <ul className="p-0">
                <li>1x Portuguese Super Cup Winner</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`relative flex justify-center items-center p-5 ${isOnLogo === 4 ? "z-50" : "z-0"}`}
        >
          <img
            src={teamLogo[4]}
            alt=""
            className="w-32 z-20 transition-transform duration-300 ease-in-out hover:scale-150"
            onMouseEnter={() => setIsOnLogo(4)}
            onMouseLeave={() => setIsOnLogo(null)}
          />
          <div
            className={`absolute -right-1 top-29 -translate-y-1/2 h-77 w-0 p-4 bg-gray-700 rounded text-white 
            pointer-events-none z-0 transition-all duration-350 ease-out 
            ${isOnLogo === 4 ? "opacity-100 translate-x-0 w-160 z-10" : "opacity-0 translate-0 z-0 w-0"}`}
          >
            <div className="flex flex-col mt-3 gap-y-3">
              <span className="text-5xl">Al-Nassr</span>
              <span className="text-xl text-gray-200">2022-currently</span>
              <ul className="p-0">
                <li>1x Portuguese Super Cup Winner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-65">
        <span>
          <Link to="/career-details">See everything</Link>
        </span>
      </div>
    </>
  );
}

export default TeamsDisplay;
