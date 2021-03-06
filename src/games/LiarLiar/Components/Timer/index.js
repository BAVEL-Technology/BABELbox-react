import React, { useState, useEffect } from 'react';

const index = (props) => {
  const [percentComplete, setPercentComplete] = useState(100);
  const [timeLeft, setTimeLeft] = useState(30);

  const startTimeStamp = props.startTimeStamp;
  const endTimeStamp = startTimeStamp + 30000;

  const timerStyles = {
    width: percentComplete + '%',
    bottom: '-50%'
  }

  console.log(timerStyles);

  // console.log(`
  // Time Difference: ${((1 - (startTimeStamp - Date.now())) / (endTimeStamp - startTimeStamp)) * 100}
  // `);

  const calculatePercentage = () => {
    const percentage = 100 - Math.floor(((1 - (startTimeStamp - Date.now())) / (endTimeStamp - startTimeStamp)) * 100);
    // console.log(percentage);
    return percentage;
  }

  const calculateTimeLeft = () => {
    return(1 - Math.floor(((1 - (startTimeStamp - Date.now())) - (endTimeStamp - startTimeStamp)) / 1000));
  }
  
  
  useEffect(() => {
    const timer = setTimeout(()=>{
      
      setPercentComplete(calculatePercentage());
      setTimeLeft(calculateTimeLeft());

      if(percentComplete <= 0)
      {
        setPercentComplete(100);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative z-50 w-full">
      
      <div className='absolute w-full text-center z-50'>
        Time Left: {timeLeft}
      </div>
      {/* Background */}
      <div className="absolute w-full h-8 border-2 border-babelBlue-500 rounded-xl"
      style={{
        overflow: 'hidden'
      }}>
        {/* Foreground */}
        <div className="absolute h-12 bg-babelYellow-500 transition-all ease-in-out duration-500" style={timerStyles}>
        </div>
      </div>
      
    </div>
  );
}

export default index;
