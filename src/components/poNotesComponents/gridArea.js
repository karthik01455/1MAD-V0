import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionItemsTable from './POtables/ActionItemsTable';
import KeyDecisionTable from './POtables/KeyDecisionsTable';
import AgendaTable from './POtables/AgendaTable';

export default function GridArea() {


  return (

    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={3} columns={18} >
        <Grid xs={6} >
          <ActionItemsTable />
        </Grid>
        <Grid xs={6} >
          <KeyDecisionTable />
        </Grid>
        <Grid xs={6} >
          <AgendaTable />
        </Grid>
      </Grid>
    </Box>
  );
}

