import Navbar from '../dumbComponents/navBar'
import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';


const poNotesContainer = ()=>{
    return (
        <div>
            <div> <Navbar/> </div>
            
            <div><PoNotesHeader/></div>
            <div><PoNotesBody/></div>
        </div>
    );
};

export default poNotesContainer;