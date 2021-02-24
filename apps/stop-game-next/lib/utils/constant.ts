import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';

export const baseURL = '/api';
// export const baseURL = 'http://localhost:3334/api';

export const HOME_ELEMENTS: IHomeItem[] = [
  {
    icon: 'PlayCircleFilled',
    name: 'New Game',
    path: '/game/new',
  },
  {
    icon: 'TouchApp',
    name: 'Join Game',
    path: '/game/join',
  },
  {
    icon: 'StarHalf',
    name: 'Hall of fame',
    path: '/hall-of-fame',
  },
];
