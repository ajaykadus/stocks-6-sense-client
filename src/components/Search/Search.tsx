import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(4, 0, 8),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label="Search"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Find Stocks!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Container>
    </>
  );
};
