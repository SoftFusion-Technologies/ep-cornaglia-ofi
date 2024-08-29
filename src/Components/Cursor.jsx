import {useState , useEffect} from 'react';
import AnimatedCursor from "react-animated-cursor";

function AnimCursor () {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect (() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize',handleResize);

    // Limpieza del listener
    return () => window.removeEventListener('resize',handleResize);
  }, []);

  return (
    <>
      {isDesktop && (
        <AnimatedCursor
          innerSize={15}
          outerSize={30}
          color='193, 11, 111'
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={2}
        />
      )}
    </>
  )
}

export default AnimCursor


