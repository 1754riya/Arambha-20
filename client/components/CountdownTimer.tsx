import { useState, useEffect } from "react";

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
    days: 100,
    hours: 10,
    minutes: 46,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-[440px] mx-auto relative">
      {/* Timer container with backdrop blur */}
      <div className="rounded-lg border border-white/50 bg-black/10 shadow-[0_12px_20px_0_rgba(0,0,0,0.20)] backdrop-blur-[25px] p-3 lg:p-4">

        {/* Timer Display - Flexbox layout for responsiveness */}
        <div className="flex justify-between items-center gap-2 lg:gap-4">

          {/* Days */}
          <div className="flex flex-col items-center flex-1">
            <div className="text-white text-center font-cardo text-4xl lg:text-6xl font-bold leading-tight">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-white/70 text-center font-inter text-sm lg:text-lg font-bold mt-1">
              DAYS
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-16 lg:h-20 bg-white/30"></div>

          {/* Hours */}
          <div className="flex flex-col items-center flex-1">
            <div className="text-white text-center font-cardo text-4xl lg:text-6xl font-bold leading-tight">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-white/80 text-center font-inter text-sm lg:text-lg font-bold mt-1">
              HOURS
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-16 lg:h-20 bg-white/30"></div>

          {/* Minutes */}
          <div className="flex flex-col items-center flex-1">
            <div className="text-white text-center font-cardo text-4xl lg:text-6xl font-bold leading-tight">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-white/80 text-center font-inter text-sm lg:text-lg font-bold mt-1">
              MINUTES
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-16 lg:h-20 bg-white/30"></div>

          {/* Seconds */}
          <div className="flex flex-col items-center flex-1">
            <div className="text-white text-center font-cardo text-4xl lg:text-6xl font-bold leading-tight">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-white/80 text-center font-inter text-sm lg:text-lg font-bold mt-1">
              SECONDS
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
