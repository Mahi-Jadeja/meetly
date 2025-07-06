import { useUser } from "@clerk/clerk-react";
import { 
  ArrowRightIcon, 
  CommandIcon, 
  SparklesIcon, 
  TerminalIcon,
  ZapIcon,
  CalendarIcon,
  RocketIcon
} from "lucide-react";
import { useState, useEffect } from "react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Get motivational message based on time
  const getMessage = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Ready to crush some code today?";
    if (hour < 18) return "Let's build something amazing!";
    return "Late night coding session?";
  };

  // Format date
  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-bl from-[#8b4513]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className={`
          flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6
          transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          
          {/* Left Content */}
          <div className="space-y-4">
            {/* Date badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 backdrop-blur-sm">
              <CalendarIcon className="size-3.5 text-[#d4a574]" />
              <span className="font-mono text-xs text-[#a1a1aa]">{formatDate()}</span>
            </div>

            {/* Main greeting */}
            <div className="flex items-start gap-4">
              {/* User Avatar or Icon */}
              <div className="relative hidden sm:block">
                {user?.imageUrl ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] rounded-2xl blur-lg opacity-50" />
                    <img 
                      src={user.imageUrl} 
                      alt={user.firstName || "User"}
                      className="relative size-14 rounded-2xl ring-2 ring-[#8b4513]/30 object-cover"
                    />
                    {/* Online indicator */}
                    <span className="absolute -bottom-1 -right-1 size-4 bg-[#4ade80] rounded-full border-2 border-[#0a0a0f] flex items-center justify-center">
                      <span className="size-2 bg-[#4ade80] rounded-full animate-ping" />
                    </span>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] rounded-2xl blur-lg opacity-50" />
                    <div className="relative size-14 rounded-2xl bg-gradient-to-br from-[#8b4513] via-[#a0522d] to-[#d4a574] flex items-center justify-center">
                      <TerminalIcon className="size-7 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div>
                {/* Greeting text */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5f5f5]">
                  {getGreeting()},{" "}
                  <span className="bg-gradient-to-r from-[#d4a574] via-[#8b4513] to-[#d4a574] bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent">
                    {user?.firstName || "Developer"}
                  </span>
                  <span className="inline-block w-[3px] h-[0.8em] bg-[#d4a574] ml-2 animate-[blink_1s_infinite] align-middle" />
                </h1>

                {/* Subtitle with terminal style */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[#4ade80] font-mono text-sm">❯</span>
                  <p className="text-base sm:text-lg text-[#a1a1aa] font-mono">
                    {getMessage()}
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal command hint */}
            <div className="hidden sm:flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-[#050507]/50 border border-[#8b4513]/10 w-fit">
              <span className="text-[#71717a] font-mono text-xs">$</span>
              <span className="text-[#a1a1aa] font-mono text-xs">meetly create-session --mode=collaborative</span>
              <span className="text-[#d4a574] animate-pulse font-mono text-xs">_</span>
            </div>
          </div>

          {/* Right Content - Create Session Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Quick stats mini */}
            <div className="hidden xl:flex items-center gap-4 px-4 py-3 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
              <div className="text-center">
                <div className="font-mono text-lg font-bold text-[#d4a574]">
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-[10px] font-mono text-[#71717a] uppercase">Local Time</div>
              </div>
            </div>

            {/* Create Session Button */}
            <button
              onClick={onCreateSession}
              className="group relative px-6 sm:px-8 py-4 rounded-xl font-mono font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] via-[#a0522d] to-[#d4a574] opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] via-[#a0522d] to-[#d4a574] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center gap-3 text-white">
                <div className="relative">
                  <ZapIcon className="size-5" />
                  <SparklesIcon className="size-3 absolute -top-1 -right-1 text-[#fbbf24] animate-pulse" />
                </div>
                <span>Create Session</span>
                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#8b4513]/30 to-transparent" />
      </div>
    </div>
  );
}

export default WelcomeSection;