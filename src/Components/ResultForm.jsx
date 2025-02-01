import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useContext } from "react";
import MyContext from "./Context";
import "../css/pre.css";

export default function Form() {
    const {form} = useContext(MyContext);

    useEffect(() => {
        hljs.highlightAll();
      }, []);

    return <>
        <pre>
        <code className="language-html">
          {form}
        </code>
      </pre>
    </>
};