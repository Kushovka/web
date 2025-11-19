import clsx from "clsx";
import { useTheme } from "../hook/useTheme";

const HeroButtons = ({ className, setOpenModal }) => {
  const { color } = useTheme();
  return (
    <div className={clsx("flex items-center gap-[16px]", className)}>
      <button
        onClick={() => setOpenModal(true)}
        type="submit"
        className={clsx(
          " hover:rounded-[6px] transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center w-full text-black",
          color === "red"
            ? "bg-red01/70 hover:bg-red01"
            : "bg-purple01/70 hover:bg-purple01 text-white/70"
        )}
      >
        navigation
      </button>
      <button
        className={clsx(
          "border  hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] w-full font-extrabold text-center ",
          color === "red"
            ? "hover:bg-red01/20 text-red01"
            : "hover:bg-purple01/20 text-purple01"
        )}
      >
        about
      </button>
    </div>
  );
};

export default HeroButtons;
