import { Suspense } from "react";
import clsx from "clsx";

import { gamesCard } from "../../constants";
import HeroButtons from "../../mobile/HeroButtons";

const GamesContent = ({
  openContent,
  isSound,
  isPlay,
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
  NavigateLazy,
}) => {
  return (
    <main className="section">
      <div
        className={clsx(
          "w-full md:h-full h-[60%] inline-block z-10",
          color === "red" ? "border-frame" : "border-frame_purple"
        )}
      >
        <span></span>
        <div
          className={clsx(
            "w-full h-full inline-block z-10 overflow-hidden",
            color === "red" ? "border-frame" : "border-frame_purple"
          )}
        >
          <div
            className={clsx(color === "red" ? "sphere-2" : "sphere-2_purple")}
          ></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full items-center flex flex-col md:gap-[40px] gap-[15px] md:pt-[39px] pt-[15px]">
            {/* title */}
            <h2 className="iceland-text text-[18px] font-normal ">
              mini games
            </h2>
            <div>
              <div className="absolute top-0 py-[92px] left-[15%]">
                <h2 className="iceland-text text-[14px] tracking-normal text-gray02 text-start md:block hidden">
                  Here you will see a few mini <br /> games I implemented in
                  <br />
                  React or in Canvas.
                  <br />
                  <br /> Have fun!
                </h2>
              </div>
              {/* content */}
              <div className="grid grid-cols-2 gap-[16px] px-[15px] md:px-0">
                {gamesCard.map((item, idx) => (
                  <div className="flex flex-col gap-[6px]" key={idx}>
                    <img src={item.img} alt="" />
                    <div className="flex flex-col gap-[2px]">
                      <h2
                        className={clsx(
                          "big-text text-[18px] font-extrabold ",
                          color === "red" ? "text-red01" : "text-purple01"
                        )}
                      >
                        {item.title}
                      </h2>
                      <p className="iceland-text text-[14px] tracking-normal text-gray02">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroButtons
          setOpenCredits={setOpenCredits}
          setOpenModal={setOpenModal}
          className={"md:hidden"}
        />
      </div>
      {openModal && (
        <Suspense fallback={null}>
          <NavigateLazy
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
        </Suspense>
      )}
    </main>
  );
};

export default GamesContent;
