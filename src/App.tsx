import React, { useState } from 'react';
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
  const [inputValues, setInputValues] = useState({});
  const [flightNotMatchedDialog, setFlightNotMatchedDialog] = useState({
    isOpen: false,
    title: '',
    body: <span />,
    confirmButtonText: 'Try again',
  });
  const [userDataSubmitDialog, setUserDataSubmitDialog] = useState({
    isOpen: false,
    title: 'Review',
    body: 'Are you sure that all your information is correct?',
    hasCancelButton: true,
    cancelButtonText: 'No, review',
    confirmButtonText: 'Yes, submit',
  });

  const apiPrefix = 'https://api.mocki.io/v1';

  const fetchFlight = async (flightNumber: string, lastName: string) => {
    setFetchStatus({
      ...fetchStatus,
      hasError: false,
      isLoading: true,
    });

    await fetchWithTimeout({ url: `${apiPrefix}/873b431e/`, timeout: 10000 })
      .then((response: any) => response.json())
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
            body: (
              <span>
                There is no flight with number <strong>{flightNumber}</strong>{' '}
                in the name of <strong>{lastName}</strong>, please try a
                different search.
              </span>
            ),
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

  const handleSearchFlightSubmit = (values: any) => {
    const { flightNumber, lastName } = values;
    fetchFlight(flightNumber.value, lastName.value);
  };

  const handleUserDataSubmit = (values: any) => {
    setInputValues(
      Object.keys(values).reduce(
        (modifiedValues: any, key: string) => ({
          ...modifiedValues,
          [key]: values[key].value,
        }),
        {},
      ),
    );

    setUserDataSubmitDialog({
      ...userDataSubmitDialog,
      isOpen: true,
    });
  };

  const handleCloseFlightNotMatchedDialog = () =>
    setFlightNotMatchedDialog({
      ...flightNotMatchedDialog,
      isOpen: false,
    });

  const handleCloseUserDataSubmitDialog = () =>
    setUserDataSubmitDialog({
      ...userDataSubmitDialog,
      isOpen: false,
    });

  const handleConfirmButtonClick = async () => {
    handleCloseUserDataSubmitDialog();

    setFetchStatus({
      ...fetchStatus,
      hasError: false,
      isLoading: true,
    });

    await fetchWithTimeout({
      url: `${apiPrefix}/8fcc9311/`,
      options: {
        method: 'PUT',
        body: inputValues,
      },
      timeout: 10000,
    })
      .then((response: any) => {
        if (response.status === 200) {
          setFormStep((prevState) => prevState + 1);

          setFetchStatus({
            ...fetchStatus,
            hasError: false,
            isLoading: false,
          });
        } else {
          throw new Error('Fetch status was not 200.');
        }
      })
      .catch(() => {
        setFetchStatus({
          ...fetchStatus,
          hasError: true,
          isLoading: false,
        });
      });
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
          userStoredData={userStoredData}
          handleSearchFlightSubmit={handleSearchFlightSubmit}
          handleUserDataSubmit={handleUserDataSubmit}
        />
      )}

      <DialogContainer
        dialogState={flightNotMatchedDialog}
        handleCloseDialog={handleCloseFlightNotMatchedDialog}
      />

      <DialogContainer
        dialogState={userDataSubmitDialog}
        handleCloseDialog={handleCloseUserDataSubmitDialog}
        handleConfirmButtonClick={handleConfirmButtonClick}
      />
    </div>
  );
};

export default App;
