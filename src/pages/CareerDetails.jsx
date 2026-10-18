import useNavegateBtns from "../utilities/navegateBtns";

function CareerDetails() {
  const selectedTeam = [
    {
      logo: "src/assets/Portugal_national_football_team_logo_crest-2592173146.png",
      name: "portugal",
      header: "Portugal",
      years: "2003-Currently",
      size: "w-[420px]",
      place: " ml-[90px]",
      text: "The first appearance of Cristiano playing in the national team of Portugal was in 19/08/2003. Along all those years he become a legend and one of the greatest player of his nation. With Portugal, Cristano played 226 ",
    },

    {
      logo: "src/assets/sporting-clube-de-portugal-logo-escudo-4270991534.png",
      name: "sporting",
      header: "Sporting Portugal",
      years: "2001-2003",
      size: "w-[390px]",
      place: "mb-[100px] ml-[90px]",
      text: "The first profissional football team of CR7's career. Sporting Club Portugal bringed the young portuguese talent to the world. With the Sporting, CR7 played 31 games and scored 5 goals. In those 2 years in the Sporting's team, he won 1 major tournament: The Portuguese Super Cup. After this, thousand of teams around the world wanted to sign the wonder kid.",
    },

    {
      logo: "src/assets/Manchester_United_FC_crest.svg",
      name: "united",
      header: "Manchester United FC",
      years: "2003-2010 | 2021-2022",
      size: "w-[500px] ml-[40px] mt-[30px]",
      text: "In 2003, Cristiano Ronaldo arrived in england, now, to play in the Man. United squad. Cristiano's skills increased so well during his time in Old Trafford that even still being a young player, he became the most clinical finisher and dribbler of the world. from 2007 to 2009, the red devils won three times in a row the PL. In 2008 season CR7 won the UCL and the Ballon D'or. Cristiano Ronaldo still one of the greatest player of Manchester United's team. In 2021, he made his return to Old Trafford and break another record becaming the all-time goalscorer of the season.",
    },

    {
      logo: "src/assets/Real_Madrid_CF.svg",
      name: "rm",
      header: "Real Madrid FC",
      years: "2010-2018",
      size: "w-[420px]",
      place: "mb-[100px] ml-[90px]",
      text: "While CR7 became the most lethal and the best player in the world, Real Madrid was in a bad situation. But all this will change with the all new Galatic project. In 2010, Cristiano Ronaldo signed with the Real Madrid's team. The deal was a astronomical success, CR7 and Real Madrid won 16 titles in 8 years. Cristiano became the Real Madrid's top goalscore of all time, scoring 415 goals in 438 appearances. While playing in Spain, he won another 4 times the Ballon D'or award. Even today, football fans still considering thoses seasons the peak of his career",
    },

    {
      logo: "src/assets/juventus--white.ddcefc5a-2839346283.png",
      name: "juve",
      header: "Juventus FC",
      years: "2018-2021",
      size: "w-[500px]",
      place: "mt-[50px]",
      text: "After his historic period at Real Madrid, Cristiano Ronaldo moved to Juventus in 2018 for a new challenge in Serie A. He scored 101 goals in 134 appearances across three seasons, becoming the fastest player in Juventus history to reach the 100-goal landmark. Ronaldo helped Juventus secure back-to-back Serie A titles from the 2018 to 2020 season. Those achivements being one Coppa Italia, and two Supercoppa Italiana trophies. While individual output remained elite, Juventus fell short of their ultimate target: winning the UEFA Champions League. He was also named Serie A Footballer of the Year twice and won the Capocannoniere award in the 2020-2021 season.",
    },

    {
      logo: "src/assets/Nassr_FC_Logo.svg.webp",
      name: "nassr",
      header: "Al-Nassr",
      years: "2023-Currently",
      size: "w-[500px]",
      place: "mt-[50px] ml-[50px]",
      text: "In January 2023, after a second stint at Manchester United, Ronaldo made a landmark move to Saudi Arabian club Al Nassr, initiating a wave of international stars moving to the Saudi Pro League. Maintaining an exceptional goal-scoring rate in his late 30s and early 40s, Ronaldo has scored over 130 goals in more than 150 appearances for Al Nassr. He won the Saudi Pro League Golden Boot in the 2023–2024 season, breaking the league's all-time single-season goalscoring record with 35 goals. Ronaldo still playing in Al-Nassr and is chasing the 1,000 goals.",
    },
  ];

  const {
    currentIndex,
    currentItem: team,
    next,
    prev,
  } = useNavegateBtns(selectedTeam);

  return (
    <div className="hero-2 min-h-screen">
      <div className="flex flex-row gap-3 justify-end mr-25 ">
        <button onClick={prev} className="text-gray-400 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={next} className="text-gray-400 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        key={currentIndex}
        className="flex flex-row justify-center items-center p-4 fade-in mt-10"
      >
        <img
          src={team.logo}
          alt={team.name}
          className={`${team.size} ${team.place} fade-in ml-5 `}
        />
        <div className="flex flex-col self-start text-red-600 mt-20 ml-20 fade-in">
          <p className="text-4xl font-syncopate">{team.header}</p>
          <span className="text-gray-400 font-dm-sans">{team.years}</span>
          <hr className="text-white" />
          <p className="text-xl text-white w-150 font-dm-sans">{team.text}</p>
        </div>
      </div>
    </div>
  );
}

export default CareerDetails;
