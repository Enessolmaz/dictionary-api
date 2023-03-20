import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MainContext, useContext } from "../../DataContext";

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };




  const { fonts, font, setFont, theme } = useContext(MainContext);

  return (
    <div>
      <Box sx={{ minWidth: 100, }}>
        <FormControl fullWidth sx={{ borderRadius: "50px" }}>
          <InputLabel sx={{ fontFamily: font, color: theme === "Darken" ? "#1CF8DC" : "#000" }} id="demo-simple-select-label">
            {font}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label={font}
            sx={{ fontFamily: font, color: theme === "Darken" ? "#1CF8DC" : "#000" }}
            onChange={handleChange}
          >
            {fonts.map((item, i) => {
              return (
                <MenuItem
                  onClick={() => setFont(item.name)}
                  sx={{ fontFamily: item.name }}
                  value={item.value}
                  key={i}
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
