import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  homeItem: {
    textDecoration: 'none',
  },
  iconWrapper: {
    display: 'flex',
  },
  icon: {
    fontSize: 120,
    margin: 'auto',
  },
});

export default function HomeItem({ item }: { item: IHomeItem}) {

  const classes = useStyles();
  const DynamicIcon = () => {
    let Icon;
    switch (item.icon ) {
      case 'PlayCircleFilled':
        Icon = dynamic(() => import('@material-ui/icons/PlayCircleFilled'));
        break;
      case 'TouchApp':
        Icon = dynamic(() => import('@material-ui/icons/TouchApp'));
        break;
      case 'StarHalf':
        Icon = dynamic(() => import('@material-ui/icons/StarHalf'));
      break;
      default:
        Icon = dynamic(() => import('@material-ui/icons/InsertEmoticon'));
        break;
    }
    return <Icon className={classes.icon} />
  }

  return (
    <Link href={item.path}>
      <a href={item.path} className={classes.homeItem}>
        <Paper>
          <div className={classes.iconWrapper}>
            { DynamicIcon() }
          </div>
          <div>
            <Typography variant="h5" component="h2" align="center">{item.name}</Typography>
          </div>
        </Paper>
      </a>
    </Link>
  );
}
