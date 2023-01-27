
import React from 'react'
import CountButton from './CountButton'
import Box from '@mui/material/Box';
import './Header.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
export default function CountOfItems() {
  return (
    <Box sx={{ display: 'flex',
    justifyContent: 'center'}} ><Typography style={{fontFamily:'Roboto', fontSize:'18px',lineHeight:'16px'}} sx={{color: "#FFFFFF"}}>ACTION-ITEMS </Typography><CountButton></CountButton> </Box>
  )
}
