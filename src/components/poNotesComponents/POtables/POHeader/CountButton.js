import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IconButton } from '@mui/material';
// or
import './ButtonProperties.css'

export default function CountButton(props) {
  return (
    <Box sx={{paddingLeft:'6px'}}>
      <IconButton  style={{maxWidth: '60px', maxHeight: '18px', minWidth: '18px', minHeight: '18px', borderRadius:'30px',backgroundColor:'blue',color:'#FFFFFF', border:'none',hover:'none', display: 'flex',fontSize:'12px'}}>99</IconButton>
    </Box>
  )
}
