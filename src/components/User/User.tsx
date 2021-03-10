import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Search from "../Search/Search";

import UserService from "../../Services/User/UserService";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

export default () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getUsersFn = async () => {
      const { data } = await UserService.getUsers();
      setUsers(data.users);
    };
    getUsersFn();
  });

  return (
    <>
      <CssBaseline />
      <Search />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {users.map((user) => (
            <Grid item key={user.firstName} xs={12} sm={2} md={4}>
              <Card>
                <CardHeader
                  title={user.firstName}
                  subheader={user.firstName}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $&nbsp;
                      {user.lastName}
                    </Typography>
                  </div>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key="Suggestion"
                    >
                      Details
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth color="primary">
                    Follow
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
