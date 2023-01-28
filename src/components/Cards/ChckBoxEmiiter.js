import {Checkbox} from '@mui/material';
const chckBoxEmiiter=(chck)=>{
    return (
        <div>
          {chck==true? (
                <Checkbox color='primary' size="large"/>
          ):(<></>)
          }
        </div>
      );
};

export default chckBoxEmiiter;