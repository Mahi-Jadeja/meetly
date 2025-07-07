import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user?.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
        {/* ══════════════════════════════════════════════════════════════════════
            BACKGROUND EFFECTS
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#8b4513]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#d4a574]/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b4513]/3 rounded-full blur-[150px]" />
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            NAVBAR
           ══════════════════════════════════════════════════════════════════════ */}
        <Navbar />

        {/* ══════════════════════════════════════════════════════════════════════
            MAIN CONTENT
           ══════════════════════════════════════════════════════════════════════ */}
        <main className="relative z-10">
          {/* Welcome Section */}
          <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

          {/* Dashboard Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            
            {/* Stats & Active Sessions Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Stats Cards - Takes 1 column on lg */}
              <div className="lg:col-span-1">
                <StatsCards
                  activeSessionsCount={activeSessions.length}
                  recentSessionsCount={recentSessions.length}
                />
              </div>

              {/* Active Sessions - Takes 2 columns on lg */}
              <div className="lg:col-span-2">
                <ActiveSessions
                  sessions={activeSessions}
                  isLoading={loadingActiveSessions}
                  isUserInSession={isUserInSession}
                />
              </div>
            </div>

            {/* Recent Sessions - Full width */}
            <RecentSessions 
              sessions={recentSessions} 
              isLoading={loadingRecentSessions} 
            />
          </div>
        </main>

        {/* ══════════════════════════════════════════════════════════════════════
            DECORATIVE ELEMENTS
           ══════════════════════════════════════════════════════════════════════ */}
        {/* Floating terminal hint - bottom right */}
        <div className="fixed bottom-6 right-6 hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16161e]/80 border border-[#8b4513]/20 backdrop-blur-sm font-mono text-xs text-[#71717a] animate-[fade-in_1s_ease-out]">
          <span className="text-[#4ade80]">$</span>
          <span>meetly --status</span>
          <span className="text-[#4ade80]">online</span>
          <span className="size-1.5 rounded-full bg-[#4ade80] animate-pulse ml-1" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          CREATE SESSION MODAL
         ══════════════════════════════════════════════════════════════════════ */}
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;