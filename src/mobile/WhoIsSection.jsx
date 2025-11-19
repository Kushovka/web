import clsx from "clsx";
import Button from "../components/Button";
import { IoIosBluetooth } from "react-icons/io";
import { useTheme } from "../hook/useTheme";

const WhoIsSection = ({
  name,
  occupation,
  corporation,
  className,
  setOpenForHire,
  setOpenConnect
}) => {
  const { color } = useTheme();
  return (
    <section className={clsx(className)}>
      <div className="flex flex-col gap-[22px]">
        <div className="grid grid-cols-2 gap-[20px]">
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
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">availability</h1>
            <Button
              onClick={() => setOpenForHire(true)}
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
            onClick={() => setOpenConnect(true)}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsSection;
