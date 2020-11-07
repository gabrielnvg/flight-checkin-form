import React, { useState } from 'react';

import FetchLoading from './components/FetchLoading/FetchLoading';
import FetchError from './components/FetchError/FetchError';
import CheckinForm from './components/CheckinForm/CheckinForm';

const App = () => {
  const [fetchStatus, setFetchStatus] = useState({
    hasError: false,
    isLoading: false,
  });
  const [formStep, setFormStep] = useState(1);

  const handleSearchFlightSubmit = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    setFormStep((prevState) => prevState + 1);
  };

  return (
    <div className="main-container">
      {fetchStatus.hasError && <FetchError />}

      {fetchStatus.isLoading && !fetchStatus.hasError && <FetchLoading />}

      {!fetchStatus.isLoading && !fetchStatus.hasError && (
        <CheckinForm
          formStep={formStep}
          handleSearchFlightSubmit={handleSearchFlightSubmit}
        />
      )}
    </div>
  );
};

export default App;
