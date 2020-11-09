import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SearchFlight.module.scss';
import { HandleSubmit } from '../../../ts/types';

interface Props {
  handleSubmit: HandleSubmit;
}

const SearchFlight: React.FC<Props> = ({ handleSubmit }) => {
  const [values, setValues] = useState<any>({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form
      className={styles['search-flight']}
      onSubmit={(event) => handleSubmit(event, values)}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={styles['form-input']}
        name="flightNumber"
        label="Flight number"
        type="number"
        defaultValue=""
        value={values.flightNumber}
        onChange={handleInputChange}
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        name="lastName"
        label="Last name"
        defaultValue=""
        value={values.lastName}
        onChange={handleInputChange}
        variant="outlined"
        required
      />

      <Button
        className={styles['submit-button']}
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
