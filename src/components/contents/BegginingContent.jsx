import clsx from "clsx";
import heroImg from "../../assets/images/heroPage/heroImg.png";
import { useTheme } from "../../hook/useTheme";
import WhoIsSection from "../../mobile/WhoIsSection";
import HeroButtons from "../../mobile/HeroButtons";
import { useRef, useState } from "react";
import Button from "../Button";
import sound from "../../audio/click.mp3";
import switchSound from "../../audio/switch.mp3";
import { IoCheckmarkSharp, IoCloseSharp, IoSettingsOutline } from "react-icons/io5";

const BegginingContent = ({
  openContent,
  setOpenContent,
  toggleSound,
  isSound,
  setOpenSettings,
  isPlay,
  toggleMusic,
}) => {
  const { color } = useTheme();

  const audioRef = useRef(null);

  function audioClick(num) {
    if (isSound && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
    setOpenContent(num);
  }
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

  const [openModal, setOpenModal] = useState(false);

  return (
    <main
      className=" relative flex flex-col
  justify-between md:justify-center
  md:flex-row md:items-center
  w-full h-screen
  overflow-hidden
  md:px-[290px] px-[50px]
  md:py-[92px] py-[30px]
  gap-[15px]"
    >
      <div
        className={clsx(
          "inline-block w-full h-full z-10",
          color === "red" ? "border-frame" : "border-frame_purple"
        )}
      >
        <img
          src={heroImg}
          className="block w-full h-full object-cover"
          alt=""
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
          name={"Kirill Kushov"}
          occupation={"developer"}
          corporation={"freelance"}
          className={"md:hidden"}
        />
      </div>
      <div>
        <HeroButtons setOpenModal={setOpenModal} className={"md:hidden"} />
      </div>
      
      {openModal && (
        <section className="fixed bg-black z-30 h-screen w-full p-[30px] left-0 top-0  flex flex-col gap-[30px]">
          <div className="flex items-center justify-between border-b pb-[10px]">
            <h1 className="big-text font-extrabold text-[26px] ">navigation</h1>
            <button onClick={() => setOpenModal(false)}>
              <IoCloseSharp className={clsx("text-[28px] text-white")} />
            </button>
          </div>
          <div className="flex gap-[46px]">
            <div className="flex items-end justify-center gap-[2px]">
              <h2 className="big-text font-extrabold text-[26px] text-green01">
                48
              </h2>
              <p className="big-text text-[16px] font-extrabold opacity-60">
                Level
              </p>
            </div>
            <div className="flex items-end justify-center gap-[16px]">
              <button className="border border-black03  flex items-center justify-center w-[33px] h-[33px] ">
                <IoCloseSharp
                  className={clsx(
                    "text-[16px] rotate-45",
                    color === "red" ? "text-red01" : "text-purple01"
                  )}
                />
              </button>
              <div className="flex items-end justify-center gap-[6px]">
                <h2 className="big-text font-extrabold text-[26px] text-green01">
                  1,425
                </h2>
                <p className="big-text text-[16px] font-extrabold opacity-60">
                  coins awarded
                </p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "w-full flex flex-col gap-[15px] leading-[100%]",
              color === "red" ? "border-red01" : "border-purple01"
            )}
          >
            {/* beginning */}
            <div
              className={`border-l-2 ${
                openContent === 1
                  ? color === "red"
                    ? "border-red01"
                    : "border-purple01"
                  : "border-black02"
              } `}
            >
              <Button
                onClick={() => audioClick(1)}
                title={"beginning"}
                color={
                  openContent === 1
                    ? color === "red"
                      ? "rgba(232, 74, 74, 0.7)"
                      : "rgba(183,21,83,0.8)"
                    : "rgba(36, 36, 37, 0.7)"
                }
                className={"w-full"}
                colortext={"#ffffff"}
              />

              <div
                className={clsx(
                  "w-full",
                  openContent === 1
                    ? color === "red"
                      ? "bg-red01/20"
                      : "bg-purple01/20"
                    : "bg-black02/10"
                )}
              >
                <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                </p>
              </div>
            </div>
            {/* Logs */}
            <div
              className={clsx(
                "border-l-2",
                openContent === 2
                  ? color === "red"
                    ? "border-red01"
                    : "border-purple01"
                  : "border-black02"
              )}
            >
              <Button
                onClick={() => audioClick(2)}
                title={"Logs"}
                color={
                  openContent === 2
                    ? color === "red"
                      ? "rgba(232, 74, 74, 0.7)"
                      : "rgba(183,21,83,0.8)"
                    : "rgba(36, 36, 37, 0.7)"
                }
                className={"w-full"}
                colortext={"#ffffff"}
              />

              <div
                className={clsx(
                  "w-full",
                  openContent === 2
                    ? color === "red"
                      ? "bg-red01/20"
                      : "bg-purple01/20"
                    : "bg-black02/10"
                )}
              >
                <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                </p>
              </div>
            </div>
            {/* achievements */}
            <div
              className={clsx(
                "border-l-2",
                openContent === 3
                  ? color === "red"
                    ? "border-red01"
                    : "border-purple01"
                  : "border-black02"
              )}
            >
              <Button
                onClick={() => audioClick(3)}
                title={"achievements"}
                color={
                  openContent === 3
                    ? color === "red"
                      ? "rgba(232, 74, 74, 0.7)"
                      : "rgba(183,21,83,0.8)"
                    : "rgba(36, 36, 37, 0.7)"
                }
                className={"w-full"}
                colortext={"#ffffff"}
              />

              <div
                className={clsx(
                  openContent === 3
                    ? color === "red"
                      ? "bg-red01/20"
                      : "bg-purple01/20"
                    : "bg-black02/10",
                  "w-full"
                )}
              >
                <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                </p>
              </div>
            </div>
            {/* creations */}
            <div
              className={clsx(
                "border-l-2",
                openContent === 4
                  ? color === "red"
                    ? "border-red01"
                    : "border-purple01"
                  : "border-black02"
              )}
            >
              <Button
                onClick={() => audioClick(4)}
                title={"creations"}
                color={
                  openContent === 4
                    ? color === "red"
                      ? "rgba(232, 74, 74, 0.7)"
                      : "rgba(183,21,83,0.8)"
                    : "rgba(36, 36, 37, 0.7)"
                }
                className={`w-full`}
                colortext={"#ffffff"}
              />

              <div
                className={clsx(
                  "w-full",
                  openContent === 4
                    ? color === "red"
                      ? "bg-red01/20"
                      : "bg-purple01/20"
                    : "bg-black02/10"
                )}
              >
                <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                </p>
              </div>
            </div>
            {/* games */}
            <div
              className={clsx(
                "border-l-2",
                openContent === 5
                  ? color === "red"
                    ? "border-red01"
                    : "border-purple01"
                  : "border-black02"
              )}
            >
              <Button
                onClick={() => audioClick(5)}
                title={"games"}
                color={
                  openContent === 5
                    ? color === "red"
                      ? "rgba(232, 74, 74, 0.7)"
                      : "rgba(183,21,83,0.8)"
                    : "rgba(36, 36, 37, 0.7)"
                }
                className={"w-full"}
                colortext={"#ffffff"}
              />
              <audio ref={audioRef} src={sound} />
              <div
                className={clsx(
                  "w-full",
                  openContent === 5
                    ? color === "red"
                      ? "bg-red01/20"
                      : "bg-purple01/20"
                    : "bg-black02/10"
                )}
              >
                <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                </p>
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
      )}
    </main>
  );
};

export default BegginingContent;
