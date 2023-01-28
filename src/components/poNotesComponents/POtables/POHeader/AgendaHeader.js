
import React,{ useState } from 'react'
import CountButton from './CountButton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Model from '../Model'

export default function AgendaHeader(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const countOfItems=props.countOfItems;
  const heading='Agenda Items';
  const definition='Agenda Items are the questions that the PO wanted to ask  the team members and the  leadership to derive some actions or decisions.'

  const accessibiltyInformation='  PO is the owner of this section only PO can add or edit these entries.';
    return (
      <Box sx={{ display: 'flex',
      justifyContent: 'center'}} ><Typography style={{fontFamily:'Roboto', fontSize:'18px',lineHeight:'20px'}} sx={{color: "#FFFFFF", paddingRight:'5px'}}>AGENDA ({countOfItems})</Typography> <Model heading={heading} definition={definition} accessibiltyInformation={accessibiltyInformation}/> </Box>
    )
}
