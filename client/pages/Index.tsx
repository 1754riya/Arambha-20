import CountdownTimer from "@/components/CountdownTimer";
import { MapPin, Calendar } from "lucide-react";

export default function Index() {
  const eventDate = "2025-09-09T09:00:00";

  return (
    <div
      className="min-h-screen relative overflow-hidden mx-auto"
      style={{
        width: "1440px",
        height: "908px",
        maxWidth: "100vw",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F5746955424264108be8a3fee58eacc7d%2F174210776cad43aebf9581abdff29006?format=webp&width=800)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="absolute left-0 bottom-0 w-full h-[267px] bg-gradient-to-t from-black/90 to-transparent z-0"></div>

      {/* Left side badge */}
      <div className="absolute left-0 top-[262px] z-10">
        <svg
          width="57"
          height="398"
          viewBox="0 0 57 398"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        <div className="absolute left-[-120px] top-[180px] w-[313px] h-[47px] transform -rotate-90 text-black text-center font-inter text-[32px] font-bold leading-[47px]">
          Prize Pool: 1,35,000
        </div>
      </div>

      {/* Right side badge */}
      <div className="absolute right-0 top-[262px] z-10">
        <svg
          width="57"
          height="398"
          viewBox="0 0 57 398"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M57 0L0 26V373L57 398V0Z" fill="url(#paint0_radial_right)" />
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
        <div className="absolute left-[-140px] top-[180px] w-[342px] h-[47px] transform rotate-90 text-black text-center font-inter text-[28px] font-bold leading-[47px]">
          Inter School Competition
        </div>
      </div>

      {/* Top left logo */}
      <div className="absolute left-[12px] top-[11px] w-[241px] h-[111px]">
        <div className="absolute left-[9px] top-0 w-[232px] h-[107px] font-hind text-[70px] font-semibold leading-[107px] uppercase bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
          आरंभ
        </div>
        <div className="absolute left-0 top-[84px] w-[160px] h-[27px] text-white font-cardo text-[10px] font-bold leading-[27px]">
          (A Platform for rising Innovators)
        </div>
        <div className="absolute left-[190px] top-[-15px] w-[71px] h-[43px] text-white font-inter text-[25px] font-medium leading-[43px]">
          2K25
        </div>
      </div>

      {/* Top right logo */}
      <div className="absolute right-[15px] top-[19px] w-[131px] h-[131px]">
        <img
          className="w-[131px] h-[131px] rounded-full object-cover"
          src="https://cdn.builder.io/api/v1/image/assets%2F5746955424264108be8a3fee58eacc7d%2Fa1343e8c373344faacc4d6de3e7ff383?format=webp&width=800"
          alt="IPS Academy Logo"
        />
      </div>

      {/* Center title section */}
      <div className="absolute left-[595px] top-[40px] w-[249px] h-[161px]">
        <div className="absolute left-0 top-0 w-[249px] h-[49px] font-inter text-[40px] font-bold bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
          AARAMBHA
        </div>
        <div className="absolute left-[31px] top-[49px] w-[187px] h-[95px] text-white font-cairo text-[40px] font-semibold uppercase leading-none">
          BY IPS, IES
        </div>
      </div>

      {/* Quick links */}
      <div className="absolute left-[652px] top-[133px] text-white font-cardo text-[25px] font-bold">
        Quick links
      </div>

      {/* Navigation with decorative line */}
      <div className="absolute left-[234px] top-[177px]">
        <svg
          width="995"
          height="24"
          viewBox="0 0 995 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.452995 12L12 23.547L23.547 12L12 0.452995L0.452995 12ZM994.606 12L983.059 0.452995L971.512 12L983.059 23.547L994.606 12ZM12 12V14H983.059V12V10H12V12Z"
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

        {/* Navigation items */}
        <div className="absolute left-[26px] top-[6px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
          About Event
        </div>
        <div className="absolute left-[178px] top-[7px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
          What you'll get
        </div>
        <div className="absolute left-[361px] top-[7px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
          Eligibility & Program Fee
        </div>
        <div className="absolute left-[636px] top-[7px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
          Selection Process
        </div>
        <div className="absolute left-[848px] top-[6px] text-[20px] font-bold font-inter bg-gradient-to-r from-[#EDCD4B] via-[#D08625] to-[#EDCD4B] bg-clip-text text-transparent">
          Deadlines
        </div>
      </div>

      {/* Main subtitle */}
      <div className="absolute left-[290px] top-[330px] w-[860px] h-[94px] text-white text-center font-cardo text-[32px] font-bold leading-[47px]">
        EXPERIENCE HOW IT FEELS TO START-UP WHILE YOU ARE STILL IN SCHOOL.
      </div>

      {/* Main title text */}
      <div className="absolute left-[212px] top-[408px] w-[1016px] h-[134px] flex items-center justify-center">
        <div className="text-center font-cardo text-[64px] font-bold leading-[67px] bg-gradient-to-r from-[#D08625] via-[#EDCD4B] to-[#D08625] bg-clip-text text-transparent">
          YOUNG ENTREPRENEURS'
          <br />
          BOOTCAMP
        </div>
      </div>

      {/* Register button with decorative lines */}
      <div className="absolute left-[622px] top-[600px]">
        <div className="w-[196px] h-[50px] relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#805500] to-[#662200] shadow-[0_12px_24px_0_rgba(46,32,5,0.20)] backdrop-blur-[25px]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-cardo text-[24px] font-bold tracking-[1.2px]">
            Register Now
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute left-[-75px] top-[25px]">
          <svg
            width="56"
            height="4"
            viewBox="0 0 56 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.0089 0C56.0089 1.33333 56.0089 2.66667 56.0089 4C55.0754 3.96667 54.1419 3.93333 53.2085 3.9C36.4058 3.3 19.6031 2.7 2.80043 2.1C1.86694 2.06667 0.933467 2.03333 -1.52588e-05 2C0.933467 1.96667 1.86694 1.93333 2.80043 1.9C19.6031 1.3 36.4058 0.7 53.2085 0.1C54.1419 0.0666667 55.0754 0.0333333 56.0089 0Z"
              fill="#EDCD4B"
            />
          </svg>
        </div>
        <div className="absolute left-[203px] top-[25px]">
          <svg
            width="56"
            height="4"
            viewBox="0 0 56 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C0 1.33333 0 2.66667 0 4C0.933482 3.96667 1.86696 3.93333 2.80045 3.9C19.6031 3.3 36.4058 2.7 53.2085 2.1C54.142 2.06667 55.0754 2.03333 56.0089 2C55.0754 1.96667 54.142 1.93333 53.2085 1.9C36.4058 1.3 19.6031 0.7 2.80045 0.1C1.86696 0.0666667 0.933482 0.0333333 0 0Z"
              fill="#EDCD4B"
            />
          </svg>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="absolute left-[323px] top-[680px]">
        <CountdownTimer targetDate={eventDate} />
      </div>

      {/* Event Details */}
      <div className="absolute left-[142px] top-[810px] w-[1143px] h-[56px]">
        <div className="absolute left-0 top-0 w-[56px] h-[56px] flex justify-center items-center">
          <MapPin
            className="w-[56px] h-[56px] text-[#D08625]"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute left-[61px] top-[11px] w-[722px] h-[34px] text-white font-inter text-[24px] font-bold">
          IPS Academy, A.B Road, Rajendra Nagar, Indore (M.P)
        </div>
        <div className="absolute left-[819px] top-0 w-[56px] h-[56px] flex justify-center items-center">
          <Calendar
            className="w-[56px] h-[56px] text-[#D08625]"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute left-[888px] top-[11px] w-[255px] h-[34px] text-white font-inter text-[24px] font-bold">
          9th-11th Sep 2025
        </div>
      </div>
    </div>
  );
}
