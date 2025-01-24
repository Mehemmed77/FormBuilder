import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkbox() {
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
        </div>
    </>
}