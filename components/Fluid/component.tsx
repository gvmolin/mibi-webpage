"use client"
import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

export default function Fluid(props: {children?: React.ReactNode, style?:any}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    
    if (canvasRef.current) {
      new WebGLFluid(canvasRef.current);
      // Use fluidInstance to interact with the WebGL fluid simulation
    }
  }, []);

  return (
    <canvas ref={canvasRef} style={{...props.style}} >
      {props.children && props.children}
    </canvas>
  );
};
