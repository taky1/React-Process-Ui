import React from "react";
import ColorPicker, { useColor } from "react-color-palette";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",

    flexWrap: "wrap",
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(2),

    minWidth: 250,
  },
}));

export default function Test() {
  const [color, setColor] = useColor("hex", "#121212");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Update Task
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Update Task</DialogTitle>
          <DialogContent>
            <form className={classes.form} noValidate>
              <InputLabel id="Title" Text="Title">
                Title *
              </InputLabel>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                variant="outlined"
                fullWidth
              />
              {/*Update Form */}
              <InputLabel id="Form" Text="Form">
                Form *
              </InputLabel>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Form">Form</InputLabel>
                <Select labelId="Form" id="Form" label="Form">
                  <MenuItem value="" />
                  <MenuItem value="Caree">Care</MenuItem>
                  <MenuItem value="Cercle">Cercle</MenuItem>
                  <MenuItem value="Pentagone">Pentagone</MenuItem>
                </Select>
              </FormControl>
              {/*Update Icon */}
              <InputLabel id="Icon" Text="Icon">
                Icon *
              </InputLabel>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Icon">Icon</InputLabel>
                <Select labelId="Icon" id="Icon" label="Form">
                  <MenuItem value="" />
                  <MenuItem value="User">
                    {" "}
                    <PersonOutlineOutlinedIcon /> User
                  </MenuItem>
                  <MenuItem value="Email">
                    <EmailOutlinedIcon />Email
                  </MenuItem>
                  <MenuItem value="AddUser">
                    <PersonAddOutlinedIcon />AddUser
                  </MenuItem>
                  <MenuItem value="Calendar">
                    <CalendarTodayOutlinedIcon />Calendar
                  </MenuItem>
                  <MenuItem value="Group">
                    <PeopleOutlinedIcon />Group
                  </MenuItem>
                  <MenuItem value="Event">
                    <EventAvailableOutlinedIcon />Event
                  </MenuItem>
                </Select>
              </FormControl>
              <InputLabel id="Link1" Text="Link1">
                Link1 *
              </InputLabel>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Link1">Link</InputLabel>
                <Select labelId="Link1" id="Link1" label="Link1">
                  <MenuItem value="" />
                  <MenuItem value="Link">Link</MenuItem>
                  <MenuItem value="Link">Link</MenuItem>
                </Select>
              </FormControl>

              <InputLabel id="Link2" Text="Link2">
                Link2 *
              </InputLabel>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Link2">Link</InputLabel>
                <Select labelId="Link2" id="Link2" label="Link2" fullWidth>
                  <MenuItem value="" />
                  <MenuItem value="Link">Link</MenuItem>
                  <MenuItem value="Link">Link</MenuItem>
                </Select>
              </FormControl>
              <InputLabel id="Link" Text="Link">
                Name of Link *
              </InputLabel>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Link"
                variant="outlined"
                fullWidth
              />

              {/*Update Color */}
              <ColorPicker
                width={400}
                height={100}
                color={color}
                onChange={setColor}
                dark
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ background: "#adee82" }}
            >
              Update
            </Button>
            <Button variant="contained" onClick={handleClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
