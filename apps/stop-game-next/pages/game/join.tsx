import React, { useEffect, useState } from 'react';
import StopGameAPI from '@stop-game-next-lib/api/stop-game.API';
import JoinLayout from '@stop-game-next-layouts/joinLayout/join.layout';

export default function Join() {

  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = () => {
    StopGameAPI
      .getPublicGames()
      .then(handleGames)
      .catch(handleError);
  }

  const handleGames = (list) => {
    console.log(list);
    setGamesList(list);
  };

  const handleError = (error) => {
    console.error(error);
    setGamesList([]);
  };

  return (<JoinLayout gamesList={ gamesList } />);
}
