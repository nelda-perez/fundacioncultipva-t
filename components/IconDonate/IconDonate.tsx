'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormEmail from '../FormContact';
import PopUp from '@/components/Popup';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'calc(100vh - 20px)',
  borderRadius: '15px',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function DonateModal() {
  const { t } = useTranslation();
  const [openPop, setOpenPop] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClosePop = () => {
    setOpenPop(true);
    handleClose();
    setTimeout(() => {
      setOpenPop(false);
    }, 3000);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          position: 'fixed',
          bottom: 90,
          color: 'black',
          zIndex: 5,
          right: 10,
          background: '#ffffff69'
        }}>
        { t('donateNow') }
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div
            onClick={handleClose}
            style={{ fontSize: 20, textAlign: 'end', width: '100%', cursor: 'pointer' }}>
            x
          </div>
          <FormEmail title={ t('donate') } setIsSubmit={handleClosePop} />
        </Box>
      </Modal>
      <PopUp open={openPop} content="correctEmail" />
    </div>
  );
}
