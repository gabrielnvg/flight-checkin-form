import React from 'react';
import styles from './InfoMessage.module.scss';

import ReloadPageButton from '../ReloadPageButton/ReloadPageButton';

interface Props {
  message: string;
}

const InfoMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles['info-message']}>
      <div className={styles.message}>{message}</div>

      <ReloadPageButton />
    </div>
  );
};

export default InfoMessage;
