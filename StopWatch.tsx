import React, { useState, useRef } from 'react';

const App: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (running && timerRef.current) {
      clearInterval(timerRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setRunning(false);
    setTime(0);
  };

  const formatTime = (ms: number): string => {
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
