import { useEffect, useState } from "react";

type CountDownTimerProps = {
  initialSeconds: number;
};

// Initial seconds is passed as a prop
function CountdownTimer({ initialSeconds }: CountDownTimerProps) {
  // This tracks the number of seconds left, initial value is the initialSeconds prop.
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  // This effect runs whenever initialSeconds prop change
  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  // This effect sets up the countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // Since our state depends on the previous state we use updating function.
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, [initialSeconds]);

  return (
    <div className='bg-gray-800 rounded-lg p-8 shadow-xl'>
      <div className='text-8xl font-bold text-purple-400 tabular-nums'>
        {secondsLeft}
      </div>
      <div className='text-lg uppercase text-gray-400 mt-4 tracking-wider'>
        Seconds
      </div>
    </div>
  );
}

export default CountdownTimer;
