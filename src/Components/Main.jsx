import FormCreator from "./FormCreator"
import FormElements from "./FormElements"

export default function Main() {
    return <>
        <div className="mainContainer">
            <FormElements></FormElements>
            <FormCreator></FormCreator>
        </div>
    </>
}