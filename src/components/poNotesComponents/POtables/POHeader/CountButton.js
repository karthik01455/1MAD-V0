import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IconButton } from '@mui/material';
// or
import './ButtonProperties.css'

export default function CountButton() {
  return (
    <div>
      <IconButton  class='countButtonProperty' style={{maxWidth: '60px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', borderRadius:'30px',backgroundColor:'blue',display:'inline-block',color:'#FFFFFF', border:'none',hover:'none'}}>99000</IconButton>
    </div>
  )
}
