import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { 
  Loader2Icon, 
  LogOutIcon, 
  PhoneOffIcon,
  GripVerticalIcon,
  GripHorizontalIcon,
  UsersIcon,
  CrownIcon,
  ZapIcon,
  BookOpenIcon,
  LightbulbIcon,
  AlertTriangleIcon,
  TerminalIcon,
  WifiIcon,
  WifiOffIcon,
  FileTextIcon,
  HashIcon,
  CheckCircleIcon
} from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";

import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";

// Difficulty badge styles
const getDifficultyStyles = (difficulty) => {
  const styles = {
    easy: {
      bg: "bg-[#4ade80]/10",
      text: "text-[#4ade80]",
      border: "border-[#4ade80]/30",
      glow: "shadow-[0_0_10px_rgba(74,222,128,0.2)]",
    },
    medium: {
      bg: "bg-[#fbbf24]/10",
      text: "text-[#fbbf24]",
      border: "border-[#fbbf24]/30",
      glow: "shadow-[0_0_10px_rgba(251,191,36,0.2)]",
    },
    hard: {
      bg: "bg-[#f87171]/10",
      text: "text-[#f87171]",
      border: "border-[#f87171]/30",
      glow: "shadow-[0_0_10px_rgba(248,113,113,0.2)]",
    },
  };
  return styles[difficulty?.toLowerCase()] || styles.easy;
};

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
    session,
    loadingSession,
    isHost,
    isParticipant
  );

  // Find the problem data based on session problem title
  const problemData = session?.problem
    ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
    : null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(problemData?.starterCode?.[selectedLanguage] || "");

  // Auto-join session if user is not already a participant and not the host
  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (isHost || isParticipant) return;

    joinSessionMutation.mutate(id, { onSuccess: refetch });
  }, [session, user, loadingSession, isHost, isParticipant, id]);

  // Redirect the "participant" when session ends
  useEffect(() => {
    if (!session || loadingSession) return;
    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  // Update code when problem loads or changes
  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData.starterCode[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    const starterCode = problemData?.starterCode?.[newLang] || "";
    setCode(starterCode);
    setOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure you want to end this session? All participants will be notified.")) {
      endSessionMutation.mutate(id, { onSuccess: () => navigate("/dashboard") });
    }
  };

  const difficultyStyles = getDifficultyStyles(session?.difficulty);

  return (
    <div className="h-screen bg-[#0a0a0f] flex flex-col overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════════════
          BACKGROUND EFFECTS
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8b4513]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4a574]/3 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 relative z-10 overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          
          {/* ════════════════════════════════════════════════════════════
              LEFT PANEL - PROBLEM & CODE EDITOR
             ════════════════════════════════════════════════════════════ */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full p-2 sm:p-3">
              <PanelGroup direction="vertical" className="h-full">
                
                {/* Problem Description Panel */}
                <Panel defaultSize={50} minSize={20}>
                  <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden flex flex-col">
                    
                    {/* Terminal Header */}
                    <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="size-3 rounded-full bg-[#ff5f57]" />
                          <span className="size-3 rounded-full bg-[#febc2e]" />
                          <span className="size-3 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <FileTextIcon className="size-4 text-[#d4a574]" />
                          <span className="font-mono text-sm text-[#a1a1aa]">session.md</span>
                        </div>
                      </div>

                      {/* Session Status */}
                      <div className="flex items-center gap-2">
                        {session?.status === "active" ? (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
                            <span className="relative flex size-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                              <span className="relative inline-flex rounded-full size-1.5 bg-[#4ade80]" />
                            </span>
                            <span className="font-mono text-[10px] text-[#4ade80]">LIVE</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#71717a]/10 border border-[#71717a]/20">
                            <span className="font-mono text-[10px] text-[#71717a]">ENDED</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#8b4513]/30 scrollbar-track-transparent">
                      
                      {/* Session Header */}
                      <div className="p-4 border-b border-[#8b4513]/10">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="space-y-2">
                            <h1 className="text-xl sm:text-2xl font-bold text-[#f5f5f5]">
                              {session?.problem || "Loading..."}
                            </h1>
                            
                            {problemData?.category && (
                              <div className="flex items-center gap-2">
                                <HashIcon className="size-3 text-[#71717a]" />
                                <span className="font-mono text-xs text-[#71717a]">
                                  {problemData.category}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Difficulty Badge */}
                          <div className={`
                            shrink-0 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold
                            ${difficultyStyles.bg} ${difficultyStyles.text} 
                            border ${difficultyStyles.border} ${difficultyStyles.glow}
                          `}>
                            <div className="flex items-center gap-1.5">
                              <ZapIcon className="size-3" />
                              {session?.difficulty?.charAt(0).toUpperCase() + session?.difficulty?.slice(1) || "Easy"}
                            </div>
                          </div>
                        </div>

                        {/* Session Info */}
                        <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
                          <div className="flex items-center gap-2">
                            <CrownIcon className="size-4 text-[#fbbf24]" />
                            <span className="font-mono text-xs text-[#a1a1aa]">
                              Host: <span className="text-[#f5f5f5]">{session?.host?.name || "..."}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="size-4 text-[#60a5fa]" />
                            <span className="font-mono text-xs text-[#a1a1aa]">
                              {session?.participant ? "2" : "1"}/2 participants
                            </span>
                          </div>
                          
                          {/* End Session Button (Host Only) */}
                          {isHost && session?.status === "active" && (
                            <button
                              onClick={handleEndSession}
                              disabled={endSessionMutation.isPending}
                              className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-medium bg-[#f87171]/10 text-[#f87171] border border-[#f87171]/20 hover:bg-[#f87171]/20 hover:border-[#f87171]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {endSessionMutation.isPending ? (
                                <Loader2Icon className="size-3 animate-spin" />
                              ) : (
                                <LogOutIcon className="size-3" />
                              )}
                              End Session
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Problem Content */}
                      <div className="p-4 space-y-6">
                        {/* Description */}
                        {problemData?.description && (
                          <section className="space-y-3">
                            <div className="flex items-center gap-2">
                              <BookOpenIcon className="size-4 text-[#d4a574]" />
                              <h2 className="font-mono font-semibold text-[#f5f5f5]">Description</h2>
                            </div>
                            <div className="p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10 space-y-3">
                              <p className="text-[#a1a1aa] leading-relaxed">
                                {problemData.description.text}
                              </p>
                              {problemData.description.notes?.map((note, idx) => (
                                <p key={idx} className="text-[#a1a1aa] leading-relaxed">
                                  {note}
                                </p>
                              ))}
                            </div>
                          </section>
                        )}

                        {/* Examples */}
                        {problemData?.examples && problemData.examples.length > 0 && (
                          <section className="space-y-4">
                            <div className="flex items-center gap-2">
                              <LightbulbIcon className="size-4 text-[#d4a574]" />
                              <h2 className="font-mono font-semibold text-[#f5f5f5]">Examples</h2>
                            </div>
                            <div className="space-y-4">
                              {problemData.examples.map((example, idx) => (
                                <div 
                                  key={idx} 
                                  className="rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10 overflow-hidden"
                                >
                                  <div className="flex items-center gap-2 px-4 py-2 bg-[#8b4513]/5 border-b border-[#8b4513]/10">
                                    <span className="size-5 rounded bg-[#8b4513]/20 flex items-center justify-center font-mono text-xs text-[#d4a574]">
                                      {idx + 1}
                                    </span>
                                    <span className="font-mono text-sm text-[#a1a1aa]">Example {idx + 1}</span>
                                  </div>
                                  <div className="p-4 font-mono text-sm space-y-3">
                                    <div className="flex gap-3">
                                      <span className="shrink-0 text-[#4ade80] font-semibold min-w-[70px]">Input:</span>
                                      <code className="text-[#f5f5f5] bg-[#0a0a0f] px-2 py-0.5 rounded">
                                        {example.input}
                                      </code>
                                    </div>
                                    <div className="flex gap-3">
                                      <span className="shrink-0 text-[#60a5fa] font-semibold min-w-[70px]">Output:</span>
                                      <code className="text-[#f5f5f5] bg-[#0a0a0f] px-2 py-0.5 rounded">
                                        {example.output}
                                      </code>
                                    </div>
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
                        )}

                        {/* Constraints */}
                        {problemData?.constraints && problemData.constraints.length > 0 && (
                          <section className="space-y-3">
                            <div className="flex items-center gap-2">
                              <AlertTriangleIcon className="size-4 text-[#d4a574]" />
                              <h2 className="font-mono font-semibold text-[#f5f5f5]">Constraints</h2>
                            </div>
                            <div className="p-4 rounded-xl bg-[#16161e]/50 border border-[#8b4513]/10">
                              <ul className="space-y-2">
                                {problemData.constraints.map((constraint, idx) => (
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
                        )}
                      </div>
                    </div>
                  </div>
                </Panel>

                {/* Horizontal Resize Handle */}
                <PanelResizeHandle className="h-2 sm:h-3 flex items-center justify-center group">
                  <div className="flex items-center gap-0.5 px-8 py-1 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 group-hover:border-[#8b4513]/40 group-hover:bg-[#8b4513]/10 transition-all">
                    <GripHorizontalIcon className="size-4 text-[#71717a] group-hover:text-[#d4a574] transition-colors" />
                  </div>
                </PanelResizeHandle>

                {/* Code Editor & Output */}
                <Panel defaultSize={50} minSize={20}>
                  <PanelGroup direction="vertical" className="h-full">
                    {/* Code Editor */}
                    <Panel defaultSize={70} minSize={30}>
                      <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden">
                        <CodeEditorPanel
                          selectedLanguage={selectedLanguage}
                          code={code}
                          isRunning={isRunning}
                          onLanguageChange={handleLanguageChange}
                          onCodeChange={(value) => setCode(value)}
                          onRunCode={handleRunCode}
                        />
                      </div>
                    </Panel>

                    {/* Resize Handle */}
                    <PanelResizeHandle className="h-2 sm:h-3 flex items-center justify-center group">
                      <div className="flex items-center gap-0.5 px-8 py-1 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 group-hover:border-[#8b4513]/40 group-hover:bg-[#8b4513]/10 transition-all">
                        <GripHorizontalIcon className="size-4 text-[#71717a] group-hover:text-[#d4a574] transition-colors" />
                      </div>
                    </PanelResizeHandle>

                    {/* Output Panel */}
                    <Panel defaultSize={30} minSize={15}>
                      <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden">
                        <OutputPanel output={output} isRunning={isRunning} />
                      </div>
                    </Panel>
                  </PanelGroup>
                </Panel>
              </PanelGroup>
            </div>
          </Panel>

          {/* Vertical Resize Handle */}
          <PanelResizeHandle className="w-2 sm:w-3 flex items-center justify-center group">
            <div className="flex flex-col items-center gap-0.5 py-8 px-1 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 group-hover:border-[#8b4513]/40 group-hover:bg-[#8b4513]/10 transition-all">
              <GripVerticalIcon className="size-4 text-[#71717a] group-hover:text-[#d4a574] transition-colors" />
            </div>
          </PanelResizeHandle>

          {/* ════════════════════════════════════════════════════════════
              RIGHT PANEL - VIDEO CALL & CHAT
             ════════════════════════════════════════════════════════════ */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full p-2 sm:p-3 pl-0">
              <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden">
                
                {/* Loading State */}
                {isInitializingCall && (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="relative mx-auto">
                        <div className="size-16 rounded-2xl bg-[#8b4513]/10 border border-[#8b4513]/20 flex items-center justify-center">
                          <Loader2Icon className="size-8 text-[#d4a574] animate-spin" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#8b4513]/30 animate-ping" />
                      </div>
                      <div>
                        <p className="font-mono text-lg text-[#f5f5f5]">Connecting...</p>
                        <p className="font-mono text-sm text-[#71717a] mt-1">Setting up video call</p>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-[#050507] border border-[#8b4513]/10 inline-block">
                        <span className="font-mono text-xs text-[#71717a]">
                          <span className="text-[#4ade80]">$</span> stream connect --call={id?.slice(-8)}
                          <span className="animate-[blink_1s_infinite] ml-1">_</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {!isInitializingCall && (!streamClient || !call) && (
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-center space-y-4 max-w-sm">
                      <div className="size-20 mx-auto rounded-2xl bg-[#f87171]/10 border border-[#f87171]/20 flex items-center justify-center">
                        <WifiOffIcon className="size-10 text-[#f87171]" />
                      </div>
                      <div>
                        <h2 className="font-mono text-xl font-semibold text-[#f5f5f5]">Connection Failed</h2>
                        <p className="font-mono text-sm text-[#71717a] mt-2">
                          Unable to connect to the video call. Please check your connection and try again.
                        </p>
                      </div>
                      <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2.5 rounded-xl font-mono text-sm font-medium bg-[#8b4513]/20 text-[#d4a574] border border-[#8b4513]/30 hover:bg-[#8b4513]/30 transition-all duration-300"
                      >
                        Retry Connection
                      </button>
                      <div className="px-4 py-2 rounded-lg bg-[#050507] border border-[#f87171]/10">
                        <span className="font-mono text-xs text-[#71717a]">
                          <span className="text-[#f87171]">✗</span> connection refused
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Call UI */}
                {!isInitializingCall && streamClient && call && (
                  <div className="h-full">
                    <StreamVideo client={streamClient}>
                      <StreamCall call={call}>
                        <VideoCallUI chatClient={chatClient} channel={channel} />
                      </StreamCall>
                    </StreamVideo>
                  </div>
                )}
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          STATUS BAR
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 px-4 py-2 bg-[#050507]/80 border-t border-[#8b4513]/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TerminalIcon className="size-3 text-[#71717a]" />
            <span className="font-mono text-[10px] text-[#71717a]">
              Session: <span className="text-[#d4a574]">{id?.slice(-8)}</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {session?.status === "active" ? (
              <>
                <span className="size-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="font-mono text-[10px] text-[#4ade80]">Active</span>
              </>
            ) : (
              <>
                <span className="size-1.5 rounded-full bg-[#71717a]" />
                <span className="font-mono text-[10px] text-[#71717a]">Ended</span>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-[10px] text-[#71717a]">
            {isHost ? "👑 Host" : "👤 Participant"}
          </span>
          <span className="font-mono text-[10px] text-[#71717a]">
            {selectedLanguage}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SessionPage;