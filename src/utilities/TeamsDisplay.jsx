import { useState } from "react";

const teamLogo = [
  "src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png",
  "src/assets/Manchester_United_FC_crest.svg",
  "src/assets/Real_Madrid_CF.svg",
  "src/assets/Juventus_FC_-_logo_black_(Italy,_2020).svg",
  "src/assets/Nassr_FC_Logo.svg.webp",
];

function TeamsDisplay() {
  const [activeHover, setActiveHover] = useState(null);
  const [activeMessage, setActiveMessage] = useState("");
  return (
    <div className="flex flex-col">
      <h1>Teams that made part of Cristiano&apos;s career</h1>
      <div className="flex flex-row">
        <div
          className="flex flex-col"
          onMouseEnter={() => {
            setActiveHover(0);
            setActiveMessage(`Sporting Portugal\n1997-2003`);
          }}
          onMouseLeave={() => {
            setActiveHover(null);
            setActiveMessage("");
          }}
        >
          <img
            src={teamLogo[0]}
            alt="Sporting Portugal logo"
            className={
              activeHover === 0 ? "scale-130 bg-green-700" : "scale-100"
            }
          />
          <div className="hidden">
            <span>Sporting Portugal (1997-2003)</span>
            <span>The young talent starts his journey</span>
          </div>
        </div>

        <div
          className="flex flex-col"
          onMouseEnter={() => {
            setActiveHover(1);
            setActiveMessage(`Manchester United FC\n2003-2009 | 2021-2022`);
          }}
          onMouseLeave={() => {
            setActiveHover(null);
            setActiveMessage("");
          }}
        >
          <img
            src={teamLogo[1]}
            alt="Manchester United logo"
            className={activeHover === 1 ? "scale-130 bg-red-700" : "scale-100"}
          />
          <div className="hidden">
            <span>Manchester United FC (2003-2009 | 2021-2022)</span>
            <span>The team who show the world what Cristiano could do it</span>
          </div>
        </div>

        <div
          className="flex flex-col"
          onMouseEnter={() => {
            setActiveHover(2);
            setActiveMessage(`Real Madrid FC\n2009-2018`);
          }}
          onMouseLeave={() => {
            setActiveHover(null);
            setActiveMessage("");
          }}
        >
          <img
            src={teamLogo[2]}
            alt="Real Madrid logo"
            className={
              activeHover === 2 ? "scale-130 bg-yellow-400" : "scale-100"
            }
          />
          <div className="hidden">
            <span>Real Madrid FC (2009-2018)</span>
            <span>The GOAT arrives in Spain</span>
          </div>
        </div>

        <div
          className="flex flex-col"
          onMouseEnter={() => {
            setActiveHover(3);
            setActiveMessage(`Juventus FC\n2018-2021`);
          }}
          onMouseLeave={() => {
            setActiveHover(null);
            setActiveMessage("");
          }}
        >
          <img
            src={teamLogo[3]}
            alt="Juventus logo"
            className={
              activeHover === 3 ? "scale-130 bg-gray-300" : "scale-100"
            }
          />
          <div className="hidden">
            <span>Juventus FC (2018-2021)</span>
            <span>Eating pasta and conquering Italy</span>
          </div>
        </div>

        <div
          className="flex flex-col"
          onMouseEnter={() => {
            setActiveHover(4);
            setActiveMessage(`Al-Nassr\n2021-currently`);
          }}
          onMouseLeave={() => {
            setActiveHover(null);
            setActiveMessage("");
          }}
        >
          <img
            src={teamLogo[4]}
            alt="Al-Nassr logo"
            className={
              activeHover === 4 ? "scale-130 bg-yellow-300" : "scale-100"
            }
          />
          <div className="hidden">
            <span>Al-Nassr (2021-Current)</span>
            <span>A new challenger, the same GOAT</span>
          </div>
        </div>
      </div>

      {activeMessage && (
        <span className="whitespace-pre-line">{activeMessage}</span>
      )}
    </div>
  );
}

export default TeamsDisplay;
