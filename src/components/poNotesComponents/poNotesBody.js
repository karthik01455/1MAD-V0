import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import GridArea from './gridArea'

const PoNotesBody = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{
        justifyContent: "center",
        alignItems: "center", bgcolor: '#E6EEF2', height: '100vh', flexDirection: 'row'
      }}>
        <GridArea />
      </Box>
    </Container>
  );
}
export default PoNotesBody;