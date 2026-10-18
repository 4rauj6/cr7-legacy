import { Cell, Pie, PieChart, Tooltip } from "recharts";

function The1000Goals() {
  const goalsTarget = 1000;
  const goalsScored = 980;
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
    <div className="relative right-50 w-125 h-125 mx-auto">
      <PieChart width={450} height={450}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={220}
          innerRadius={160}
          startAngle={90}
          endAngle={-270}
        >
          {data.map((datas, index) => (
            <Cell key={datas.name} fill={colors[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <div className="flex flex-col absolute right-10 left-0 top-48 items-center justify-center pointer-events-none">
        {goalsScored < goalsTarget && (
          <>
            <span className="text-3xl text-red-600 font-dm-sans">
              {remaingGoalsCalc} remaining
            </span>
            <span className="text-lg text-gray-300 font-dm-sans">
              to the 1,000 goals
            </span>
          </>
        )}

        {goalsScored >= goalsTarget && (
          <>
            <span className="text-red-600 text-3xl text-center font-dm-sans">
              1,000 goals reached!
            </span>
            <span className="text-gray-300 font-dm-sans">
              Congratulations Cristiano!
            </span>
          </>
        )}
      </div>
      <div className="absolute left-125 top-20 w-100 flex flex-col gap-2 text-red-600 text-3xl font-dm-sans">
        <span className="font-dm-sans text-gray-400">
          Last goal: <span></span>
        </span>
        <hr className="text-white w-80" />
        <span className="font-dm-sans text-gray-400">
          First goal: <span></span>
        </span>
      </div>
    </div>
  );
}

export default The1000Goals;
