import React, { useState, useEffect } from "react";

function DiseaseStats() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {stats.map((country) => (
            <p>Total cases: {country.timezone.cases}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DiseaseStats;
