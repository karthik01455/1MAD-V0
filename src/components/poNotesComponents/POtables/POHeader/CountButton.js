import React from 'react'
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
export default function CountButton(props) {
  const countOfItems = props.countOfItems;
  return (
    <Box sx={{ paddingLeft: '6px' }}>
      <IconButton style={{ maxWidth: '60px', maxHeight: '16px', minWidth: '10px', minHeight: '20px', borderRadius: '50%', backgroundColor: '#051C2C', color: '#FFFFFF', hover: 'none', display: 'flex', fontSize: '12px', background: 'background: #051C2C', border: ' 1px solid #F9F5F2' }}>i</IconButton>
    </Box>
  )
}
