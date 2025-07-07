import { 
  CodeIcon, 
  ClockIcon, 
  UsersIcon, 
  TrophyIcon, 
  LoaderIcon,
  CalendarIcon,
  CheckCircleIcon,
  HistoryIcon,
  TerminalIcon,
  FolderIcon
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

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

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="mt-8">
      {/* Terminal Window Container */}
      <div className="rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden">
        
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
              <HistoryIcon className="size-4 text-[#d4a574]" />
              <h2 className="font-mono font-semibold text-[#f5f5f5]">Session History</h2>
            </div>
          </div>

          {/* File path style */}
          <div className="hidden sm:flex items-center gap-2 text-[#71717a] font-mono text-xs">
            <FolderIcon className="size-3" />
            <span>~/sessions/history</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="relative">
                <div className="size-12 rounded-xl bg-[#8b4513]/10 flex items-center justify-center">
                  <LoaderIcon className="size-6 text-[#d4a574] animate-spin" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-mono text-sm text-[#a1a1aa]">Loading history...</p>
                <p className="font-mono text-xs text-[#71717a] mt-1">$ fetch --session-history</p>
              </div>
            </div>
          ) : sessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sessions.map((session, index) => {
                const difficultyStyles = getDifficultyStyles(session.difficulty);
                const isActive = session.status === "active";

                return (
                  <div
                    key={session._id}
                    className={`
                      group relative p-5 rounded-xl
                      transition-all duration-300
                      hover:-translate-y-1
                      animate-[slide-up_0.3s_ease-out_forwards]
                      ${isActive 
                        ? "bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
                        : "bg-[#16161e]/50 border border-[#8b4513]/10 hover:border-[#8b4513]/30 hover:shadow-[0_0_30px_rgba(139,69,19,0.1)]"
                      }
                    `}
                    style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
                  >
                    {/* Active badge */}
                    {isActive && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#4ade80]/20 border border-[#4ade80]/30">
                        <span className="relative flex size-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                          <span className="relative inline-flex rounded-full size-1.5 bg-[#4ade80]" />
                        </span>
                        <span className="font-mono text-[10px] font-medium text-[#4ade80]">ACTIVE</span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`
                        size-11 rounded-xl flex items-center justify-center shrink-0
                        group-hover:scale-105 transition-transform duration-300
                        ${isActive 
                          ? "bg-gradient-to-br from-[#4ade80] to-[#22c55e]"
                          : "bg-gradient-to-br from-[#8b4513] to-[#d4a574]"
                        }
                      `}>
                        <CodeIcon className="size-5 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono font-semibold text-[#f5f5f5] truncate group-hover:text-[#d4a574] transition-colors mb-1">
                          {session.problem}
                        </h3>
                        <span className={`
                          inline-flex px-2 py-0.5 rounded-md font-mono text-xs font-medium
                          ${difficultyStyles.bg} ${difficultyStyles.text} border ${difficultyStyles.border}
                        `}>
                          {session.difficulty?.charAt(0).toUpperCase() + session.difficulty?.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                        <ClockIcon className="size-3.5 text-[#71717a]" />
                        <span className="font-mono">
                          {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                        <UsersIcon className="size-3.5 text-[#71717a]" />
                        <span className="font-mono">
                          {session.participant ? "2" : "1"} participant{session.participant ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-[#8b4513]/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckCircleIcon className="size-3.5 text-[#4ade80]" />
                        <span className="font-mono text-[10px] text-[#71717a] uppercase">
                          {isActive ? "In Progress" : "Completed"}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#71717a]">
                        {new Date(session.updatedAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Hover terminal command */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-8 overflow-hidden transition-all duration-300 bg-[#050507] rounded-b-xl flex items-center px-3">
                      <span className="font-mono text-[10px] text-[#71717a]">
                        <span className="text-[#4ade80]">❯</span> view --session={session._id?.slice(-8)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="relative mb-6">
                <div className="size-20 rounded-2xl bg-[#8b4513]/10 border border-dashed border-[#8b4513]/30 flex items-center justify-center">
                  <TrophyIcon className="size-10 text-[#8b4513]/50" />
                </div>
              </div>
              
              <h4 className="font-mono font-semibold text-[#f5f5f5] mb-2">No sessions yet</h4>
              <p className="font-mono text-sm text-[#71717a] mb-4 max-w-sm">
                Start your coding journey today! Create your first session and begin practicing.
              </p>
              
              {/* Terminal hint */}
              <div className="px-4 py-2 rounded-lg bg-[#050507] border border-[#8b4513]/10">
                <span className="font-mono text-xs text-[#71717a]">
                  <span className="text-[#4ade80]">$</span> meetly start --first-session
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        {sessions.length > 0 && (
          <div className="px-4 py-2 bg-[#050507]/50 border-t border-[#8b4513]/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-[#71717a]">
                Total: <span className="text-[#d4a574]">{sessions.length}</span> sessions
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#71717a]">
              Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentSessions;