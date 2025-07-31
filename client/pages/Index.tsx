import CountdownTimer from "@/components/CountdownTimer";
import { MapPin, Calendar } from "lucide-react";

export default function Index() {
  const eventDate = "2025-09-09T09:00:00";

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F5746955424264108be8a3fee58eacc7d%2F174210776cad43aebf9581abdff29006?format=webp&width=800)",
        }}
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/85 z-0" />
      <div className="absolute left-0 bottom-0 w-full h-64 bg-gradient-to-t from-black/90 to-transparent z-0" />

      {/* Container for all content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Header Section - Compact */}
        <header className="flex justify-between items-center p-3 lg:px-16 lg:py-3 mb-3 max-w-[1400px] mx-auto w-full">
          {/* Left Logo */}
          <div className="relative">
            <div className="absolute -top-4 right-8 text-white font-inter text-sm lg:text-lg font-medium">
              2K25
            </div>
            <div className="text-3xl lg:text-[45px] font-hind font-semibold uppercase bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent leading-tight">
              आरंभ
            </div>
            <div className="text-white font-cardo text-xs font-bold mt-1">
              (Platform for Innovators)
            </div>
          </div>

          {/* Center Title */}
          <div className="text-center flex-1 mx-6">
            <div className="text-2xl lg:text-[28px] font-inter font-bold bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
              AARAMBHA
            </div>
            <div className="text-white font-cairo text-lg lg:text-[24px] font-semibold uppercase mt-1">
              BY IPS, IES
            </div>
          </div>

          {/* Right Logo */}
          <div className="w-16 h-16 lg:w-20 lg:h-20">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://cdn.builder.io/api/v1/image/assets%2F5746955424264108be8a3fee58eacc7d%2Fa1343e8c373344faacc4d6de3e7ff383?format=webp&width=800"
              alt="IPS Academy Logo"
            />
          </div>
        </header>

        {/* Navigation Section - Compact */}
        <nav className="relative mb-4 px-3 max-w-[1400px] mx-auto w-full">
          {/* Navigation Line */}
          <div className="relative flex justify-center mb-2">
            <svg
              width="600"
              height="16"
              viewBox="0 0 995 24"
              fill="none"
              className="max-w-full scale-75"
            >
              <path
                d="M0.452994 12L12 23.547L23.547 12L12 0.452994L0.452994 12ZM994.606 12L983.059 0.452994L971.512 12L983.059 23.547L994.606 12ZM12 12V14H983.059V12V10H12V12Z"
                fill="url(#paint0_radial_nav)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_nav"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(497.53 12.5) scale(485.53 0.5)"
                >
                  <stop stopColor="#D08625" />
                  <stop offset="1" stopColor="#EDCD4B" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Navigation Items positioned below the line */}
          <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-8 px-2 lg:px-4 text-xs lg:text-sm">
            <div className="font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent whitespace-nowrap">
              About Event
            </div>
            <div className="font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent whitespace-nowrap">
              What you'll get
            </div>
            <div className="font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent whitespace-nowrap">
              Program Fee
            </div>
            <div className="font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent whitespace-nowrap">
              Selection
            </div>
            <div className="font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent whitespace-nowrap">
              Deadlines
            </div>
          </div>
        </nav>

        {/* Main Content - Centered and Compact */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 lg:px-16 py-4 max-w-[1400px] mx-auto w-full">
          {/* Subtitle */}
          <div className="text-white font-cardo text-base lg:text-lg font-bold leading-tight mb-4 max-w-2xl">
            EXPERIENCE HOW IT FEELS TO START-UP WHILE YOU ARE STILL IN SCHOOL.
          </div>

          {/* Main Title */}
          <div className="text-2xl lg:text-[32px] font-cardo font-bold leading-tight bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent mb-4">
            YOUNG ENTREPRENEURS'
            <br />
            BOOTCAMP
          </div>

          {/* Register Button */}
          <div className="relative mb-8">
            <button className="px-6 py-2 lg:px-8 lg:py-3 rounded-lg bg-gradient-to-r from-[#805500] to-[#662200] shadow-[0_12px_24px_0_rgba(46,32,5,0.20)] backdrop-blur-[25px] text-white font-cardo text-base lg:text-lg font-bold tracking-wider">
              Register Now
            </button>

            {/* Decorative lines - smaller */}
            <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 hidden lg:block">
              <svg width="40" height="3" viewBox="0 0 56 4" fill="none">
                <path
                  d="M56.0089 0C56.0089 1.33333 56.0089 2.66667 56.0089 4C55.0754 3.96667 54.1419 3.93333 53.2085 3.9C36.4058 3.3 19.6031 2.7 2.80043 2.1C1.86694 2.06667 0.933467 2.03333 -1.52588e-05 2C0.933467 1.96667 1.86694 1.93333 2.80043 1.9C19.6031 1.3 36.4058 0.7 53.2085 0.1C54.1419 0.0666667 55.0754 0.0333333 56.0089 0Z"
                  fill="#EDCD4B"
                />
              </svg>
            </div>
            <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 hidden lg:block">
              <svg width="40" height="3" viewBox="0 0 56 4" fill="none">
                <path
                  d="M0 0C0 1.33333 0 2.66667 0 4C0.933482 3.96667 1.86696 3.93333 2.80045 3.9C19.6031 3.3 36.4058 2.7 53.2085 2.1C54.142 2.06667 55.0754 2.03333 56.0089 2C55.0754 1.96667 54.142 1.93333 53.2085 1.9C36.4058 1.3 19.6031 0.7 2.80045 0.1C1.86696 0.0666667 0.933482 0.0333333 0 0Z"
                  fill="#EDCD4B"
                />
              </svg>
            </div>
          </div>

          {/* Countdown Timer - Centered */}
          <div className="w-full flex justify-center mb-6">
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>

        {/* Footer - Event Details - Compact */}
        <footer className="mt-auto pb-3 lg:pb-4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 px-4 max-w-[1400px] mx-auto w-full">
            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin
                className="w-6 h-6 lg:w-8 lg:h-8 text-[#D08625] flex-shrink-0"
                strokeWidth={1.5}
              />
              <div className="text-white font-inter text-sm lg:text-lg font-bold">
                IPS Academy, A.B Road, Rajendra Nagar, Indore (M.P)
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3">
              <Calendar
                className="w-6 h-6 lg:w-8 lg:h-8 text-[#D08625] flex-shrink-0"
                strokeWidth={1.5}
              />
              <div className="text-white font-inter text-sm lg:text-lg font-bold">
                9th-11th Sep 2025
              </div>
            </div>
          </div>
        </footer>

        {/* Side Badges - Touch Screen Edges */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
          <svg width="45" height="320" viewBox="0 0 57 398" fill="none">
            <path d="M0 0L57 26V373L0 398V0Z" fill="url(#paint0_radial_left)" />
            <defs>
              <radialGradient
                id="paint0_radial_left"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(28.5 199) rotate(89.7042) scale(199 216.581)"
              >
                <stop stopColor="#EDCD4B" />
                <stop offset="0.75" stopColor="#D08625" />
              </radialGradient>
            </defs>
          </svg>
          <div className="absolute left-[-100px] top-[140px] w-[240px] h-[40px] transform -rotate-90 text-black text-center font-inter text-base font-bold leading-[40px]">
            Prize Pool: ₹1,35,000
          </div>
        </div>

        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
          <svg width="45" height="320" viewBox="0 0 57 398" fill="none">
            <path
              d="M57 0L0 26V373L57 398V0Z"
              fill="url(#paint0_radial_right)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_right"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(28.5 199) rotate(90.2958) scale(199 216.581)"
              >
                <stop stopColor="#EDCD4B" />
                <stop offset="0.75" stopColor="#D08625" />
              </radialGradient>
            </defs>
          </svg>
          <div className="absolute left-[-120px] top-[140px] w-[260px] h-[40px] transform rotate-90 text-black text-center font-inter text-base font-bold leading-[40px]">
            Inter School Competition
          </div>
        </div>
      </div>
    </div>
  );
}
