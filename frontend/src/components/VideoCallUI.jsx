import {
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { 
  Loader2Icon, 
  MessageSquareIcon, 
  UsersIcon, 
  XIcon,
  VideoIcon,
  VideoOffIcon,
  MicIcon,
  MicOffIcon,
  PhoneOffIcon,
  MonitorUpIcon,
  WifiIcon,
  SettingsIcon
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Stream hooks
  const { 
    useCallCallingState, 
    useParticipantCount,
    useMicrophoneState,
    useCameraState,
    useScreenShareState
  } = useCallStateHooks();

  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  
  // Microphone state
  const { microphone, isMute: isMicMuted } = useMicrophoneState();
  
  // Camera state
  const { camera, isMute: isCameraMuted } = useCameraState();
  
  // Screen share state
  const { screenShare, isSharingScreen } = useScreenShareState();

  // Toggle handlers
  const toggleMic = async () => {
    try {
      if (isMicMuted) {
        await microphone.enable();
      } else {
        await microphone.disable();
      }
    } catch (error) {
      console.error("Failed to toggle microphone:", error);
    }
  };

  const toggleCamera = async () => {
    try {
      if (isCameraMuted) {
        await camera.enable();
      } else {
        await camera.disable();
      }
    } catch (error) {
      console.error("Failed to toggle camera:", error);
    }
  };

  const toggleScreenShare = async () => {
    try {
      if (isSharingScreen) {
        await screenShare.disable();
      } else {
        await screenShare.enable();
      }
    } catch (error) {
      console.error("Failed to toggle screen share:", error);
    }
  };

  const handleLeaveCall = () => {
    navigate("/dashboard");
  };

  // Joining state
  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center bg-[#050507]">
        <div className="text-center space-y-4">
          <div className="relative mx-auto">
            <div className="size-16 rounded-2xl bg-[#8b4513]/10 border border-[#8b4513]/20 flex items-center justify-center">
              <Loader2Icon className="size-8 text-[#d4a574] animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-2xl border-2 border-[#8b4513]/30 animate-ping" />
          </div>
          <div>
            <p className="font-mono text-lg text-[#f5f5f5]">Joining call...</p>
            <p className="font-mono text-sm text-[#71717a] mt-1">Connecting to participants</p>
          </div>
          
          <div className="px-4 py-2 rounded-lg bg-[#0a0a0f] border border-[#8b4513]/10 inline-block">
            <span className="font-mono text-xs text-[#71717a]">
              <span className="text-[#4ade80]">$</span> join --call
              <span className="inline-flex ml-1">
                <span className="animate-[blink_1s_infinite]">.</span>
                <span className="animate-[blink_1s_infinite_0.2s]">.</span>
                <span className="animate-[blink_1s_infinite_0.4s]">.</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#050507]">
      {/* ═══════════════════════════════════════════════════════════════════
          HEADER BAR
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2">
            <VideoIcon className="size-4 text-[#d4a574]" />
            <span className="font-mono text-sm text-[#a1a1aa]">Video Call</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#16161e] border border-[#8b4513]/20">
            <UsersIcon className="size-4 text-[#4ade80]" />
            <span className="font-mono text-sm text-[#f5f5f5]">
              {participantCount}
            </span>
            <span className="hidden sm:inline font-mono text-xs text-[#71717a]">
              {participantCount === 1 ? "participant" : "participants"}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
            <WifiIcon className="size-3 text-[#4ade80]" />
            <span className="font-mono text-[10px] text-[#4ade80]">Connected</span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-sm
                transition-all duration-300
                ${isChatOpen 
                  ? "bg-[#8b4513]/20 text-[#d4a574] border border-[#8b4513]/40 shadow-[0_0_20px_rgba(139,69,19,0.2)]" 
                  : "bg-[#16161e] text-[#a1a1aa] border border-[#8b4513]/20 hover:border-[#8b4513]/40 hover:text-[#f5f5f5]"
                }
              `}
            >
              <MessageSquareIcon className="size-4" />
              <span className="hidden sm:inline">Chat</span>
              {isChatOpen && (
                <span className="size-1.5 rounded-full bg-[#4ade80]" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN CONTENT
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex gap-3 p-3 overflow-hidden">
        
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          {/* Video Area */}
          <div className="flex-1 bg-[#0a0a0f] rounded-xl border border-[#8b4513]/10 overflow-hidden relative">
            <SpeakerLayout />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CUSTOM CALL CONTROLS
             ═════════════════════════════════════════════════════════════ */}
          <div className="shrink-0 p-4 rounded-xl bg-[#16161e]/80 backdrop-blur-sm border border-[#8b4513]/20">
            <div className="flex items-center justify-center gap-3">
              
              {/* Microphone Button */}
              <button
                onClick={toggleMic}
                className={`
                  group relative flex items-center justify-center
                  w-12 h-12 rounded-full
                  transition-all duration-200
                  ${isMicMuted 
                    ? "bg-red-500/20 border-2 border-red-500/50 text-red-400 hover:bg-red-500/30" 
                    : "bg-[#1e1e2e] border-2 border-[#8b4513]/40 text-[#d4a574] hover:border-[#8b4513] hover:bg-[#8b4513]/20"
                  }
                `}
                title={isMicMuted ? "Unmute microphone" : "Mute microphone"}
              >
                {isMicMuted ? (
                  <MicOffIcon className="size-5" />
                ) : (
                  <MicIcon className="size-5" />
                )}
              </button>

              {/* Camera Button */}
              <button
                onClick={toggleCamera}
                className={`
                  group relative flex items-center justify-center
                  w-12 h-12 rounded-full
                  transition-all duration-200
                  ${isCameraMuted 
                    ? "bg-red-500/20 border-2 border-red-500/50 text-red-400 hover:bg-red-500/30" 
                    : "bg-[#1e1e2e] border-2 border-[#8b4513]/40 text-[#d4a574] hover:border-[#8b4513] hover:bg-[#8b4513]/20"
                  }
                `}
                title={isCameraMuted ? "Turn on camera" : "Turn off camera"}
              >
                {isCameraMuted ? (
                  <VideoOffIcon className="size-5" />
                ) : (
                  <VideoIcon className="size-5" />
                )}
              </button>

              {/* Screen Share Button */}
              <button
                onClick={toggleScreenShare}
                className={`
                  group relative flex items-center justify-center
                  w-12 h-12 rounded-full
                  transition-all duration-200
                  ${isSharingScreen 
                    ? "bg-[#4ade80]/20 border-2 border-[#4ade80]/50 text-[#4ade80] hover:bg-[#4ade80]/30" 
                    : "bg-[#1e1e2e] border-2 border-[#8b4513]/40 text-[#d4a574] hover:border-[#8b4513] hover:bg-[#8b4513]/20"
                  }
                `}
                title={isSharingScreen ? "Stop sharing" : "Share screen"}
              >
                <MonitorUpIcon className="size-5" />
              </button>

              {/* Divider */}
              <div className="w-px h-8 bg-[#8b4513]/20 mx-2" />

              {/* Leave Call Button */}
              <button
                onClick={handleLeaveCall}
                className="
                  group relative flex items-center justify-center
                  w-12 h-12 rounded-full
                  bg-red-600 border-2 border-red-600
                  text-white
                  hover:bg-red-700 hover:border-red-700
                  transition-all duration-200
                  hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
                "
                title="Leave call"
              >
                <PhoneOffIcon className="size-5" />
              </button>
            </div>
            
            {/* Control labels */}
            <div className="mt-3 pt-3 border-t border-[#8b4513]/10 flex items-center justify-center gap-6">
              <span className="font-mono text-[10px] text-[#71717a] flex flex-col items-center gap-1">
                <span className={isMicMuted ? "text-red-400" : "text-[#a1a1aa]"}>
                  {isMicMuted ? "Muted" : "Mic On"}
                </span>
              </span>
              <span className="font-mono text-[10px] text-[#71717a] flex flex-col items-center gap-1">
                <span className={isCameraMuted ? "text-red-400" : "text-[#a1a1aa]"}>
                  {isCameraMuted ? "Cam Off" : "Cam On"}
                </span>
              </span>
              <span className="font-mono text-[10px] text-[#71717a] flex flex-col items-center gap-1">
                <span className={isSharingScreen ? "text-[#4ade80]" : "text-[#a1a1aa]"}>
                  {isSharingScreen ? "Sharing" : "Share"}
                </span>
              </span>
              <span className="font-mono text-[10px] text-red-400">
                Leave
              </span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            CHAT PANEL
           ═════════════════════════════════════════════════════════════════ */}
        {chatClient && channel && (
          <div 
            className={`
              shrink-0 flex flex-col rounded-xl bg-[#0a0a0f] border border-[#8b4513]/20 overflow-hidden
              transition-all duration-300 ease-out
              ${isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0 border-0"}
            `}
          >
            {isChatOpen && (
              <>
                <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8b4513]/10 to-transparent border-b border-[#8b4513]/20">
                  <div className="flex items-center gap-2">
                    <MessageSquareIcon className="size-4 text-[#d4a574]" />
                    <h3 className="font-mono font-semibold text-sm text-[#f5f5f5]">Session Chat</h3>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="p-1.5 rounded-lg text-[#71717a] hover:text-[#f5f5f5] hover:bg-[#8b4513]/10 transition-all duration-300"
                  >
                    <XIcon className="size-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-hidden">
                  <Chat client={chatClient} theme="str-chat__theme-dark">
                    <Channel channel={channel}>
                      <Window>
                        <MessageList />
                        <MessageInput />
                      </Window>
                      <Thread />
                    </Channel>
                  </Chat>
                </div>

                <div className="shrink-0 px-3 py-2 bg-[#050507] border-t border-[#8b4513]/10">
                  <span className="font-mono text-[10px] text-[#71717a]">
                    <span className="text-[#4ade80]">●</span> Messages are synced in real-time
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoCallUI;