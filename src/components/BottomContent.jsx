import { useRef, useState } from "react";
import Button from "./Button";
import sound from "../audio/click.mp3";
import { useTheme } from "../hook/useTheme";
import clsx from "clsx";

const BottomContent = ({ setOpenContent, openContent, isSound }) => {
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
  return (
    <section className="md:fixed hidden md:flex items-center justify-center w-screen px-[78px] z-20 pt-[27px] pb-[35px] bottom-0 left-1/2 -translate-x-1/2 ">
      <div
        className={clsx(
          "w-full flex items-center justify-center gap-[15px] leading-[100%]",
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
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />

          <div
            className={clsx(
              "w-[196px]",
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
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />

          <div
            className={clsx(
              "w-[196px]",
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
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />

          <div
            className={clsx(
              openContent === 3
                ? color === "red"
                  ? "bg-red01/20"
                  : "bg-purple01/20"
                : "bg-black02/10",
              "w-[196px]"
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
            className={`w-[196px]`}
            colortext={"#ffffff"}
          />

          <div
            className={clsx(
              "w-[196px]",
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
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />
          <audio ref={audioRef} src={sound} />
          <div
            className={clsx(
              "w-[196px]",
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
    </section>
  );
};

export default BottomContent;
