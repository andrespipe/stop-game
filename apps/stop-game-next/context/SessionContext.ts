import React, { Dispatch } from 'react';

const SessionContext = React.createContext({
  gameId: null,
  setGameId: null,
  user: null,
  setUser: null,
});

export default SessionContext;
