import React, { useState } from 'react';
import { FormSubmitEvent } from './ts/types';
import fetchWithTimeout from './assets/js/utils/fetchWithTimeout';

import FetchLoading from './components/FetchLoading/FetchLoading';
import InfoMessage from './components/InfoMessage/InfoMessage';
import CheckinForm from './components/CheckinForm/CheckinForm';
import DialogContainer from './components/DialogContainer/DialogContainer';

const App = () => {
  const [fetchStatus, setFetchStatus] = useState({
    hasError: false,
    isLoading: false,
  });
  const [formStep, setFormStep] = useState(1);
  const [userStoredData, setUserStoredData] = useState({});
  const [flightNotMatchedDialog, setFlightNotMatchedDialog] = useState({
    isOpen: false,
    title: '',
    body: '',
    confirmButtonText: 'Try again',
  });

  const apiPrefix = 'https://api.mocki.io/v1';

  const fetchFlight = async (flightNumber: string, lastName: string) => {
    setFetchStatus({
      ...fetchStatus,
      hasError: false,
      isLoading: true,
    });

    await fetchWithTimeout({ url: `${apiPrefix}/873b431e/`, timeout: 10000 })
      .then((response) => response.json())
      .then((flights) => {
        const matchedFlight = flights.filter(
          (flight: any) => flight.flightNumber === parseInt(flightNumber, 10),
        )[0];

        const matchedPassenger = matchedFlight?.passengers.filter(
          (passenger: any) =>
            passenger.lastName.toLowerCase() === lastName.toLowerCase(),
        )[0];

        const hasMatchedFlight = !!matchedFlight;
        const hasMatchedPassenger = !!matchedPassenger;

        if (hasMatchedFlight && hasMatchedPassenger) {
          setUserStoredData(matchedPassenger);
          setFormStep((prevState) => prevState + 1);
        } else {
          setFlightNotMatchedDialog({
            ...flightNotMatchedDialog,
            isOpen: true,
            title: 'Flight not found for this name',
            body: `There is no flight with number "${flightNumber}" in the name of "${lastName}", please try a different search.`,
          });
        }

        setFetchStatus({
          ...fetchStatus,
          hasError: false,
          isLoading: false,
        });
      })
      .catch(() => {
        setFetchStatus({
          ...fetchStatus,
          hasError: true,
          isLoading: false,
        });
      });
  };

  const handleSearchFlightSubmit = (event: FormSubmitEvent, values: any) => {
    const { flightNumber, lastName } = values;
    fetchFlight(flightNumber.value, lastName.value);
  };

  const handleUserDataSubmit = (event: FormSubmitEvent, values: any) => {
    // The POST with the inputs values would be done here and the next line, on its success
    setFormStep((prevState) => prevState + 1);
  };

  const handleCloseFlightNotMatchedDialog = () =>
    setFlightNotMatchedDialog({
      ...flightNotMatchedDialog,
      isOpen: false,
    });

  return (
    <div className="main-container">
      {fetchStatus.hasError && (
        <InfoMessage message="Please check your connection and try again later." />
      )}

      {fetchStatus.isLoading && !fetchStatus.hasError && <FetchLoading />}

      {!fetchStatus.isLoading && !fetchStatus.hasError && (
        <CheckinForm
          formStep={formStep}
          userStoredData={userStoredData}
          handleSearchFlightSubmit={handleSearchFlightSubmit}
          handleUserDataSubmit={handleUserDataSubmit}
        />
      )}

      <DialogContainer
        dialogState={flightNotMatchedDialog}
        handleCloseDialog={handleCloseFlightNotMatchedDialog}
      />
    </div>
  );
};

export default App;
