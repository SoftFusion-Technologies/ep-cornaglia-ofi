/*import { useEffect, useRef, useState } from 'react';
import '../Styles/Cursor.css'; 

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      // Detectar si el cursor está sobre un enlace
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const isLink = elements.some(el => el.tagName === 'A');
      setIsHoveringLink(isLink);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHoveringLink ? 'hover' : ''}`}
    ></div>
  );
};

export default CustomCursor; /**/

import AnimatedCursor from "react-animated-cursor"


function AnimCursor () {

  return (
    <AnimatedCursor

      innerSize={15}
      outerSize={30}
      color='193, 11, 111'
      outerAlpha={0.3}
      innerScale={0.8}
      outerScale={2}
    
    />
  )
}

export default AnimCursor


