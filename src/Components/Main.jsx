import FormCreator from "./FormCreator";
import FormElements from "./FormElements";
import MyContext from "./Context";
import { useCallback, useState } from "react";
import { v4 as generateId } from 'uuid';

export default function Main() {
    const [elements, setElements] = useState([]);

    const addElement = useCallback((element) =>
        {
            setElements((prev) => [...prev, {id: generateId(), jsx: element}])
        }
    ,[]);

    return <>
        <div className="mainContainer">
            <MyContext.Provider value={{elements, addElement}}>
                <FormElements></FormElements>
                <FormCreator></FormCreator>
            </MyContext.Provider>
        </div>
    </>
}