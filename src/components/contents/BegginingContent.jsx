import clsx from "clsx";
import heroImg from "../../assets/images/heroPage/heroImg.png";
import { useTheme } from "../../hook/useTheme";

const BegginingContent = () => {
  const { color } = useTheme();

  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center flex flex-col gap-[9px] pt-[39px]">
          <h2 className="iceland-text text-[18px] font-normal ">
            swimming through a vast network of interconnected devices and
            servers, spreading joy and whimsy to users across the globe
          </h2>
          <p className="iceland-text text-[14px] font-normal opacity-70">
            Artwork generated with midjourney
          </p>
        </div>
      </div>
    </main>
  );
};

export default BegginingContent;
