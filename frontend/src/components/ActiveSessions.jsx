import {
  ArrowRightIcon,
  CodeIcon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
  TerminalIcon,
  CircleIcon,
  WifiIcon,
} from "lucide-react";
import { Link } from "react-router";

// Difficulty badge styles
const getDifficultyStyles = (difficulty) => {
  const styles = {
    easy: {
      bg: "bg-[#4ade80]/10",
      text: "text-[#4ade80]",
      border: "border-[#4ade80]/30",
    },
    medium: {
      bg: "bg-[#fbbf24]/10",
      text: "text-[#fbbf24]",
      border: "border-[#fbbf24]/30",
    },
    hard: {
      bg: "bg-[#f87171]/10",
      text: "text-[#f87171]",
      border: "border-[#f87171]/30",
    },
  };
  return styles[difficulty?.toLowerCase()] || styles.medium;
};

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="h-full">
      {/* Terminal Window Container */}
      <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden flex flex-col">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
          <div className="flex items-center gap-3">
            {/* Terminal dots */}
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.5)]" />
              <span className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
              <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.5)]" />
            </div>
            
            {/* Title */}
            <div className="flex items-center gap-2">
              <ZapIcon className="size-4 text-[#d4a574]" />
              <h2 className="font-mono font-semibold text-[#f5f5f5]">Live Sessions</h2>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
            <WifiIcon className="size-3 text-[#4ade80]" />
            <span className="font-mono text-xs text-[#4ade80]">{sessions.length} active</span>
          </div>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-[#8b4513]/30 scrollbar-track-transparent">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="relative">
                <div className="size-12 rounded-xl bg-[#8b4513]/10 flex items-center justify-center">
                  <LoaderIcon className="size-6 text-[#d4a574] animate-spin" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-mono text-sm text-[#a1a1aa]">Loading sessions...</p>
                <p className="font-mono text-xs text-[#71717a] mt-1">$ fetch --active-sessions</p>
              </div>
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session, index) => {
              const difficultyStyles = getDifficultyStyles(session.difficulty);
              const isFull = session.participant && !isUserInSession(session);
              const isUserSession = isUserInSession(session);

              return (
                <div
                  key={session._id}
                  className={`
                    group relative p-4 rounded-xl
                    bg-[#16161e]/50 backdrop-blur-sm
                    border border-[#8b4513]/10
                    hover:border-[#8b4513]/30
                    transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(139,69,19,0.1)]
                    hover:-translate-y-0.5
                    animate-[slide-up_0.3s_ease-out_forwards]
                  `}
                  style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
                >
                  {/* Live indicator pulse */}
                  <div className="absolute top-4 right-4">
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                      <span className="relative inline-flex rounded-full size-2 bg-[#4ade80]" />
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Session Icon */}
                    <div className="relative shrink-0">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-[#8b4513] to-[#d4a574] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <CodeIcon className="size-6 text-white" />
                      </div>
                    </div>

                    {/* Session Info */}
                    <div className="flex-1 min-w-0">
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-mono font-semibold text-[#f5f5f5] truncate group-hover:text-[#d4a574] transition-colors">
                          {session.problem}
                        </h3>
                      </div>

                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {/* Difficulty badge */}
                        <span className={`
                          px-2 py-0.5 rounded-md font-mono text-xs font-medium
                          ${difficultyStyles.bg} ${difficultyStyles.text} border ${difficultyStyles.border}
                        `}>
                          {session.difficulty?.charAt(0).toUpperCase() + session.difficulty?.slice(1)}
                        </span>

                        {/* Status badge */}
                        {isFull ? (
                          <span className="px-2 py-0.5 rounded-md font-mono text-xs font-medium bg-[#f87171]/10 text-[#f87171] border border-[#f87171]/30">
                            FULL
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md font-mono text-xs font-medium bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30">
                            OPEN
                          </span>
                        )}

                        {isUserSession && (
                          <span className="px-2 py-0.5 rounded-md font-mono text-xs font-medium bg-[#60a5fa]/10 text-[#60a5fa] border border-[#60a5fa]/30">
                            YOUR SESSION
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-[#71717a]">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-3 text-[#fbbf24]" />
                          <span className="font-mono">{session.host?.name || "Anonymous"}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="size-3" />
                          <span className="font-mono">{session.participant ? "2/2" : "1/2"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0 self-center">
                      {isFull ? (
                        <button 
                          disabled
                          className="px-4 py-2 rounded-lg font-mono text-sm font-medium bg-[#16161e] text-[#71717a] border border-[#8b4513]/10 cursor-not-allowed"
                        >
                          Full
                        </button>
                      ) : (
                        <Link
                          to={`/session/${session._id}`}
                          className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-medium bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white hover:shadow-[0_0_20px_rgba(139,69,19,0.4)] transition-all duration-300"
                        >
                          {isUserSession ? "Rejoin" : "Join"}
                          <ArrowRightIcon className="size-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Bottom terminal prompt */}
                  <div className="mt-3 pt-3 border-t border-[#8b4513]/10 flex items-center gap-2">
                    <span className="text-[#4ade80] font-mono text-[10px]">❯</span>
                    <span className="font-mono text-[10px] text-[#71717a]">
                      session --id={session._id?.slice(-8)} --status=live
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="relative mb-6">
                <div className="size-20 rounded-2xl bg-[#8b4513]/10 border border-dashed border-[#8b4513]/30 flex items-center justify-center">
                  <TerminalIcon className="size-10 text-[#8b4513]/50" />
                </div>
                <SparklesIcon className="size-6 text-[#d4a574]/50 absolute -top-2 -right-2 animate-pulse" />
              </div>
              
              <h4 className="font-mono font-semibold text-[#f5f5f5] mb-2">No active sessions</h4>
              <p className="font-mono text-sm text-[#71717a] mb-4">Be the first to create one!</p>
              
              {/* Terminal hint */}
              <div className="px-4 py-2 rounded-lg bg-[#050507] border border-[#8b4513]/10">
                <span className="font-mono text-xs text-[#71717a]">
                  <span className="text-[#4ade80]">$</span> meetly create --new-session
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#050507]/50 border-t border-[#8b4513]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircleIcon className="size-2 fill-[#4ade80] text-[#4ade80]" />
            <span className="font-mono text-[10px] text-[#71717a]">real-time sync enabled</span>
          </div>
          <span className="font-mono text-[10px] text-[#71717a]">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;