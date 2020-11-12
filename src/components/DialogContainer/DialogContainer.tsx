import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './DialogContainer.module.scss';

interface Props {
  dialogState: {
    isOpen: boolean;
    title: string;
    body: string;
    confirmButtonText: string;
    hasCancelButton?: boolean;
    cancelButtonText?: string;
  };
  handleCloseDialog: any;
  handleCancelButtonClick?: any;
  handleConfirmButtonClick?: any;
}

const DialogContainer: React.FC<Props> = ({
  dialogState,
  handleCloseDialog,
  handleCancelButtonClick,
  handleConfirmButtonClick,
}) => {
  return (
    <Dialog
      className={styles['dialog-container']}
      open={dialogState.isOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogState.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogState.body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {dialogState.hasCancelButton && (
          <Button
            onClick={handleCancelButtonClick || handleCloseDialog}
            color="secondary"
          >
            {dialogState.cancelButtonText}
          </Button>
        )}

        <Button
          onClick={handleConfirmButtonClick || handleCloseDialog}
          color="primary"
          autoFocus
        >
          {dialogState.confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContainer;
