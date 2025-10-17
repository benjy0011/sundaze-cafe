'use client'

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined as number | undefined,
    height: undefined as number | undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const xs: boolean = 
    windowSize?.width 
    ? windowSize.width < 640 
    : false;
  const sm: boolean = 
    windowSize?.width 
    ? (windowSize.width >= 640) && (windowSize.width < 768) 
    : false;
  const md: boolean = 
    windowSize?.width 
    ? (windowSize.width >= 768) && (windowSize.width < 1024) 
    : false;
  const lg: boolean = 
    windowSize?.width 
    ? (windowSize.width >= 1024) && (windowSize.width < 1280) 
    : false;
  const xl: boolean = 
    windowSize?.width
    ? (windowSize.width >= 1280) && (windowSize.width < 1536)
    : false;
  const xxl: boolean = 
    windowSize?.width
    ? (windowSize.width >= 1536)
    : false;



  return {
    windowSize,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  }
}