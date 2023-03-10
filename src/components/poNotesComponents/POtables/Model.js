import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

    
export default function NestedModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <IconButton onClick={handleOpen} style={{maxWidth: '60px', maxHeight: '16px', minWidth: '10px', minHeight: '20px', borderRadius:'50%',backgroundColor:'#051C2C',color:'#FFFFFF', hover:'none', display: 'flex',fontSize:'12px',background:'background: #051C2C',border:' 1px solid #F9F5F2',textTransform:'none'}}>i</IconButton>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }} >
          <h2 id="parent-modal-title">{props.heading}</h2>
          <p id="parent-modal-description">
            {props.definition}
          </p>
          <p id="parent-modal-description">
            {props.accessibiltyInformation}
          </p>
          <Box sx={{display: 'flex',
          flexDirection: 'row-reverse'}}>
          <Button onClick={handleClose}>OK</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
