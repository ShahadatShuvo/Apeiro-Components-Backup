import { Box, Button, Grid } from "@mui/material";
import React from "react";
import PNG from "../../images/PNG.png";
import PDF from "../../images/PDF.png";
import JPG from "../../images/JPG.png";
import noIMG from "../../images/nofile.png";
import DownloadPlusCSS from "../DownloadPlus.module.css";

function Plus(props) {
  return (
    <div className={DownloadPlusCSS.wrapper}>
      <div className={DownloadPlusCSS.file__download}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            justifyContent="space-around"
            alignItems="center"
            container
            spacing={2}
          >
            <Grid item>
              <div className={DownloadPlusCSS.section__main}>
                <div className={DownloadPlusCSS.icon__container}>
                  <img src={PNG} alt="" width="40px" height="40px" />
                  <div className={DownloadPlusCSS.file__info}>
                    <h4>My random big file name</h4>
                    <p>PNG</p>
                  </div>
                </div>
                <div className={DownloadPlusCSS.button__container}>
                  <Button
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
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className={DownloadPlusCSS.plus_icon}>
        <h1>+</h1>
      </div>
    </div>
  );
}

export default Plus;
