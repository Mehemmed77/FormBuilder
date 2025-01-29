import TextField from '@mui/material/TextField';
import Option from './Option';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRef, useState } from 'react';
import { v4 as id } from 'uuid';

export default function OptionAdder () {
    const [options, setOptions] = useState([]);
    const [text, setText] = useState("");

    const handleClick = () => {
        setOptions([...options, {id: id(), text: text }]);
    }

    const handleChange = (id, text) => {
        setOptions([...options.filter( (e) => e.id !== id ), {id: id, text: text}]);
    }

    const handleDelete = (id) => {
        setOptions([...options.filter( (e) => e.id !== id )]);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    return <>
        <div className="optionMainContainer">
            <div className="innerDiv" style={{width:"80%", justifyContent: "center"}}>
                <TextField label="Add Option" sx={{width:"90%"}} onChange={handleText} /> <AddCircleIcon sx={{cursor: "pointer"}} onClick={handleClick} />
            </div>
            
            {options.map( (e) => {
                return <Option name={`option${e.id}`} key={e.id} text={e.text} id={e.id} handleChange={handleChange} handleDelete={handleDelete}/>
            } )}
        </div>
    </>
}