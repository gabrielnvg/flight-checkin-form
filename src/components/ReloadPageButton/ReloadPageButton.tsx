import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './ReloadPageButton.module.scss';

const ReloadPageButton = () => {
  const handleClick = () => document.location.reload();

  return (
    <div className={styles['reload-page-button-container']}>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        disableElevation
      >
        Reload page
      </Button>
    </div>
  );
};

export default ReloadPageButton;
