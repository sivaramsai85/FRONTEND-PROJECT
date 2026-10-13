import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function GradeChart({
  students
}) {
  const data =
    students.map(
      (student) => ({
        name: student.name
          .split(" ")[0],
        average: Number(
          student.average
        )
      })
    );

  return (
    <div className="chart-container">

      <ResponsiveContainer
        width="100%"
        height={330}
      >
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10
          }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="name"
            angle={-35}
            textAnchor="end"
            height={70}
            interval={0}
          />

          <YAxis
            domain={[0, 100]}
          />

          <Tooltip />

          <Bar
            dataKey="average"
            name="Average"
            fill="#2563eb"
            radius={[
              5,
              5,
              0,
              0
            ]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}