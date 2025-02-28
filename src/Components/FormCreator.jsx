import FormHeading from "./FormHeading";
import InputElementsContainer from "./InputElementsContainer";
import Button from '@mui/material/Button';
import { useContext } from "react";
import MyContext from "./Context";
import CreateHTML from "./CreateHTML";
import { useNavigate } from "react-router-dom";

export default function FormCreator () {
    const navigate = useNavigate();
    const { elements, setForm, formHeading } = useContext(MyContext);
    let display = "none";

    if (elements.length > 0) display = "block";

    const handleClick = () => {
        let formHTML = ``;

        elements.forEach((e) => {
            const formData = Object.fromEntries(new FormData(e.formRef.current));

            formHTML += `<div>\n${CreateHTML(e.id, e.inputType, formData)}\n</div>\n\n`;
        });

        setForm(`<h1 id="title">${formHeading.title}</h1>\n\n<p id="description">${formHeading.description}</p>\n\n<form>\n\n${formHTML}</form>`);

        navigate("/form/");
        
    }

    return <>
        <div id="formCreator">
            <FormHeading />
            <InputElementsContainer />
            <Button variant="contained" id="generateButton" style={{display: display}} onClick={handleClick}> Generate </Button>
        </div>
    </>
}