import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import MyContext from '../Context';

export default function LongText({id, formRef, inputType}) {
    const {deleteElement} = useContext(MyContext);

    return <>
        <div className="inputElement">
            <h3>Input Type: Long Text</h3>
            
            <div>
                <form action="" ref={formRef}>
                    <div className="innerDiv">
                        <TextField name="placeholder" label="Enter Placeholder" variant="outlined" />
                        <TextField name="label" label="Enter Label" variant="outlined" />
                        <TextField name="value" label="Enter default value" variant="outlined" />
                    </div>
                    <div className="innerDiv">
                        <FormControlLabel name='required' control={<Switch inputProps={{ name: "required" }} />} label="Required?" />
                    </div>
                </form>
            </div>
            <DeleteIcon sx={{position:"absolute", top: "10px",right:"10px", color:"red", cursor:"pointer"}} onClick={() => deleteElement(id)} />
        </div>
    </>
}