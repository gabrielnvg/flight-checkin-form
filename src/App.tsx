import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormSubmitEvent } from './ts/types';
import fetchWithTimeout from './assets/js/utils/fetchWithTimeout';

import FetchLoading from './components/FetchLoading/FetchLoading';
import InfoMessage from './components/InfoMessage/InfoMessage';
import CheckinForm from './components/CheckinForm/CheckinForm';

const App = () => {
  const [fetchStatus, setFetchStatus] = useState({
    hasError: false,
    isLoading: false,
  });
  const [formStep, setFormStep] = useState(1);
  const [flightNotMatchedDialog, setFlightNotMatchedDialog] = useState({
    isOpen: false,
    title: '',
    body: '',
    buttonText: 'Ok',
  });

  const apiPrefix = 'https://api.mocki.io/v1';

  const fetchFlight = async (flightNumber: string, lastName: string) => {
    setFetchStatus({
      ...fetchStatus,
      hasError: false,
      isLoading: true,
    });

    await fetchWithTimeout({ url: `${apiPrefix}/8f85d472/`, timeout: 10000 })
      .then((response) => response.json())
      .then((flights) => {
        const matchedFlights = flights.filter(
          (flight: any) =>
            flight.flightNumber === parseInt(flightNumber, 10) &&
            flight.lastName === lastName,
        );

        const hasMatchedFlight = !!matchedFlights.length;

        if (hasMatchedFlight) {
          setFormStep((prevState) => prevState + 1);
        } else {
          setFlightNotMatchedDialog({
            ...flightNotMatchedDialog,
            isOpen: true,
            title: 'Flight not found for this last name',
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
          handleSearchFlightSubmit={handleSearchFlightSubmit}
          handleUserDataSubmit={handleUserDataSubmit}
        />
      )}

      <Dialog
        open={flightNotMatchedDialog.isOpen}
        onClose={handleCloseFlightNotMatchedDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {flightNotMatchedDialog.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {flightNotMatchedDialog.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseFlightNotMatchedDialog}
            color="primary"
            autoFocus
          >
            {flightNotMatchedDialog.buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
