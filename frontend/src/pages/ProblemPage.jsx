import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { 
  GripVerticalIcon, 
  GripHorizontalIcon,
  TerminalIcon,
  ZapIcon
} from "lucide-react";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId]?.starterCode?.javascript || "");
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // Update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#8b4513', '#d4a574', '#4ade80', '#fbbf24'],
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
      colors: ['#8b4513', '#d4a574', '#4ade80', '#fbbf24'],
    });
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);
    return normalizedActual === normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job! 🎉", {
          style: {
            background: '#16161e',
            color: '#4ade80',
            border: '1px solid rgba(74, 222, 128, 0.3)',
            fontFamily: 'JetBrains Mono, monospace',
          },
          iconTheme: {
            primary: '#4ade80',
            secondary: '#16161e',
          },
        });
      } else {
        toast.error("Tests failed. Check your output!", {
          style: {
            background: '#16161e',
            color: '#f87171',
            border: '1px solid rgba(248, 113, 113, 0.3)',
            fontFamily: 'JetBrains Mono, monospace',
          },
        });
      }
    } else {
      toast.error("Code execution failed!", {
        style: {
          background: '#16161e',
          color: '#f87171',
          border: '1px solid rgba(248, 113, 113, 0.3)',
          fontFamily: 'JetBrains Mono, monospace',
        },
      });
    }
  };

  return (
    <div className="h-screen bg-[#0a0a0f] flex flex-col overflow-hidden">
      {/* Background Effects - Subtle */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8b4513]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4a574]/3 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 relative z-10 overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          {/* ════════════════════════════════════════════════════════════
              LEFT PANEL - PROBLEM DESCRIPTION
             ════════════════════════════════════════════════════════════ */}
          <Panel defaultSize={40} minSize={25} maxSize={60}>
            <div className="h-full p-2 sm:p-3">
              <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden flex flex-col">
                <ProblemDescription
                  problem={currentProblem}
                  currentProblemId={currentProblemId}
                  onProblemChange={handleProblemChange}
                  allProblems={Object.values(PROBLEMS)}
                />
              </div>
            </div>
          </Panel>

          {/* Vertical Resize Handle */}
          <PanelResizeHandle className="w-2 sm:w-3 flex items-center justify-center group hover:bg-[#8b4513]/10 transition-colors">
            <div className="flex flex-col items-center gap-0.5 py-8 px-1 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 group-hover:border-[#8b4513]/40 group-hover:bg-[#8b4513]/10 transition-all">
              <GripVerticalIcon className="size-4 text-[#71717a] group-hover:text-[#d4a574] transition-colors" />
            </div>
          </PanelResizeHandle>

          {/* ════════════════════════════════════════════════════════════
              RIGHT PANEL - CODE EDITOR & OUTPUT
             ════════════════════════════════════════════════════════════ */}
          <Panel defaultSize={60} minSize={40}>
            <div className="h-full p-2 sm:p-3 pl-0">
              <PanelGroup direction="vertical" className="h-full">
                {/* Top - Code Editor */}
                <Panel defaultSize={65} minSize={30}>
                  <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden flex flex-col">
                    <CodeEditorPanel
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={setCode}
                      onRunCode={handleRunCode}
                    />
                  </div>
                </Panel>

                {/* Horizontal Resize Handle */}
                <PanelResizeHandle className="h-2 sm:h-3 flex items-center justify-center group hover:bg-[#8b4513]/10 transition-colors">
                  <div className="flex items-center gap-0.5 px-8 py-1 rounded-full bg-[#16161e]/80 border border-[#8b4513]/20 group-hover:border-[#8b4513]/40 group-hover:bg-[#8b4513]/10 transition-all">
                    <GripHorizontalIcon className="size-4 text-[#71717a] group-hover:text-[#d4a574] transition-colors" />
                  </div>
                </PanelResizeHandle>

                {/* Bottom - Output Panel */}
                <Panel defaultSize={35} minSize={20}>
                  <div className="h-full rounded-xl bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#8b4513]/20 overflow-hidden flex flex-col">
                    <OutputPanel output={output} isRunning={isRunning} />
                  </div>
                </Panel>
              </PanelGroup>
            </div>
          </Panel>
        </PanelGroup>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 px-4 py-2 bg-[#050507]/80 border-t border-[#8b4513]/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TerminalIcon className="size-3 text-[#71717a]" />
            <span className="font-mono text-[10px] text-[#71717a]">
              {currentProblem?.title}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className={`
              size-1.5 rounded-full
              ${isRunning ? "bg-[#fbbf24] animate-pulse" : "bg-[#4ade80]"}
            `} />
            <span className="font-mono text-[10px] text-[#71717a]">
              {isRunning ? "Running..." : "Ready"}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#71717a]">
            Language: <span className="text-[#d4a574]">{selectedLanguage}</span>
          </span>
          <div className="hidden sm:flex items-center gap-2">
            <ZapIcon className="size-3 text-[#71717a]" />
            <span className="font-mono text-[10px] text-[#71717a]">Piston API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemPage;