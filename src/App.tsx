import React, { useState } from 'react';

import FetchLoading from './components/FetchLoading/FetchLoading';
import FetchError from './components/FetchError/FetchError';
import CheckinForm from './components/CheckinForm/CheckinForm';

const App = () => {
  const [fetchStatus, setFetchStatus] = useState({
    hasError: false,
    isLoading: false,
  });

  return (
    <div className="main-container">
      {fetchStatus.hasError && <FetchError />}

      {fetchStatus.isLoading && !fetchStatus.hasError && <FetchLoading />}

      {!fetchStatus.isLoading && !fetchStatus.hasError && (
        <CheckinForm
          fetchStatus={fetchStatus}
          setFetchStatus={setFetchStatus}
        />
      )}
    </div>
  );
};

export default App;
