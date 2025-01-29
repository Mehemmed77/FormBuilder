import FormHeading from "./FormHeading";
import InputElementsContainer from "./InputElementsContainer";
import Button from '@mui/material/Button';
import { useContext } from "react";
import MyContext from "./Context";

export default function FormCreator () {
    const { elements } = useContext(MyContext);
    let display = "none";
    if (elements.length > 0) display = "block";

    const handleClick = () => {
        for(let element of elements) {
            const formData = Object.fromEntries(new FormData(element.formRef.current));
            console.log(formData);
        }
    }

    return <>
        <div id="formCreator">
            <FormHeading />
            <InputElementsContainer />
            <Button variant="contained" id="generateButton" style={{display: display}} onClick={handleClick}> Generate </Button>
        </div>
    </>
}