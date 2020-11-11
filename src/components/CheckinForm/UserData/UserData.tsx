import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import styles from './UserData.module.scss';
import { FormSubmitEvent, HandleSubmit } from '../../../ts/types';

import NationalitySpecifics from './NationalitySpecifics/NationalitySpecifics';

interface Props {
  userStoredData: any;
  handleSubmitSuccess: HandleSubmit;
}

const UserData: React.FC<Props> = ({ userStoredData, handleSubmitSuccess }) => {
  const [values, setValues] = useState<any>({});
  const [nationalitySpecificsValues, setNationalitySpecificsValues] = useState<
    any
  >({});

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    let isFormValid = true;

    Object.values(values).forEach((value: any) => {
      if (value.hasError) {
        isFormValid = false;
      }
    });

    Object.values(nationalitySpecificsValues).forEach((value: any) => {
      if (value.hasError) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      handleSubmitSuccess({ ...values, ...nationalitySpecificsValues });
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

  const handleNationalitySpecificsInputChange = (event: any) => {
    const { name, value, validity, validationMessage } = event.target;

    setNationalitySpecificsValues({
      ...nationalitySpecificsValues,
      [name]: {
        value,
        hasError: !validity.valid,
        validationMessage,
      },
    });
  };

  const handleNationalityChange = (event: any) => {
    setNationalitySpecificsValues({});
    handleInputChange({
      target: {
        name: event.target.name,
        value: event.target.value,
        validity: { valid: !event.target.checked },
        validationMessage: event.target.validationMessage,
      },
    });
  };

  return (
    <form
      className={styles['user-data']}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        className={styles['form-input']}
        name="firstName"
        label="First name"
        defaultValue=""
        value={values.firstName?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.firstName?.hasError}
        helperText={values.firstName?.validationMessage}
        required
      />

      <TextField
        className={styles['form-input']}
        name="lastName"
        label="Last name"
        defaultValue={userStoredData.lastName}
        value={values.lastName?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.lastName?.hasError}
        helperText={values.lastName?.validationMessage}
        required
      />

      <FormControl className={styles['form-input']} variant="outlined">
        <InputLabel id="nationality-label">Nationality</InputLabel>
        <Select
          labelId="nationality-label"
          name="nationality"
          label="Nationality"
          defaultValue=""
          value={values.nationality?.value}
          onChange={handleNationalityChange}
          error={values.nationality?.hasError}
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
        nationality={values.nationality?.value}
        values={nationalitySpecificsValues}
        handleInputChange={handleNationalitySpecificsInputChange}
      />

      <TextField
        className={styles['form-input']}
        name="email"
        label="Email"
        type="email"
        defaultValue=""
        value={values.email?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.email?.hasError}
        helperText={values.email?.validationMessage}
        required
      />

      <TextField
        className={styles['form-input']}
        name="phoneNumber"
        label="Phone number"
        type="tel"
        defaultValue=""
        value={values.phoneNumber?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.phoneNumber?.hasError}
        helperText={values.phoneNumber?.validationMessage}
        required
      />

      <TextField
        className={styles['form-input']}
        name="passportNumber"
        label="Passport number"
        type="number"
        defaultValue=""
        value={values.passportNumber?.value}
        onChange={handleInputChange}
        variant="outlined"
        error={values.passportNumber?.hasError}
        helperText={values.passportNumber?.validationMessage}
        required
      />

      <div
        className={`${styles['form-input']} ${styles['checkbox-container']}`}
      >
        <Checkbox
          name="termsAndConditionsCheckbox"
          defaultChecked={false}
          value={values.termsAndConditionsCheckbox?.value}
          onChange={(event) =>
            handleInputChange({
              target: {
                name: event.target.name,
                value: event.target.checked,
                validity: { valid: event.target.checked },
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
