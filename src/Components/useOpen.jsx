import { useState } from "react";

const useOpen = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen(state) {
        setOpen(state);
    } 

    return [open, toggleOpen];
}

export default useOpen;