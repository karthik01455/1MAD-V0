
import React from 'react'
import CountButton from './CountButton';
import Box from '@mui/material/Box';
import './Header.css'
export default function AgendaHeader() {
  return (
    <Box className='align'><Box className='textProperty'>AGENDA</Box><CountButton></CountButton> </Box>
  )
}
