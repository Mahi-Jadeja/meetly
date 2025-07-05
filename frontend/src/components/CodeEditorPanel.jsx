import Editor from "@monaco-editor/react";
import { 
  Loader2Icon, 
  PlayIcon, 
  CodeIcon,
  ChevronDownIcon,
  SettingsIcon,
  CopyIcon,
  RotateCcwIcon,
  CheckIcon,
  TerminalIcon,
  FileCodeIcon
} from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { useState } from "react";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  const [copied, setCopied] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentLang = LANGUAGE_CONFIG[selectedLanguage];

  // Custom Monaco theme
  const handleEditorDidMount = (editor, monaco) => {
    // Define custom theme matching our design
    monaco.editor.defineTheme('meetly-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '71717a', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'a78bfa' },
        { token: 'string', foreground: '4ade80' },
        { token: 'number', foreground: 'fbbf24' },
        { token: 'function', foreground: '60a5fa' },
        { token: 'variable', foreground: 'f5f5f5' },
        { token: 'type', foreground: 'd4a574' },
      ],
      colors: {
        'editor.background': '#050507',
        'editor.foreground': '#f5f5f5',
        'editor.lineHighlightBackground': '#16161e',
        'editor.selectionBackground': '#8b451340',
        'editor.inactiveSelectionBackground': '#8b451320',
        'editorLineNumber.foreground': '#71717a',
        'editorLineNumber.activeForeground': '#d4a574',
        'editorCursor.foreground': '#d4a574',
        'editor.selectionHighlightBackground': '#8b451330',
        'editorIndentGuide.background': '#16161e',
        'editorIndentGuide.activeBackground': '#8b451340',
        'editorWhitespace.foreground': '#16161e',
        'scrollbar.shadow': '#00000000',
        'scrollbarSlider.background': '#8b451340',
        'scrollbarSlider.hoverBackground': '#8b451360',
        'scrollbarSlider.activeBackground': '#8b451380',
      },
    });
    monaco.editor.setTheme('meetly-dark');
  };

  return (
    <div className="h-full flex flex-col bg-[#050507]">
      {/* ═══════════════════════════════════════════════════════════════════
          EDITOR HEADER
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
        {/* Left Side - Language Selector */}
        <div className="flex items-center gap-3">
          {/* Terminal dots */}
          <div className="hidden sm:flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#16161e] border border-[#8b4513]/20 hover:border-[#8b4513]/40 transition-all duration-300 group"
            >
              <img
                src={currentLang?.icon}
                alt={currentLang?.name}
                className="size-5 object-contain"
              />
              <span className="font-mono text-sm text-[#f5f5f5]">{currentLang?.name}</span>
              <ChevronDownIcon className={`size-4 text-[#71717a] transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute z-50 top-full left-0 mt-2 py-2 min-w-[180px] rounded-xl bg-[#16161e] border border-[#8b4513]/30 shadow-xl shadow-black/50 animate-[scale-in_0.2s_ease-out]">
                {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                  <button
                    key={key}
                    onClick={() => {
                      onLanguageChange({ target: { value: key } });
                      setIsLangDropdownOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5 text-left
                      transition-all duration-200
                      ${selectedLanguage === key 
                        ? 'bg-[#8b4513]/20 border-l-2 border-[#d4a574]' 
                        : 'hover:bg-[#8b4513]/10 border-l-2 border-transparent'
                      }
                    `}
                  >
                    <img
                      src={lang.icon}
                      alt={lang.name}
                      className="size-5 object-contain"
                    />
                    <span className={`font-mono text-sm ${selectedLanguage === key ? 'text-[#d4a574]' : 'text-[#f5f5f5]'}`}>
                      {lang.name}
                    </span>
                    {selectedLanguage === key && (
                      <CheckIcon className="size-4 text-[#4ade80] ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* File indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0a0f] border border-[#8b4513]/10">
            <FileCodeIcon className="size-3.5 text-[#71717a]" />
            <span className="font-mono text-xs text-[#71717a]">
              solution.{currentLang?.extension || 'js'}
            </span>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            className="p-2 rounded-lg text-[#71717a] hover:text-[#f5f5f5] hover:bg-[#16161e] transition-all duration-300"
            title="Copy code"
          >
            {copied ? (
              <CheckIcon className="size-4 text-[#4ade80]" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </button>

          {/* Reset Button */}
          <button
            onClick={() => onCodeChange(currentLang?.starterCode || '')}
            className="hidden sm:flex p-2 rounded-lg text-[#71717a] hover:text-[#f5f5f5] hover:bg-[#16161e] transition-all duration-300"
            title="Reset code"
          >
            <RotateCcwIcon className="size-4" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-[#8b4513]/20 mx-1" />

          {/* Run Button */}
          <button
            onClick={onRunCode}
            disabled={isRunning}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-medium
              transition-all duration-300
              ${isRunning
                ? 'bg-[#16161e] text-[#71717a] cursor-not-allowed border border-[#8b4513]/10'
                : 'bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:scale-[1.02]'
              }
            `}
          >
            {isRunning ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                <span className="hidden sm:inline">Running...</span>
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                <span className="hidden sm:inline">Run Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MONACO EDITOR
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 relative">
        {/* Loading state */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#050507] z-10 pointer-events-none opacity-0 transition-opacity duration-300" id="editor-loading">
          <div className="flex flex-col items-center gap-3">
            <div className="size-10 rounded-xl bg-[#8b4513]/10 flex items-center justify-center">
              <Loader2Icon className="size-5 text-[#d4a574] animate-spin" />
            </div>
            <span className="font-mono text-sm text-[#71717a]">Loading editor...</span>
          </div>
        </div>

        <Editor
          height="100%"
          language={currentLang?.monacoLang || 'javascript'}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          loading={
            <div className="h-full flex items-center justify-center bg-[#050507]">
              <div className="flex flex-col items-center gap-3">
                <div className="size-10 rounded-xl bg-[#8b4513]/10 flex items-center justify-center">
                  <Loader2Icon className="size-5 text-[#d4a574] animate-spin" />
                </div>
                <span className="font-mono text-sm text-[#71717a]">Loading editor...</span>
              </div>
            </div>
          }
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 16, bottom: 16 },
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            lineHeight: 1.6,
            letterSpacing: 0.5,
            renderLineHighlight: 'line',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
            contextmenu: true,
            folding: true,
            foldingHighlight: true,
            showFoldingControls: 'mouseover',
            bracketPairColorization: { enabled: true },
            guides: {
              bracketPairs: true,
              indentation: true,
            },
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          EDITOR FOOTER
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 px-4 py-2 bg-[#0a0a0f] border-t border-[#8b4513]/10 flex items-center justify-between">
        <div className="flex items-center gap-4 font-mono text-[10px] text-[#71717a]">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#4ade80]" />
            Ready
          </span>
          <span className="hidden sm:inline">{currentLang?.name}</span>
        </div>
        
        <div className="flex items-center gap-4 font-mono text-[10px] text-[#71717a]">
          <span className="hidden sm:inline">UTF-8</span>
          <span>Lines: {code?.split('\n').length || 0}</span>
        </div>
      </div>
    </div>
  );
}

export default CodeEditorPanel;