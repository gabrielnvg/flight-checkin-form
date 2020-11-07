import React, { useState } from 'react';
import styles from './CheckinForm.module.scss';

import SearchFlight from './SearchFlight/SearchFlight';

function CheckinForm() {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className={styles['checkin-form']}>
      <div className={styles['top-text']}>Welcome to your web check-in</div>

      {formStep === 1 && <SearchFlight setFormStep={setFormStep} />}
    </div>
  );
}

export default CheckinForm;
