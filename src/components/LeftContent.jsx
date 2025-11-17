import imgAvatar from "../assets/images/homePage/avatar.png";
import Button from "./Button";
import { IoIosBluetooth } from "react-icons/io";
import { useRef } from "react";
import sound from "../audio/click2.mp3";
import sound1 from "../audio/click.mp3";
import { useTheme } from "../hook/useTheme";
import clsx from "clsx";

const LeftContent = ({
  name,
  occupation,
  corporation,
  setOpenForHire,
  setOpenConnect,
  setOpenContent,
  openContent,
  isSound,
}) => {
  const { color } = useTheme();

  const audioRef = useRef(null);
  const audioRef1 = useRef(null);

  function audioClick(action) {
    if (isSound && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
    if (action === "hire") setOpenForHire(true);
    if (action === "connect") setOpenConnect(true);
  }
  function audioClick1() {
    if (isSound && audioRef1.current) {
      audioRef1.current.currentTime = 0;
      audioRef1.current.volume = 0.2;
      audioRef1.current.play();
    }
    setOpenContent(6);
  }
  return (
    <section className="fixed left-0 top-0 py-[92px] max-w-[290px] pr-[16px] flex flex-col justify-between  h-screen pl-[78px] z-10">
      <div className="flex flex-col gap-[20px]">
        <button
          onClick={audioClick1}
          className={clsx(
            "p-[15px] inline-block relative z-10",
            openContent === 6
              ? color === "red"
                ? "shadow-[0_0_20px_rgba(232,74,74,0.8)] "
                : "shadow-[0_0_20px_rgba(183,21,83,0.8)] "
              : null,
            color === "red" ? "border-frame" : "border-frame_purple"
          )}
        >
          {/* <div className="sphere-2"></div> */}
          <img
            src={imgAvatar}
            className="block relative z-10 hover:scale-[1.15] transition-all duration-300"
            alt=""
          />

          <span></span>
        </button>
        <audio ref={audioRef1} src={sound1} />
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">name</h1>
            <p
              className={clsx(
                " font-extrabold text-[18px] big-text",
                color === "red" ? "text-red01" : "text-purple01"
              )}
            >
              {name}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">occupation</h1>
            <p
              className={clsx(
                "font-extrabold text-[18px] big-text",
                color === "red" ? "text-red01" : "text-purple01"
              )}
            >
              {occupation}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">corporation</h1>
            <p
              className={clsx(
                " font-extrabold text-[18px] big-text",
                color === "red" ? "text-red01" : "text-purple01"
              )}
            >
              {corporation}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">availability</h1>
            <Button
              onClick={() => audioClick("hire")}
              title={"open for hire"}
              color={
                color === "red" ? "rgba(232,74,74,0.8)" : "rgba(183,21,83,0.8)"
              }
              opacity={"70%"}
            />
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className="text-[14px] iceland-text">social</h1>
            <button
              onClick={() => audioClick("connect")}
              className={clsx(
                "relative font-extrabold text-[18px] big-text  border  p-[7px] text-left group transition-all duration-300",
                color === "red"
                  ? "text-red01 border-red01 hover:bg-red01/60"
                  : "text-purple01 border-purple01 hover:bg-purple01/60"
              )}
            >
              <span className="group-hover:text-white transition-all duration-300">
                open connection
              </span>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 px-[4px]">
                <IoIosBluetooth className="text-[24px] group-hover:text-white transition-all duration-300" />
              </div>
            </button>
            <audio ref={audioRef} src={sound} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px]">
        <h1
          className={clsx(
            " text-[18px] iceland-text",
            color === "red" ? "text-red01" : "text-purple01"
          )}
        >
          Motto:
        </h1>
        <p className=" text-[16px] iceland-text text-gray02">
          Saepe omnis neque numquam recusandae laudantium.
        </p>
      </div>
    </section>
  );
};

export default LeftContent;
