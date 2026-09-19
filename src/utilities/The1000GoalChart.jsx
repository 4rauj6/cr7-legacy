import { Cell, Pie, PieChart, Tooltip } from "recharts";

function The1000Goals() {
  const goalsTarget = 1000;
  const goalsScored = 965;
  const data = [
    { name: "Goals scored", value: goalsScored },
    { name: "Goals remaining", value: Math.max(0, goalsTarget - goalsScored) },
  ];
  const remaingGoalsCalc =
    data.find((entry) => entry.name === "Goals remaining")?.value ?? 0;

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
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <div className="flex flex-col absolute right-10 left-0 top-48 items-center justify-center pointer-events-none">
        {goalsScored < goalsTarget && (
          <>
            <span className="text-3xl text-red-600 ">
              {remaingGoalsCalc} remaining
            </span>
            <span className="text-lg text-gray-300">to the 1,000 goals</span>
          </>
        )}

        {goalsScored >= goalsTarget && (
          <>
            <span className="text-red-600 text-3xl text-center">
              1,000 goals reached!
            </span>
            <span className="text-gray-300">Congratulations Cristiano!</span>
          </>
        )}
      </div>
      <div className="absolute left-125 top-20 w-100 text-red-600 text-3xl">
        <span>Last goal: 21/08/26</span>
      </div>
    </div>
  );
}

export default The1000Goals;
