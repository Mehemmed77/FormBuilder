import FormHeading from "./FormHeading";
import InputElementsContainer from "./InputElementsContainer";
import Button from '@mui/material/Button';
import { useContext } from "react";
import MyContext from "./Context";
import CreateHTML from "./CreateHTML";

export default function FormCreator () {
    const { elements } = useContext(MyContext);
    let display = "none";
    if (elements.length > 0) display = "block";

    const handleClick = () => {
        elements.forEach((e) => {
            const formData = Object.fromEntries(new FormData(e.formRef.current));
            CreateHTML(e.inputType, formData);
        });
    }

    return <>
        <div id="formCreator">
            <FormHeading />
            <InputElementsContainer />
            <Button variant="contained" id="generateButton" style={{display: display}} onClick={handleClick}> Generate </Button>
        </div>
    </>
}