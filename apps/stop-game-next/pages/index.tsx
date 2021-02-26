import React, { useEffect, useState } from 'react';
import HomeLayout from '@stop-game-next-layouts/homeLayout/homeLayout';
import HomeAPI from '@stop-game-next-lib/api/homeAPI';
import { IHomeItem } from '@stop-game-next-lib/types/homeItemType';

import styles from './index.module.scss';

export function Index() {

  const [ error, setError] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    if (!isLoaded) {
      HomeAPI.getHomeItems().subscribe({
        next: handleHomeItems,
        error: handleError,
      });
    }
  }, []);

  const handleHomeItems = (homeItems: IHomeItem[]) => {
    setIsLoaded(true);
    setItems(homeItems);
  }

  const handleError = (error) => {
    setIsLoaded(true);
    setError(error);
  }

  function getHomeContent() {
    if (error) {
      return <span>Currently unable to load</span>;
    } else if (!isLoaded) {
      return <span>Is loading...</span>;
    } else {
      return <HomeLayout homeItemList={items} />;
    }
  }

  return (
    <div className={styles.page}>
      { getHomeContent() }
    </div>
  );
}

export default Index;
