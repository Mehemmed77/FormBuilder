import ShortText from "./inputTypes/ShortText";
import LongText from "./inputTypes/LongText";
import Options from "./inputTypes/Options";
import Radio from "./inputTypes/Radio";
import Checkbox from "./inputTypes/Checkbox";

export default function getFormType(type, id, formRef) {
    let formElement;
    switch (type) {
        case "short text":
            formElement = <ShortText id={id} formRef={formRef}/>
            break;
        case "long text":
            formElement = <LongText id={id} formRef={formRef}/>
            break;
        case "options":
            formElement = <Options id={id} formRef={formRef}/>
            break;
        case "radio":
            formElement = <Radio id={id} formRef={formRef}/>
            break;
        case "checkbox":
            formElement = <Checkbox id={id} formRef={formRef}/>
            break;
    }

    return formElement;
}

