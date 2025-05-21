import React, { useState, useRef } from 'react';

const App = () => {
  const [time, setTime] = useState(0);       // Time in milliseconds
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 10); // increase by 10ms
      }, 10);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(timerRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = (ms % 1000) / 10;
    return `${String(seconds).padStart(2, '0')}.${String(Math.floor(milliseconds)).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
