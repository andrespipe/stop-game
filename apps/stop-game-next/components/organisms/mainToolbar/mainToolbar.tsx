import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MainToolbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Link href="/" passHref>
              <Button color="inherit">
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ChildCareIcon fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>Stop game</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Link>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
