import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState, useEffect } from "react";

const uData = [4000, 3000, 2000, 2780, 1890];
const pData = [2400, 1398, 9800, 3908, 4802];
const sData = [3300, 2498, 8700, 2208, 4502];
const xLabels = ["2019", "2020", "2021", "2022", "2023"];

export default function SimpleLineChart() {
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/countries/usa`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setInput(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setInput(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);
  return (
    <LineChart
      colors={["#728be6", "#ce272b", "#00b92c"]}
      width={500}
      height={300}
      series={[{ data: pData }, { data: uData }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
