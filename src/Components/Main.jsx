import FormCreator from "./FormCreator";
import FormElements from "./FormElements";
import MyContext from "./Context";
import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
    const [elements, setElements] = useState([]);

    const addElement = useCallback((element) =>
        {
            setElements((prev) => [...prev, {id: element.props.id, jsx: element, 
                formRef: element.props.formRef, inputType: element.props.inputType}]);
        }
    ,[]);

    const deleteElement = useCallback( (id) => {
        setElements((prev) => prev.filter((e) => e.id !== id));
    }, []);

    return <>
        <MyContext.Provider value={{elements, addElement, deleteElement}}>
            <BrowserRouter>
                <Routes>
                    <Route path="create/" element=
                        {<div className="mainContainer"> <FormElements /> <FormCreator /> </div>} 
                    />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    </>
}