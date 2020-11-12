import React from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
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
            value={values.residenceCountry?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCountry?.hasError}
            helperText={values.residenceCountry?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCity?.hasError}
            helperText={values.residenceCity?.validationMessage}
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              defaultValue={new Date()}
              value={values.passportExpiryDate?.value}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: 'passportExpiryDate',
                    value: date,
                    validity: { valid: true },
                  },
                })
              }
              format="dd/MM/yyyy"
              disablePast
              inputVariant="outlined"
              error={values.passportExpiryDate?.hasError}
              helperText={values.passportExpiryDate?.validationMessage}
              required
            />
          </MuiPickersUtilsProvider>
        </>
      )}

      {nationality === 'belgium' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles['form-input']}
              label="Birth date"
              defaultValue={new Date()}
              value={values.birthDate?.value}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: 'passportExpiryDate',
                    value: date,
                    validity: { valid: true },
                  },
                })
              }
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              inputVariant="outlined"
              error={values.birthDate?.hasError}
              helperText={values.birthDate?.validationMessage}
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="residenceCountry"
            label="Residence country"
            defaultValue=""
            value={values.residenceCountry?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCountry?.hasError}
            helperText={values.residenceCountry?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCity?.hasError}
            helperText={values.residenceCity?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceAddress"
            label="Residence address"
            defaultValue=""
            value={values.residenceAddress?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceAddress?.hasError}
            helperText={values.residenceAddress?.validationMessage}
            required
          />
        </>
      )}

      {nationality === 'france' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles['form-input']}
              label="Birth date"
              defaultValue={new Date()}
              value={values.birthDate?.value}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: 'passportExpiryDate',
                    value: date,
                    validity: { valid: true },
                  },
                })
              }
              format="dd/MM/yyyy"
              views={['year', 'month', 'date']}
              openTo="year"
              disableFuture
              inputVariant="outlined"
              error={values.birthDate?.hasError}
              helperText={values.birthDate?.validationMessage}
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="birthPlace"
            label="Birth place"
            defaultValue=""
            value={values.birthPlace?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.birthPlace?.hasError}
            helperText={values.birthPlace?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCountry"
            label="Residence country"
            defaultValue=""
            value={values.residenceCountry?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCountry?.hasError}
            helperText={values.residenceCountry?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="residenceCity"
            label="Residence city"
            defaultValue=""
            value={values.residenceCity?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceCity?.hasError}
            helperText={values.residenceCity?.validationMessage}
            required
          />
        </>
      )}

      {nationality === 'greece' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles['form-input']}
              label="Passport date of issue"
              defaultValue={new Date()}
              value={values.passportIssueDate?.value}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: 'passportIssueDate',
                    value: date,
                    validity: { valid: true },
                  },
                })
              }
              format="dd/MM/yyyy"
              disableFuture
              inputVariant="outlined"
              error={values.passportIssueDate?.hasError}
              helperText={values.passportIssueDate?.validationMessage}
              required
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={styles['form-input']}
            name="passportIssueCountry"
            label="Passport country of issue"
            defaultValue=""
            value={values.passportIssueCountry?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.passportIssueCountry?.hasError}
            helperText={values.passportIssueCountry?.validationMessage}
            required
          />

          <TextField
            className={styles['form-input']}
            name="passportIssueCity"
            label="Passport city of issue"
            defaultValue=""
            value={values.passportIssueCity?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.passportIssueCity?.hasError}
            helperText={values.passportIssueCity?.validationMessage}
            required
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={styles['form-input']}
              label="Passport expiry date"
              defaultValue={new Date()}
              value={values.passportExpiryDate?.value}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: 'passportExpiryDate',
                    value: date,
                    validity: { valid: true },
                  },
                })
              }
              format="dd/MM/yyyy"
              disablePast
              inputVariant="outlined"
              error={values.passportExpiryDate?.hasError}
              helperText={values.passportExpiryDate?.validationMessage}
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
            value={values.residenceAddress?.value}
            onChange={handleInputChange}
            variant="outlined"
            error={values.residenceAddress?.hasError}
            helperText={values.residenceAddress?.validationMessage}
            required
          />
        </>
      )}
    </div>
  );
};

export default NationalitySpecifics;
