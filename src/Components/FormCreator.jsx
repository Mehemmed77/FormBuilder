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

            let inputText = ``;
            if (e.inputType === "short text") {
                inputText = `
                <label for="${e.id}"> ${formData.label} <label />
                <input type="${formData.type}" placeholder="${formData.placeholder}" value="${formData.value}" 
                ${formData.required ? "required" : ""}
                ${formData.disabled ? "disabled" : ""}
                id="${e.id}" />`
            }

            else if(e.inputType === "long text") {
                inputText = `<label for="${e.id}"> ${formData.label} <label />
                <textarea placeholder="${formData.placeholder}" value="${formData.value}" 
                ${formData.required ? "required" : ""}
                ${formData.disabled ? "disabled" : ""}
                id="${e.id}">< textarea/>`    
            }

            else if(e.inputType === "radio") {
                inputText = `<input type="radio" value="${formData.value}" 
                ${formData.required ? "required" : ""}
                ${formData.disabled ? "disabled" : ""} 
                id="${e.id}" />
                <label for="${e.id}"> ${formData.label} <label />`
            }
            else if(e.inputType === "checkbox") {
                inputText = `<input type="checkbox" value="${formData.value}"
                ${formData.required ? "required" : ""}
                ${formData.disabled ? "disabled" : ""} 
                id="${e.id}" />
                <label for="${e.id}"> ${formData.label} </label>`
            }

            else if(e.inputType === "options") {
                let optionTags = ``;
                
            }

            console.log(inputText);
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