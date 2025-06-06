import { Link, useLocation } from "react-router";
import { 
  BookOpenIcon, 
  LayoutDashboardIcon, 
  MenuIcon, 
  XIcon,
  TerminalIcon,
  CodeIcon,
  HomeIcon
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/problems", label: "Problems", icon: BookOpenIcon },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${isScrolled 
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#8b4513]/20" 
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* ══════════════════════════════════════════════════════════════
                LOGO
               ══════════════════════════════════════════════════════════════ */}
            <Link
              to="/"
              className="group flex items-center gap-3 relative z-10"
            >
              {/* Logo Icon */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#d4a574] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Icon container */}
                <div className="relative size-10 md:size-11 rounded-xl bg-gradient-to-br from-[#8b4513] via-[#a0522d] to-[#d4a574] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <TerminalIcon className="size-5 md:size-6 text-white" />
                </div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-mono font-bold text-xl md:text-2xl bg-gradient-to-r from-[#d4a574] via-[#8b4513] to-[#d4a574] bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent tracking-tight">
                    Meetly
                  </span>
                  {/* Typing cursor */}
                  <span className="w-[3px] h-5 md:h-6 bg-[#d4a574] ml-1 animate-[blink_1s_infinite]" />
                </div>
                <span className="text-[10px] md:text-xs text-[#71717a] font-mono tracking-wider -mt-0.5">
                  {"<code_together />"}
                </span>
              </div>
            </Link>

            {/* ══════════════════════════════════════════════════════════════
                DESKTOP NAVIGATION
               ══════════════════════════════════════════════════════════════ */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative px-4 py-2.5 rounded-lg font-mono text-sm font-medium
                      transition-all duration-300 ease-out
                      flex items-center gap-2
                      group
                      ${active 
                        ? "text-[#d4a574]" 
                        : "text-[#a1a1aa] hover:text-[#f5f5f5]"
                      }
                    `}
                  >
                    {/* Background hover effect */}
                    <span className={`
                      absolute inset-0 rounded-lg transition-all duration-300
                      ${active 
                        ? "bg-[#8b4513]/20 shadow-[0_0_20px_rgba(139,69,19,0.3)]" 
                        : "bg-transparent group-hover:bg-[#8b4513]/10"
                      }
                    `} />
                    
                    {/* Icon */}
                    <Icon className={`
                      relative size-4 transition-all duration-300
                      ${active ? "text-[#d4a574]" : "group-hover:text-[#d4a574]"}
                    `} />
                    
                    {/* Label */}
                    <span className="relative">{link.label}</span>
                    
                    {/* Active indicator line */}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#8b4513] to-transparent rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#8b4513]/30 to-transparent mx-2" />

              {/* User Button */}
              <div className="relative group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#8b4513]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "size-9 ring-2 ring-[#8b4513]/30 hover:ring-[#8b4513]/60 transition-all duration-300",
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                MOBILE MENU BUTTON
               ══════════════════════════════════════════════════════════════ */}
            <div className="flex md:hidden items-center gap-3">
              {/* User Button (Mobile) */}
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "size-8 ring-2 ring-[#8b4513]/30",
                  }
                }}
              />
              
              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  relative size-10 flex items-center justify-center rounded-lg
                  border border-[#8b4513]/30 bg-[#16161e]/80 backdrop-blur-sm
                  transition-all duration-300
                  ${isMobileMenuOpen 
                    ? "bg-[#8b4513]/20 border-[#8b4513]/50 shadow-[0_0_20px_rgba(139,69,19,0.3)]" 
                    : "hover:border-[#8b4513]/50 hover:bg-[#8b4513]/10"
                  }
                `}
                aria-label="Toggle menu"
              >
                <div className="relative size-5">
                  <MenuIcon 
                    className={`
                      absolute inset-0 size-5 text-[#d4a574] transition-all duration-300
                      ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
                    `} 
                  />
                  <XIcon 
                    className={`
                      absolute inset-0 size-5 text-[#d4a574] transition-all duration-300
                      ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}
                    `} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MOBILE MENU DROPDOWN
           ══════════════════════════════════════════════════════════════ */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0
            transition-all duration-300 ease-out
            ${isMobileMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <div className="mx-4 mt-2 p-2 rounded-xl bg-[#0a0a0f]/95 backdrop-blur-xl border border-[#8b4513]/20 shadow-xl shadow-black/30">
            {/* Terminal header decoration */}
            <div className="flex items-center gap-2 px-3 py-2 mb-2 border-b border-[#8b4513]/10">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] font-mono text-[#71717a] ml-2">navigation.sh</span>
            </div>
            
            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      font-mono text-sm transition-all duration-200
                      animate-[slide-in-right_0.3s_ease-out_forwards]
                      ${active 
                        ? "bg-[#8b4513]/20 text-[#d4a574] shadow-[inset_0_0_20px_rgba(139,69,19,0.1)]" 
                        : "text-[#a1a1aa] hover:bg-[#8b4513]/10 hover:text-[#f5f5f5]"
                      }
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Terminal prompt */}
                    <span className="text-[#4ade80] text-xs">❯</span>
                    
                    <Icon className={`size-4 ${active ? "text-[#d4a574]" : ""}`} />
                    
                    <span className="flex-1">{link.label}</span>
                    
                    {active && (
                      <span className="size-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Footer decoration */}
            <div className="mt-3 pt-3 border-t border-[#8b4513]/10 px-3">
              <p className="text-[10px] font-mono text-[#71717a] flex items-center gap-2">
                <CodeIcon className="size-3" />
                <span>Meetly v1.0.0 — Code Together</span>
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE MENU OVERLAY
         ══════════════════════════════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-[fade-in_0.2s_ease-out]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}

export default Navbar;