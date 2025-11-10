import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LingoContext } from "../context/LingoContext";

const Filter = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedLevel,
  setSelectedLevel,
  selectedPrice,
  setSelectedPrice,
  sort,
  setSort,
}) => {
  const { theme } = useContext(LingoContext);

  const isDark = theme === "dark";

  return (
    <div className="flex gap-5">
      <Box
        sx={{
          backgroundColor: isDark ? "#E4E8EB" : "white",
          borderRadius: "8px",
          p: 2,
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            minWidth: 150,
            "& .MuiInputLabel-root": {
              color: isDark && "#6B7280",
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="languages-select-label">Languages</InputLabel>
          <Select
            labelId="languages"
            id="languages"
            value={selectedLanguage}
            label="Languages"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <MenuItem value={"French"}>French</MenuItem>
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"German"}>German</MenuItem>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"Italian"}>Italian</MenuItem>
            <MenuItem value={"Korean"}>Korean</MenuItem>
            <MenuItem value={"Vietnamase"}>Vietnamase</MenuItem>
            <MenuItem value={"Mandarin Chinese"}>Mandarin Chinese</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          backgroundColor: isDark ? "#E4E8EB" : "white",
          borderRadius: "8px",
          p: 2,
          display: "inline-block",
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            minWidth: 170,
            "& .MuiInputLabel-root": {
              color: isDark && "#6B7280",
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="level-select-label">Level of knowledge</InputLabel>
          <Select
            labelId="level-select-label"
            id="level-select"
            value={selectedLevel}
            label="Level of knowledge"
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <MenuItem value={"A1 Beginner"}>A1 Beginner</MenuItem>
            <MenuItem value={"A2 Elementary"}>A2 Elementary</MenuItem>
            <MenuItem value={"B1 Intermediate"}>B1 Intermediate</MenuItem>
            <MenuItem value={"B2 Upper-Intermediate"}>
              B2 Upper-Intermediate
            </MenuItem>
            <MenuItem value={"C1 Advanced"}>C1 Advanced</MenuItem>
            <MenuItem value={"C2 Proficient"}>C2 Proficient</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          backgroundColor: isDark ? "#E4E8EB" : "white",
          borderRadius: "8px",
          p: 2,
          display: "inline-block",
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            minWidth: 100,
            "& .MuiInputLabel-root": {
              color: isDark && "#6B7280",
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="price-select-label">Price</InputLabel>
          <Select
            labelId="price-select-label"
            id="price-select"
            value={selectedPrice}
            label="Price"
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <MenuItem value={10}>$10</MenuItem>
            <MenuItem value={20}>$20</MenuItem>
            <MenuItem value={30}>$30</MenuItem>
            <MenuItem value={40}>$40</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          backgroundColor: isDark ? "#E4E8EB" : "white",
          borderRadius: "8px",
          p: 2,
          display: "inline-block",
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            minWidth: 120,
            "& .MuiInputLabel-root": {
              color: isDark && "#6B7280",
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sort}
            label="Sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="Low">Low Price</MenuItem>
            <MenuItem value="High">High Price</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Filter;
