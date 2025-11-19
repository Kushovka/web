import { CgDanger } from "react-icons/cg";
import { useTheme } from "../hook/useTheme";
import clsx from "clsx";

const SettingsModal = ({ setOpenSettings }) => {
  const { color, toggleColor } = useTheme();
  return (
    <section className="fixed z-30 top-1/2 -translate-y-1/2 md:px-[100px] w-full md:w-max px-[25px] left-1/2 -translate-x-1/2 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[5px]">
        <h1 className="big-text font-extrabold text-[18px] text-center md:text-left">
          visual configurator
        </h1>
        <p className="iceland-text text-[16px] text-gray02 text-center md:text-left">
          apply what works best for you
        </p>
      </div>
      <div
        className={clsx(
          "border border-white/15 rounded-tl-[12px] p-[32px] flex flex-col gap-[32px]",
          color === "red" ? "bg-red01/10" : "bg-purple01/10"
        )}
      >
        <div className="md:flex hidden flex-col gap-[12px]">
          <label
            for="name"
            className={clsx(
              "big-text text-[18px] flex items-center justify-between font-extrabold",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            <p>HUD HUE</p>
            <div className="flex gap-[12px]">
              <p>Black: 8.4</p>
              <p>white: 7.5</p>
            </div>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue="50"
            className="bg-black05 px-[20px] py-[14px] "
          />
        </div>
        <div className="md:flex hidden flex-col gap-[12px]">
          <label
            for="email"
            className={clsx(
              "big-text text-[18px] font-extrabold",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            HUD SIZE
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue="50"
            className="bg-black05 px-[20px] py-[14px] "
          />
        </div>
        <div className="md:flex hidden flex-col gap-[12px] pb-[76px]">
          <label
            for="name"
            className={clsx(
              "big-text text-[18px] flex items-center justify-between font-extrabold",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          >
            <p>Text scale</p>
            <div className="flex gap-[12px]">
              <p>Largest: 32px</p>
              <p>Smallest: 12px</p>
            </div>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue="50"
            className="bg-black05 px-[20px] py-[14px] "
          />
        </div>
        <div className="flex w-full">
          <button
            onClick={toggleColor}
            className={clsx(
              " hover:rounded-[6px] w-full transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-white/70",
              color === "red"
                ? "bg-red01/70 hover:bg-red01 shadow-[0_0_20px_rgba(232,74,74,0.8)]"
                : "bg-[#b71553]/70 hover:bg-purple01 shadow-[0_0_20px_rgba(183,21,83,0.8)]"
            )}
          >
            Color Mode
          </button>
        </div>
        <div
          className={clsx(
            "h-[1px] w-full",
            color === "red" ? "bg-red01" : "bg-purple01"
          )}
        ></div>
        <div className="flex items-start justify-center gap-[5px]">
          <CgDanger
            className={clsx(
              "w-[24px] h-[24px]",
              color === "red" ? "text-red01" : "text-purple01"
            )}
          />
          <p
            className={clsx(
              "iceland-text tex-[16px]",
              color === "red" ? "text-red01" : "text-white/70"
            )}
          >
            The configuration data is stored in your
            <br /> browser. If you login from a different
            <br /> browser or machine, your settings will
            <br /> not apply.
          </p>
        </div>
        <div className="flex w-full items-center gap-[16px]">
          <button
            onClick={() => setOpenSettings(false)}
            className={clsx(
              "border w-full hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center ",
              color === "red"
                ? "text-red01 hover:bg-red01/20"
                : "text-white/70 hover:bg-purple01/20"
            )}
          >
            discard [esc]
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsModal;
