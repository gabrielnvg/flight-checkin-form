import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import styles from './UserData.module.scss';
import { HandleSubmit } from '../../../ts/types';

import NationalitySpecifics from './NationalitySpecifics/NationalitySpecifics';

interface Props {
  handleSubmit: HandleSubmit;
}

const UserData: React.FC<Props> = ({ handleSubmit }) => {
  const [nationality, setNationality] = useState('');

  const handleNationalityChange = (event: any) => {
    setNationality(event.target.value);
  };

  return (
    <form className={styles['user-data']} noValidate autoComplete="off">
      <TextField
        className={styles['form-input']}
        label="First name"
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        label="Last name"
        variant="outlined"
        required
      />

      <FormControl className={styles['form-input']} variant="outlined">
        <InputLabel id="nationality-label">Nationality</InputLabel>
        <Select
          label="Nationality"
          labelId="nationality-label"
          onChange={handleNationalityChange}
        >
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="austria">Austria</MenuItem>
          <MenuItem value="belgium">Belgium</MenuItem>
          <MenuItem value="france">France</MenuItem>
          <MenuItem value="greece">Greece</MenuItem>
          <MenuItem value="spain">Spain</MenuItem>
        </Select>
      </FormControl>

      <NationalitySpecifics nationality={nationality} />

      <TextField
        className={styles['form-input']}
        label="Email"
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        label="Phone number"
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        label="Passport number"
        variant="outlined"
        required
      />

      <div
        className={`${styles['form-input']} ${styles['checkbox-container']}`}
      >
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'Terms and conditions checkbox' }}
        />
        <span>
          I accept the{' '}
          <a href="#" target="_blank" rel="noopener nofererrer">
            terms and conditions
          </a>
        </span>
      </div>

      <Button
        className={styles['submit-button']}
        onClick={(event) => handleSubmit(event)}
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >
        Continue
      </Button>
    </form>
  );
};

export default UserData;
