import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    if (currentSeconds <= 0) return;
    const timeout = setTimeout(() => {
      setCurrentSeconds((currentSeconds) => currentSeconds - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentSeconds]);

  const handleChange = (e) => {
    setValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  return (
    <div className='App'>
      <input
        onChange={handleChange}
        value={value}
        placeholder='Seconds'
        type='text'
      />

      <button onClick={() => setCurrentSeconds(Number(value))}>Start</button>

      <br />
      <br />

      <span>
        {Math.floor((currentSeconds / 60 / 60) % 60)}:{' '}
        {Math.floor((currentSeconds / 60) % 60)} :{' '}
        {Math.floor(currentSeconds % 60)}
      </span>
      <br />

      <span>hh:mm:ss</span>
    </div>
  );
}

export default App;
