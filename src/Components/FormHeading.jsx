import { useRef } from "react";
import { useContext } from "react";
import MyContext from "./Context";

export default function FormHeading () {
    const ref = useRef();
    const {formHeading, setFormHeading} = useContext(MyContext);

    const handleChange = () => {
        setFormHeading({...formHeading, title: ref.current.value});
    }

    const handleDescription = (e) => {
        setFormHeading({...formHeading, description: e.target.value});
    }

    const handleBlur = () => {
        if (formHeading.title === "") setFormHeading({...formHeading, title: "Untitled Form"});
    }

    return <>
        <div id="formHeader">
            <div>
                <h2>Form Generator</h2>
            </div>
            <div className="inputTitle">
                <input ref={ref} type="text" value={formHeading.title} placeholder="Name of the Form" onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="inputDescription">
                <textarea onChange={(e) => handleDescription(e)} placeholder="Enter form description"></textarea>
            </div>
        </div>
    </>
};