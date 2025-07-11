import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CodeIcon,
  CommandIcon,
  GlobeIcon,
  MonitorIcon,
  PlayIcon,
  SparklesIcon,
  TerminalIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  BracesIcon,
  GitBranchIcon,
  ServerIcon,
  ShieldCheckIcon,
  MessageSquareIcon,
  ClockIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

// Typing animation hook
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Floating code snippet component
const FloatingCode = ({ children, className, delay = 0 }) => (
  <div 
    className={`absolute font-mono text-xs sm:text-sm px-3 py-2 rounded-lg bg-[#0a0a0f]/80 border border-[#8b4513]/20 text-[#a1a1aa] backdrop-blur-sm animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

function HomePage() {
  const typingTexts = [
    "Code Together",
    "Interview Smarter", 
    "Build Faster",
    "Learn Together"
  ];
  const typedText = useTypingEffect(typingTexts);

  const features = [
    {
      icon: VideoIcon,
      title: "HD Video Calls",
      description: "Crystal clear video & audio powered by Stream for seamless face-to-face interviews.",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: CodeIcon,
      title: "Live Code Editor",
      description: "Monaco-powered editor with syntax highlighting, auto-complete, and 40+ language support.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "hover:border-blue-500/30",
    },
    {
      icon: TerminalIcon,
      title: "Code Execution",
      description: "Run code instantly with our secure sandbox. Test solutions in real-time during interviews.",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "hover:border-green-500/30",
    },
    {
      icon: UsersIcon,
      title: "Real-time Sync",
      description: "See changes as they happen. Both participants code together with zero latency.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "hover:border-purple-500/30",
    },
    {
      icon: BracesIcon,
      title: "Curated Problems",
      description: "Hand-picked coding challenges from easy to hard. Perfect for interview prep.",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "hover:border-yellow-500/30",
    },
    {
      icon: MessageSquareIcon,
      title: "Integrated Chat",
      description: "Built-in messaging for quick communication without leaving the coding environment.",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "hover:border-indigo-500/30",
    },
  ];

  const stats = [
    { value: 10000, suffix: "+", label: "Active Users", icon: UsersIcon },
    { value: 50000, suffix: "+", label: "Sessions Completed", icon: MonitorIcon },
    { value: 99.9, suffix: "%", label: "Uptime", icon: ServerIcon },
    { value: 40, suffix: "+", label: "Languages", icon: CodeIcon },
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "Stream", "Monaco", "Clerk"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════════
          BACKGROUND EFFECTS
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8b4513]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b4513]/5 rounded-full blur-[150px]" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          NAVBAR
         ══════════════════════════════════════════════════════════════════════ */}
      <nav className="relative z-50 border-b border-[#8b4513]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative size-11 rounded-xl bg-gradient-to-br from-[#8b4513] via-[#a0522d] to-[#d4a574] flex items-center justify-center">
                  <TerminalIcon className="size-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-mono font-bold text-2xl bg-gradient-to-r from-[#d4a574] via-[#8b4513] to-[#d4a574] bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent">
                    Meetly
                  </span>
                  <span className="w-[3px] h-6 bg-[#d4a574] ml-1 animate-[blink_1s_infinite]" />
                </div>
                <span className="text-xs text-[#71717a] font-mono">{"<code_together />"}</span>
              </div>
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="font-mono text-sm text-[#a1a1aa] hover:text-[#d4a574] transition-colors">
                Features
              </a>
              <a href="#stats" className="font-mono text-sm text-[#a1a1aa] hover:text-[#d4a574] transition-colors">
                Stats
              </a>
              <a href="#tech" className="font-mono text-sm text-[#a1a1aa] hover:text-[#d4a574] transition-colors">
                Tech Stack
              </a>
            </div>

            {/* CTA Button */}
            <SignInButton mode="modal">
              <button className="group relative px-6 py-3 rounded-xl font-mono font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105">
                {/* Button glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                {/* Button content */}
                <span className="relative flex items-center gap-2 text-white">
                  Get Started
                  <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b4513]/10 border border-[#8b4513]/20 animate-[fade-in_0.5s_ease-out]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
                </span>
                <span className="font-mono text-sm text-[#d4a574]">Real-time Collaboration Platform</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4 animate-[slide-up_0.6s_ease-out]">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-[#f5f5f5]">Where Developers</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#d4a574] via-[#8b4513] to-[#d4a574] bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent">
                    {typedText}
                  </span>
                  <span className="inline-block w-[4px] h-[0.9em] bg-[#d4a574] ml-1 animate-[blink_1s_infinite] align-middle" />
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-xl mx-auto lg:mx-0 animate-[slide-up_0.7s_ease-out]">
                The ultimate platform for{" "}
                <span className="text-[#d4a574]">collaborative coding interviews</span> and{" "}
                <span className="text-[#d4a574]">pair programming</span>. 
                Connect face-to-face, code in real-time, and ace your technical interviews.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-[slide-up_0.8s_ease-out]">
                {["Live Video Chat", "Code Execution", "40+ Languages", "Real-time Sync"].map((feature, i) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#16161e] border border-[#8b4513]/20 text-sm font-mono"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircleIcon className="size-4 text-[#4ade80]" />
                    <span className="text-[#a1a1aa]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[slide-up_0.9s_ease-out]">
                <SignInButton mode="modal">
                  <button className="group relative px-8 py-4 rounded-xl font-mono font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(139,69,19,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] via-[#a0522d] to-[#d4a574]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] via-[#a0522d] to-[#d4a574] blur-xl opacity-50" />
                    <span className="relative flex items-center justify-center gap-2 text-white">
                      <CommandIcon className="size-5" />
                      Start Coding Now
                      <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </SignInButton>

                <button className="group px-8 py-4 rounded-xl font-mono font-semibold text-base bg-transparent border border-[#8b4513]/30 text-[#f5f5f5] hover:bg-[#8b4513]/10 hover:border-[#8b4513]/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="size-5 text-[#d4a574]" />
                  Watch Demo
                </button>
              </div>

              {/* Terminal command hint */}
              <div className="hidden sm:flex items-center justify-center lg:justify-start gap-3 text-[#71717a] font-mono text-sm animate-[fade-in_1s_ease-out]">
                <span className="text-[#4ade80]">$</span>
                <span>npx create-meetly-session</span>
                <span className="text-[#d4a574] animate-pulse">_</span>
              </div>
            </div>

            {/* Right Content - Terminal/Code Preview */}
            <div className="relative animate-[slide-up_0.8s_ease-out] hidden lg:block">
              {/* Floating code snippets */}
              <FloatingCode className="top-0 -left-8 z-20" delay={0}>
                <span className="text-[#a78bfa]">const</span>{" "}
                <span className="text-[#60a5fa]">interview</span>{" "}
                <span className="text-[#f5f5f5]">=</span>{" "}
                <span className="text-[#4ade80]">"success"</span>
              </FloatingCode>
              
              <FloatingCode className="-top-4 -right-4 z-20" delay={1}>
                <span className="text-[#fbbf24]">{"// Live coding"}</span>
              </FloatingCode>
              
              <FloatingCode className="bottom-20 -left-12 z-20" delay={2}>
                <span className="text-[#f87171]">function</span>{" "}
                <span className="text-[#60a5fa]">solve</span>
                <span className="text-[#f5f5f5]">()</span>{" "}
                <span className="text-[#f5f5f5]">{"{ }"}</span>
              </FloatingCode>
              
              <FloatingCode className="bottom-4 -right-8 z-20" delay={1.5}>
                <span className="text-[#4ade80]">✓</span>{" "}
                <span>All tests passed</span>
              </FloatingCode>

              {/* Main Terminal Window */}
              <div className="relative">
                {/* Glow effect behind terminal */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513]/20 to-[#d4a574]/20 rounded-2xl blur-2xl" />
                
                <div className="relative bg-[#050507] rounded-2xl border border-[#8b4513]/30 overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.5)]" />
                      <div className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
                      <div className="size-3 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.5)]" />
                    </div>
                    <span className="font-mono text-xs text-[#71717a] ml-2">meetly-session.js</span>
                    <div className="flex-1" />
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#4ade80] animate-pulse" />
                      <span className="font-mono text-xs text-[#4ade80]">LIVE</span>
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-sm space-y-3 min-h-[350px]">
                    {/* Line 1 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">1</span>
                      <span>
                        <span className="text-[#a78bfa]">import</span>{" "}
                        <span className="text-[#f5f5f5]">{"{"}</span>{" "}
                        <span className="text-[#60a5fa]">Meetly</span>{" "}
                        <span className="text-[#f5f5f5]">{"}"}</span>{" "}
                        <span className="text-[#a78bfa]">from</span>{" "}
                        <span className="text-[#4ade80]">'@meetly/core'</span>
                      </span>
                    </div>
                    
                    {/* Line 2 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">2</span>
                      <span className="text-[#71717a]"></span>
                    </div>
                    
                    {/* Line 3 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">3</span>
                      <span>
                        <span className="text-[#a78bfa]">const</span>{" "}
                        <span className="text-[#60a5fa]">session</span>{" "}
                        <span className="text-[#f5f5f5]">=</span>{" "}
                        <span className="text-[#a78bfa]">await</span>{" "}
                        <span className="text-[#fbbf24]">Meetly</span>
                        <span className="text-[#f5f5f5]">.</span>
                        <span className="text-[#60a5fa]">createSession</span>
                        <span className="text-[#f5f5f5]">({"{"}</span>
                      </span>
                    </div>
                    
                    {/* Line 4 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">4</span>
                      <span className="pl-6">
                        <span className="text-[#60a5fa]">video</span>
                        <span className="text-[#f5f5f5]">:</span>{" "}
                        <span className="text-[#fbbf24]">true</span>
                        <span className="text-[#f5f5f5]">,</span>
                      </span>
                    </div>
                    
                    {/* Line 5 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">5</span>
                      <span className="pl-6">
                        <span className="text-[#60a5fa]">codeEditor</span>
                        <span className="text-[#f5f5f5]">:</span>{" "}
                        <span className="text-[#fbbf24]">true</span>
                        <span className="text-[#f5f5f5]">,</span>
                      </span>
                    </div>
                    
                    {/* Line 6 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">6</span>
                      <span className="pl-6">
                        <span className="text-[#60a5fa]">language</span>
                        <span className="text-[#f5f5f5]">:</span>{" "}
                        <span className="text-[#4ade80]">'javascript'</span>
                        <span className="text-[#f5f5f5]">,</span>
                      </span>
                    </div>
                    
                    {/* Line 7 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">7</span>
                      <span className="pl-6">
                        <span className="text-[#60a5fa]">realTimeSync</span>
                        <span className="text-[#f5f5f5]">:</span>{" "}
                        <span className="text-[#fbbf24]">true</span>
                      </span>
                    </div>
                    
                    {/* Line 8 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">8</span>
                      <span>
                        <span className="text-[#f5f5f5]">{"})"}</span>
                      </span>
                    </div>
                    
                    {/* Line 9 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">9</span>
                      <span className="text-[#71717a]"></span>
                    </div>
                    
                    {/* Line 10 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">10</span>
                      <span>
                        <span className="text-[#71717a]">{"// "}</span>
                        <span className="text-[#4ade80]">✓ Session created successfully!</span>
                      </span>
                    </div>
                    
                    {/* Line 11 */}
                    <div className="flex gap-4">
                      <span className="text-[#71717a] select-none w-6 text-right">11</span>
                      <span>
                        <span className="text-[#60a5fa]">console</span>
                        <span className="text-[#f5f5f5]">.</span>
                        <span className="text-[#fbbf24]">log</span>
                        <span className="text-[#f5f5f5]">(</span>
                        <span className="text-[#4ade80]">'Ready to code!'</span>
                        <span className="text-[#f5f5f5]">)</span>
                        <span className="inline-block w-2 h-5 bg-[#d4a574] ml-1 animate-[blink_1s_infinite]" />
                      </span>
                    </div>
                  </div>

                  {/* Terminal Footer */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#0a0a0f] border-t border-[#8b4513]/20">
                    <div className="flex items-center gap-4 font-mono text-xs text-[#71717a]">
                      <span className="flex items-center gap-1">
                        <GitBranchIcon className="size-3" />
                        main
                      </span>
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#71717a]">UTF-8</span>
                      <span className="font-mono text-xs text-[#71717a]">LF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section id="stats" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y border-[#8b4513]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl bg-[#16161e]/50 border border-[#8b4513]/10 hover:border-[#8b4513]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,69,19,0.15)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="size-12 rounded-xl bg-[#8b4513]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-6 text-[#d4a574]" />
                  </div>
                  
                  {/* Value */}
                  <div className="font-mono text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#d4a574] to-[#8b4513] bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Label */}
                  <div className="font-mono text-sm text-[#71717a]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURES SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b4513]/10 border border-[#8b4513]/20 mb-6">
              <SparklesIcon className="size-4 text-[#d4a574]" />
              <span className="font-mono text-sm text-[#d4a574]">Features</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#f5f5f5]">Everything You Need to </span>
              <span className="bg-gradient-to-r from-[#d4a574] to-[#8b4513] bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto font-mono">
              {"// Powerful features designed for seamless technical interviews"}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative p-6 rounded-2xl bg-[#16161e]/50 border border-[#8b4513]/10 ${feature.borderColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,69,19,0.15)] hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="size-14 rounded-xl bg-[#8b4513]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-7 text-[#d4a574]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-mono font-semibold text-lg text-[#f5f5f5] mb-3">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#a1a1aa] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECH STACK SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section id="tech" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-[#8b4513]/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-sm text-[#71717a] mb-8">{"// Built with modern technologies"}</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="group px-6 py-3 rounded-lg bg-[#16161e]/50 border border-[#8b4513]/10 hover:border-[#8b4513]/30 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-mono text-sm text-[#a1a1aa] group-hover:text-[#d4a574] transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b4513]/20 via-[#16161e] to-[#d4a574]/10" />
            <div className="absolute inset-0 border border-[#8b4513]/30 rounded-3xl" />
            
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#8b4513]/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-[80px]" />
            
            {/* Content */}
            <div className="relative text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-[#f5f5f5]">Ready to </span>
                <span className="bg-gradient-to-r from-[#d4a574] to-[#8b4513] bg-clip-text text-transparent">
                  Code Together
                </span>
                <span className="text-[#f5f5f5]">?</span>
              </h2>
              
              <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto">
                Join thousands of developers who use Meetly for their technical interviews and pair programming sessions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <SignInButton mode="modal">
                  <button className="group relative px-8 py-4 rounded-xl font-mono font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(139,69,19,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] via-[#a0522d] to-[#d4a574]" />
                    <span className="relative flex items-center justify-center gap-2 text-white">
                      <TerminalIcon className="size-5" />
                      Get Started for Free
                      <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </SignInButton>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 pt-6 text-[#71717a] font-mono text-xs">
                <span className="flex items-center gap-2">
                  <ShieldCheckIcon className="size-4 text-[#4ade80]" />
                  Secure & Private
                </span>
                <span className="flex items-center gap-2">
                  <ZapIcon className="size-4 text-[#fbbf24]" />
                  Lightning Fast
                </span>
                <span className="flex items-center gap-2">
                  <GlobeIcon className="size-4 text-[#60a5fa]" />
                  Works Everywhere
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
         ══════════════════════════════════════════════════════════════════════ */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-[#8b4513]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-[#8b4513] to-[#d4a574] flex items-center justify-center">
              <TerminalIcon className="size-4 text-white" />
            </div>
            <span className="font-mono font-bold text-[#f5f5f5]">Meetly</span>
          </div>
          
          {/* Copyright */}
          <p className="font-mono text-sm text-[#71717a]">
            © {new Date().getFullYear()} Meetly. Built with 💻 for developers.
          </p>
          
          {/* Links */}
          
        </div>
      </footer>
    </div>
  );
}

export default HomePage;