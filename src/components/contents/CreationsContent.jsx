import Button from "../Button";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

import polygon from "../../assets/images/creationsContent/polygon.png";

import clsx from "clsx";
import HeroButtons from "../../mobile/HeroButtons";
import Navigate from "../Navigate";

const CreationsContent = ({
  openContent,
  isSound,
  isPlay,
  setOpenForHire,
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
  const getColor = (redColor, purpleColor) =>
    color === "red" ? redColor : purpleColor;

  return (
    <main className="section">
      <div
        className={clsx(
          "w-full md:h-full h-[80%] inline-block z-10",
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full items-center flex flex-col md:gap-[40px] gap-[15px] md:pt-[39px] pt-[15px]">
            {/* title */}
            <h2 className="iceland-text text-[18px] font-normal ">Creations</h2>
            {/* content */}
            <div className="w-full flex flex-col md:flex-row gap-[16px] md:px-[93px] px-[10px]">
              {/* left content */}
              <div className="flex md:flex-col md:w-1/3 w-full gap-[20px]">
                {/* details */}
                <div className="w-full  border border-white/10">
                  <div className="flex flex-col p-[12px] gap-[17px]">
                    <div className="flex flex-col gap-[4px]">
                      <Button
                        onClick={() => setOpenForHire(true)}
                        title={"details"}
                        color={
                          color === "red"
                            ? "rgba(232,74,74,0.8)"
                            : "rgba(183,21,83,0.8)"
                        }
                        colortext={"#ffffff"}
                      />
                      <p className="iceland-text text-[14px] font-normal">
                        project name
                      </p>
                      <h2
                        className={clsx(
                          "big-text text-[18px] font-extrabold ",
                          getColor("text-red01", "text-purple01")
                        )}
                      >
                        Legacy.ai
                      </h2>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex flex-col gap-[4px]">
                      <p className="iceland-text text-[14px] font-normal">
                        brief
                      </p>
                      <h2
                        className={clsx(
                          "big-text text-[18px] font-extrabold ",
                          getColor("text-red01", "text-purple01")
                        )}
                      >
                        one sentence explanation for what the project is.
                      </h2>
                    </div>
                  </div>
                </div>
                {/* technologies */}
                <div className="border border-white/10">
                  <div className="flex flex-col gap-[20px] p-[12px]">
                    <Button
                      onClick={() => setOpenForHire(true)}
                      title={"technologies"}
                      color={
                        color === "red"
                          ? "rgba(232,74,74,0.8)"
                          : "rgba(183,21,83,0.8)"
                      }
                      colortext={"#ffffff"}
                    />
                    <div className="md:flex grid grid-cols-2 gap-[8px]">
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaReact
                            className={clsx(
                              "absolute top-1/2 left-1/2 w-[24px] h-[24px]  -translate-x-1/2 -translate-y-1/2",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaNodeJs
                            className={clsx(
                              "absolute top-1/2 left-1/2 w-[24px] h-[24px]  -translate-x-1/2 -translate-y-1/2",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaFigma
                            className={clsx(
                              "absolute top-1/2 left-1/2 w-[24px] h-[24px]  -translate-x-1/2 -translate-y-1/2",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaJs
                            className={clsx(
                              "absolute top-1/2 left-1/2 w-[24px] h-[24px]  -translate-x-1/2 -translate-y-1/2",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaGit
                            className={clsx(
                              "absolute top-1/2 left-1/2 w-[24px] h-[24px]  -translate-x-1/2 -translate-y-1/2",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* about */}
                <div className="md:flex hidden flex-col gap-[10px]">
                  <h2 className="iceland-text text-[14px] ">About:</h2>
                  <p className="iceland-text text-[14px] text-gray02">
                    The team has encountered several challenges during the
                    development process, including unexpected system crashes,
                    hardware malfunctions and unanticipated compatibility
                    issuesThe team <br />
                    <br /> has encountered several challenges during the
                    development process, including unexpected system crashes,
                    hardware malfunctions, and unanticipated compatibility
                    issues...
                  </p>
                  <button className="flex items-center gap-[4px]">
                    <IoCloseSharp
                      className={clsx(
                        " text-[12px] rotate-45",
                        getColor("text-red01", "text-purple01")
                      )}
                    />
                    <p
                      className={clsx(
                        "iceland-text font-normal text-[16px] ",
                        getColor("text-red01", "text-purple01")
                      )}
                    >
                      expand
                    </p>
                  </button>
                </div>
              </div>
              {/* right content */}
              <div className="flex flex-col md:w-2/3 w-full gap-[37px]">
                <div
                  className={clsx(
                    "w-full h-full inline-block z-10",
                    color === "red" ? "border-frame" : "border-frame_purple"
                  )}
                >
                  <span></span>
                  <div
                    className={clsx(
                      "flex items-center justify-between  p-[11px]",
                      getColor("bg-red01/20", "bg-purple01/20")
                    )}
                  >
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      file xplorer
                    </h2>
                    <IoCloseSharp
                      className={clsx(
                        " text-[16px]",
                        getColor("text-red01", "text-purple01")
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-[6px] border-b p-[11px]">
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      location:
                    </h2>
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      /projects/the-name
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="py-[14px] px-[12px] flex flex-col gap-[16px]">
                      {/* 1 */}
                      <div className="flex items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 3 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 4 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 5 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 6 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="py-[14px] px-[120px] flex flex-col gap-[16px]">
                      {/* 7 */}
                      <div className="md:flex hidden items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 8 */}
                      <div className="md:flex hidden  items-center gap-[12px]">
                        <div
                          className={clsx(
                            "p-[12px]",
                            getColor("text-red01/30", "text-purple01/30")
                          )}
                        >
                          <CiImageOn
                            className={clsx(
                              "w-[24px] h-[24px]",
                              getColor("text-red01", "text-purple01")
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex hidden items-center justify-between gap-[16px]">
                  <button
                    className={clsx(
                      " hover:rounded-[6px] transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-black",
                      getColor(
                        "bg-red01/70 hover:bg-red01",
                        "bg-purple01/70 hover:bg-purple01 text-white/70"
                      )
                    )}
                  >
                    view project demo
                  </button>
                  <button
                    className={clsx(
                      "border  hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center ",
                      getColor(
                        "hover:bg-red01/20 text-red01",
                        "hover:bg-purple01/20 text-purple01"
                      )
                    )}
                  >
                    Back to all projects
                  </button>
                </div>
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

export default CreationsContent;
