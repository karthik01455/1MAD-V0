import Navbar from '../dumbComponents/navBar'
import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';
import GridArea from '../poNotesComponents/gridArea';
import Box from '@mui/material/Box';
const poNotesContainer = ()=>{
    return (
        <div>
            <div> <Navbar/> </div>
            
            <div><PoNotesHeader/></div><br></br><br></br>
            <Box sx={{ bgcolor: '#E6EEF2', flexDirection:'row' }}>
          <GridArea/>
        </Box>
        </div>
    );
};

export default poNotesContainer;