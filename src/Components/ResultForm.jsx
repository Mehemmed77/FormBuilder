import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useContext } from "react";
import MyContext from "./Context";
import "../css/pre.css";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Form() {
    const {form, formHeading} = useContext(MyContext);
    const [open, setOpen] = useState(false);

    const handleCopy = async () => {
        setOpen(true);
        try {
            await navigator.clipboard.writeText(form);
          } catch (err) {}
    }

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const handleClose = (e, r) => {
        if (e === "clickaway") return;

        setOpen(false);
    }

    const action = <React.Fragment >
        <IconButton size="small" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" /></IconButton></React.Fragment>

    return <>
        <div className="formContainer">
            <div>
                <h2>{formHeading.title}</h2><br />
                <pre>
                    <code className="language-html">
                        {form}
                    </code>
                </pre>
            </div>
            <div className="actions">
                <Button variant="contained" onClick={handleCopy} sx={{backgroundColor:"rgba(0, 0, 0, 0.71)"}} startIcon={<ContentCopyIcon />}>Copy</Button>
                <Button variant="contained" sx={{backgroundColor:"rgba(0, 0, 0, 0.71)"}} startIcon={<SaveIcon />}>Save</Button>
            </div>
        </div>

        <Snackbar open={open} autoHideDuration={3000} sx={{width:"200px"}} onClose={handleClose} message="Content copied" action={action}/>
    </>
    };
