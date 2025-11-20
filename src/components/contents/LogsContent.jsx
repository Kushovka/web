import { Suspense } from "react";
import clsx from "clsx";

import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

import { logsCards } from "../../constants";
import HeroButtons from "../../mobile/HeroButtons";

const LogsContent = ({
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
          "w-full md:h-full inline-block z-10",
          color === "red" ? "border-frame" : "border-frame_purple"
        )}
      >
        <span></span>
        <div
          className={clsx(
            "w-full md:h-full inline-block z-10 md:overflow-hidden",
            color === "red" ? "border-frame" : "border-frame_purple"
          )}
        >
          <div
            className={clsx(color === "red" ? "sphere-2" : "sphere-2_purple")}
          ></div>
          <div className="text-center flex flex-col gap-[32px] md:pt-[39px] md:pb-0 pt-[20px] pb-[20px] md:px-[195px] px-[25px]">
            <h2 className="iceland-text text-[18px] font-normal ">
              data log dump initialized.
            </h2>
            <div>
              {/* titles */}
              <div className="flex flex-col gap-[6px]">
                <div
                  className={clsx(
                    " flex items-center justify-between py-[3px] px-[6px]",
                    color === "red" ? "bg-red01" : "bg-purple01"
                  )}
                >
                  <h2 className="big-text font-extrabold md:text-[18px] text-left md:text-center text-black04">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text font-normal text-[14px] text-black04">
                    DATE: 2007.04.25
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] items-start pb-[10px]">
                  <h2 className="iceland-text text-[16px] font-normal">
                    LOCATION:
                    <span className="text-gray01 uppercase text-[16px] font-normal">
                      {" "}
                      Research Facility, Planet X-17
                    </span>
                  </h2>
                  <h2 className="iceland-text text-[16px] font-normal">
                    PROJECT STATUS:
                    <span className="text-gray01 uppercase text-[16px] font-normal">
                      {" "}
                      In Development
                    </span>
                  </h2>
                </div>
              </div>
              {/* cards */}
              <div className="flex flex-col gap-[23px]">
                <div className="grid md:grid-cols-2 text-left gap-[15px]">
                  {logsCards.cards.map((item, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "relative border border-white/10 rounded-tl-[12px] py-[15px] pr-[13px] pl-[18px] bg-black",
                        idx !== 1 && idx !== 3
                          ? "hidden sm:hidden md:block"
                          : "block md:block"
                      )}
                    >
                      <h2
                        className={clsx(
                          "big-text uppercase md:text-[18px] font-extrabold ",
                          color === "red" ? "text-red01" : "text-purple01"
                        )}
                      >
                        {item.title}
                      </h2>
                      <p className="iceland-text uppercase md:text-[14px] text-[12px] font-normal text-gray01">
                        {item.text}
                      </p>
                      {idx === 1 || idx === 3 ? (
                        <button className="flex  items-center gap-[4px]">
                          <IoCloseSharp
                            className={clsx(
                              " text-[12px] rotate-45",
                              color === "red" ? "text-red01" : "text-purple01"
                            )}
                          />
                          <p
                            className={clsx(
                              "iceland-text font-normal text-[16px] ",
                              color === "red" ? "text-red01" : "text-purple01"
                            )}
                          >
                            expand
                          </p>
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    className={clsx(
                      "relative font-extrabold text-[18px] big-text w-[250px]  border  p-[7px] text-left  group transition-all duration-300",
                      color === "red"
                        ? "text-red01 border-red01 hover:bg-red01/60"
                        : "text-purple01 border-purple01 hover:bg-purple01/60"
                    )}
                  >
                    <p className="group-hover:text-white transition-all duration-300">
                      open connection
                    </p>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 px-[4px]">
                      <CiImageOn className="w-[28px] h-[28px] group-hover:text-white transition-all duration-300" />
                    </div>
                  </button>
                </div>
              </div>
              {/* logs */}
              <div className="md:flex hidden flex-col gap-[9px]">
                <h2 className="iceland-text text-[18px] font-normal text-left">
                  older logs:
                </h2>
                {logsCards.logs.map((item, idx) => (
                  <div
                    key={idx}
                    className={clsx(
                      "flex items-center justify-between border  py-[3px] px-[6px]",
                      color === "red" ? "border-red01" : "border-purple01"
                    )}
                  >
                    <h2
                      className={clsx(
                        "big-text font-extrabold text-[18px] ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={clsx(
                        "iceberg-text text-[14px] ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      {item.date}
                    </p>
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

export default LogsContent;
