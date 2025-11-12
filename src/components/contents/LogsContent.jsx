import logsCards from "../../constants";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

const BegginingContent = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
      <div className="border-frame w-full h-full inline-block z-10">
        <span></span>
        <div className="border-frame w-full h-full inline-block z-10 overflow-hidden">
          <div className="sphere-2"></div>
          <div className="text-center flex flex-col gap-[32px] pt-[39px] px-[195px]">
            <h2 className="iceland-text text-[18px] font-normal ">
              data log dump initialized.
            </h2>
            <div>
              {/* titles */}
              <div className="flex flex-col gap-[6px]">
                <div className="bg-red01 flex items-center justify-between py-[3px] px-[6px]">
                  <h2 className="big-text font-extrabold text-[18px] text-black04">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text font-normal text-[14px] text-black04">
                    DATE: 2007.04.25
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] items-start pb-[10px]">
                  <h2 className="iceland-text text-[16px] font-normal">
                    LOCATION:
                    <span className="text-gray01 uppercase text-[16px] font-normal">
                      {" "}
                      Research Facility, Planet X-17
                    </span>
                  </h2>
                  <h2 className="iceland-text text-[16px] font-normal">
                    PROJECT STATUS:
                    <span className="text-gray01 uppercase text-[16px] font-normal">
                      {" "}
                      In Development
                    </span>
                  </h2>
                </div>
              </div>
              {/* cards */}
              <div className="flex flex-col gap-[23px]">
                <div className="grid grid-cols-2 text-left gap-[15px]">
                  {logsCards.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative border border-white/10 rounded-tl-[12px] py-[15px] pr-[13px] pl-[18px] bg-black"
                    >
                      <h2 className="big-text uppercase text-[18px] font-extrabold text-red01">
                        {item.title}
                      </h2>
                      <p className="iceland-text uppercase text-[14px] font-normal text-gray01">
                        {item.text}
                      </p>
                      {idx === 1 || idx === 3 ? (
                        <button className="flex items-center gap-[4px]">
                          <IoCloseSharp className="text-red01 text-[12px] rotate-45" />
                          <p className="iceland-text font-normal text-[16px] text-red01">
                            expand
                          </p>
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <button className="relative font-extrabold text-[18px] big-text w-[250px] text-red01 border border-red01 p-[7px] text-left hover:bg-red01/60 group transition-all duration-300">
                    <p className="group-hover:text-white transition-all duration-300">
                      open connection
                    </p>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 px-[4px]">
                      <CiImageOn className="w-[28px] h-[28px] group-hover:text-white transition-all duration-300" />
                    </div>
                  </button>
                </div>
              </div>
              {/* logs */}
              <div className="flex flex-col gap-[9px]">
                <h2 className="iceland-text text-[18px] font-normal text-left">
                  older logs:
                </h2>
                <div className="flex items-center justify-between border border-red01 py-[3px] px-[6px]">
                  <h2 className="big-text font-extrabold text-[18px] text-red01">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text text-[14px] text-red01 ">
                    DATE: 2007.04.25
                  </p>
                </div>
                <div className="flex items-center justify-between border border-red01 py-[3px] px-[6px]">
                  <h2 className="big-text font-extrabold text-[18px] text-red01">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text text-[14px] text-red01 ">
                    DATE: 2007.04.25
                  </p>
                </div>
                <div className="flex items-center justify-between border border-red01 py-[3px] px-[6px]">
                  <h2 className="big-text font-extrabold text-[18px] text-red01">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text text-[14px] text-red01 ">
                    DATE: 2007.04.25
                  </p>
                </div>
                <div className="flex items-center justify-between border border-red01 py-[3px] px-[6px]">
                  <h2 className="big-text font-extrabold text-[18px] text-red01">
                    LOG ENTRY: PROJECT DEVELOPMENT UPDATE
                  </h2>
                  <p className="iceberg-text text-[14px] text-red01 ">
                    DATE: 2007.04.25
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BegginingContent;
