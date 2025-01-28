import ShortText from "./inputTypes/ShortText";
import LongText from "./inputTypes/LongText";
import Options from "./inputTypes/Options";
import Radio from "./inputTypes/Radio";
import Checkbox from "./inputTypes/Checkbox";

export default function getFormType(type, id) {
    let formElement;
    switch (type) {
        case "short text":
            formElement = <ShortText id={id} />
            break;
        case "long text":
            formElement = <LongText id={id} />
            break;
        case "options":
            formElement = <Options id={id} />
            break;
        case "radio":
            formElement = <Radio id={id} />
            break;
        case "checkbox":
            formElement = <Checkbox id={id} />
            break;
    }

    return formElement;
}

