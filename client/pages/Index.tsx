import CountdownTimer from '@/components/CountdownTimer';
import { MapPin, Calendar } from 'lucide-react';

export default function Index() {
  const eventDate = "2025-09-09T09:00:00";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden-900/20 via-transparent to-golden-800/20"></div>
      <div className="absolute top-0 left-0 w-32 h-screen bg-gradient-to-b from-golden-500/30 to-transparent transform -skew-x-12 -translate-x-4"></div>
      <div className="absolute top-0 right-0 w-32 h-screen bg-gradient-to-b from-golden-500/30 to-transparent transform skew-x-12 translate-x-4"></div>
      
      {/* Side badges */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 bg-golden-500 text-black px-8 py-2 font-bold text-sm tracking-wider">
        Prize Pool: 1,35,000
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 bg-golden-500 text-black px-8 py-2 font-bold text-sm tracking-wider">
        Inter School Competition
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="text-golden-400 font-bold text-xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl">आरंभ</span>
                <div className="text-xs">
                  <div>2K25</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-golden-300 text-sm font-medium">
            <a href="#about" className="hover:text-golden-200 transition-colors">About Event</a>
            <a href="#benefits" className="hover:text-golden-200 transition-colors">What you'll get</a>
            <a href="#eligibility" className="hover:text-golden-200 transition-colors">Eligibility & Program Fee</a>
            <a href="#selection" className="hover:text-golden-200 transition-colors">Selection Process</a>
            <a href="#deadlines" className="hover:text-golden-200 transition-colors">Deadlines</a>
          </nav>

          {/* Right side - Badge */}
          <div className="hidden md:block">
            <div className="w-16 h-16 rounded-full border-2 border-golden-400 flex items-center justify-center">
              <div className="text-golden-400 text-xs font-bold text-center leading-3">
                IPS<br/>ACADEMY
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <div className="text-golden-400 text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
              AARAMBHA
            </div>
            <div className="text-white text-lg md:text-xl mb-6">
              BY IPS, IES
            </div>
            <div className="text-white text-sm md:text-base mb-8">
              Quick links
            </div>
          </div>

          {/* Subtitle */}
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-light mb-4 max-w-3xl mx-auto leading-relaxed">
            EXPERIENCE HOW IT FEELS TO START-UP WHILE<br />
            YOU ARE STILL IN SCHOOL.
          </h1>

          {/* Main title */}
          <h2 className="text-golden-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-wide">
            YOUNG ENTREPRENEURS'<br />
            BOOTCAMP
          </h2>

          {/* Register button */}
          <button className="bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-600 hover:to-golden-700 text-black font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-12 shadow-xl shadow-golden-500/25">
            Register Now
          </button>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer targetDate={eventDate} />
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-golden-400" />
              <span>IPS Academy, A.B Road, Rajendra Nagar, Indore (M.P)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-golden-400" />
              <span>9th-11th Sep 2025</span>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-full px-6 py-3">
        <nav className="flex items-center space-x-6 text-golden-300 text-xs">
          <a href="#about" className="hover:text-golden-200">About</a>
          <a href="#benefits" className="hover:text-golden-200">Benefits</a>
          <a href="#eligibility" className="hover:text-golden-200">Fee</a>
          <a href="#selection" className="hover:text-golden-200">Process</a>
        </nav>
      </div>
    </div>
  );
}
