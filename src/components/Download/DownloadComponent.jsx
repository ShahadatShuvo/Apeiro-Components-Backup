import React from "react";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import PNG from "../../images/PNG.png";
import PDF from "../../images/PDF.png";
import JPG from "../../images/JPG.png";
import noIMG from "../../images/nofile.png";
import DownloadCSS from "../Download.module.css";

function DownloadComponent(props) {
  // console.log("file url: ", props.file.data.attributes.url);
  // console.log("Index: ", props.index);
  const fileName = props.file.data.attributes.url;
  const fileExtension = fileName.split(".").pop();
  const fileType = fileExtension.toLowerCase();

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `${fileName}`;
    link.href = `./${fileName}`;
    link.click();
  };
  const setBgColor = {
    backgroundColor: props.index % 2 === 0 ? "  #bfbfbf" : "#e6e6e6",
  };
  return (
    <div className={DownloadCSS.wrapper}>
      <div className={DownloadCSS.fileDownload} style={setBgColor}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            justifyContent="space-around"
            alignItems="center"
            container
            spacing={2}
          >
            <Grid item>
              <div className={DownloadCSS.icon__container}>
                <img
                  src={
                    fileType === "png"
                      ? PNG
                      : fileType === "pdf"
                      ? PDF
                      : fileType === "jpg"
                      ? JPG
                      : noIMG
                  }
                  alt=""
                  width="40px"
                  height="40px"
                />
                <div className={DownloadCSS.file__info}>
                  <h4>{props.title}</h4>
                  <p>{fileType}</p>
                </div> 
              </div>
            </Grid>

            <Grid item>
              <Button
                onClick={onDownload}
                sx={{
                  marginRight: "5px",
                  backgroundColor: "#4d4d4d",
                  fontWeight: 800,
                  "&:hover": { backgroundColor: "#333333" },
                }}
                variant="contained"
                size="small"
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default DownloadComponent;
