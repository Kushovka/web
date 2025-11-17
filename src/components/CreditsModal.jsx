import clsx from "clsx";
import { useTheme } from "../hook/useTheme";

const CreditsModal = () => {
  const { color } = useTheme();
  return (
    <section className="fixed z-30 top-1/2 -translate-y-1/2 px-[100px]  left-0 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[5px]">
        <h1 className="big-text font-extrabold text-[18px] ">Credits</h1>
        <p className="iceland-text text-[16px] text-gray02">
          Everything involved in this project
        </p>
      </div>
      <div
        className={clsx(
          " w-full h-[3px]",
          color === "red" ? "bg-red01" : "bg-purple01"
        )}
      ></div>
      <div className="flex flex-col gap-[45px]">
        <div className="grid grid-cols-2">
          <h2 className="iceland-text text-[16px] font-normal ">
            developed by
          </h2>

          <p className="iceland-text text-[16px] font-normal text-gray02">
            Kirill Kushov @kushovka
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="iceland-text text-[16px] font-normal ">designed by</h2>

          <p className="iceland-text text-[16px] font-normal text-gray02">
            alex dimitrov @xavortm
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="iceland-text text-[16px] font-normal ">
            visual assets
          </h2>

          <p className="iceland-text text-[16px] font-normal text-gray02">
            homepage view, achievements by <br /> midjourney
            <br /> <br />
            icons from remixicons and <br /> fontawesome
            <br /> <br />
            hexagons by @xavortm
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="iceland-text text-[16px] font-normal ">
            audio effects
          </h2>

          <p className="iceland-text text-[16px] font-normal text-gray02">
            click, hover, typing and all other <br /> audio effects by mixkit.co
          </p>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="iceland-text text-[16px] font-normal ">music</h2>

          <p className="iceland-text text-[16px] font-normal text-gray02">
            “dark fantasy” by voidseer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditsModal;
