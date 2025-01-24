import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function LongText() {
    return <>
        <div className="inputElement">
            <h3>Input Type: Long Text</h3>
            
            <div>
                <div className="innerDiv">
                    <TextField name="placeholder" label="Enter Placeholder" variant="outlined" />
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <TextField name="value" label="Enter default value" variant="outlined" />
                </div>
                <div className="innerDiv">
                    <FormControlLabel control={<Switch />} label="Required?" />
                </div>
            </div>
        </div>
    </>
}