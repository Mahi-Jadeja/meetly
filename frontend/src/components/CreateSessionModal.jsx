import { 
  CodeIcon, 
  LoaderIcon, 
  PlusIcon, 
  XIcon,
  TerminalIcon,
  ZapIcon,
  ChevronDownIcon,
  SparklesIcon,
  UsersIcon,
  CheckCircleIcon
} from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { useState, useEffect } from "react";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  if (!isOpen) return null;

  const selectedProblem = problems.find((p) => p.title === roomConfig.problem);

  // Difficulty badge styles
  const getDifficultyStyles = (difficulty) => {
    const styles = {
      easy: "bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/30",
      medium: "bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/30",
      hard: "bg-[#f87171]/10 text-[#f87171] border-[#f87171]/30",
    };
    return styles[difficulty?.toLowerCase()] || styles.medium;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`
          fixed inset-0 z-50 bg-[#050507]/80 backdrop-blur-sm
          transition-opacity duration-200
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`
            pointer-events-auto w-full max-w-lg
            transition-all duration-300 ease-out
            ${isVisible 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 translate-y-4"
            }
          `}
        >
          {/* Terminal Window */}
          <div className="rounded-xl bg-[#0a0a0f] border border-[#8b4513]/30 shadow-2xl shadow-black/50 overflow-hidden">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/15 to-transparent border-b border-[#8b4513]/20">
              <div className="flex items-center gap-3">
                {/* Terminal dots */}
                <div className="flex gap-1.5">
                  <button 
                    onClick={handleClose}
                    className="size-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors shadow-[0_0_8px_rgba(255,95,87,0.5)]"
                  />
                  <span className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
                  <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.5)]" />
                </div>
                
                {/* Title */}
                <div className="flex items-center gap-2">
                  <TerminalIcon className="size-4 text-[#d4a574]" />
                  <h2 className="font-mono font-semibold text-[#f5f5f5]">Create New Session</h2>
                </div>
              </div>

              {/* Close button */}
              <button 
                onClick={handleClose}
                className="size-8 rounded-lg flex items-center justify-center text-[#71717a] hover:text-[#f5f5f5] hover:bg-[#8b4513]/10 transition-colors"
              >
                <XIcon className="size-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Terminal intro text */}
              <div className="flex items-start gap-2 text-sm">
                <span className="text-[#4ade80] font-mono">❯</span>
                <p className="text-[#a1a1aa] font-mono">
                  Select a problem to start a new collaborative coding session...
                </p>
              </div>

              {/* Problem Selection */}
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#f5f5f5]">
                    <span className="text-[#8b4513]">const</span> problem <span className="text-[#71717a]">=</span>
                  </span>
                  <span className="font-mono text-xs text-[#f87171]">* required</span>
                </label>

                <div className="relative">
                  <select
                    className="
                      w-full px-4 py-3 pr-10
                      rounded-xl
                      bg-[#16161e] 
                      border border-[#8b4513]/20
                      text-[#f5f5f5] font-mono text-sm
                      focus:outline-none focus:border-[#8b4513]/50 focus:shadow-[0_0_20px_rgba(139,69,19,0.2)]
                      transition-all duration-300
                      appearance-none
                      cursor-pointer
                    "
                    value={roomConfig.problem}
                    onChange={(e) => {
                      const selectedProblem = problems.find((p) => p.title === e.target.value);
                      setRoomConfig({
                        difficulty: selectedProblem?.difficulty || "",
                        problem: e.target.value,
                      });
                    }}
                  >
                    <option value="" disabled className="bg-[#16161e] text-[#71717a]">
                      Choose a coding problem...
                    </option>
                    {problems.map((problem) => (
                      <option 
                        key={problem.id} 
                        value={problem.title}
                        className="bg-[#16161e] text-[#f5f5f5] py-2"
                      >
                        {problem.title} ({problem.difficulty})
                      </option>
                    ))}
                  </select>
                  
                  {/* Custom dropdown arrow */}
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-[#71717a] pointer-events-none" />
                </div>
              </div>

              {/* Room Summary */}
              {roomConfig.problem && selectedProblem && (
                <div className="p-4 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 animate-[scale-in_0.2s_ease-out]">
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#4ade80]/10">
                    <CheckCircleIcon className="size-4 text-[#4ade80]" />
                    <span className="font-mono text-xs text-[#4ade80]">Session Preview</span>
                  </div>

                  <div className="space-y-3">
                    {/* Problem */}
                    <div className="flex items-start gap-3">
                      <CodeIcon className="size-4 text-[#d4a574] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-mono text-xs text-[#71717a]">Problem</p>
                        <p className="font-mono text-sm text-[#f5f5f5]">{roomConfig.problem}</p>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div className="flex items-start gap-3">
                      <ZapIcon className="size-4 text-[#d4a574] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-mono text-xs text-[#71717a]">Difficulty</p>
                        <span className={`
                          inline-flex px-2 py-0.5 rounded-md font-mono text-xs font-medium border mt-1
                          ${getDifficultyStyles(selectedProblem.difficulty)}
                        `}>
                          {selectedProblem.difficulty.charAt(0).toUpperCase() + selectedProblem.difficulty.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="flex items-start gap-3">
                      <UsersIcon className="size-4 text-[#d4a574] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-mono text-xs text-[#71717a]">Session Type</p>
                        <p className="font-mono text-sm text-[#f5f5f5]">1-on-1 Collaborative</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal command preview */}
              <div className="px-4 py-3 rounded-xl bg-[#050507] border border-[#8b4513]/10">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#4ade80]">$</span>
                  <span className="text-[#a1a1aa]">meetly create</span>
                  {roomConfig.problem && (
                    <>
                      <span className="text-[#8b4513]">--problem</span>
                      <span className="text-[#d4a574]">"{roomConfig.problem?.slice(0, 20)}..."</span>
                    </>
                  )}
                  <span className="text-[#d4a574] animate-[blink_1s_infinite]">_</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#050507]/50 border-t border-[#8b4513]/10 flex items-center justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl font-mono text-sm font-medium text-[#a1a1aa] hover:text-[#f5f5f5] hover:bg-[#16161e] border border-transparent hover:border-[#8b4513]/20 transition-all duration-300"
              >
                Cancel
              </button>

              <button
                onClick={onCreateRoom}
                disabled={isCreating || !roomConfig.problem}
                className={`
                  relative px-6 py-2.5 rounded-xl font-mono text-sm font-medium
                  flex items-center gap-2
                  transition-all duration-300
                  ${isCreating || !roomConfig.problem
                    ? "bg-[#16161e] text-[#71717a] cursor-not-allowed border border-[#8b4513]/10"
                    : "bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white hover:shadow-[0_0_30px_rgba(139,69,19,0.4)] hover:scale-[1.02]"
                  }
                `}
              >
                {isCreating ? (
                  <>
                    <LoaderIcon className="size-4 animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <SparklesIcon className="size-4" />
                    <span>Create Session</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSessionModal;