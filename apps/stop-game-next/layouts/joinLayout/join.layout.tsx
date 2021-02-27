import { Typography } from '@material-ui/core';
import GamesList from '@stop-game-next-organisms/gamesList/gamesList';
import JoinGameForm from '@stop-game-next-organisms/joinGameForm/joinGameForm';
import { IStopGame } from '@stop-game/data';
import React from 'react';
import styles from './join.layout.module.scss';

export default function JoinLayout({ gamesList } : { gamesList: IStopGame[] }) {

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Join in to a game
      </Typography>
      <div className={styles.main__wrapper}>
        <div>
          <Typography variant="h4">Private Game</Typography>
          <Typography variant="h6" gutterBottom>(I have a code)</Typography>
          <JoinGameForm></JoinGameForm>
        </div>
        <div>
          <Typography variant="h4">Public Games</Typography>
          <Typography variant="h6" gutterBottom>(New friends)</Typography>
          <GamesList list={gamesList} />
        </div>
      </div>
    </>
  );
}
