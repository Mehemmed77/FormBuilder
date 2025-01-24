import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import OptionAdder from "../OptionAdder";

export default function Options() {
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
        </div>
    </>
}