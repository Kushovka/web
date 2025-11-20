import clsx from "clsx";
import {
  IoCheckmarkSharp,
  IoCloseSharp,
  IoSettingsOutline,
} from "react-icons/io5";

import sound from "../audio/click.mp3";
import switchSound from "../audio/switch.mp3";

import Button from "./Button";

const Navigate = ({
  color,
  openContent,
  audioRef,
  isSound,
  soundSwitch,
  switchRef,
  isPlay,
  musicSwitch,
  soundClick,
  audioClick,
  setOpenModal,
}) => {
  return (
    <section className="fixed bg-black z-30 h-screen w-full p-[30px] left-0 top-0  flex flex-col gap-[15px]">
      <div className="flex items-center justify-between border-b pb-[10px]">
        <h1 className="big-text font-extrabold text-[26px] ">navigation</h1>
        <button onClick={() => setOpenModal(false)}>
          <IoCloseSharp className={clsx("text-[28px] text-white")} />
        </button>
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
  );
};

export default Navigate;
