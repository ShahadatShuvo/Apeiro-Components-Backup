import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectBoxes() {
  const [docType, setDocType] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [subscription, setSubscription] = React.useState("");

  const handleDocumentChange = (event) => {
    setDocType(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value);
  };
  return (
    <div>
      {/* select boxes Start */}
      <FormControl
        fullWidth
        sx={{
          mt: 2,
          "& label": {
            margin: "-8px",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={docType}
          label="Document Type"
          onChange={handleDocumentChange}
        >
          <MenuItem value={10}>PDF</MenuItem>
          <MenuItem value={20}>PNG</MenuItem>
          <MenuItem value={30}>JPG</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={{
          mt: 2,
          "& label": {
            margin: "-8px",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">Select Order</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Select Order"
          onChange={handleOrderChange}
        >
          <MenuItem value={10}>One</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Three</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={{
          mt: 2,
          "& label": {
            margin: "-8px",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">
          Select Subscription
        </InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subscription}
          label="Select Subscription"
          onChange={handleSubscriptionChange}
        >
          <MenuItem value={10}>Weekly</MenuItem>
          <MenuItem value={20}>Monthly</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectBoxes;
