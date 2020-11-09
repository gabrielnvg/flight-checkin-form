import React from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styles from './NationalitySpecifics.module.scss';

interface Props {
  nationality: string;
  values: any;
  handleInputChange: any;
}

const NationalitySpecifics: React.FC<Props> = ({
  nationality,
  values,
  handleInputChange,
}) => {
  return (
    <div className={styles['nationality-specifics']}>
      {nationality === 'austria' && (
        <>
          <TextField
            className={styles['form-input']}
            name="residenceCountry"
            label="Residence country"
            defaultValue=""
            value={values.residenceCountry}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              defaultValue={new Date()}
              value={values.passportExpiryDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: 'passportExpiryDate', value: date },
                })
              }
              format="dd/MM/yyyy"
              disablePast
              inputVariant="outlined"
              required
            />
          </MuiPickersUtilsProvider>
        </>
      )}

      {nationality === 'belgium' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Birth date"
              defaultValue={new Date()}
              value={values.birthDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: 'passportExpiryDate', value: date },
                })
              }
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              inputVariant="outlined"
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="residenceCountry"
            label="Residence country"
            defaultValue=""
            value={values.residenceCountry}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceAddress"
            label="Residence address"
            defaultValue=""
            value={values.residenceAddress}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
        </>
      )}

      {nationality === 'france' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Birth date"
              defaultValue={new Date()}
              value={values.birthDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: 'passportExpiryDate', value: date },
                })
              }
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              inputVariant="outlined"
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="birthPlace"
            label="Birth place"
            defaultValue=""
            value={values.birthPlace}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCountry"
            label="Residence country"
            defaultValue=""
            value={values.residenceCountry}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
        </>
      )}

      {nationality === 'greece' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Passport date of issue"
              defaultValue={new Date()}
              value={values.passportIssueDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: 'passportIssueDate', value: date },
                })
              }
              format="dd/MM/yyyy"
              disableFuture
              inputVariant="outlined"
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="passportIssueCountry"
            label="Passport country of issue"
            defaultValue=""
            value={values.passportIssueCountry}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            name="passportIssueCity"
            label="Passport city of issue"
            defaultValue=""
            value={values.passportIssueCity}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              defaultValue={new Date()}
              value={values.passportExpiryDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: 'passportExpiryDate', value: date },
                })
              }
              format="dd/MM/yyyy"
              disablePast
              inputVariant="outlined"
              required
            />
          </MuiPickersUtilsProvider>
        </>
      )}

      {nationality === 'spain' && (
        <>
          <TextField
            className={styles['form-input']}
            name="residenceAddress"
            label="Residence address"
            defaultValue=""
            value={values.residenceAddress}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
        </>
      )}
    </div>
  );
};

export default NationalitySpecifics;
