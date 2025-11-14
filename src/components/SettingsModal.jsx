import { CgDanger } from "react-icons/cg";

const SettingsModal = ({ setOpenSettings }) => {
  return (
    <section className="fixed z-30 top-1/2 -translate-y-1/2 px-[100px]  left-1/2 -translate-x-1/2 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[5px]">
        <h1 className="big-text font-extrabold text-[18px] ">
          visual configurator
        </h1>
        <p className="iceland-text text-[16px] text-gray02">
          apply what works best for you
        </p>
      </div>
      <div className="border border-white/15 rounded-tl-[12px] bg-red01/10 p-[32px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <label
            for="name"
            className="big-text text-[18px] flex items-center justify-between font-extrabold text-red01"
          >
            <p> HUD HUE</p>
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
        <div className="flex flex-col gap-[12px]">
          <label
            for="email"
            className="big-text text-[18px] font-extrabold text-red01"
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
        <div className="flex flex-col gap-[12px] pb-[76px]">
          <label
            for="name"
            className="big-text text-[18px] flex items-center justify-between font-extrabold text-red01"
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
        <div className="h-[1px] w-full bg-red01"></div>
        <div className="flex items-start justify-center gap-[5px]">
          <CgDanger className="w-[24px] h-[24px] text-red01" />
          <p className="iceland-text tex-[16px] text-red01">
            The configuration data is stored in your
            <br /> browser. If you login from a different
            <br /> browser or machine, your settings will
            <br /> not apply.
          </p>
        </div>
        <div className="flex items-center gap-[16px]">
          <button
            type="submit"
            className="bg-red01/70 hover:bg-red01 hover:rounded-[6px] transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-black"
          >
            send message [enter]
          </button>
          <button
            onClick={() => setOpenSettings(false)}
            className="border hover:bg-red01/20 hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-red01"
          >
            discard [esc]
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsModal;
