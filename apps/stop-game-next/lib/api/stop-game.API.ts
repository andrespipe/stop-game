import { baseURL } from '@stop-game-next-lib/utils/constant';
import { INewStopGame, IPlayer, IStopGame } from '@stop-game/data';

const StopGameAPI = {
  createNewGame: (newGame: INewStopGame): Promise<IStopGame> => {
    const url = `${baseURL}/stop-game`;
    const promise = new Promise<IStopGame>((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
    return promise;
  },
  getPublicGames: (): Promise<IStopGame[]> => {
    console.log('getPublicGames FN');
    const url = `${baseURL}/stop-game`;
    const promise = new Promise<IStopGame[]>((resolve, reject) => {
      fetch(url, {
        method: 'GET',
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
    return promise;
  },
  joinGame: (
    gameCode: string,
    player: IPlayer
  ): Promise<{ response: IStopGame; request }> => {
    const url = `${baseURL}/stop-game/${gameCode}/player`;
    const promise = new Promise<{ response: IStopGame; request }>(
      (resolve, reject) => {
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify(player),
        })
          .then((response) => {
            resolve(response.json());
          })
          .catch((error) => reject(error));
      }
    );
    return promise;
  },
  openGame: (game: IStopGame, myNickname: string): any => {
    const { id } = game;
  },
  loadGame: (gameId: string) => {
    const url = `${baseURL}/stop-game/${gameId}`;
    const promise = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
    return promise;
  },
  findPlayer: (gameId: string, nickname: string) => {
    const url = `${baseURL}/stop-game/${gameId}/player/${nickname}`;
    const promise = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
    return promise;
  },
};

export default StopGameAPI;
