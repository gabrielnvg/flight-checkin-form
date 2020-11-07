import React from 'react';
import styles from './FetchError.module.scss';

import ReloadPageButton from '../ReloadPageButton/ReloadPageButton';

function FetchError() {
  return (
    <div className={styles['fetch-error']}>
      <div>Please check your connection and try again later.</div>

      <ReloadPageButton />
    </div>
  );
}

export default FetchError;
