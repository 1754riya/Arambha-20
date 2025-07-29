import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-2 md:gap-4 justify-center items-center text-white">
      <div className="flex flex-col items-center bg-black/40 border border-golden-400/60 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px]">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          {timeLeft.days}
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider text-golden-300 mt-1">
          DAYS
        </div>
      </div>
      <div className="flex flex-col items-center bg-black/40 border border-golden-400/60 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px]">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          {timeLeft.hours}
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider text-golden-300 mt-1">
          HOURS
        </div>
      </div>
      <div className="flex flex-col items-center bg-black/40 border border-golden-400/60 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px]">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          {timeLeft.minutes}
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider text-golden-300 mt-1">
          MINUTES
        </div>
      </div>
      <div className="flex flex-col items-center bg-black/40 border border-golden-400/60 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px]">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          {timeLeft.seconds}
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider text-golden-300 mt-1">
          SECONDS
        </div>
      </div>
    </div>
  );
}
