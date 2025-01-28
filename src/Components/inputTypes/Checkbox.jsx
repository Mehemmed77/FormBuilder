import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import MyContext from '../Context';

export default function Checkbox({id}) {
    const {deleteElement} = useContext(MyContext);

    return <>
        <div className="inputElement">
            <h3>Input Type: Checkbox</h3>

            <div>
                <div className="innerDiv">
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <FormControlLabel control={<Switch />} label="Required?" />
                    <FormControlLabel control={<Switch />} label="Disabled?" />
                </div>
            </div>
        <DeleteIcon sx={{position:"absolute", top: "10px",right:"10px", color:"red", cursor:"pointer"}} onClick={() => deleteElement(id)} />
        </div>
    </>
}