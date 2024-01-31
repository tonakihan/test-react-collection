import { useRef } from "react";
import useHover from "../hooks/useHover";

function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);

  return(
    <div 
      ref={ref} 
      style={{
        width: "200px", 
        height: "200px", 
        background: isHovering ? 'red' : 'blue'
    }}>

    </div>
  )
}

export default Hover;