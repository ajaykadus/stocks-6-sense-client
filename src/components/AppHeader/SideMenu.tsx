import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component="a" {...props} />;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    fullList: {
      width: "auto",
    },
  })
);

export default () => {
  const classes = useStyles();
  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setMenuState(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.list]: true,
      })}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(false)}
    >
      <List component="nav" aria-label="secondary mailbox folders">
        {[
          { text: "Users", href: "#users" },
          { text: "Stocks", href: "#stocks" },
          { text: "Login", href: "#login" },
        ].map((link, index) => (
          <ListItemLink href={link.href}>
            <ListItemText primary={link.text} />
          </ListItemLink>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon onClick={toggleDrawer(!menuState)} />
      </IconButton>
      <Drawer open={menuState} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};
