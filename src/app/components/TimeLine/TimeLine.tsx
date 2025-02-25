'use Client'
import React, { useEffect, useRef, useState } from 'react'
interface TimeLineProps {
  children: React.ReactNode;
  className?: string;
}

const TimeLine: React.FC<TimeLineProps> = ({ children, className })  => {
      const [inView, setInView] = useState(false);
      const timelineRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              setInView(true); 
            } else {
              setInView(false); 
            }
          },
          { threshold: 0.5 } 
        );
    
        if (timelineRef.current) {
          observer.observe(timelineRef.current); 
        }
    
        // تنظيف الـ Observer عند التدمير
        return () => {
          if (timelineRef.current) {
            observer.unobserve(timelineRef.current);
          }
        };
      }, []);
  return (
    <div className={`max-w-3xl mx-auto px-4 py-8 ${className}`}>
    <div className="border-l-4 border-gray-300 pl-4" ref={timelineRef}  >
        {children}

</div>
</div>
  )
}

export default TimeLine
