import React, { useState } from 'react';

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
  const [interval, setIntervalRef] = useState(null);
	const [isRunning, setIsRunning] = useState(false);

	const generateInterval = () => {
		const runner = setInterval(() => {
					setSeconds(time => time + 1);
		}, 1000);
		setIntervalRef(runner);
	}

	const handleStart = () => {
		if(!isRunning){
			setIsRunning(true);
			generateInterval();
		}
	}

	const handlePause = () => {
		if(isRunning){
			setIsRunning(false);
      clearInterval(interval);
		}
	}

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(interval);
  }

	return (
		<div>
      <h1>Timer</h1>
      <h2>{seconds} seconds</h2>
      <button onClick={handleStart}>Start</button> 
      <button disabled={!isRunning} onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>  
    </div>
	)
} 

export default Timer;