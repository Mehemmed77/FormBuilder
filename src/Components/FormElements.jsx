import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function FormElements() {

    const handleClick = (e) => {
        console.log(e.target);
    };

    return <>
        <div id="formElements">
            <Box sx={{padding: "10px"}}>
                <h4>Form Elements</h4>
                <hr />

                <Stack sx={{marginBlockStart: "20px"}} spacing={2}>
                    <div className="element" type="short text" style={{cursor:"pointer"}} onClick={handleClick}>Short Text <PlaylistAddIcon /> </div>
                    <div className="element" type="long text" style={{cursor:"pointer"}} onClick={handleClick}>Long Text <PlaylistAddIcon /> </div>
                    <div className="element" type="optons" style={{cursor:"pointer"}} onClick={handleClick}>Multiple Choice <PlaylistAddIcon /> </div>
                    <div className="element" type="checkbox" style={{cursor:"pointer"}} onClick={handleClick}>Checkboxes <PlaylistAddIcon /> </div> 
                    <div className="element" type="radio" style={{cursor:"pointer"}} onClick={handleClick}>Radio <PlaylistAddIcon /> </div>
                </Stack>
            </Box>
        </div>
    </>
}