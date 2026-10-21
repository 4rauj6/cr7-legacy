import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

export function The1000Goals() {
  const goalsTarget = 1000;
  const goalsScored = 981;
  const data = [
    { name: "Goals scored", value: goalsScored },
    {
      name: "Goals remaining",
      value: Math.floor(goalsTarget - goalsScored),
    },
  ];
  const remaingGoalsCalc =
    data.find((datas) => datas.name === "Goals remaining")?.value ?? 0;

  const colors = ["#dc2626", "#374151"];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto px-4">
      <div className="relative w-full max-w-87.5 sm:max-w-112.5 h-87.5 sm:h-112.5 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="95%"
              innerRadius="70%"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((datas, index) => (
                <Cell key={datas.name} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
          {goalsScored < goalsTarget ? (
            <>
              <span className="text-xl sm:text-3xl text-red-600 font-dm-sans font-bold">
                {remaingGoalsCalc} remaining
              </span>
              <span className="text-sm sm:text-lg text-gray-300 font-dm-sans">
                to the 1,000 goals
              </span>
            </>
          ) : (
            <>
              <span className="text-red-600 text-xl sm:text-3xl text-center font-dm-sans font-bold">
                1,000 goals reached!
              </span>
              <span className="text-gray-300 text-sm sm:text-base font-dm-sans">
                Congratulations Cristiano!
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-red-600 text-xl sm:text-2xl xl:text-3xl font-dm-sans items-center xl:items-start text-center xl:text-left w-full xl:w-auto">
        <span className="text-gray-400">
          First goal: <span className="text-white">--/--/----</span>
        </span>
        <hr className="border-gray-600 w-full max-w-70" />
        <span className="text-gray-400">
          Last goal: <span className="text-white">09/10/2026</span>
        </span>
      </div>
    </div>
  );
}

export default The1000Goals;
