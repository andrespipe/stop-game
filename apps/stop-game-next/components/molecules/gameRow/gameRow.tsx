import React from 'react';
import { IStopGame } from '@stop-game/data';
import { Button, TableCell, TableRow } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function GameRow({ item } : { item: IStopGame }) {

  return (
    <TableRow>
        <TableCell>{ item.players.length }</TableCell>
        <TableCell>{ item.language }</TableCell>
        <TableCell>{ item.rounds }</TableCell>
        <TableCell>{ item.rounds }</TableCell>
        <TableCell>
        <Button variant="contained" color="primary">
          <PersonAddIcon></PersonAddIcon>
        </Button>
        </TableCell>
    </TableRow>
  );
}