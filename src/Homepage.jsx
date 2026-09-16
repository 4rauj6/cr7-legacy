import { ArrowDownIcon } from "@heroicons/react/16/solid";

function Homepage() {
  return (
    <div className="hero">
      <div className="relative">
        <img
          src="src/assets/cristiano_ronaldo_5k_2.jpg"
          alt="CR7 homepage img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-row justify-between items-center text-white text-7xl px-70">
          <span className="cursor-default hover:text-red-600 transition-colors">
            Cristiano
          </span>
          <span className="cursor-default hover:text-red-600 transition-colors">
            Ronaldo
          </span>
        </div>
        <button className="absolute right-90 -translate-x-1/2 bottom-70 z-20">
          <ArrowDownIcon className="size-10 text-white hover:text-red-600 cursor-pointer transition-colors" />
        </button>
      </div>

      <div className="flex flex-col">
        <h1>Teams through the history</h1>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <img
              src="src/assets/Sporting_Clube_de_Portugal_2026.svg.webp"
              alt="Sporting Portugal logo"
            />
            <div className="hidden">
              <span>Sporting Portugal (1997-2003)</span>
              <span>The young talent starts his journey</span>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/Manchester_United_FC_crest.svg"
              alt="Manchester United logo"
            />
            <div className="hidden">
              <span>Manchester United FC (2003-2009 | 2021-2022)</span>
              <span>
                The team who show the world what Cristiano could do it
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/Real_Madrid_CF.svg"
              alt="Real Madrid logo"
            />
            <div className="hidden">
              <span>Real Madrid FC (2009-2018)</span>
              <span>The GOAT arrives in Spain</span>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/Juventus_FC_-_logo_black_(Italy,_2020).svg"
              alt="Juventus logo"
            />
            <div className="hidden">
              <span>Juventus FC (2018-2021)</span>
              <span>Eating pasta and conquering Italy</span>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/Nassr_FC_Logo.svg.webp"
              alt="Al-Nassr logo"
            />
            <div className="hidden">
              <span>Al-Nassr (2021-Current)</span>
              <span>A new challenger, the same GOAT</span>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Homepage;
