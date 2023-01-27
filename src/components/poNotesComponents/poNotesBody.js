import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ActionItemsTable from './POtables/ActionItemsTable';
import KeyDecisionTable from './POtables/KeyDecisionsTable';
import AgendaTable from './POtables/AgendaTable';
import GridArea from './gridArea'

const PoNotesBody = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#E6EEF2', height: '83.5vh', flexDirection: 'row' }}>
          <GridArea/>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default PoNotesBody;