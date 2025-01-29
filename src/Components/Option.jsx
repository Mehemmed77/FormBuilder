import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Option({name, id, text, handleChange, handleDelete}) {
    return <>
        <div className='optionContainer'>
            <TextField name={name} label="Option" onChange={ (e) => handleChange(id, e.target.value)} value={text}> </TextField>
            <DeleteIcon onClick={() => handleDelete(id)} sx={{color:"red", cursor:"pointer"}}/>
        </div>
    </>
}