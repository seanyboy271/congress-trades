import { useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const PieGraph = ({ flex = "1", data }: any) => {
  const generateColor = (indx: number) => {
    const start = parseInt("8A8A8A", 16);
    const end = parseInt("D9D9D9", 16);

    const delta = Math.floor((start - end) / data.length);

    const color = start + delta * indx;

    return `#${color.toString(16)}`;
  };

  return (
    <ResponsiveContainer width={"100%"}>
      <PieChart>
        <Pie
          data={data}
          nameKey="name"
          dataKey="value"
          outerRadius={120}
          fill="#8884d8"
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={generateColor(index)} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
