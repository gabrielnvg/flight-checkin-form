import React from 'react';
import styles from './CheckinForm.module.scss';
import { FormStep, HandleSubmit } from '../../ts/types';

import SearchFlight from './SearchFlight/SearchFlight';

interface Props {
  formStep: FormStep;
  handleSearchFlightSubmit: HandleSubmit;
}

const CheckinForm: React.FC<Props> = ({
  formStep,
  handleSearchFlightSubmit,
}) => {
  return (
    <div className={styles['checkin-form']}>
      <div className={styles['top-text']}>Welcome to your web check-in</div>

      {formStep === 1 && (
        <SearchFlight handleSubmit={handleSearchFlightSubmit} />
      )}
    </div>
  );
};

export default CheckinForm;
