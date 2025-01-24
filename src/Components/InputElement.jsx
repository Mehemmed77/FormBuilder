import { MenuItem } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Option from "./Option";
import OptionAdder from "./OptionAdder";

export default function InputElement () {
    const [type, setType] = useState('text');

    const handleChange = (e) => {
        setType(e.target.value);
    }

    return <>
        {/* <div className="inputElement">
            <h3>Input Type: Short Text</h3>
            
            <div>
                <div className="innerDiv">
                    <TextField name="placeholder" label="Enter your Placeholder" variant="outlined" />
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <TextField name="value" label="Enter default value" variant="outlined" />
                </div>
                <div className="innerDiv">
                    <FormControl sx={{width:"130px"}}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={type} label="Age" onChange={handleChange}>
                                <MenuItem value={"text"}>Text</MenuItem>
                                <MenuItem value={"email"}>Email</MenuItem>
                                <MenuItem value={"password"}>Password</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControlLabel control={<Switch />} label="Required?" />
                </div>
            </div>
        </div> */}
        {/* <div className="inputElement">
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
        </div> */}
        {/* <div className="inputElement">
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
        </div> */}

        {/* <div className="inputElement">
            <h3>Input Type: Checkbox</h3>
            
            <div>
                <div className="innerDiv">
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <FormControlLabel control={<Switch />} label="Required?" />
                    <FormControlLabel control={<Switch />} label="Disabled?" />
                </div>
            </div>
        </div> */}

        {/* <div className="inputElement">
            <h3>Input Type: Radio</h3>
            
            <div>
                <div className="innerDiv">
                    <TextField name="label" label="Enter Label" variant="outlined" />
                    <FormControlLabel control={<Switch />} label="Required?" />
                    <FormControlLabel control={<Switch />} label="Disabled?" />
                </div>
            </div>
        </div> */}
    </>
};