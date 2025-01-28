import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import OptionAdder from "../OptionAdder";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import MyContext from '../Context';

export default function Options({id}) {
    const {deleteElement} = useContext(MyContext);

    return <>
        <div className="inputElement">
            <h3>Input Type: Multiple Choice</h3>
            
            <div>
                <div className="innerDiv">
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <FormControlLabel control={<Switch />} label="Required?" />
                </div>
                <div className="innerDiv">
                    <OptionAdder />
                </div>
            </div>
            <DeleteIcon sx={{position:"absolute", top: "10px",right:"10px", color:"red", cursor:"pointer"}} onClick={() => deleteElement(id)} />
        </div>
    </>
}