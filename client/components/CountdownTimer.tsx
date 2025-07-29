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

  return (
    <div className="w-[794px] h-[191px] relative">
      {/* Timer container with backdrop blur */}
      <div className="absolute inset-0 rounded-lg border border-white/50 bg-black/10 shadow-[0_24px_34px_0_rgba(0,0,0,0.20)] backdrop-blur-[25px]"></div>
      
      {/* Top separator lines */}
      <div className="absolute left-[193px] top-[11px] w-[170px] h-0 bg-white"></div>
      <div className="absolute left-[393px] top-[11px] w-[170px] h-0 bg-white"></div>
      <div className="absolute left-[594px] top-[11px] w-[170px] h-0 bg-white"></div>
      
      {/* Timer numbers */}
      <div className="absolute left-[25px] top-[50px] w-[148px] h-[67px] text-white text-center font-cardo text-[96px] font-bold leading-[67px]">
        {timeLeft.days}
      </div>
      <div className="absolute left-[244px] top-[50px] w-[99px] h-[67px] text-white text-center font-cardo text-[96px] font-bold leading-[67px]">
        {timeLeft.hours}
      </div>
      <div className="absolute left-[445px] top-[50px] w-[99px] h-[67px] text-white text-center font-cardo text-[96px] font-bold leading-[67px]">
        {timeLeft.minutes}
      </div>
      <div className="absolute left-[646px] top-[50px] w-[99px] h-[67px] text-white text-center font-cardo text-[96px] font-bold leading-[67px]">
        {timeLeft.seconds}
      </div>
      
      {/* Timer labels */}
      <div className="absolute left-[68px] top-[114px] w-[66px] h-[67px] text-white/70 text-center font-inter text-[24px] font-bold leading-[67px]">
        DAYS
      </div>
      <div className="absolute left-[262px] top-[114px] w-[86px] h-[67px] text-white/80 text-center font-inter text-[24px] font-bold leading-[67px]">
        HOURS
      </div>
      <div className="absolute left-[440px] top-[114px] w-[111px] h-[67px] text-white/80 text-center font-inter text-[24px] font-bold leading-[67px]">
        MINUTES
      </div>
      <div className="absolute left-[637px] top-[114px] w-[119px] h-[67px] text-white/80 text-center font-inter text-[24px] font-bold leading-[67px]">
        SECONDS
      </div>
    </div>
  );
}
