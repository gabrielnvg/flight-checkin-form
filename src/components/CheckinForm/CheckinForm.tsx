import React from 'react';
import styles from './CheckinForm.module.scss';
import { FormStep, HandleSubmit } from '../../ts/types';

import SearchFlight from './SearchFlight/SearchFlight';
// import SearchFlight from './SearchFlight/SearchFlight';
import InfoMessage from '../InfoMessage/InfoMessage';

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
      {formStep === 1 && (
        <>
          <div className={styles['top-text']}>Welcome to your web check-in</div>
          <SearchFlight handleSubmit={handleSearchFlightSubmit} />
        </>
      )}

      {formStep === 2 && (
        <>
          {/* <div className={styles['top-text']}>Hello, {userData.lastName}!</div> */}
          {/* <UserData handleSubmit={handleUserDataSubmit} /> */}
        </>
      )}

      {formStep === 3 && <InfoMessage message="Your check-in is confirmed!" />}
    </div>
  );
};

export default CheckinForm;
