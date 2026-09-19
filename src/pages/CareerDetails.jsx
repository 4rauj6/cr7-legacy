import { useState } from "react";
import { Link } from "react-router-dom";

function CareerDetails() {
  const selectedTeam = [
    {
      logo: "src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png",
      name: "sporting",
      header: "Sporting Club Portugal",
      years: "1997-2003",
      size: "w-[500px]",
    },

    {
      logo: "src/assets/Manchester_United_FC_crest.svg",
      name: "united",
      header: "Sporting Club Portugal",
      years: "1997-2003",
      size: "w-[600px]",
    },

    {
      logo: "src/assets/Real_Madrid_CF.svg",
      name: "rm",
      header: "Sporting Club Portugal",
      years: "1997-2003",
      size: "w-[500px]",
    },

    {
      logo: "src/assets/juventus--white.ddcefc5a-2839346283.png",
      name: "juve",
      header: "Sporting Club Portugal",
      years: "1997-2003",
      size: "w-[500px]",
    },

    {
      logo: "src/assets/Nassr_FC_Logo.svg.webp",
      name: "nassr",
      header: "Sporting Club Portugal",
      years: "1997-2003",
      size: "w-[500px]",
    },
  ];

  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="hero-2 bg-gray-900 min-h-screen">
      <Link to="/">
        <img
          src="src/assets/cristiano-ronaldo-cr7-seeklogo.png"
          alt="site logo"
          className="w-8"
        />
      </Link>
      <div className="flex justify-center items-center cursor-pointer gap-5">
        <img
          src="src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png"
          key={selectedTeam[0].name}
          className="w-20"
          onClick={() => setIsSelected(0)}
        />

        <img
          src="src/assets/Manchester_United_FC_crest.svg"
          key={selectedTeam[1].name}
          className="w-26.25"
          onClick={() => setIsSelected(1)}
        />

        <img
          src="src/assets/Real_Madrid_CF.svg"
          key={selectedTeam[2].name}
          className="w-26.25"
          onClick={() => setIsSelected(2)}
        />

        <img
          src="src/assets/juventus--white.ddcefc5a-2839346283.png"
          key={selectedTeam[3].name}
          className="w-26.25"
          onClick={() => setIsSelected(3)}
        />

        <img
          src="src/assets/Nassr_FC_Logo.svg.webp"
          key={selectedTeam[4].name}
          className="w-26.25"
          onClick={() => setIsSelected(4)}
        />
      </div>
      <div className="flex flex-row p-4 mt-10">
        <img
          src={selectedTeam[isSelected].logo}
          alt={selectedTeam[isSelected].name}
          className={`${selectedTeam[isSelected].size} opacity-50 grayscale ml-5`}
        />
        <div className="text-red-600 mt-20 ml-30">
          <h2>{selectedTeam[isSelected].header}</h2>
          <hr className="text-white" />
          <span>{selectedTeam[isSelected].years}</span>
        </div>
      </div>
    </div>
  );
}

export default CareerDetails;
