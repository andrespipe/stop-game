import StopGameAPI from '@stop-game-next-lib/api/stop-game.API';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

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

  return (
    <>
      <h1>Game field</h1>
      <pre>{JSON.stringify(gameInfo)}</pre>
    </>
  );
}