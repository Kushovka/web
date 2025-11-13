import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import Header from "../components/Header";
import BegginingContent from "../components/contents/BegginingContent";
import LogsContent from "../components/contents/LogsContent";
import BottomContent from "../components/BottomContent";
import { useState } from "react";
import AchievementsContent from "../components/contents/AchievementsContent";
import CreationsContent from "../components/contents/CreationsContent";
import GamesContent from "../components/contents/GamesContent";
import OpenForHireModal from "../components/OpenForHireModal";
import ConnectModal from "../components/ConnectModal";
import CreditsModal from "../components/CreditsModal";
import WhoIsContent from "../components/contents/WhoIsContent";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

const HeroPage = () => {
  const [openContent, setOpenContent] = useState(1);
  const [openForHire, setOpenForHire] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [openCredits, setOpenCredits] = useState(false);

  return (
    <section className="relative h-screen w-full">
      <div
        className="h-screen w-full overflow-hidden"
        style={{ perspective: "1800px", perspectiveOrigin: "100% 50%" }}
      >
        {/* sphere */}
        <div className="sphere-1"></div>

        {/* content */}
        <div
          style={{
            transform:
              openForHire || openConnect || openCredits
                ? "rotateX(0deg) rotateY(-30deg)"
                : "rotateX(0deg) rotateY(0deg)",
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-in-out",
            transformOrigin: "right center",
          }}
          className="w-full h-full relative z-0"
        >
          <Header setOpenCredits={setOpenCredits} />
          <LeftContent
            setOpenConnect={setOpenConnect}
            setOpenForHire={setOpenForHire}
            setOpenContent={setOpenContent}
            name={"Kirill Kushov"}
            occupation={"developer"}
            corporation={"freelance"}
          />
          <RightContent />
          <BottomContent
            openContent={openContent}
            setOpenContent={setOpenContent}
          />
          <AnimatePresence mode="wait">
            {openContent === 1 && (
              <FadeIn key="1">
                <BegginingContent />
              </FadeIn>
            )}
            {openContent === 2 && (
              <FadeIn key="2">
                <LogsContent />
              </FadeIn>
            )}
            {openContent === 3 && (
              <FadeIn key="3">
                <AchievementsContent />
              </FadeIn>
            )}
            {openContent === 4 && (
              <FadeIn key="4">
                <CreationsContent />
              </FadeIn>
            )}
            {openContent === 5 && (
              <FadeIn key="5">
                <GamesContent />
              </FadeIn>
            )}
            {openContent === 6 && (
              <FadeIn key="6">
                <WhoIsContent />
              </FadeIn>
            )}
          </AnimatePresence>
        </div>

        {/* overlay */}
        <div
          onClick={() =>
            setOpenForHire(false) ||
            setOpenConnect(false) ||
            setOpenCredits(false)
          }
          className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-500 ${
            openForHire || openConnect || openCredits
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* OpenForHireModal */}
        {openForHire && <OpenForHireModal setOpenForHire={setOpenForHire} />}

        {/* ConnectModal */}
        {openConnect && <ConnectModal setOpenConnect={setOpenConnect} />}

        {/* CreditsModal */}
        {openCredits && <CreditsModal setOpenCredits={setOpenCredits} />}
      </div>
    </section>
  );
};

export default HeroPage;
