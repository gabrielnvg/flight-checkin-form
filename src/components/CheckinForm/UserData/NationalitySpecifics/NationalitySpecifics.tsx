import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styles from './NationalitySpecifics.module.scss';

interface Props {
  nationality: string;
}

const NationalitySpecifics: React.FC<Props> = ({ nationality }) => {
  const [
    austriaPassportExpiryDate,
    setAustriaPassportExpiryDate,
  ] = useState<Date | null>(new Date());
  const [belgiumBirthDate, setBelgiumBirthDate] = useState<Date | null>(
    new Date(),
  );
  const [franceBirthDate, setFranceBirthDate] = useState<Date | null>(
    new Date(),
  );
  const [
    greecePassportExpiryDate,
    setGreecePassportExpiryDate,
  ] = useState<Date | null>(new Date());
  const [
    greecePassportIssueDate,
    setGreecePassportIssueDate,
  ] = useState<Date | null>(new Date());

  return (
    <div className={styles['nationality-specifics']}>
      {nationality === 'austria' && (
        <>
          <TextField
            className={styles['form-input']}
            label="Residence country"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Residence city"
            variant="outlined"
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              value={austriaPassportExpiryDate}
              onChange={(date) => setAustriaPassportExpiryDate(date)}
              inputVariant="outlined"
              format="dd/MM/yyyy"
              disablePast
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
              value={belgiumBirthDate}
              onChange={(date) => setBelgiumBirthDate(date)}
              inputVariant="outlined"
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            label="Residence country"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Residence city"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Residence address"
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
              value={franceBirthDate}
              onChange={(date) => setFranceBirthDate(date)}
              inputVariant="outlined"
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            label="Birth place"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Residence country"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Residence city"
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
              value={greecePassportIssueDate}
              onChange={(date) => setGreecePassportIssueDate(date)}
              inputVariant="outlined"
              format="dd/MM/yyyy"
              disableFuture
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            label="Passport country of issue"
            variant="outlined"
            required
          />

          <TextField
            className={styles['form-input']}
            label="Passport city of issue"
            variant="outlined"
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              value={greecePassportExpiryDate}
              onChange={(date) => setGreecePassportExpiryDate(date)}
              inputVariant="outlined"
              format="dd/MM/yyyy"
              disablePast
              required
            />
          </MuiPickersUtilsProvider>
        </>
      )}

      {nationality === 'spain' && (
        <>
          <TextField
            className={styles['form-input']}
            label="Residence address"
            variant="outlined"
            required
          />
        </>
      )}
    </div>
  );
};

export default NationalitySpecifics;
