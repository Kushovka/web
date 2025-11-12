import React from "react";
import Button from "./Button";

const BottomContent = ({ setOpenContent, openContent }) => {
  return (
    <section className="fixed flex items-center justify-center w-screen px-[78px] z-20 pt-[27px] pb-[35px] bottom-0 left-1/2 -translate-x-1/2 ">
      <div className="w-full  flex items-center justify-center gap-[15px] border-red01 leading-[100%]">
        {/* beginning */}
        <div
          className={`border-l-2 ${
            openContent === 1 ? "border-red01" : "border-black02"
          } `}
        >
          <Button
            onClick={() => setOpenContent(1)}
            title={"beginning"}
            color={
              openContent === 1
                ? "rgba(232, 74, 74, 0.7)"
                : "rgba(36, 36, 37, 0.7)"
            }
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />
          <div
            className={`${
              openContent === 1 ? "bg-red01/20" : "bg-black02/10"
            } w-[196px]`}
          >
            <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
              Suscipit est consequatur nemo voluptatem est labore saepe.
            </p>
          </div>
        </div>
        {/* Logs */}
        <div
          className={`border-l-2 ${
            openContent === 2 ? "border-red01" : "border-black02"
          } `}
        >
          <Button
            onClick={() => setOpenContent(2)}
            title={"Logs"}
            color={
              openContent === 2
                ? "rgba(232, 74, 74, 0.7)"
                : "rgba(36, 36, 37, 0.7)"
            }
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />
          <div
            className={`${
              openContent === 2 ? "bg-red01/20" : "bg-black02/10"
            } w-[196px]`}
          >
            <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
              Suscipit est consequatur nemo voluptatem est labore saepe.
            </p>
          </div>
        </div>
        {/* achievements */}
        <div
          className={`border-l-2 ${
            openContent === 3 ? "border-red01" : "border-black02"
          } `}
        >
          <Button
            onClick={() => setOpenContent(3)}
            title={"achievements"}
            color={
              openContent === 3
                ? "rgba(232, 74, 74, 0.7)"
                : "rgba(36, 36, 37, 0.7)"
            }
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />
          <div
            className={`${
              openContent === 3 ? "bg-red01/20" : "bg-black02/10"
            } w-[196px]`}
          >
            <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
              Suscipit est consequatur nemo voluptatem est labore saepe.
            </p>
          </div>
        </div>
        {/* creations */}
        <div
          className={`border-l-2 ${
            openContent === 4 ? "border-red01" : "border-black02"
          } `}
        >
          <Button
            onClick={() => setOpenContent(4)}
            title={"creations"}
            color={
              openContent === 4
                ? "rgba(232, 74, 74, 0.7)"
                : "rgba(36, 36, 37, 0.7)"
            }
            className={`w-[196px]`}
            colortext={"#ffffff"}
          />
          <div
            className={`${
              openContent === 4 ? "bg-red01/20" : "bg-black02/10"
            } w-[196px]`}
          >
            <p className="iceland-text tracking-normal  text-[14px] text-gray01 py-[8px] px-[10px]">
              Suscipit est consequatur nemo voluptatem est labore saepe.
            </p>
          </div>
        </div>
        {/* games */}
        <div
          className={`border-l-2 ${
            openContent === 5 ? "border-red01" : "border-black02"
          } `}
        >
          <Button
            onClick={() => setOpenContent(5)}
            title={"games"}
            color={
              openContent === 5
                ? "rgba(232, 74, 74, 0.7)"
                : "rgba(36, 36, 37, 0.7)"
            }
            className={"w-[196px]"}
            colortext={"#ffffff"}
          />
          <div
            className={`${
              openContent === 5 ? "bg-red01/20" : "bg-black02/10"
            } w-[196px]`}
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
