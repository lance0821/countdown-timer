import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  // This tracks the state of the input field.
  const [inputValue, setInputValue] = useState("60");

  // This is the actual state value for the countdown timer
  const [countdownSeconds, setCountdownSeconds] = useState(60);

  // I used state here to track a key to restart the timer if a new value or even if the same
  // value is entered into the input field.
  const [timerKey, setTimerKey] = useState(0);

  // This function is called when Start is clicked.
  function handleStart() {
    const seconds = parseInt(inputValue) || 0;

    // Calls the state updating function with the number of seconds.
    setCountdownSeconds(seconds);

    // Updates the key which will cause a new instance of component to be rendered.
    setTimerKey((prev) => prev + 1);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-white mb-4'>Countdown Timer</h1>
        <p className='text-gray-300 text-lg mb-8'>
          Enter seconds to count down
        </p>
        <div className='mb-12 flex gap-4 justify-center'>
          <input
            type='number'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className='px-4 py-2 bg-gray-800 text-white rounded-lg text-lg w-32 text-center'
            placeholder='Seconds'
            min='0'
          />
          <button
            onClick={handleStart}
            className='px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors'
          >
            Start
          </button>
        </div>
        <CountdownTimer key={timerKey} initialSeconds={countdownSeconds} />
      </div>
    </div>
  );
}

export default App;
