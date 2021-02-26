import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import GameRow from '@stop-game-next-molecules/gameRow/gameRow';
import { IStopGame } from '@stop-game/data';
import React from 'react';
import styles from './magesList.module.scss';

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
    <TableContainer component={Paper} className={styles.game_list_container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Players</TableCell>
            <TableCell>Lang</TableCell>
            <TableCell>Rounds</TableCell>
            <TableCell>Played</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { listRows(list) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
