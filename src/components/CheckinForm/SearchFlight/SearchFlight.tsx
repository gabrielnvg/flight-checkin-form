import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SearchFlight.module.scss';
import { FormSubmitEvent, HandleSubmit } from '../../../ts/types';

interface Props {
  handleSubmitSuccess: HandleSubmit;
}

const SearchFlight: React.FC<Props> = ({ handleSubmitSuccess }) => {
  const [values, setValues] = useState<any>({});

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    let isFormValid = true;

    Object.values(values).forEach((value: any) => {
      if (value.hasError) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      handleSubmitSuccess(values);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value, validity, validationMessage } = event.target;

    setValues({
      ...values,
      [name]: {
        value,
        hasError: !validity.valid,
        validationMessage,
      },
    });
  };

  return (
    <form
      className={styles['search-flight']}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        className={styles['form-input']}
        name="flightNumber"
        label="Flight number"
        defaultValue=""
        type="number"
        value={values.flightNumber?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.flightNumber?.hasError}
        helperText={values.flightNumber?.validationMessage}
        required
      />

      <TextField
        className={styles['form-input']}
        name="lastName"
        label="Last name"
        defaultValue=""
        value={values.lastName?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.lastName?.hasError}
        helperText={values.lastName?.validationMessage}
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
