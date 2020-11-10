import React, { useState } from 'react';
import { FormSubmitEvent } from './ts/types';

import FetchLoading from './components/FetchLoading/FetchLoading';
import InfoMessage from './components/InfoMessage/InfoMessage';
import CheckinForm from './components/CheckinForm/CheckinForm';

const App = () => {
  const [fetchStatus, setFetchStatus] = useState({
    hasError: false,
    isLoading: false,
  });
  const [formStep, setFormStep] = useState(1);

  const handleSearchFlightSubmit = (event: FormSubmitEvent, values: any) => {
    console.log('SearchFlight values: ', values);

    setFormStep((prevState) => prevState + 1);
  };

  const handleUserDataSubmit = (event: FormSubmitEvent, values: any) => {
    console.log('UserData values: ', values);

    // The POST with the inputs values would be done here and the next line, on its success
    setFormStep((prevState) => prevState + 1);
  };

  return (
    <div className="main-container">
      {fetchStatus.hasError && (
        <InfoMessage message="Please check your connection and try again later." />
      )}

      {fetchStatus.isLoading && !fetchStatus.hasError && <FetchLoading />}

      {!fetchStatus.isLoading && !fetchStatus.hasError && (
        <CheckinForm
          formStep={formStep}
          handleSearchFlightSubmit={handleSearchFlightSubmit}
          handleUserDataSubmit={handleUserDataSubmit}
        />
      )}
    </div>
  );
};

export default App;
