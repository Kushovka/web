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

const HeroPage = () => {
  const [openContent, setOpenContent] = useState(1);
  const [openForHire, setOpenForHire] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [openCredits, setOpenCredits] = useState(false);

  return (
    <section className="relative h-screen w-full">
      <div
        className="h-screen w-full overflow-hidden"
        style={
          openForHire || openConnect || openCredits
            ? { perspective: "1800px" }
            : { perspective: "1800px" }
        }
      >
        {/* sphere */}
        <div className="sphere-1"></div>

        {/* content */}
        <div
          style={{
            transform:
              openForHire || openConnect || openCredits
                ? "rotateX(0deg) rotateY(-45deg)"
                : "rotateX(0deg) rotateY(0deg)",
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-in-out",
          }}
          className="w-full h-full relative z-0"
        >
          <Header setOpenCredits={setOpenCredits} />
          <LeftContent
            setOpenConnect={setOpenConnect}
            setOpenForHire={setOpenForHire}
            name={"Kirill Kushov"}
            occupation={"developer"}
            corporation={"freelance"}
          />
          <RightContent />
          <BottomContent
            openContent={openContent}
            setOpenContent={setOpenContent}
          />
          {openContent === 1 ? (
            <BegginingContent />
          ) : openContent === 2 ? (
            <LogsContent />
          ) : openContent === 3 ? (
            <AchievementsContent />
          ) : openContent === 4 ? (
            <CreationsContent />
          ) : (
            <GamesContent />
          )}
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
        {openForHire ? (
          <OpenForHireModal setOpenForHire={setOpenForHire} />
        ) : (
          ""
        )}
        {/* ConnectModal */}
        {openConnect ? <ConnectModal setOpenConnect={setOpenConnect} /> : ""}

        {/* CreditsModal */}
        {openCredits ? <CreditsModal setOpenCredits={setOpenCredits} /> : ""}
      </div>
    </section>
  );
};

export default HeroPage;
