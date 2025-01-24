import { Box } from "@mui/material"
import { useRef, useState } from "react"

export default function FormHeading () {
    const ref = useRef();
    const [value, setValue] = useState("Untitled Form");

    const handleChange = () => {
        setValue(ref.current.value);
    }

    const handleBlur = () => {
        if (value === "") setValue("Untitled Form");
    }

    return <>
        <div id="formHeader">
            <div>
                <h2>Form Generator</h2>
            </div>
            <div className="inputTitle">
                <input ref={ref} type="text" value={value} placeholder="Name of the Form" onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="inputDescription">
                <textarea name="" placeholder="Enter form description"></textarea>
            </div>
        </div>
    </>
};