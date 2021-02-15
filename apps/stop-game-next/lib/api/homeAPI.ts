import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';
import { HOME_ELEMENTS } from '@stop-game-next-lib/utils/constant';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const HomeAPI = {
  getHomeItems: (): Observable<IHomeItem[]> => {
    const observable = new Observable<IHomeItem[]>((observer) => {
      observer.next(HOME_ELEMENTS);
    });
    return observable.pipe(delay(200));
  },
};

export default HomeAPI;
