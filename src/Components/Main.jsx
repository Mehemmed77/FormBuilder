import FormCreator from "./FormCreator";
import FormElements from "./FormElements";
import MyContext from "./Context";
import { useCallback, useState } from "react";
import { v4 as generateId } from 'uuid';

export default function Main() {
    const [elements, setElements] = useState([]);

    const addElement = useCallback((element) =>
        {
            setElements((prev) => [...prev, {id: element.props.id, jsx: element, formRef: element.props.formRef}])
        }
    ,[]);

    const deleteElement = useCallback( (id) => {
        setElements((prev) => prev.filter((e) => e.id !== id));
    }, []);

    return <>
        <div className="mainContainer">
            <MyContext.Provider value={{elements, addElement, deleteElement}}>
                <FormElements></FormElements>
                <FormCreator></FormCreator>
            </MyContext.Provider>
        </div>
    </>
}