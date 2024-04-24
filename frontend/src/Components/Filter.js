import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { MenuItem, Select } from "@mui/material";

export default function NativeSelectDemo() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  const handleChange = (event) => {
    setCountries(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl variant="standard" sx={{ m: 0, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Search Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={countries.name}
          onChange={handleChange}
          label="Search Country"
        >
          {countries.map((country) => (
            <MenuItem>{country.name.common}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
