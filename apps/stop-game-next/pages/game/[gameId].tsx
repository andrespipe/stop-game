import StopGameAPI from '@stop-game-next-lib/api/stop-game.API';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import GameCard from '@stop-game-next-molecules/gameCard/gameCard'
import { Typography } from '@material-ui/core';

export default function GameField() {

  const router = useRouter();
  const { gameId } = router.query;

  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    StopGameAPI
      .loadGame(gameId as string)
      .then(handleGameLoaded);
  }, [])

  const handleGameLoaded = (game) => {
    console.log(game);
    setGameInfo(game);
  }

  const gameCards = (players) => {
    if (players) {
      return players.map( (player, index) => <GameCard key={index} player={player}></GameCard>);
    } else {
      return <Typography gutterBottom variant="h5" component="h2">Waiting for players</Typography>;
    }
  }

  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">Game field</Typography>
      <pre>{JSON.stringify(gameInfo)}</pre>
      <div className="game-field">
        { gameCards(gameInfo?.players) }
      </div>
    </>
  );
}