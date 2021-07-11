import React from 'react';
import Student from './students/Student';
import { Grid, Button, Typography } from '@material-ui/core';
import CreateDailog from './students/createDailog';
import { makeStyles } from '@material-ui/core/styles';
import { AppStyles } from "../styles/styles";

const useStyles = makeStyles(AppStyles);
export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} className={classes.headerGrid} >
        <Typography variant='h4' className={classes.header}>Students Details</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.buttonGrid}>
        <Button variant="contained" size="small" className={classes.button} color="primary" onClick={handleClickOpen} >
          Register New Student
        </Button>
      </Grid>

      <Student refresh={refresh} setRefresh={setRefresh} />

      {open && <CreateDailog open={open} handleClose={handleClose} setRefresh={setRefresh} />}
    </Grid>
  );
}
