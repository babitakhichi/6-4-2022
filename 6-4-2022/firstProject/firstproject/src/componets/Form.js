import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15%",

    "& .MuiTextField-root": {
      margin: "5px",
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: "10px",
      
    },
  },
});

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container  item xs={12} md={12}>
      <Grid container item xs={12} md={6}>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </Grid>
        <Grid container item xs={12} md={6}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </Grid>
        
        <div>
        <Grid container xs={12} md={12}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
          </Grid>
        </div>
      </Grid>
    </form>
  );
};

export default Form;
