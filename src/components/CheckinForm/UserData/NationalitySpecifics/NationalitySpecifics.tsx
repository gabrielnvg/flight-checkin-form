import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './NationalitySpecifics.module.scss';

interface Props {
  nationality: string;
}

const NationalitySpecifics: React.FC<Props> = ({ nationality }) => {
  return (
    <div className={styles['nationality-specifics']}>
      {nationality === 'austria' && (
        <>
          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence country"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence city"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Passport expiry date"
            required
          />
        </>
      )}

      {nationality === 'belgium' && (
        <>
          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Birth date"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence country"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence city"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence address"
            required
          />
        </>
      )}

      {nationality === 'france' && (
        <>
          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Birth date"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Birth place"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence country"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence city"
            required
          />
        </>
      )}

      {nationality === 'greece' && (
        <>
          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Passport date of issue"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Passport country of issue"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Passport city of issue"
            required
          />

          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Passport expiry date"
            required
          />
        </>
      )}

      {nationality === 'spain' && (
        <>
          <TextField
            className={styles['form-input']}
            variant="outlined"
            label="Residence address"
            required
          />
        </>
      )}
    </div>
  );
};

export default NationalitySpecifics;
