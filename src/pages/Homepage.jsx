import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";
import CarouselHome from "../utilities/CarrouselHome";
import The1000Goals from "../utilities/The1000GoalChart";
import CareerDetails from "./CareerDetails";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";

function Homepage() {
  const divRef = useRef(null);
  const goToRef = () => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="hero bg-gray-900 w-full max-h-full overflow-x-hidden">
      <div className="relative">
        <img
          src="src/assets/cristiano_ronaldo_5k_2.jpg"
          alt=""
          className=" w-full h-200 md:w-full md:h-full object-cover"
        />
        <div
          className="absolute inset-0 left-40 bottom-70 z-10 flex flex-col justify-center items-center text-white text-3xl xl:text-5xl 
            md:justify-between
            md:flex-row
            md:inset-0
            xl:px-34
            lg:px-33
            2xl:px-50"
        >
          <span
            className={`cursor-default hover:text-red-500 transition-colors font-syncopate`}
          >
            Cristiano
          </span>
          <span
            className={`cursor-default hover:text-red-500 transition-colors font-syncopate`}
          >
            Ronaldo
          </span>
        </div>
        <button
          onClick={goToRef}
          className={`absolute
            left-1/2 -translate-x-1/2 
    bottom-10 md:bottom-20
            z-20
          `}
        >
          <ArrowDownIcon className="size-10 text-white cursor-pointer hover:text-red-500 transition-colors" />
        </button>
      </div>

      <div ref={divRef} className="mt-40 mb-0 xl:mt-50 text-red-500 ">
        <span className="flex justify-center items-center text-2xl mb-10 xl:mb-0 2xl:text-3xl  xl:text-2xl md:justify-start md:p-15 font-syncopate">
          Teams preview
        </span>
        <CareerDetails />
      </div>

      <div className="goat-div text-red-600  mt-40 xl:mt-50">
        <span className="flex justify-center items-center text-center text-[20px] xl:text-2xl md:w-full md:ml-0 md:text-4xl md:justify-start md:items-start md:p-15 font-syncopate">
          The GOAT through the history
        </span>
        <CarouselHome />
      </div>

      <div className="text-red-500 mt-35 xl:mt-40">
        <span className="flex justify-center items-center text-2xl gap-0 xl:justify-start xl:p-15 xl:text-2xl md:text-5xl font-syncopate">
          Achievements
        </span>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-center items-center gap-4 font-dm-sans">
        <div
          className={`flex flex-col text-center text-4xl xl:mb-150 cursor-default`}
        >
          <span className="font-syncopate text-xl mt-4 xl:text-2xl md:text-6xl md:w-96 xl:text-center xl:mb-0 text-red-500">
            Player&apos;s profile
            <br />
            <span className="font-dm-sans text-[15px] text-gray-400 xl:text-xl">
              188cm | 05.02.1985 | Portugal
            </span>
          </span>
          <hr className="text-white" />
          <div className=" flex flex-row w-80 gap-3 xl:w-86 xl:grid xl:grid-cols-4 md:gap-10 justify-center items-center">
            <a href="https://www.fpf.pt/pt/selecoes/futebol-masculino/selecao-a">
              <img
                src="src/assets/Portugal_national_football_team_logo_crest-2592173146.png"
                alt="portugal"
                className="w-60 xl:w-full"
              />
            </a>
            <a href="https://www.sporting.pt/">
              <img
                src="src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png"
                alt="sporting"
                className="w-60 xl:w-full"
              />
            </a>
            <a href="https://www.manutd.com/en">
              <img
                src="src/assets/Manchester_United_FC_crest.svg"
                alt="Manchester United"
                className="w-full xl:w-full"
              />
            </a>
            <a href="https://www.realmadrid.com/en-US">
              <img src="src/assets/Real_Madrid_CF.svg" alt="Real Madrid" />
            </a>
            <a href="https://www.juventus.com/en/">
              <img
                src="src/assets/juventus--white.ddcefc5a-2839346283.png"
                alt="Juventus"
                className="w-60 xl:w-full"
              />
            </a>
            <a href="https://alnassr.sa/">
              <img src="src/assets/Nassr_FC_Logo.svg.webp" alt="Al-Nassr" />
            </a>
          </div>
        </div>
        <img
          src="src/assets/Cr7-PNG-HD-2540334386.png"
          alt="Individual Awards"
          className="object-contain w-60 mt-4 xl:w-70 xl:mb-60"
        />
        <hr className="text-white" />
        <div
          className={`flex flex-col text-center text-2xl gap-3 xl:text-2xl xl:mb-150 text-red-600 max-h-85 overflow-y-auto cursor-defaul`}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiermaker.com%2Fimages%2Fmedia%2Fhero_images%2F2024%2F15978347%2Fballon-dor-tierlist-15978347%2F159783471777202724.png&f=1&nofb=1&ipt=338c1ef801f50df6da383de302dd37881b6fa0c8fdc6a181a0720dbda8bd120d&ipo=images"
            alt=""
            className="self-center w-35"
          />
          <span className="md:w-96">5x The Ballon Dor&apos;s winner</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2f%2Fdd%2F5f%2F2fdd5f97f539c5d2894cc9086b30227f.png&f=1&nofb=1&ipt=7e73f219632f96b22b3559811e1723d5280a9c086a49f1138dd41782ef7cf8a2&ipo=images"
            alt=""
            className="self-center w-26"
          />
          <span className="w-90 xl:w-95">5x UEFA Champions league winner</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-02z7dbyHAlM%2FXYCbHLxf2ZI%2FAAAAAAAACFs%2FmslF8ou00bI11TgDXtyXGKmIJbu3ZS1QwCLcBGAsYHQ%2Fs1600%2Fuefa%252Bsuper%252Bcup%252B250.png&f=1&nofb=1&ipt=d3e58a5b25ae48568855292875b161f390dfc7d1f5611269ac1bcab940ca8f82&ipo=images"
            alt=""
            className="self-center w-35"
          />
          <span className="xl:w-96">2x UEFA Super Cup Winner</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff6%2Faf%2Fff%2Ff6afff5fb10c1e7066869161735d096f.png&f=1&nofb=1&ipt=e39ddfbfa7ff2af4ccc12a3d21417efdc62a4fb58563094f683424fc1ecfaf72&ipo=images"
            alt=""
            className="self-center w-20"
          />
          <span className="xl:w-80 self-center">
            2x UEFA Nations League winner
          </span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthesportsdb.com%2Fimages%2Ficons%2Fhonours%2FUEFA_Best_Player_in_Europe_Award-trophy.png&f=1&nofb=1&ipt=2e0b7ae746c81811084019bf81c78de6040df24abc50aec9b0632355e63134aa&ipo=images"
            alt=""
            className="self-center w-36"
          />
          <span>4x UEFA best player</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffootballpredictions.net%2Fstorage%2F97%2F67.png&f=1&nofb=1&ipt=8f0aa93c12f9a0417c9ef1f97215d7659218bbb4592ea5663c66d5ff5c2d5c4f&ipo=images"
            alt=""
            className="self-center w-36"
          />
          <span>2x spanish champion</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.woolfstrophies.co.za%2Fcdn%2Fshop%2Ffiles%2F1_940dd616-b904-424d-a9d0-f5189cabc2d2.webp%3Fv%3D1779785157%26width%3D3840&f=1&nofb=1&ipt=2aa956a95e01ab5a811f6d699e28b216f2772c63021fc6e3cec40d703f0a8c86&ipo=images"
            alt=""
            className="self-center w-55"
          />
          <span>3x english champion</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F57%2F44%2F2b%2F57442b6b5a91ce8d2df78a7fbc66ad45.png&f=1&nofb=1&ipt=3e881a215affcb9c1f6e906302e0451348b41155102762cd05d7cff7d311b134&ipo=images"
            alt=""
            className="self-center w-22"
          />
          <span>2x italian champion</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fmug%2F93830-trophy-cup-kettle-vase-fa-2018-final.png&f=1&nofb=1&ipt=ed953e53d1b083a4450c0dbbd2535c019821f54afb8f2f2154f5bedece9dc36a&ipo=images"
            alt=""
            className="self-center w-26"
          />
          <span className="xl:w-90">1x english FA Cup winner</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F66%2F0c%2F9a%2F660c9a02f1d14f56c1efe06db5d0d782.png&f=1&nofb=1&ipt=b6593c1ea46624c4f10ec6a7e9da03df5d5712cde0440a834681fa149f13cccb&ipo=images"
            alt=""
            className="self-center w-22"
          />
          <span>1x italian Cup Winner</span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F66%2F25%2F91%2F6625915ff15ee7f1e7da7a2625af5944.png&f=1&nofb=1&ipt=50063f9987f2cf86f75117f53f2f897da1f7542df3a5513ae517f40ae107f3b6&ipo=images"
            alt=""
            className="self-center w-22"
          />
          <span className="xl:w-70 self-center">
            2x italian super cup Winner
          </span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Ftrophy%2F1301423.png&f=1&nofb=1&ipt=ff6ebb31ada9e2a9874055b541935735951345b43df9c9c750e88e921578fa55&ipo=images"
            alt=""
            className="self-center w-43"
          />
          <span className="xl:w-76 self-center">
            2x spanish super cup winner
          </span>
          <hr className="text-white" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F37%2F6a%2Fe9%2F376ae9123d867b2b77a2436d1e83c1a4.png&f=1&nofb=1&ipt=e78f6b50cbee93ccaa5cf201bfeaf6ab222a5d7f34eaa3c460d541d0dccd4e9d&ipo=images"
            alt=""
            className="self-center w-34"
          />
          <span className="xl:w-80 self-center">
            1x english super cup winner
          </span>
          <hr className="text-white" />
          <img
            src="https://i.namu.wiki/i/QLQCcmhDarAVo1qRFamQI0cjFFB30ZkPjqEo-9RidNbD8gvAaNANz4HYEANY5KOsDrNEpXTEY4Er_-hMSRqlVg.webp"
            alt=""
            className="self-center w-40"
          />
          <span className="xl:w-90 self-center">1x saudi arabian champion</span>
          <hr className="text-white" />
          <span className="w-80 xl:w-80 self-center">
            1x portuguese super cup winner
          </span>
          <hr className="text-white" />
          <span>8x player of the year</span>
          <hr className="text-white" />
          <span className="xl:w-90 self-center">
            12x Footballer of the year
          </span>
          <hr className="text-white" />
          <span>22x top goal scorer</span>
          <hr className="text-white" />
        </div>
      </div>

      <div className="text-red-600 flex text-center mt-40 xl:text-start xl:p-15 xl:mt-0 font-syncopate">
        <span className="text-xl xl:text-2xl">
          By the Portugal&apos;s national team
        </span>
      </div>

      <div className="flex flex-col p-5 md:p-0 md:flex-row justify-center items-center gap-25">
        <img
          src="src/assets/Portugal_national_football_team_logo_crest-2592173146.png"
          alt=""
          className="w-90 h-full object-contain xl:w-70"
        />
        <div className="flex flex-col self-center md:self-start xl:w-100">
          <span className="text-gray-300 font-syncopate">
            Achivements <br />
            <span className="text-red-600 text-[35px] xl:text-[30px] font-dm-sans">
              1x Euro League champion
              <br />
              1x Nations League champion
            </span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Apperances <br />
            <span className="text-red-600 text-4xl xl:text-3xl font-dm-sans">
              233
            </span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Goals <br />
            <span className="text-red-600 text-4xl xl:text-3xl font-dm-sans">
              146
            </span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Assists <br />
            <span className="text-red-600 text-4xl xl:text-3xl font-dm-sans">
              45
            </span>
          </span>
          <hr className="text-white" />
          <span className="text-gray-300 font-syncopate">
            Minutes played <br />
            <span className="text-red-600 text-4xl xl:text-3xl font-dm-sans">
              18.537&apos;
            </span>
          </span>
        </div>
      </div>

      <div className="p-15 text-red-600 mt-20 xl:mt-40 font-syncopate">
        <span className="flex text-2xl justify-center items-center text-center w-100 xl:flex-col xl:text-left xl:justify-start xl:items-start xl:text-2xl">
          Road to to 1000 goals
        </span>
      </div>

      <div className="flex flex-col mb-40">
        <The1000Goals />
      </div>

      <div className="flex justify-center items-center xl:justify-start xl:items-start lg:justify-start lg:items-start font-dm-sans h-full bg-gray-800">
        <footer className="flex flex-col xl:flex-row gap-2 xl:gap-7 p-6 w-full">
          <ul className="flex flex-col text-white">
            <h3 className="font-bold text-lg">About the CR7 Legacy project</h3>
            <li>
              <a
                href="https://github.com/4rauj6/cr7-legacy"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <FaGithub className="text-xl" />
                GitHub documentation
              </a>
              <a
                href="https://github.com/4rauj6"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <FaUser className="text-xl" />
                Author&apos;s profile
              </a>
            </li>
          </ul>

          <ul className="flex flex-col text-white">
            <h3 className="font-bold text-lg">Contact me</h3>
            <li>
              <a
                href="https://instagram.com/jvvict0r"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=joaovas123m@gmail.com"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <FaInbox className="text-xl" />
                eMail
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
