import React, { useState, useEffect } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import SimpleLineChart from "./Linechart";
import BasicPie from "./Piechart";
import CountryDropdown from "./Country";

const Home = () => {
  const [input, setInput] = useState({});
  const [totalcases, setTotalcases] = useState({});

  const url = `https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500`;
  const searchCases = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setInput(response.input);
        console.log(response.input);
      });
      setTotalcases("");
    }
  };

  return (
    <div>
      <Box
        ml={35}
        mt={8}
        pt={3}
        pl={1}
        height={600}
        width={1000}
        bgcolor={"lightblue"}
        sx={{ border: "2px solid grey" }}
        fontSize={20}
        fontWeight={"bold"}
      >
        Covid-19 and Population Dashboard
        <div style={{ display: "flex" }}>
          <CountryDropdown />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SingleInputDateRangeField
            label="Filter by Date Range"
            style={{
              backgroundColor: "white",
              width: 300,
              height: 55,
              marginTop: -51,
              marginLeft: 400,
            }}
          />
        </LocalizationProvider>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            ml={5}
            height={45}
            width={240}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 2.5,
              bgcolor: "#728be6",
              fontSize: 18,
              paddingLeft: 1,
              paddingTop: 0.8,
            }}
          >
            Total Cases 0.002%
            <Box
              mt={-1}
              ml={8}
              height={53}
              width={140}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2.5,
                bgcolor: "#fafafa",
                fontSize: 18,
                justifyContent: "center",
              }}
            >
              5M
            </Box>
          </Box>
          <Box
            ml={10}
            height={45}
            width={240}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 2.5,
              bgcolor: "#00b92c",
              fontSize: 18,
              paddingLeft: 1,
              paddingTop: 0.8,
            }}
          >
            Recoveries 0.002%
            <Box
              mt={-1}
              ml={8}
              height={53}
              width={140}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2.5,
                bgcolor: "#fafafa",
                fontSize: 18,
                justifyContent: "center",
              }}
            >
              3M
            </Box>
          </Box>
          <Box
            ml={10}
            height={45}
            width={240}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 2.5,
              bgcolor: "#ce272b",
              fontSize: 18,
              paddingLeft: 1,
              paddingTop: 0.8,
            }}
          >
            Deaths 0.002%
            <Box
              mt={-1}
              ml={8}
              height={53}
              width={140}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2.5,
                bgcolor: "#fafafa",
                fontSize: 18,
                justifyContent: "center",
              }}
            >
              2M
            </Box>
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SimpleLineChart /> <BasicPie />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
