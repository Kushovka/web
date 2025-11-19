import clsx from "clsx";
import game1 from "../../assets/images/gamesContent/img1.png";
import game2 from "../../assets/images/gamesContent/img2.png";
import game3 from "../../assets/images/gamesContent/img3.png";
import game4 from "../../assets/images/gamesContent/img4.png";
import game5 from "../../assets/images/gamesContent/img5.png";
import game6 from "../../assets/images/gamesContent/img6.png";
import { useTheme } from "../../hook/useTheme";
import HeroButtons from "../../mobile/HeroButtons";
import Navigate from "../Navigate";

const GamesContent = ({
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
    <main className="relative flex flex-col md:flex-row items-center justify-center w-full h-screen overflow-hidden md:px-[290px] md:py-[92px] px-[10px] py-[10px] gap-[20px] md:gap-0">
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
                {/* 1 */}
                <div className="flex flex-col gap-[6px]">
                  <img src={game1} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      gain life
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      click the hearts
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-[6px]">
                  <img src={game2} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      escape the storm
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      bullet-hell like game
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col gap-[6px]">
                  <img src={game3} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      dr mario
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      a dr. mario clone
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex flex-col gap-[6px]">
                  <img src={game4} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      snake 2!
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      classic snake game
                    </p>
                  </div>
                </div>
                {/* 5 */}
                <div className="md:flex hidden flex-col gap-[6px]">
                  <img src={game5} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      arcanoid
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      destroy the bricks game
                    </p>
                  </div>
                </div>
                {/* 6 */}
                <div className="md:flex hidden flex-col gap-[6px]">
                  <img src={game6} alt="" />
                  <div className="flex flex-col gap-[2px]">
                    <h2
                      className={clsx(
                        "big-text text-[18px] font-extrabold ",
                        color === "red" ? "text-red01" : "text-purple01"
                      )}
                    >
                      snake
                    </h2>
                    <p className="iceland-text text-[14px] tracking-normal text-gray02">
                      classic snake game
                    </p>
                  </div>
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

export default GamesContent;
