import React, { useState } from "react";
import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SiThemoviedatabase } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("signin");
  return (
    <nav className="bg-[var(--primary-color)] flex items-center gap-5 px-[4vw] py-2">
      <SiThemoviedatabase style={{ fontSize: "3rem" }} />
      <Box className="flex justify-between flex-1 gap-2">
        <Box className="flex justify-center flex-1">
          <TextField
            className="max-w-[350px] w-full"
            sx={{
              ".MuiOutlinedInput-input": {
                padding: "0.5rem",
              },
            }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search here..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IoSearchOutline />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Select
          sx={{
            ".MuiInputBase-input": {
              padding: "0.5rem",
              fontSize: "0.875rem",
            },
            height: "fit-content",
          }}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <MenuItem value="signin">
            <Link to="/login">Sign In</Link>
          </MenuItem>
          <MenuItem value="signup">
            <Link to="/signup">Sign Up</Link>
          </MenuItem>
        </Select>
      </Box>
    </nav>
  );
}
