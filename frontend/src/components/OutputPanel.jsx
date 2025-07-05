import { 
  TerminalIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  Loader2Icon,
  CopyIcon,
  CheckIcon,
  Trash2Icon,
  PlayIcon,
  AlertTriangleIcon
} from "lucide-react";
import { useState } from "react";

function OutputPanel({ output, isRunning }) {
  const [copied, setCopied] = useState(false);

  const handleCopyOutput = async () => {
    const textToCopy = output?.output || output?.error || '';
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Determine output status
  const getOutputStatus = () => {
    if (isRunning) return 'running';
    if (output === null) return 'idle';
    if (output.success) return 'success';
    return 'error';
  };

  const status = getOutputStatus();

  const statusConfig = {
    idle: {
      icon: TerminalIcon,
      color: 'text-[#71717a]',
      bgColor: 'bg-[#71717a]/10',
      label: 'Waiting',
    },
    running: {
      icon: Loader2Icon,
      color: 'text-[#fbbf24]',
      bgColor: 'bg-[#fbbf24]/10',
      label: 'Running',
      animate: true,
    },
    success: {
      icon: CheckCircleIcon,
      color: 'text-[#4ade80]',
      bgColor: 'bg-[#4ade80]/10',
      label: 'Success',
    },
    error: {
      icon: XCircleIcon,
      color: 'text-[#f87171]',
      bgColor: 'bg-[#f87171]/10',
      label: 'Error',
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="h-full flex flex-col bg-[#050507]">
      {/* ═══════════════════════════════════════════════════════════════════
          OUTPUT HEADER
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Terminal dots */}
          <div className="hidden sm:flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Title */}
          <div className="flex items-center gap-2">
            <TerminalIcon className="size-4 text-[#d4a574]" />
            <span className="font-mono text-sm text-[#a1a1aa]">Output</span>
          </div>

          {/* Status Badge */}
          <div className={`
            flex items-center gap-1.5 px-2 py-1 rounded-lg
            ${currentStatus.bgColor}
          `}>
            <StatusIcon className={`size-3 ${currentStatus.color} ${currentStatus.animate ? 'animate-spin' : ''}`} />
            <span className={`font-mono text-[10px] font-medium ${currentStatus.color}`}>
              {currentStatus.label}
            </span>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-2">
          {output && (
            <button
              onClick={handleCopyOutput}
              className="p-2 rounded-lg text-[#71717a] hover:text-[#f5f5f5] hover:bg-[#16161e] transition-all duration-300"
              title="Copy output"
            >
              {copied ? (
                <CheckIcon className="size-4 text-[#4ade80]" />
              ) : (
                <CopyIcon className="size-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          OUTPUT CONTENT
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 overflow-auto p-4 scrollbar-thin scrollbar-thumb-[#8b4513]/30 scrollbar-track-transparent">
        {/* Idle State */}
        {status === 'idle' && (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="size-16 rounded-2xl bg-[#16161e] border border-dashed border-[#8b4513]/20 flex items-center justify-center mb-4">
              <PlayIcon className="size-8 text-[#71717a]/50" />
            </div>
            <p className="font-mono text-sm text-[#71717a] mb-2">No output yet</p>
            <p className="font-mono text-xs text-[#71717a]/70">
              Click "Run Code" to execute your solution
            </p>
            
            {/* Terminal hint */}
            <div className="mt-6 px-4 py-2 rounded-lg bg-[#0a0a0f] border border-[#8b4513]/10">
              <span className="font-mono text-[10px] text-[#71717a]">
                <span className="text-[#4ade80]">$</span> waiting for execution...
              </span>
            </div>
          </div>
        )}

        {/* Running State */}
        {status === 'running' && (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="relative mb-4">
              <div className="size-16 rounded-2xl bg-[#fbbf24]/10 border border-[#fbbf24]/20 flex items-center justify-center">
                <Loader2Icon className="size-8 text-[#fbbf24] animate-spin" />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#fbbf24]/30 animate-ping" />
            </div>
            <p className="font-mono text-sm text-[#fbbf24] mb-2">Executing code...</p>
            <p className="font-mono text-xs text-[#71717a]">
              This may take a few seconds
            </p>
            
            {/* Terminal animation */}
            <div className="mt-6 px-4 py-2 rounded-lg bg-[#0a0a0f] border border-[#fbbf24]/20">
              <span className="font-mono text-[10px] text-[#71717a]">
                <span className="text-[#fbbf24]">$</span> running
                <span className="inline-flex ml-1">
                  <span className="animate-[blink_1s_infinite]">.</span>
                  <span className="animate-[blink_1s_infinite_0.2s]">.</span>
                  <span className="animate-[blink_1s_infinite_0.4s]">.</span>
                </span>
              </span>
            </div>
          </div>
        )}

        {/* Success State */}
        {status === 'success' && (
          <div className="space-y-3">
            {/* Success header */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#4ade80]/5 border border-[#4ade80]/20">
              <CheckCircleIcon className="size-4 text-[#4ade80]" />
              <span className="font-mono text-xs text-[#4ade80]">Execution completed successfully</span>
            </div>
            
            {/* Output content */}
            <div className="relative">
              <pre className="font-mono text-sm text-[#4ade80] whitespace-pre-wrap leading-relaxed p-4 rounded-xl bg-[#16161e]/50 border border-[#4ade80]/10">
                {output.output}
              </pre>
              
              {/* Line numbers decoration */}
              <div className="absolute top-4 left-4 flex flex-col font-mono text-[10px] text-[#71717a] select-none opacity-0">
                {output.output?.split('\n').map((_, i) => (
                  <span key={i} className="leading-relaxed">{i + 1}</span>
                ))}
              </div>
            </div>
            
            {/* Terminal footer */}
            <div className="px-3 py-2 rounded-lg bg-[#0a0a0f] border border-[#8b4513]/10">
              <span className="font-mono text-[10px] text-[#71717a]">
                <span className="text-[#4ade80]">✓</span> Process exited with code 0
              </span>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="space-y-3">
            {/* Error header */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f87171]/5 border border-[#f87171]/20">
              <XCircleIcon className="size-4 text-[#f87171]" />
              <span className="font-mono text-xs text-[#f87171]">Execution failed</span>
            </div>
            
            {/* Output content (if any) */}
            {output.output && (
              <div className="relative">
                <pre className="font-mono text-sm text-[#a1a1aa] whitespace-pre-wrap leading-relaxed p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
                  {output.output}
                </pre>
              </div>
            )}
            
            {/* Error content */}
            <div className="relative">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#f87171]/5 border-b border-[#f87171]/10 rounded-t-xl">
                <AlertTriangleIcon className="size-3 text-[#f87171]" />
                <span className="font-mono text-[10px] text-[#f87171]">Error Output</span>
              </div>
              <pre className="font-mono text-sm text-[#f87171] whitespace-pre-wrap leading-relaxed p-4 rounded-b-xl bg-[#16161e]/50 border border-t-0 border-[#f87171]/10">
                {output.error}
              </pre>
            </div>
            
            {/* Terminal footer */}
            <div className="px-3 py-2 rounded-lg bg-[#0a0a0f] border border-[#f87171]/10">
              <span className="font-mono text-[10px] text-[#71717a]">
                <span className="text-[#f87171]">✗</span> Process exited with error
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          OUTPUT FOOTER
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 px-4 py-2 bg-[#0a0a0f] border-t border-[#8b4513]/10 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#71717a]">
          <TerminalIcon className="size-3" />
          <span>Terminal</span>
        </div>
        
        <div className="font-mono text-[10px] text-[#71717a]">
          {status === 'success' && output?.output && (
            <span>Lines: {output.output.split('\n').length}</span>
          )}
          {status === 'idle' && <span>Awaiting input</span>}
          {status === 'running' && <span>Processing...</span>}
          {status === 'error' && <span>Check errors above</span>}
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;