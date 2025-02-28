import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MyContext from "./Context";
import getFormType from "./getFormType";
import { v4 as id } from 'uuid';
import { useRef } from "react";

export default function FormElements() {
    const {elements, addElement} = useContext(MyContext);

    const handleClick = (e) => {
        addElement(getFormType(e, id(), React.createRef()));
    };

    return <>
        <div id="formElements">
            <Box sx={{padding: "10px"}}>
                <h4>Form Elements</h4>
                <hr />

                <Stack sx={{marginBlockStart: "20px"}} spacing={2}>
                    <div className="element">Short Text <PlaylistAddIcon onClick={() => handleClick("short text")} sx={{cursor:"pointer"}} /> </div>
                    <div className="element">Long Text <PlaylistAddIcon onClick={() => handleClick("long text")} sx={{cursor:"pointer"}} /> </div>
                    <div className="element">Multiple Choice <PlaylistAddIcon onClick={() => handleClick("options")} sx={{cursor:"pointer"}} /> </div>
                    <div className="element">Checkboxes <PlaylistAddIcon onClick={() => handleClick("checkbox")} sx={{cursor:"pointer"}} /> </div> 
                    <div className="element">Radio <PlaylistAddIcon onClick={() => handleClick("radio")} sx={{cursor:"pointer"}} /> </div>
                </Stack>
            </Box>
        </div>
    </>
}