import { 
  UsersIcon, 
  TrophyIcon, 
  ZapIcon, 
  TrendingUpIcon,
  ActivityIcon,
  ClockIcon
} from "lucide-react";
import { useState, useEffect } from "react";

// Animated counter component
const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setDisplayValue(0);
      return;
    }

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const stats = [
    {
      label: "Active Sessions",
      value: activeSessionsCount,
      icon: UsersIcon,
      color: "from-[#4ade80] to-[#22c55e]",
      bgColor: "bg-[#4ade80]/10",
      borderColor: "border-[#4ade80]/20 hover:border-[#4ade80]/40",
      textColor: "text-[#4ade80]",
      badge: "LIVE",
      badgeColor: "bg-[#4ade80]/20 text-[#4ade80]",
      glowColor: "hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]",
    },
    {
      label: "Total Sessions",
      value: recentSessionsCount,
      icon: TrophyIcon,
      color: "from-[#d4a574] to-[#8b4513]",
      bgColor: "bg-[#8b4513]/10",
      borderColor: "border-[#8b4513]/20 hover:border-[#8b4513]/40",
      textColor: "text-[#d4a574]",
      badge: null,
      badgeColor: "",
      glowColor: "hover:shadow-[0_0_30px_rgba(139,69,19,0.2)]",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Section header */}
      <div className="flex items-center gap-2 px-1">
        <ActivityIcon className="size-4 text-[#8b4513]" />
        <h3 className="font-mono text-sm font-medium text-[#a1a1aa]">Quick Stats</h3>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`
                group relative p-5 rounded-xl
                bg-[#16161e]/50 backdrop-blur-sm
                border ${stat.borderColor}
                transition-all duration-300
                ${stat.glowColor}
                hover:-translate-y-1
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br ${stat.color} 
              `} style={{ opacity: 0.05 }} />

              {/* Content */}
              <div className="relative">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  {/* Icon */}
                  <div className={`
                    size-12 rounded-xl ${stat.bgColor}
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className={`size-6 ${stat.textColor}`} />
                  </div>

                  {/* Badge */}
                  {stat.badge && (
                    <div className={`
                      flex items-center gap-1.5 px-2.5 py-1 rounded-full
                      font-mono text-xs font-medium
                      ${stat.badgeColor}
                    `}>
                      <span className="relative flex size-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
                        <span className="relative inline-flex rounded-full size-1.5 bg-current" />
                      </span>
                      {stat.badge}
                    </div>
                  )}
                </div>

                {/* Value */}
                <div className={`
                  font-mono text-4xl font-bold mb-1
                  bg-gradient-to-r ${stat.color} bg-clip-text text-transparent
                `}>
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}
                <div className="font-mono text-sm text-[#71717a]">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div className={`
                  absolute bottom-0 left-0 h-0.5 rounded-full
                  bg-gradient-to-r ${stat.color}
                  w-0 group-hover:w-full transition-all duration-500
                `} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal footer hint */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#050507]/50 border border-[#8b4513]/10">
        <span className="text-[#4ade80] font-mono text-xs">$</span>
        <span className="text-[#71717a] font-mono text-xs">stats --summary</span>
        <ClockIcon className="size-3 text-[#71717a] ml-auto" />
        <span className="text-[#71717a] font-mono text-[10px]">live</span>
      </div>
    </div>
  );
}

export default StatsCards;