import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SearchFlight.module.scss';

type SetFormStep = (
  setFormStep: number | ((formStep: number) => number),
) => void;

interface Props {
  setFormStep: SetFormStep;
}

const SearchFlight: React.FC<Props> = ({ setFormStep }) => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setFormStep((formStep: number) => formStep + 1);
  };

  return (
    <form className={styles['search-flight']} noValidate autoComplete="off">
      <TextField variant="outlined" label="Flight number" required />

      <TextField variant="outlined" label="Last name" required />

      <Button
        className={styles['submit-button']}
        onClick={handleSubmit}
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
