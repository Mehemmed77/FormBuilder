import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from "./formGenerator/Main.jsx";
import "./css/index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
