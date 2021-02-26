import React from 'react';
import { IStopGame } from '@stop-game/data';
import { Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function GameRow({ item } : { item: IStopGame }) {

  return (
    <tr>
        <td>{ item.players.length }</td>
        <td>{ item.language }</td>
        <td>{ item.rounds }</td>
        <td>{ item.rounds }</td>
        <td>
        <Button variant="contained" color="primary">
          <PersonAddIcon></PersonAddIcon>
        </Button>
        </td>
      </tr>
  );
}