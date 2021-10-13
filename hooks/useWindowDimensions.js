// * Code reused from 
// v1
//* https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs#42141641
// v2
// https://usehooks.com/useWindowSize/
// 

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler function to call on resize
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    //Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures the effect is only run on mount

  return windowDimensions;
}
