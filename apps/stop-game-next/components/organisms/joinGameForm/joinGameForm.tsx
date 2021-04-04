import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Card, CardActions, CardContent, FormControl, TextField } from '@material-ui/core';
import StopGameAPI from '@stop-game-next-lib/api/stop-game.API';
import { IPlayer, IStopGame } from '@stop-game/data';
import { useRouter } from 'next/dist/client/router';
// import SessionContext from '@stop-game-next-context/SessionContext';

export default function JoinGameForm() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState(null);

  const formik = useFormik({
    initialValues: {
      gameCode: '',
      nickName: '',
    },
    validationSchema: Yup.object({
      gameCode: Yup.string().required('Required'),
      nickName: Yup.string().required('Required'),
    }),
    onSubmit: (values, ) => {
      joinGame(values);
    },
  });

  const handleSubmit = (handlers, formikHelpers) => (values): void | Promise<any> => {
    console.log({ handlers, values });
    // joinGame(values);
  };

  const joinGame = (values: { gameCode: string, nickName: string }) => {
    setIsLoading(true);
    const { gameCode, nickName } = values;
    StopGameAPI
      .joinGame(gameCode, { nickName })
      .then(handleJoinGame);
  }

  const handleJoinGame = (result: { response: IStopGame, request }) => {
    const { response: {id}, request } = result;
    console.log({ request });
    router.push(`/game/${id}`);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardContent>
          <Box p={3}>
            <FormControl fullWidth={true}>
              <TextField
                name="gameCode"
                label="Game code"
                onChange={formik.handleChange}
                value={formik.values.gameCode}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField
                name="nickName"
                label="Nick name"
                onChange={formik.handleChange}
                value={formik.values.nickName}
              />
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Box p={2}>
          <Button type="submit" size="small" variant="contained" color="primary">Join game</Button>
          </Box>
        </CardActions>
      </Card>
    </form>
  );

  // return (
  //   <SessionContext.Consumer>
  //     {( ({ gameId, setGameId, user, setUser }) => (
  //       <form onSubmit={handleSubmit({ gameId, setGameId, user, setUser })}>
  //       <Card>
  //         <CardContent>
  //           <Box p={3}>
  //             <FormControl fullWidth={true}>
  //               <TextField
  //                 name="gameCode"
  //                 label="Game code"
  //                 onChange={formik.handleChange}
  //                 value={formik.values.gameCode}
  //               />
  //             </FormControl>
  //             <FormControl fullWidth={true}>
  //               <TextField
  //                 name="nickName"
  //                 label="Nick name"
  //                 onChange={formik.handleChange}
  //                 value={formik.values.nickName}
  //               />
  //             </FormControl>
  //           </Box>
  //         </CardContent>
  //         <CardActions>
  //           <Box p={2}>
  //           <Button type="submit" size="small" variant="contained" color="primary">Join game</Button>
  //           </Box>
  //         </CardActions>
  //       </Card>
  //     </form>
  //     ) )}
  //   </SessionContext.Consumer>
  // );
}