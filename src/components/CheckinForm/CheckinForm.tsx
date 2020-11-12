import React from 'react';
import styles from './CheckinForm.module.scss';
import { FormStep, HandleSubmit } from '../../ts/types';

import SearchFlight from './SearchFlight/SearchFlight';
import UserData from './UserData/UserData';
import InfoMessage from '../InfoMessage/InfoMessage';

interface Props {
  formStep: FormStep;
  userStoredData: Record<string, unknown>;
  handleSearchFlightSubmit: HandleSubmit;
  handleUserDataSubmit: HandleSubmit;
}

const CheckinForm: React.FC<Props> = ({
  formStep,
  userStoredData,
  handleSearchFlightSubmit,
  handleUserDataSubmit,
}) => {
  return (
    <div className={styles['checkin-form']}>
      {formStep === 1 && (
        <>
          <div className={styles['top-text']}>Welcome to your web check-in</div>
          <SearchFlight handleSubmitSuccess={handleSearchFlightSubmit} />
        </>
      )}

      {formStep === 2 && (
        <>
          <div className={styles['top-text']}>
            Hello, {userStoredData.title} {userStoredData.lastName}!
          </div>
          <UserData
            userStoredData={userStoredData}
            handleSubmitSuccess={handleUserDataSubmit}
          />
        </>
      )}

      {formStep === 3 && <InfoMessage message="Your check-in is confirmed!" />}
    </div>
  );
};

export default CheckinForm;
