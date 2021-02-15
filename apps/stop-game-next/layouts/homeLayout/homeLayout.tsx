import React from 'react';
import HomeItem from '@stop-game-next-organisms/homeItem/homeItem';
import styles from './homeLayout.module.scss'
import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';

export default function HomeLayout({homeItemList}: {homeItemList: IHomeItem[]}) {

  const homeItems = () => homeItemList.map((item, index) => <HomeItem key={index} item={item} />);

  return (
    <div className={styles.home_layout_wrapper}>
      { homeItems() }
    </div>
  );
}