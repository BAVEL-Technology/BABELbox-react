import React, { useState, useEffect } from 'react';

const index = (props) => {
  const [percentComplete, setPercentComplete] = useState(100);

  const startTimeStamp = props.startTimeStamp;
  const endTimeStamp = props.endTimeStamp;

  console.log(`Props: \n`, props);

  console.log(`
  Start Time: ${startTimeStamp}\n
  End Time: ${endTimeStamp}\n
  Percent Complete: ${percentComplete}
  `);
  
  
  useEffect(() => {
    const timer = setInterval(()=>{
      setPercentComplete((endTimeStamp - Date.now()) / (endTimeStamp - startTimeStamp));

      console.log(`Inside Timer Percent Complete: ${percentComplete}`);
      
      if(percentComplete >= 100)
      {
        console.log("Timer complete.");
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  return (
    <div className="relative z-50">
      {/* Foreground */}
      <div className="absolute h-12 bg-green-500 rounded-full z-30 transition-all ease-in-out duration-150" style={{
      width: `${percentComplete}%`}}></div>
      {/* Background */}
      <div className="absolute w-full h-12 bg-blue-500 rounded-full z-20"></div>
    </div>
  );
}

export default index;
