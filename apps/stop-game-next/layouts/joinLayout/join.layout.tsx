import GamesList from '@stop-game-next-organisms/gamesList/gamesList';
import JoinGameForm from '@stop-game-next-organisms/joinGameForm/joinGameForm';
import { IStopGame } from '@stop-game/data';
import React from 'react';
import styles from './join.layout.module.scss';

export default function JoinLayout({ gamesList } : { gamesList: IStopGame[] }) {

  return (
    <div className={styles.main__wrapper}>
      <div>
        Private Game
        <JoinGameForm></JoinGameForm>
      </div>
      <div>
        Public games
        <GamesList list={gamesList} />
      </div>
    </div>
  );
}
