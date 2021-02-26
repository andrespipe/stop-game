import GameRow from '@stop-game-next-molecules/gameRow/gameRow';
import { IStopGame } from '@stop-game/data';
import React from 'react';

export default function GamesList({ list }: { list: IStopGame[] }) {

  if(!list?.length) {
    return(
      <>
        No games
      </>
    );
  }

  const listRows = (rows) => rows.map((item, index) => <GameRow key={index} item={item} /> );

  return (
    <table>
      <thead>
        <tr>
          <th>Players</th>
          <th>Lang</th>
          <th>Rounds</th>
          <th>Played</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { listRows(list) }
      </tbody>
    </table>
  );
}
