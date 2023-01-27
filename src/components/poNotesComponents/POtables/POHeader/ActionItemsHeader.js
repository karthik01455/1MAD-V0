
import React from 'react'
import CountButton from './CountButton'
import Box from '@mui/material/Box';
import './Header.css'

export default function CountOfItems() {
  return (
    <Box className='align'><Box class='textProperty'>ACTION ITEMS</Box><CountButton></CountButton> </Box>
  )
}
