import Button from "./Button";

import icon1 from "../assets/images/rewardsIcons/icon1.png";
import icon2 from "../assets/images/rewardsIcons/icon2.png";

import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useRef } from "react";

import sound from "../audio/click2.mp3";
import switchSound from "../audio/switch.mp3";

import clsx from "clsx";
import { useTheme } from "../hook/useTheme";

const RightContent = ({
  setOpenSettings,
  toggleMusic,
  isPlay,
  toggleSound,
  isSound,
}) => {
  const { color } = useTheme();

  const audioRef = useRef(null);
  const switchRef = useRef(null);

  function soundClick() {
    if (isSound && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
    setOpenSettings(true);
  }
  function soundSwitch() {
    if (switchRef.current) {
      switchRef.current.currentTime = 0;
      switchRef.current.volume = 0.2;
      switchRef.current.play();
    }
    toggleSound();
  }
  function musicSwitch() {
    if (switchRef.current) {
      switchRef.current.currentTime = 0;
      switchRef.current.volume = 0.2;
      switchRef.current.play();
    }
    toggleMusic();
  }
  return (
    <section className="md:fixed hidden right-0 top-0 py-[92px] max-w-[290px] pl-[16px] md:flex flex-col justify-between z-30 md:h-screen md:pr-[79px]">
      <div>
        <div
          className={clsx(
            "w-full border-l-2 flex flex-col gap-[15px] leading-[100%]",
            color === "red" ? "border-red01" : "border-purple01"
          )}
        >
          <div>
            <Button
              title={"active quest"}
              color={
                color === "red" ? "rgba(232,74,74,0.8)" : "rgba(183,21,83,0.8)"
              }
              className={"w-[196px]"}
              colortext={"#ffffff"}
            />
            <div className="bg-red01/10 w-[196px] ">
              <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                the react skill-up line
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] px-[8px]">
            <div className="flex flex-col gap-[4px]">
              <h2 className="iceland-text text-[14px]">quest name</h2>
              <p
                className={clsx(
                  "big-text text-[18px] font-extrabold",
                  color === "red" ? "text-red01" : "text-purple01"
                )}
              >
                React website
              </p>
            </div>

            <div className="flex flex-col gap-[4px]">
              <h2 className="iceland-text text-[14px]">goal</h2>
              <p className="iceland-text text-[14px] tracking-normal text-gray01">
                Build this website. Implement a full react website with multiple
                routers, UI elements and tricky styling. Make it all work great!
              </p>
            </div>

            <div className="flex flex-col gap-[12px]">
              <h2 className="iceland-text text-[14px]">rewards</h2>
              <div className="flex gap-[8px]">
                <div className="flex flex-col items-center justify-center">
                  <img src={icon1} alt="icon1" />
                  <p className="iceland-text text-gray01">+5</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src={icon2} alt="icon2" />
                  <p className="iceland-text text-gray01">+25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[5px]">
        <div className="flex items-center justify-between px-[7px] py-[4px]">
          <h2
            className={clsx(
              "big-text font-extrabold text-[18px] transition-opacity duration-300",
              isSound ? "opacity-100" : "opacity-50",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            sound effects
          </h2>
          <button
            onClick={soundSwitch}
            className={clsx(
              "border flex items-center justify-center w-[33px] h-[33px]",
              isSound
                ? color === "red"
                  ? "opacity-100 border-red01"
                  : "opacity-100 border-purple01"
                : "opacity-50 border-black03"
            )}
          >
            {isSound ? (
              <IoCheckmarkSharp
                className={clsx(
                  "text-[24px]",
                  color === "red" ? "text-red01" : "text-purple01"
                )}
              />
            ) : (
              <IoCloseSharp
                className={clsx(
                  "text-[24px] transition-opacity duration-300",
                  isSound ? "opacity-100" : "opacity-50",
                  color === "red" ? "text-red01" : "text-purple01"
                )}
              />
            )}
          </button>
          <audio ref={switchRef} src={switchSound} />
        </div>
        <div className="flex items-center justify-between px-[7px] py-[4px]">
          <h2
            className={clsx(
              "big-text font-extrabold text-[18px] transition-opacity duration-300",
              isPlay ? "opacity-100" : "opacity-50",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            music
          </h2>
          <button
            onClick={musicSwitch}
            className={clsx(
              "border  flex items-center justify-center w-[33px] h-[33px] transition-opacity duration-300",
              isPlay
                ? color === "red"
                  ? "opacity-100 border-red01"
                  : "opacity-100 border-purple01"
                : "opacity-50 border-black03"
            )}
          >
            {isPlay ? (
              <IoCheckmarkSharp
                className={clsx(
                  "text-[24px]",
                  color === "red" ? "text-red01" : "text-purple01"
                )}
              />
            ) : (
              <IoCloseSharp
                className={clsx(
                  "text-[24px] transition-opacity duration-300",
                  isPlay ? "opacity-100" : "opacity-50",
                  color === "red" ? "text-red01" : "text-purple01"
                )}
              />
            )}
          </button>
        </div>
        <button
          onClick={soundClick}
          className="flex items-center border border-gray03 justify-between px-[7px] py-[4px]"
        >
          <h2
            className={clsx(
              "big-text font-extrabold text-[18px]",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            visual settings
          </h2>
          <div className=" flex items-center justify-center w-[33px] h-[33px] ">
            <IoSettingsOutline
              className={clsx(
                "text-[24px]",
                color === "red" ? "text-red01" : "text-purple01"
              )}
            />
          </div>
        </button>
        <audio ref={audioRef} src={sound} />
      </div>
    </section>
  );
};

export default RightContent;
