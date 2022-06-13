import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectBoxes(props) {
  const [selectFormData, setSelectFormData] = React.useState({
    fileType: "",
    order: "",
    subscription: "",
    subscriptionStage: "",
    category: "",
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setSelectFormData((prevSelectFormData) => {
      return {
        ...prevSelectFormData,
        [name]: value,
      };
    });
    props.onSelectChange(selectFormData, name, value);
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
        <InputLabel id="demo-simple-select-label">File Type</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="fileType"
          value={selectFormData.fileType}
          label="File Type"
          onChange={onHandleChange}
        >
          <MenuItem value={"PDF"}>PDF</MenuItem>
          <MenuItem value={"PNG"}>PNG</MenuItem>
          <MenuItem value={"JPG"}>JPG</MenuItem>
        </Select>
      </FormControl>

      {/* First Grid Start  */}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            sx={{
              mt: 2,
              "& label": {
                margin: "-8px",
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Order</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="order"
              value={selectFormData.order}
              label="Order"
              onChange={onHandleChange}
            >
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
              <MenuItem value={"15"}>15</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            disabled={selectFormData.order.length ? false : true}
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
              name="subscription"
              value={selectFormData.subscription}
              label="Select Subscription"
              onChange={onHandleChange}
            >
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Monthly"}>Monthly</MenuItem>
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* First Grid End  */}
      {/* secont Grid Start  */}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormControl
            disabled={selectFormData.order.length ? false : true}
            fullWidth
            sx={{
              mt: 2,
              "& label": {
                margin: "-8px",
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Subscription Stage
            </InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="subscriptionStage"
              value={selectFormData.subscriptionStage}
              label="Subscription Stage"
              onChange={onHandleChange}
            >
              <MenuItem value={"Platinum"}>Platinum</MenuItem>
              <MenuItem value={"Gold"}>Gold</MenuItem>
              <MenuItem value={"Silver"}>Silver</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            disabled={selectFormData.order.length ? false : true}
            fullWidth
            sx={{
              mt: 2,
              "& label": {
                margin: "-8px",
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={selectFormData.category}
              label="Category"
              onChange={onHandleChange}
            >
              <MenuItem value={"Wordpress"}>Wordpress</MenuItem>
              <MenuItem value={"React"}>React</MenuItem>
              <MenuItem value={"Next JS"}>Next JS</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* secont Grid End  */}
    </div>
  );
}

export default SelectBoxes;
