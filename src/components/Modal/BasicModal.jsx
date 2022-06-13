import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, TextField, Typography } from "@mui/material";
import SelectBoxes from "./SelectBoxes";
import RadioButton from "./RadioButton";
import UploadFile from "./UploadFile";
import AddIcon from "@mui/icons-material/Add";

// title, icon, file, is_download_able,
// url, is_privet, subscription_id,
// subscription_stage, category, order

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

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFromData] = React.useState({
    title: "",
    url: "",
    isDownloadable: true,
    doUploadFile: true,
    fileType: "",
    order: "",
    subscription: "",
    subscriptionStage: "",
    category: "",
  });

  const onHandleChange = (event) => {
    console.log(event.target.name);
    const { name, value, type, defaultChecked } = event.target;
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? !defaultChecked : value,
      };
    });
  };

  const onHandleSelectChanges = (selectFormData, name, value) => {
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("FromData: ", formData);
    //upload to api
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <IconButton
        onClick={handleClickOpen}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddIcon sx={{ fontSize: "36px", fontWeight: "bold" }} />
      </IconButton>
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
          <div>
            <h2 style={{ margin: "0px", padding: "8px" }}>Upload File</h2>
          </div>
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <form onSubmit={onHandleSubmit} style={{ width: "460px" }}>
            {/* Title Field Start  */}
            <TextField
              type="text"
              onChange={onHandleChange}
              name="title"
              value={formData.title}
              label="Title"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%" }}
            />
            {/* Title Field End  */}

            {/* select boxes Start */}
            <SelectBoxes onSelectChange={onHandleSelectChanges} />
            {/* select boxes End */}

            {/* radio button  */}
            <RadioButton />
            {/* radio button End */}

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Give URL</Typography>
              <IOSSwitch
                sx={{ m: 1 }}
                type="checkbox"
                name="doUploadFile"
                defaultChecked={formData.doUploadFile}
                onChange={onHandleChange}
              />
              <Typography>Upload File</Typography>
            </Stack>

            {/* URL input field  */}
            {formData.doUploadFile === false && (
              <TextField
                type="text"
                onChange={onHandleChange}
                name="url"
                value={formData.url}
                label="URL"
                id="outlined-size-small"
                size="small"
                sx={{ width: "100%", mt: 1 }}
              />
            )}
            {/* File Upload  */}
            {formData.doUploadFile && <UploadFile />}
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
                type="submit"
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
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
