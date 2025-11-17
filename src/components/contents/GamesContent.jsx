import clsx from "clsx";
import game1 from "../../assets/images/gamesContent/img1.png";
import game2 from "../../assets/images/gamesContent/img2.png";
import game3 from "../../assets/images/gamesContent/img3.png";
import game4 from "../../assets/images/gamesContent/img4.png";
import game5 from "../../assets/images/gamesContent/img5.png";
import game6 from "../../assets/images/gamesContent/img6.png";
import { useTheme } from "../../hook/useTheme";

const GamesContent = () => {
  const { color } = useTheme();
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
      <div
        className={clsx(
          "w-full h-full inline-block z-10",
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full items-center flex flex-col gap-[40px] pt-[39px]">
            {/* title */}
            <h2 className="iceland-text text-[18px] font-normal ">
              mini games
            </h2>
            <div>
              <div className="absolute top-0 py-[92px] left-[15%]">
                <h2 className="iceland-text text-[14px] tracking-normal text-gray02 text-start">
                  Here you will see a few mini <br /> games I implemented in
                  <br />
                  React or in Canvas.
                  <br />
                  <br /> Have fun!
                </h2>
              </div>
              {/* content */}
              <div className="grid grid-cols-2 gap-[16px]">
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
                <div className="flex flex-col gap-[6px]">
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
                <div className="flex flex-col gap-[6px]">
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
    </main>
  );
};

export default GamesContent;
