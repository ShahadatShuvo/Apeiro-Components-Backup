import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import SelectBoxes from "./SelectBoxes";
import RadioButton from "./RadioButton";
import UploadFile from "./UploadFile";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          align="center"
          sx={{
            backgroundColor: "#404040",
            color: "#fff",
            fontWeight: "bold",
            padding: "0px",
          }}
        >
          <h2 style={{ margin: "0px", padding: "8px" }}>Upload File</h2>
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <div style={{ width: "460px" }}>
            <TextField
              label="Title"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
            />
            {/* select boxes Start */}
            <SelectBoxes />
            {/* select boxes End */}

            {/* radio button  */}
            <RadioButton />
            {/* radio button End */}

            {/* File Upload  */}
            <UploadFile />
            {/* File Upload End */}

            <div
              style={{
                marginTop: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#737373",
                  fontWeight: "bold",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#595959",
                  },
                  width: "25%",
                }}
                size="medium"
              >
                Upload
              </Button>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
