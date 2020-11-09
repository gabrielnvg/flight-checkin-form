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
  const [values, setValues] = useState<any>({});
  const [nationalitySpecificsValues, setNationalitySpecificsValues] = useState<
    any
  >({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleNationalitySpecificsInputChange = (event: any) => {
    const { name, value } = event.target;

    setNationalitySpecificsValues({
      ...nationalitySpecificsValues,
      [name]: value,
    });
  };

  const handleNationalityChange = (event: any) => {
    setNationalitySpecificsValues({});
    handleInputChange(event);
  };

  return (
    <form
      className={styles['user-data']}
      onSubmit={(event) =>
        handleSubmit(event, { ...values, ...nationalitySpecificsValues })
      }
      noValidate
      autoComplete="off"
    >
      <TextField
        className={styles['form-input']}
        name="firstName"
        label="First name"
        defaultValue=""
        value={values.firstName}
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

      <FormControl className={styles['form-input']} variant="outlined">
        <InputLabel id="nationality-label">Nationality</InputLabel>
        <Select
          labelId="nationality-label"
          name="nationality"
          label="Nationality"
          defaultValue=""
          value={values.nationality}
          onChange={handleNationalityChange}
          required
        >
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="austria">Austria</MenuItem>
          <MenuItem value="belgium">Belgium</MenuItem>
          <MenuItem value="france">France</MenuItem>
          <MenuItem value="greece">Greece</MenuItem>
          <MenuItem value="spain">Spain</MenuItem>
        </Select>
      </FormControl>

      <NationalitySpecifics
        nationality={values.nationality}
        values={nationalitySpecificsValues}
        handleInputChange={handleNationalitySpecificsInputChange}
      />

      <TextField
        className={styles['form-input']}
        name="email"
        label="Email"
        type="email"
        defaultValue=""
        value={values.email}
        onChange={handleInputChange}
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        name="phoneNumber"
        label="Phone number"
        type="tel"
        defaultValue=""
        value={values.phoneNumber}
        onChange={handleInputChange}
        variant="outlined"
        required
      />

      <TextField
        className={styles['form-input']}
        name="passportNumber"
        label="Passport number"
        type="number"
        defaultValue=""
        value={values.passportNumber}
        onChange={handleInputChange}
        variant="outlined"
        required
      />

      <div
        className={`${styles['form-input']} ${styles['checkbox-container']}`}
      >
        <Checkbox
          name="termsAndConditionsCheckbox"
          defaultChecked={false}
          value={values.termsAndConditionsCheckbox}
          onChange={(event) =>
            handleInputChange({
              target: {
                name: event.target.name,
                value: event.target.checked,
              },
            })
          }
          color="primary"
          inputProps={{ 'aria-label': 'Terms and conditions checkbox' }}
          required
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
