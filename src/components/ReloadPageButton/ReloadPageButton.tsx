import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './ReloadPageButton.module.scss';

const ReloadPageButton = () => {
  const handleClick = () => document.location.reload();

  return (
    <Button
      className={styles['reload-page-button']}
      onClick={handleClick}
      variant="contained"
      color="primary"
      disableElevation
    >
      Reload page
    </Button>
  );
};

export default ReloadPageButton;
