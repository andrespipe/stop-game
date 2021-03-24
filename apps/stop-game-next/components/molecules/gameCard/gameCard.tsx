import React from 'react';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import { IPlayer } from '@stop-game/data';

export default function GameCard({ player } : { player: IPlayer }) {

  return (
    <Card>
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">{ player.nickName }</Typography>
      <Typography gutterBottom component="h6">A</Typography>
        <div>
          <TextField label="Name" variant="outlined" fullWidth={true} margin="dense" />
          <TextField label="Last Name" variant="outlined" fullWidth={true} margin="dense" />
          <TextField label="City/Country" variant="outlined" fullWidth={true} margin="dense" />
          <TextField label="Animal" variant="outlined" fullWidth={true} margin="dense" />
          <TextField label="Food" variant="outlined" fullWidth={true} margin="dense" />
          <TextField label="Color" variant="outlined" fullWidth={true} margin="dense" />
        </div>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="secondary" fullWidth={true}>
        Stop
      </Button>
      </CardActions>
    </Card>
  );
}