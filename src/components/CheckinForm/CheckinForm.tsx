import React, { useState } from 'react';
import styles from './CheckinForm.module.scss';
import { FetchStatus, SetFetchStatus } from '../../ts/types';

import SearchFlight from './SearchFlight/SearchFlight';

interface Props {
  fetchStatus: FetchStatus;
  setFetchStatus: SetFetchStatus;
}

const CheckinForm: React.FC<Props> = ({ fetchStatus, setFetchStatus }) => {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className={styles['checkin-form']}>
      <div className={styles['top-text']}>Welcome to your web check-in</div>

      {formStep === 1 && (
        <SearchFlight
          fetchStatus={fetchStatus}
          setFetchStatus={setFetchStatus}
          setFormStep={setFormStep}
        />
      )}
    </div>
  );
};

export default CheckinForm;
