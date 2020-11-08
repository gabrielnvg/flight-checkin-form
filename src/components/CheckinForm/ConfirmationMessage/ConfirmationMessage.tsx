import React from 'react';
import styles from './ConfirmationMessage.module.scss';

import ReloadPageButton from '../../ReloadPageButton/ReloadPageButton';

const ConfirmationMessage = () => {
  return (
    <div className={styles['confirmation-message']}>
      <div>Your check-in is confirmed!</div>

      <ReloadPageButton />
    </div>
  );
};

export default ConfirmationMessage;
