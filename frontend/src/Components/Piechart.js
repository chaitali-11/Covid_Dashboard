import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      colors={["lightyellow", "#ce272b", "#00b92c"]}
      series={[
        {
          innerRadius: 50,
          outerRadius: 100,

          data: [
            { id: 0, value: 50, label: "Total Population" },
            { id: 1, value: 15 },
            { id: 2, value: 25 },
          ],
        },
      ]}
      width={480}
      height={200}
    />
  );
}
