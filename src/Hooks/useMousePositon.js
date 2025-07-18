import { useEffect, useState } from "react"

function useMousePositon(maxOffset = 0){
    const [mouseCord,  setMouseCord] = useState({x: 0, y: 0});
    const [clientX, setClientX] = useState(0);
    let center = window.innerWidth / 2;
    const handleMouseMove = (e) =>{
        setMouseCord({x: Number(e.clientX), y: Number(e.clientY)})
        setClientX(( (e.clientX - center) / center) * maxOffset)
    }
    return {handleMouseMove, mouseCord, clientX}
}
export default useMousePositon