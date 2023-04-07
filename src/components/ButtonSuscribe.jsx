import { useState } from "react";
import { toast } from 'react-toastify';

function Button() {

    const [subscribe, setsubscribe] = useState(false);

    return (
            
        <button onClick={() => {
            toast.info(subscribe ? "Ya estas subscripto" : "Suscribete")
            setsubscribe(!subscribe)}}>
            {
                subscribe ? "Ya estas subscripto" : "Suscribete"
            }
        </button>
    )
    }
export default Button