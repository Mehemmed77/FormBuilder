import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useContext } from "react";
import MyContext from "./Context";
import "../css/pre.css";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';

export default function Form() {
    const {form, formHeading} = useContext(MyContext);

    const handleCopy = async () => {
        try {
            
            await navigator.clipboard.writeText(form);
            console.log('Content copied to clipboard');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
    }

    useEffect(() => {
        hljs.highlightAll();
      }, []);

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
        </>
    };
