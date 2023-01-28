import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IconButton } from '@mui/material';
// or
import './ButtonProperties.css'
import CountOfItems from './ActionItemsHeader';

export default function CountButton(props) {
  const countOfItems = props.countOfItems;
  return (
    <Box sx={{paddingLeft:'6px'}}>
      <IconButton  style={{maxWidth: '60px', maxHeight: '16px', minWidth: '18px', minHeight: '16px', borderRadius:'50px',backgroundColor:'blue',color:'#FFFFFF', border:'none',hover:'none', display: 'flex',fontSize:'12px',background:'background: #2258F5'}}>{countOfItems}</IconButton>
    </Box>
  )
}
