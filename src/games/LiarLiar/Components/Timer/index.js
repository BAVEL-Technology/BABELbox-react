import React, { useState, useEffect } from 'react';

const index = (props) => {
  const [percentComplete, setPercentComplete] = useState(0);

  const startTimeStamp = props.startTimeStamp;
  const endTimeStamp = startTimeStamp + 30000;

  const timerStyles = {
    width: percentComplete + '%'
  }

  console.log(timerStyles);

  // console.log(`
  // Time Difference: ${((1 - (startTimeStamp - Date.now())) / (endTimeStamp - startTimeStamp)) * 100}
  // `);

  const calculatePercentage = () => {
    const percentage = Math.floor(((1 - (startTimeStamp - Date.now())) / (endTimeStamp - startTimeStamp)) * 100);
    // console.log(percentage);
    return percentage;
  }
  
  
  useEffect(() => {
    const timer = setTimeout(()=>{
      
      setPercentComplete(calculatePercentage());

      if(percentComplete >= 100)
      {
        setPercentComplete(100);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative z-50 w-full">
      {/* Foreground */}
      <div className="absolute h-12 bg-green-500 rounded-full z-30 transition-all ease-in-out duration-150" style={timerStyles}>
        Time Left
      </div>
      {/* Background */}
      <div className="absolute w-full h-12 bg-blue-500 rounded-full z-20"></div>
    </div>
  );
}

export default index;
