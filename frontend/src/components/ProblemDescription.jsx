import { 
  BookOpenIcon, 
  ChevronDownIcon, 
  CodeIcon, 
  FileTextIcon, 
  HashIcon, 
  LightbulbIcon,
  ListIcon,
  AlertTriangleIcon,
  TerminalIcon,
  ZapIcon,
  CheckCircleIcon
} from "lucide-react";
import { useState } from "react";

// Difficulty badge styles
const getDifficultyStyles = (difficulty) => {
  const styles = {
    Easy: {
      bg: "bg-[#4ade80]/10",
      text: "text-[#4ade80]",
      border: "border-[#4ade80]/30",
      glow: "shadow-[0_0_10px_rgba(74,222,128,0.2)]",
    },
    Medium: {
      bg: "bg-[#fbbf24]/10",
      text: "text-[#fbbf24]",
      border: "border-[#fbbf24]/30",
      glow: "shadow-[0_0_10px_rgba(251,191,36,0.2)]",
    },
    Hard: {
      bg: "bg-[#f87171]/10",
      text: "text-[#f87171]",
      border: "border-[#f87171]/30",
      glow: "shadow-[0_0_10px_rgba(248,113,113,0.2)]",
    },
  };
  return styles[difficulty] || styles.Medium;
};

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const difficultyStyles = getDifficultyStyles(problem.difficulty);

  return (
    <div className="h-full flex flex-col bg-[#0a0a0f]">
      {/* ═══════════════════════════════════════════════════════════════════
          HEADER SECTION
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 border-b border-[#8b4513]/20">
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2">
            <FileTextIcon className="size-4 text-[#d4a574]" />
            <span className="font-mono text-sm text-[#a1a1aa]">problem.md</span>
          </div>
        </div>

        {/* Problem Title & Info */}
        <div className="p-4 space-y-4">
          {/* Title Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] leading-tight">
                {problem.title}
              </h1>
              <div className="flex items-center gap-2">
                <HashIcon className="size-3 text-[#71717a]" />
                <span className="font-mono text-xs text-[#71717a]">{problem.category}</span>
              </div>
            </div>
            
            {/* Difficulty Badge */}
            <div className={`
              shrink-0 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold
              ${difficultyStyles.bg} ${difficultyStyles.text} 
              border ${difficultyStyles.border} ${difficultyStyles.glow}
            `}>
              <div className="flex items-center gap-1.5">
                <ZapIcon className="size-3" />
                {problem.difficulty}
              </div>
            </div>
          </div>

          {/* Problem Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#16161e] border border-[#8b4513]/20 hover:border-[#8b4513]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-[#8b4513]/10 flex items-center justify-center">
                  <CodeIcon className="size-4 text-[#d4a574]" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-sm text-[#f5f5f5]">{problem.title}</p>
                  <p className="font-mono text-xs text-[#71717a]">Select a different problem</p>
                </div>
              </div>
              <ChevronDownIcon className={`size-5 text-[#71717a] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 top-full left-0 right-0 mt-2 py-2 rounded-xl bg-[#16161e] border border-[#8b4513]/30 shadow-xl shadow-black/50 max-h-64 overflow-y-auto animate-[scale-in_0.2s_ease-out]">
                {allProblems.map((p) => {
                  const pDiffStyles = getDifficultyStyles(p.difficulty);
                  const isSelected = p.id === currentProblemId;
                  
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        onProblemChange(p.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 text-left
                        transition-all duration-200
                        ${isSelected 
                          ? 'bg-[#8b4513]/20 border-l-2 border-[#d4a574]' 
                          : 'hover:bg-[#8b4513]/10 border-l-2 border-transparent'
                        }
                      `}
                    >
                      <div className={`
                        size-8 rounded-lg flex items-center justify-center
                        ${isSelected ? 'bg-[#8b4513]/20' : 'bg-[#0a0a0f]'}
                      `}>
                        {isSelected ? (
                          <CheckCircleIcon className="size-4 text-[#4ade80]" />
                        ) : (
                          <CodeIcon className="size-4 text-[#71717a]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-mono text-sm truncate ${isSelected ? 'text-[#d4a574]' : 'text-[#f5f5f5]'}`}>
                          {p.title}
                        </p>
                      </div>
                      <span className={`
                        shrink-0 px-2 py-0.5 rounded font-mono text-[10px] font-medium
                        ${pDiffStyles.bg} ${pDiffStyles.text} border ${pDiffStyles.border}
                      `}>
                        {p.difficulty}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SCROLLABLE CONTENT
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-[#8b4513]/30 scrollbar-track-transparent">
        
        {/* Description Section */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="size-4 text-[#d4a574]" />
            <h2 className="font-mono font-semibold text-[#f5f5f5]">Description</h2>
          </div>
          
          <div className="p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10 space-y-3">
            <p className="text-[#a1a1aa] leading-relaxed">
              {problem.description.text}
            </p>
            {problem.description.notes?.map((note, idx) => (
              <p key={idx} className="text-[#a1a1aa] leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <LightbulbIcon className="size-4 text-[#d4a574]" />
            <h2 className="font-mono font-semibold text-[#f5f5f5]">Examples</h2>
          </div>
          
          <div className="space-y-4">
            {problem.examples?.map((example, idx) => (
              <div 
                key={idx} 
                className="rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10 overflow-hidden"
              >
                {/* Example Header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-[#8b4513]/5 border-b border-[#8b4513]/10">
                  <span className="size-5 rounded bg-[#8b4513]/20 flex items-center justify-center font-mono text-xs text-[#d4a574]">
                    {idx + 1}
                  </span>
                  <span className="font-mono text-sm text-[#a1a1aa]">Example {idx + 1}</span>
                </div>
                
                {/* Example Content */}
                <div className="p-4 font-mono text-sm space-y-3">
                  {/* Input */}
                  <div className="flex gap-3">
                    <span className="shrink-0 text-[#4ade80] font-semibold min-w-[70px]">Input:</span>
                    <code className="text-[#f5f5f5] bg-[#0a0a0f] px-2 py-0.5 rounded">
                      {example.input}
                    </code>
                  </div>
                  
                  {/* Output */}
                  <div className="flex gap-3">
                    <span className="shrink-0 text-[#60a5fa] font-semibold min-w-[70px]">Output:</span>
                    <code className="text-[#f5f5f5] bg-[#0a0a0f] px-2 py-0.5 rounded">
                      {example.output}
                    </code>
                  </div>
                  
                  {/* Explanation */}
                  {example.explanation && (
                    <div className="pt-3 mt-3 border-t border-[#8b4513]/10">
                      <div className="flex items-start gap-2">
                        <span className="shrink-0 text-[#fbbf24] text-xs">💡</span>
                        <p className="text-xs text-[#71717a] leading-relaxed">
                          {example.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Constraints Section */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangleIcon className="size-4 text-[#d4a574]" />
            <h2 className="font-mono font-semibold text-[#f5f5f5]">Constraints</h2>
          </div>
          
          <div className="p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
            <ul className="space-y-2">
              {problem.constraints?.map((constraint, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 text-[#d4a574] mt-1">•</span>
                  <code className="font-mono text-sm text-[#a1a1aa] bg-[#0a0a0f] px-2 py-0.5 rounded">
                    {constraint}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Terminal Footer */}
        <div className="pt-4">
          <div className="px-4 py-3 rounded-xl bg-[#050507] border border-[#8b4513]/10">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#71717a]">
              <span className="text-[#4ade80]">❯</span>
              <span>problem --id="{problem.id || currentProblemId}" --status=loaded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;