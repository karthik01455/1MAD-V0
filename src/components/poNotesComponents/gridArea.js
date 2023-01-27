import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ActionItemsTable from './POtables/ActionItemsTable';
import KeyDecisionTable from './POtables/KeyDecisionsTable';
import AgendaTable from './POtables/AgendaTable';

export default function griArea() {
  return (
   /* <div style={{ width: '100%' }}>
      <Box
        sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'
         
        }}
      >
        <Box sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}}
         > <ActionItemsTable/></Box>
        <Box sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}}
         > <KeyDecisionTable/></Box>
       
       <Box sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}}
         > <AgendaTable/></Box>
  
      </Box>*/
      <div style={{ width: '100%' }}>
      <Grid container spacing={3} columns={20}>
  <Grid item xs={1}>
    
  </Grid>
  <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}}item xs={6}>
    <ActionItemsTable/>
  </Grid>
  
  <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}} item xs={6}>
   <KeyDecisionTable/>
  </Grid>
  
  <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          width:'500px'}} item xs={6}>
   <AgendaTable/>
  </Grid>
  <Grid item xs={1}>
   
  </Grid>
</Grid>
      
    </div>
  );
}