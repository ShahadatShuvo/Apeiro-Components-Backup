import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function RadioButton() {
  return (
    <FormControl sx={{ mt: 1 }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "10px",
            marginRight: "15px",
          }}
        >
          Is Downloadable?
        </span>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "10px",
            marginRight: "15px",
          }}
        >
          Is Private?
        </span>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
