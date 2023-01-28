import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionItemsTable from './POtables/ActionItemsTable';
import KeyDecisionTable from './POtables/KeyDecisionsTable';
import AgendaTable from './POtables/AgendaTable';
export default function GridArea() {
  return (
   
      <Grid container spacing={5} columns={20}>
      <Grid item xs={1}>
        </Grid>
        <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row'
        }} item xs={6}>
          <ActionItemsTable />
        </Grid>
        <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row'
        }} item xs={6}>
          <KeyDecisionTable />
        </Grid>
        <Grid sx={{
          p: 6,
          m: 1,
          display: 'flex',
          flexDirection: 'row'
        }} item xs={6}>
          <AgendaTable />
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    
  );
}