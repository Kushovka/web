import clsx from "clsx";
import heroImg from "../../assets/images/heroPage/heroImg.png";

import WhoIsSection from "../../mobile/WhoIsSection";
import HeroButtons from "../../mobile/HeroButtons";

import Navigate from "../Navigate";

const BegginingContent = ({
  openContent,
  isSound,
  isPlay,
  setOpenForHire,
  setOpenConnect,
  setOpenCredits,
  setOpenModal,
  openModal,
  color,
  audioClick,
  soundClick,
  soundSwitch,
  musicSwitch,
  switchRef,
  audioRef,
}) => {
  return (
    <main className="section">
      <div
        className={clsx(
          "inline-block w-full h-full z-10",
          color === "red" ? "border-frame" : "border-frame_purple"
        )}
      >
        <img
          src={heroImg}
          className="block w-full h-full object-cover"
          alt="heroImg"
        />
        <span></span>
        <div className="absolute top-0 md:left-1/2 md:-translate-x-1/2 text-center flex flex-col gap-[9px] md:pt-[39px] px-[10px] pt-[15px]">
          <h2 className="iceland-text md:text-[18px] text-[12px] font-normal ">
            swimming through a vast network of interconnected devices and
            servers, spreading joy and whimsy to users across the globe
          </h2>
          <p className="iceland-text md:text-[14px] text-[10px] font-normal opacity-70">
            Artwork generated with midjourney
          </p>
        </div>
      </div>
      <div>
        <WhoIsSection
          setOpenConnect={setOpenConnect}
          setOpenForHire={setOpenForHire}
          name={"Kirill Kushov"}
          occupation={"developer"}
          corporation={"freelance"}
          className={"md:hidden"}
        />
      </div>
      <div>
        <HeroButtons
          setOpenCredits={setOpenCredits}
          setOpenModal={setOpenModal}
          className={"md:hidden"}
        />
      </div>

      {openModal && (
        <Navigate
          audioClick={audioClick}
          soundClick={soundClick}
          musicSwitch={musicSwitch}
          isPlay={isPlay}
          switchRef={switchRef}
          soundSwitch={soundSwitch}
          isSound={isSound}
          audioRef={audioRef}
          openContent={openContent}
          color={color}
          setOpenModal={setOpenModal}
        />
      )}
    </main>
  );
};

export default BegginingContent;
