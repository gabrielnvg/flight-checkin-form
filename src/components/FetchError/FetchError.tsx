import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './FetchError.module.scss';

function FetchError() {
  const handleClick = () => document.location.reload();

  return (
    <div className={styles['fetch-error']}>
      <div>Please check your connection and try again later.</div>

      <Button
        className={styles['reload-page-button']}
        onClick={handleClick}
        variant="contained"
        color="primary"
        disableElevation
      >
        Reload page
      </Button>
    </div>
  );
}

export default FetchError;
