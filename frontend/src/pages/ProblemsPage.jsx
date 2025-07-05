import { Link } from "react-router";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { 
  ChevronRightIcon, 
  CodeIcon, 
  SearchIcon, 
  FilterIcon,
  TerminalIcon,
  SparklesIcon,
  ZapIcon,
  TrophyIcon,
  TargetIcon,
  BookOpenIcon,
  HashIcon,
  FolderIcon,
  ListIcon
} from "lucide-react";

// Difficulty badge styles
const getDifficultyStyles = (difficulty) => {
  const styles = {
    Easy: {
      bg: "bg-[#4ade80]/10",
      text: "text-[#4ade80]",
      border: "border-[#4ade80]/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]",
    },
    Medium: {
      bg: "bg-[#fbbf24]/10",
      text: "text-[#fbbf24]",
      border: "border-[#fbbf24]/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    },
    Hard: {
      bg: "bg-[#f87171]/10",
      text: "text-[#f87171]",
      border: "border-[#f87171]/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]",
    },
  };
  return styles[difficulty] || styles.Medium;
};

// Animated counter component
const AnimatedNumber = ({ value }) => {
  return <span>{value}</span>;
};

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(problems.map((p) => p.category))];
    return cats.sort();
  }, [problems]);

  // Filter problems
  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           problem.description.text.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === "all" || problem.category === selectedCategory;
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [problems, searchQuery, selectedDifficulty, selectedCategory]);

  // Stats
  const stats = {
    total: problems.length,
    easy: problems.filter((p) => p.difficulty === "Easy").length,
    medium: problems.filter((p) => p.difficulty === "Medium").length,
    hard: problems.filter((p) => p.difficulty === "Hard").length,
  };

  const difficultyFilters = [
    { value: "all", label: "All", count: stats.total },
    { value: "Easy", label: "Easy", count: stats.easy, color: "text-[#4ade80]" },
    { value: "Medium", label: "Medium", count: stats.medium, color: "text-[#fbbf24]" },
    { value: "Hard", label: "Hard", count: stats.hard, color: "text-[#f87171]" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#8b4513]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#d4a574]/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* ══════════════════════════════════════════════════════════════
            HEADER SECTION
           ══════════════════════════════════════════════════════════════ */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8b4513]/10 border border-[#8b4513]/20">
              <BookOpenIcon className="size-3.5 text-[#d4a574]" />
              <span className="font-mono text-xs text-[#d4a574]">Practice Mode</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#f5f5f5]">Coding </span>
            <span className="bg-gradient-to-r from-[#d4a574] via-[#8b4513] to-[#d4a574] bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent">
              Challenges
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-lg max-w-2xl font-mono">
            {"// Sharpen your skills with curated problems"}
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            STATS CARDS
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, icon: ListIcon, color: "from-[#d4a574] to-[#8b4513]" },
            { label: "Easy", value: stats.easy, icon: TargetIcon, color: "from-[#4ade80] to-[#22c55e]" },
            { label: "Medium", value: stats.medium, icon: ZapIcon, color: "from-[#fbbf24] to-[#f59e0b]" },
            { label: "Hard", value: stats.hard, icon: TrophyIcon, color: "from-[#f87171] to-[#ef4444]" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10 hover:border-[#8b4513]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,69,19,0.1)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`size-10 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                    <Icon className="size-5 text-white" />
                  </div>
                </div>
                <div className={`font-mono text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="font-mono text-xs text-[#71717a] mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SEARCH & FILTERS
           ══════════════════════════════════════════════════════════════ */}
        <div className="mb-8 p-4 sm:p-6 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#71717a]" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#8b4513]/20 text-[#f5f5f5] font-mono text-sm placeholder:text-[#71717a] focus:outline-none focus:border-[#8b4513]/50 focus:shadow-[0_0_20px_rgba(139,69,19,0.2)] transition-all duration-300"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap gap-2">
              {difficultyFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedDifficulty(filter.value)}
                  className={`
                    px-4 py-2.5 rounded-xl font-mono text-sm font-medium
                    transition-all duration-300
                    ${selectedDifficulty === filter.value
                      ? "bg-[#8b4513]/20 border border-[#8b4513]/50 text-[#d4a574] shadow-[0_0_20px_rgba(139,69,19,0.2)]"
                      : "bg-[#0a0a0f] border border-[#8b4513]/10 text-[#a1a1aa] hover:border-[#8b4513]/30 hover:text-[#f5f5f5]"
                    }
                  `}
                >
                  <span className={filter.color}>{filter.label}</span>
                  <span className="ml-2 text-[#71717a]">({filter.count})</span>
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl bg-[#0a0a0f] border border-[#8b4513]/20 text-[#f5f5f5] font-mono text-sm focus:outline-none focus:border-[#8b4513]/50 transition-all duration-300 cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <FolderIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#71717a] pointer-events-none" />
            </div>
          </div>

          {/* Active filters indicator */}
          {(searchQuery || selectedDifficulty !== "all" || selectedCategory !== "all") && (
            <div className="mt-4 pt-4 border-t border-[#8b4513]/10 flex items-center justify-between">
              <span className="font-mono text-sm text-[#71717a]">
                Showing <span className="text-[#d4a574]">{filteredProblems.length}</span> of {problems.length} problems
              </span>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("all");
                  setSelectedCategory("all");
                }}
                className="font-mono text-xs text-[#8b4513] hover:text-[#d4a574] transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PROBLEMS LIST
           ══════════════════════════════════════════════════════════════ */}
        <div className="space-y-4">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-1 mb-4">
            <TerminalIcon className="size-4 text-[#8b4513]" />
            <span className="font-mono text-sm text-[#71717a]">problems.list()</span>
          </div>

          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem, index) => {
              const difficultyStyles = getDifficultyStyles(problem.difficulty);
              
              return (
                <Link
                  key={problem.id}
                  to={`/problem/${problem.id}`}
                  className={`
                    group block p-5 sm:p-6 rounded-xl
                    bg-[#16161e]/50 backdrop-blur-sm
                    border border-[#8b4513]/10
                    hover:border-[#8b4513]/30
                    transition-all duration-300
                    hover:-translate-y-1
                    ${difficultyStyles.glow}
                    animate-[slide-up_0.3s_ease-out_forwards]
                  `}
                  style={{ animationDelay: `${index * 30}ms`, opacity: 0 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Left Side */}
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      {/* Problem Icon */}
                      <div className={`
                        shrink-0 size-12 sm:size-14 rounded-xl
                        bg-gradient-to-br from-[#8b4513] to-[#d4a574]
                        flex items-center justify-center
                        group-hover:scale-105 transition-transform duration-300
                      `}>
                        <CodeIcon className="size-6 sm:size-7 text-white" />
                      </div>

                      {/* Problem Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          {/* Problem number */}
                          <span className="font-mono text-xs text-[#71717a]">
                            #{String(index + 1).padStart(2, '0')}
                          </span>
                          
                          {/* Title */}
                          <h2 className="font-mono font-semibold text-lg text-[#f5f5f5] group-hover:text-[#d4a574] transition-colors truncate">
                            {problem.title}
                          </h2>

                          {/* Difficulty Badge */}
                          <span className={`
                            shrink-0 px-2.5 py-1 rounded-lg font-mono text-xs font-medium
                            ${difficultyStyles.bg} ${difficultyStyles.text} border ${difficultyStyles.border}
                          `}>
                            {problem.difficulty}
                          </span>
                        </div>

                        {/* Category */}
                        <div className="flex items-center gap-2 mb-3">
                          <HashIcon className="size-3 text-[#71717a]" />
                          <span className="font-mono text-xs text-[#71717a]">{problem.category}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-[#a1a1aa] line-clamp-2 leading-relaxed">
                          {problem.description.text}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Action */}
                    <div className="shrink-0 hidden sm:flex items-center gap-2">
                      <span className="font-mono text-sm text-[#8b4513] group-hover:text-[#d4a574] transition-colors">
                        Solve
                      </span>
                      <div className="size-8 rounded-lg bg-[#8b4513]/10 flex items-center justify-center group-hover:bg-[#8b4513]/20 transition-colors">
                        <ChevronRightIcon className="size-4 text-[#d4a574] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom terminal hint */}
                  <div className="mt-4 pt-4 border-t border-[#8b4513]/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#4ade80] font-mono text-[10px]">❯</span>
                    <span className="font-mono text-[10px] text-[#71717a]">
                      solve --problem="{problem.id}" --mode=practice
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="relative mb-6">
                <div className="size-20 rounded-2xl bg-[#8b4513]/10 border border-dashed border-[#8b4513]/30 flex items-center justify-center">
                  <SearchIcon className="size-10 text-[#8b4513]/50" />
                </div>
              </div>
              
              <h4 className="font-mono font-semibold text-[#f5f5f5] mb-2">No problems found</h4>
              <p className="font-mono text-sm text-[#71717a] mb-4">
                Try adjusting your search or filters
              </p>
              
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("all");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-lg bg-[#8b4513]/10 border border-[#8b4513]/20 font-mono text-sm text-[#d4a574] hover:bg-[#8b4513]/20 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            FOOTER TERMINAL
           ══════════════════════════════════════════════════════════════ */}
        <div className="mt-12 p-4 rounded-xl bg-[#050507] border border-[#8b4513]/10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
            <span className="text-[#4ade80]">$</span>
            <span>meetly problems --list --count={filteredProblems.length}</span>
            <span className="text-[#4ade80] ml-auto">✓ Ready to code</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProblemsPage;