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

const RightContent = ({
  setOpenSettings,
  toggleMusic,
  isPlay,
  toggleSound,
  isSound,
}) => {
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
    <section className="fixed right-0 top-0 py-[92px] max-w-[290px] pl-[16px] flex flex-col justify-between z-30 h-screen pr-[79px]">
      <div>
        <div className="w-full border-l-2 flex flex-col gap-[15px] border-red01 leading-[100%]">
          <div>
            <Button
              title={"active quest"}
              color={"rgba(232, 74, 74, 0.7)"}
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
              <p className="big-text text-red01 text-[18px] font-extrabold">
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
              "big-text font-extrabold text-[18px] text-red01",
              isSound ? "opacity-100" : "opacity-50"
            )}
          >
            sound effects
          </h2>
          <button
            onClick={soundSwitch}
            className={clsx(
              "border flex items-center justify-center w-[33px] h-[33px]",
              isSound ? "opacity-100 border-red01" : "opacity-50 border-black03"
            )}
          >
            {isSound ? (
              <IoCheckmarkSharp className="text-red01 text-[24px]" />
            ) : (
              <IoCloseSharp
                className={clsx(
                  "text-red01 text-[24px] transition-opacity duration-300",
                  isSound ? "opacity-100" : "opacity-50"
                )}
              />
            )}
          </button>
          <audio ref={switchRef} src={switchSound} />
        </div>
        <div className="flex items-center justify-between px-[7px] py-[4px]">
          <h2
            className={clsx(
              "big-text font-extrabold text-[18px] text-red01 transition-opacity duration-300",
              isPlay ? "opacity-100" : "opacity-50"
            )}
          >
            music
          </h2>
          <button
            onClick={musicSwitch}
            className={clsx(
              "border  flex items-center justify-center w-[33px] h-[33px] transition-opacity duration-300",
              isPlay ? "opacity-100 border-red01" : "opacity-50 border-black03"
            )}
          >
            {isPlay ? (
              <IoCheckmarkSharp className="text-red01 text-[24px]" />
            ) : (
              <IoCloseSharp
                className={clsx(
                  "text-red01 text-[24px] transition-opacity duration-300",
                  isPlay ? "opacity-100" : "opacity-50"
                )}
              />
            )}
          </button>
        </div>
        <button
          onClick={soundClick}
          className="flex items-center border border-gray03 justify-between px-[7px] py-[4px]"
        >
          <h2 className="big-text font-extrabold text-[18px] text-red01 ">
            visual settings
          </h2>
          <div className=" flex items-center justify-center w-[33px] h-[33px] ">
            <IoSettingsOutline className="text-red01 text-[24px] " />
          </div>
        </button>
        <audio ref={audioRef} src={sound} />
      </div>
    </section>
  );
};

export default RightContent;
