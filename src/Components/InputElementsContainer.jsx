import React, { useContext } from "react";
import MyContext from "./Context";
import { v4 as id } from 'uuid';

export default function InputElementsContainer () {
    const {elements, addElement} = useContext(MyContext);

    return <>
        {elements.map( (e) => {
            return <React.Fragment key={e.id}>
                {e.jsx}
            </React.Fragment>
        })}
    </>
}