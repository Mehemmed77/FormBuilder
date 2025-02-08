import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useContext } from "react";
import MyContext from "./Context";
import "../css/pre.css";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import useOpen from "./useOpen";

export default function Form() {
    const {form, formHeading} = useContext(MyContext);
    const [open1, setOpen1] = useOpen();
    const [open2, setOpen2] = useOpen();

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const handleCopy = async () => {
        setOpen1(true);
        try {
            await navigator.clipboard.writeText(form);
          } catch (err) {}
    }

    const handleDownload = () => {
        const blob = new Blob([form], {type: "text/html"});
        const url = URL.createObjectURL(blob);

        const dummyA = document.createElement("a");
        dummyA.href = url;
        dummyA.download = `${formHeading.title}.html`
        dummyA.click();

        URL.revokeObjectURL(url);
        setOpen2(true);
    }

    const actionForCopy = <React.Fragment><IconButton size="small" color="inherit" onClick={() => setOpen1(false)}><CloseIcon fontSize="small" /></IconButton></React.Fragment>
    const actionForDownload = <React.Fragment><IconButton size="small" color="inherit" onClick={() => setOpen2(false)}><CloseIcon fontSize="small" /></IconButton></React.Fragment>

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
                <Button variant="contained" onClick={handleDownload} sx={{backgroundColor:"rgba(0, 0, 0, 0.71)"}} startIcon={<DownloadIcon />}>Download</Button>
            </div>
        </div>

        <Snackbar open={open1} autoHideDuration={3000} sx={{width:"200px"}} onClose={() => setOpen1(false)} message="Content copied" action={actionForCopy}/>
        <Snackbar open={open2} autoHideDuration={3000} sx={{width:"200px"}} onClose={() => setOpen2(false)} message="Download started" action={actionForDownload}/>
    </>
    };
