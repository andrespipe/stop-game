import React from 'react';
import StopGameAPI from '@stop-game-next-lib/api/stop-game.API';

export default function Join() {

  const loadGames = (e) => {
    console.log('clicked');
    StopGameAPI
      .getPublicGames()
      .then(ans => console.log('getPublicGames', ans));
  }

  return (
    <>
    Join!
    <button onClick={loadGames}>load games</button>
    </>
  );
}
