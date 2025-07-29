import CountdownTimer from '@/components/CountdownTimer';
import { MapPin, Calendar } from 'lucide-react';

export default function Index() {
  const eventDate = "2025-09-09T09:00:00";

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>
      <div className="absolute left-0 bottom-0 w-full h-[267px] bg-gradient-to-t from-black/83 to-transparent z-0"></div>
      
      {/* Left side badge */}
      <div className="absolute left-0 top-[262px] z-10">
        <svg width="57" height="398" viewBox="0 0 57 398" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L57 26V373L0 398V0Z" fill="url(#paint0_radial_left)"/>
          <defs>
            <radialGradient id="paint0_radial_left" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5 199) rotate(89.7042) scale(199 216.581)">
              <stop stopColor="#EDCD4B"/>
              <stop offset="0.75" stopColor="#D08625"/>
            </radialGradient>
          </defs>
        </svg>
        <div className="absolute left-[4px] top-[36px] w-[313px] h-[47px] transform -rotate-90 text-black text-center font-inter text-[32px] font-bold leading-[47px]">
          Price Pool: 1,35,000
        </div>
      </div>

      {/* Right side badge */}
      <div className="absolute right-0 top-[262px] z-10">
        <svg width="57" height="398" viewBox="0 0 57 398" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57 0L0 26V373L57 398V0Z" fill="url(#paint0_radial_right)"/>
          <defs>
            <radialGradient id="paint0_radial_right" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5 199) rotate(90.2958) scale(199 216.581)">
              <stop stopColor="#EDCD4B"/>
              <stop offset="0.75" stopColor="#D08625"/>
            </radialGradient>
          </defs>
        </svg>
        <div className="absolute left-[8px] top-[29px] w-[342px] h-[47px] transform rotate-90 text-black text-center font-inter text-[28px] font-bold leading-[47px]">
          Inter School Competition
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 p-3">
        <div className="max-w-[1440px] mx-auto flex justify-between items-start pt-[11px] px-[12px]">
          {/* Logo */}
          <div className="w-[241px] h-[111px] relative">
            <div className="absolute left-[9px] top-0 w-[232px] h-[107px] font-hind text-[70px] font-semibold leading-[142.169px] uppercase bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
              आरंभ
            </div>
            <div className="absolute left-0 top-[84px] w-[160px] h-[27px] text-white font-cardo text-[10px] font-bold leading-[142.169px]">
              (A Platform for rising Innovators)
            </div>
            <div className="absolute left-[118px] top-[8px] w-[71px] h-[43px] text-white font-inter text-[25px] font-medium leading-[142.169px]">
              2K25
            </div>
          </div>

          {/* Center - AARAMBHA title and navigation */}
          <div className="flex flex-col items-center">
            <div className="w-[249px] h-[161px] relative mb-[6px]">
              <div className="absolute left-0 top-0 w-[249px] h-[49px] font-inter text-[40px] font-bold bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
                AARAMBHA
              </div>
              <div className="absolute left-[30px] top-[66px] w-[187px] h-[95px] text-white font-cairo text-[40px] font-semibold uppercase">
                BY IPS, IES
              </div>
            </div>
            
            <div className="text-white font-cardo text-[25px] font-bold mb-[10px]">
              Quick links
            </div>

            {/* Navigation with decorative line */}
            <div className="relative">
              <svg width="995" height="24" viewBox="0 0 995 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.452995 12L12 23.547L23.547 12L12 0.452995L0.452995 12ZM994.606 12L983.059 0.452995L971.512 12L983.059 23.547L994.606 12ZM12 12V14H983.059V12V10H12V12Z" fill="url(#paint0_radial_nav)"/>
                <defs>
                  <radialGradient id="paint0_radial_nav" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(497.53 12.5) scale(485.53 0.5)">
                    <stop stopColor="#D08625"/>
                    <stop offset="1" stopColor="#EDCD4B"/>
                  </radialGradient>
                </defs>
              </svg>
              
              {/* Navigation items */}
              <div className="absolute inset-0 flex justify-between items-center px-[26px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
                <a href="#about" className="whitespace-nowrap">About Event</a>
                <a href="#benefits" className="whitespace-nowrap">What you'll get</a>
                <a href="#eligibility" className="whitespace-nowrap">Eligibility & Program Fee</a>
                <a href="#selection" className="whitespace-nowrap">Selection Process</a>
                <a href="#deadlines" className="whitespace-nowrap">Deadlines</a>
              </div>
            </div>
          </div>

          {/* Right logo */}
          <div className="w-[131px] h-[131px] relative">
            <img 
              className="w-[131px] h-[131px] rounded-full object-cover" 
              src="https://cdn.builder.io/api/v1/image/assets%2F5746955424264108be8a3fee58eacc7d%2F851df7c37a584fafbeba8cc1bdae1e35?format=webp&width=800" 
              alt="IPS Academy Logo" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Main subtitle */}
          <div className="mt-[70px] mb-[11px] text-white text-center font-cardo text-[32px] font-bold leading-[47px] max-w-[861px] mx-auto">
            EXPERIENCE HOW IT FEELS TO START-UP WHILE YOU ARE STILL IN SCHOOL.
          </div>

          {/* Main title image/text */}
          <div className="mb-[18px]">
            <img 
              src="https://cdn.builder.io/o/assets%2F5746955424264108be8a3fee58eacc7d%2F7cdf31417bd14ce8ab2bed209df58931?alt=media&token=323366d2-7eed-4745-b69c-43bda763f527&apiKey=5746955424264108be8a3fee58eacc7d" 
              alt="YOUNG ENTREPRENEURS' BOOTCAMP" 
              className="mx-auto max-w-[1016px] w-full h-auto"
            />
          </div>

          {/* Register button with decorative lines */}
          <div className="mb-[23px] flex flex-col items-center">
            <div className="w-[196px] h-[50px] relative mb-[25px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#805500] to-[#662200] shadow-[0_12px_24px_0_rgba(46,32,5,0.20)] backdrop-blur-[25px]"></div>
              <div className="absolute left-[19px] top-[9px] w-[163px] h-[32px] flex items-center justify-center text-white font-cardo text-[24px] font-bold tracking-[1.2px]">
                Register Now
              </div>
            </div>
            
            {/* Decorative lines */}
            <div className="flex items-center gap-0">
              <svg width="56" height="4" viewBox="0 0 56 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.0089 0C56.0089 1.33333 56.0089 2.66667 56.0089 4C55.0754 3.96667 54.1419 3.93333 53.2085 3.9C36.4058 3.3 19.6031 2.7 2.80043 2.1C1.86694 2.06667 0.933467 2.03333 -1.52588e-05 2C0.933467 1.96667 1.86694 1.93333 2.80043 1.9C19.6031 1.3 36.4058 0.7 53.2085 0.1C54.1419 0.0666667 55.0754 0.0333333 56.0089 0Z" fill="#EDCD4B"/>
              </svg>
              <svg width="56" height="4" viewBox="0 0 56 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C0 1.33333 0 2.66667 0 4C0.933482 3.96667 1.86696 3.93333 2.80045 3.9C19.6031 3.3 36.4058 2.7 53.2085 2.1C54.142 2.06667 55.0754 2.03333 56.0089 2C55.0754 1.96667 54.142 1.93333 53.2085 1.9C36.4058 1.3 19.6031 0.7 2.80045 0.1C1.86696 0.0666667 0.933482 0.0333333 0 0Z" fill="#EDCD4B"/>
              </svg>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-[14px] flex justify-center">
            <CountdownTimer targetDate={eventDate} />
          </div>

          {/* Event Details */}
          <div className="flex justify-center items-center gap-[61px] text-white">
            <div className="flex items-center gap-[5px]">
              <MapPin className="w-[56px] h-[56px] text-[#D08625]" strokeWidth={1.5} />
              <span className="font-inter text-[28px] font-bold">
                IPS Academy, A.B Road, Rajendra Nagar, Indore (M.P)
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <Calendar className="w-[56px] h-[56px] text-[#D08625]" strokeWidth={1.5} />
              <span className="font-inter text-[28px] font-bold">
                9th-11th Sep 2025
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
