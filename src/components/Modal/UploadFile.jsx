import { Button, Input } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import React from "react";
import UploadFileCSS from "./UploadFile.module.css";

function UploadFile() {
  return (
    <div className={UploadFileCSS.upload__img}>
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          component="span"
          size="small"
          sx={{ mr: 1, fontWeight: "bold", fontSize: "13px", color: "#737373" }}
          startIcon={<PhotoCamera />}
        >
          Select File
        </Button>
        <Input
          disableUnderline
          endAdornment
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
      </label>
    </div>
  );
}

export default UploadFile;
