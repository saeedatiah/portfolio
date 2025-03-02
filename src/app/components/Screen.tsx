"use client";
import { useState, useEffect } from "react";

const Screen = (Text) => {
        const [text, setText] = useState("");
        const fullText = Text;
      
        useEffect(() => {
          let i = 0;
          const interval = setInterval(() => {
            if (i < fullText.length) {
              setText(fullText.slice(0, i + 1));
              i++;
            } else {
              clearInterval(interval);
            }
          }, 100);
          return () => clearInterval(interval);
        }, []);
    
  return (
    <div className="flex items-center justify-center ">
    <div className="relative w-96 h-64 bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="bg-black text-green-400 font-mono text-sm p-2 h-48 overflow-hidden rounded-md">
        <pre>{text}</pre>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-700 rounded-full"></div>
    </div>
  </div>
  )
}

export default Screen
