import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';

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
