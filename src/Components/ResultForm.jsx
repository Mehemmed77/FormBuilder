import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import { useContext } from "react";
import MyContext from "./Context";

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