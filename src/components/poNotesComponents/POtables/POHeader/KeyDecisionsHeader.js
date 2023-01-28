
import React from 'react'
import CountButton from './CountButton'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export default function KeyDecisionsHeader(props) {
  const countOfItems=props.countOfItems;
  return (
    <Box sx={{ display: 'flex',
    justifyContent: 'center'}} ><Typography style={{fontFamily:'Roboto', fontSize:'18px',lineHeight:'16px'}} sx={{color: "#FFFFFF"}}>KEY-DECISION</Typography><CountButton countOfItems={countOfItems}></CountButton> </Box>
  )
}
