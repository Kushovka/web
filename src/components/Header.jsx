import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({ setOpenCredits }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleTimeString([navigator.language]);

  return (
    <section className="fixed flex z-10 items-center justify-between w-screen px-[78px] pt-[27px] pb-[32px] top-0 ">
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
            <IoCloseSharp className="text-red01 text-[16px] rotate-45" />
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

      <div className="flex-center gap-[27px]">
        <div>
          <button
            onClick={() => setOpenCredits(true)}
            className=" px-[6px] py-[2px]"
          >
            <p className="iceberg-text text-[12px] font-normal">credits</p>
          </button>
        </div>
        <div className="flex-center gap-[5px]">
          <p className="iceland-text text-[14px] font-normal text-gray01">
            server time:
          </p>
          <span className="text-iceland text-[14px] font-normal text-white">
            00:00
          </span>
        </div>
        <div className="flex-center gap-[5px]">
          <p className="iceland-text text-[14px] font-normal text-gray01">
            local time:
          </p>
          <span className="text-iceland text-[14px] font-normal text-white">
            {formattedDate}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
