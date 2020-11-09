import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SearchFlight.module.scss';
import { HandleSubmit } from '../../../ts/types';

interface Props {
  handleSubmit: HandleSubmit;
}

const SearchFlight: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <form className={styles['search-flight']} noValidate autoComplete="off">
      <TextField
        className={styles['form-input']}
        variant="outlined"
        label="Flight number"
        required
      />

      <TextField
        className={styles['form-input']}
        variant="outlined"
        label="Last name"
        required
      />

      <Button
        className={styles['submit-button']}
        onClick={(event) => handleSubmit(event)}
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >
        Search flight
      </Button>
    </form>
  );
};

export default SearchFlight;
