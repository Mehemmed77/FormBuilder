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
        let formHTML = ``;
        elements.forEach((e) => {
            const formData = Object.fromEntries(new FormData(e.formRef.current));

            formHTML += `<div>\n${CreateHTML(e.id, e.inputType, formData)}\n</div>\n`;
        });

        console.log(formHTML);
    }

    return <>
        <div id="formCreator">
            <FormHeading />
            <InputElementsContainer />
            <Button variant="contained" id="generateButton" style={{display: display}} onClick={handleClick}> Generate </Button>
        </div>
    </>
}