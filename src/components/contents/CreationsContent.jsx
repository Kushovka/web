import Button from "../Button";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

import polygon from "../../assets/images/creationsContent/polygon.png";

const CreationsContent = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
      <div className="border-frame w-full h-full inline-block z-10">
        <span></span>
        <div className="border-frame w-full h-full overflow-hidden inline-block z-10">
          <div className="sphere-2"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full items-center flex flex-col gap-[40px] pt-[39px]">
            {/* title */}
            <h2 className="iceland-text text-[18px] font-normal ">Creations</h2>
            {/* content */}
            <div className="w-full flex gap-[16px] px-[93px]">
              {/* left content */}
              <div className="flex flex-col w-1/3 gap-[20px]">
                {/* details */}
                <div className="w-full  border border-white/10">
                  <div className="flex flex-col p-[12px] gap-[17px]">
                    <div className="flex flex-col gap-[4px]">
                      <Button
                        onClick={() => setOpenForHire(true)}
                        title={"details"}
                        color={"rgba(232, 74, 74, 0.7)"}
                        colortext={"#ffffff"}
                      />
                      <p className="iceland-text text-[14px] font-normal">
                        project name
                      </p>
                      <h2 className="big-text text-[18px] font-extrabold text-red01">
                        Legacy.ai
                      </h2>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex flex-col gap-[4px]">
                      <p className="iceland-text text-[14px] font-normal">
                        brief
                      </p>
                      <h2 className="big-text text-[18px] font-extrabold text-red01">
                        one sentence explanation for what the project is.
                      </h2>
                    </div>
                  </div>
                </div>
                {/* technologies */}
                <div className="border border-white/10">
                  <div className="flex flex-col gap-[20px] p-[12px]">
                    <Button
                      onClick={() => setOpenForHire(true)}
                      title={"technologies"}
                      color={"rgba(232, 74, 74, 0.7)"}
                      colortext={"#ffffff"}
                    />
                    <div className="flex gap-[8px]">
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaReact className="absolute top-1/2 left-1/2 w-[24px] h-[24px] text-red01 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaNodeJs className="absolute top-1/2 left-1/2 w-[24px] h-[24px] text-red01 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaFigma className="absolute top-1/2 left-1/2 w-[24px] h-[24px] text-red01 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaJs className="absolute top-1/2 left-1/2 w-[24px] h-[24px] text-red01 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="relative ">
                        <div className="relative w-full h-full">
                          <img
                            src={polygon}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <FaGit className="absolute top-1/2 left-1/2 w-[24px] h-[24px] text-red01 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* about */}
                <div className="flex flex-col gap-[10px]">
                  <h2 className="iceland-text text-[14px] ">About:</h2>
                  <p className="iceland-text text-[14px] text-gray02">
                    The team has encountered several challenges during the
                    development process, including unexpected system crashes,
                    hardware malfunctions and unanticipated compatibility
                    issuesThe team <br /><br /> has encountered several challenges
                    during the development process, including unexpected system
                    crashes, hardware malfunctions, and unanticipated
                    compatibility issues...
                  </p>
                  <button className="flex items-center gap-[4px]">
                    <IoCloseSharp className="text-red01 text-[12px] rotate-45" />
                    <p className="iceland-text font-normal text-[16px] text-red01">
                      expand
                    </p>
                  </button>
                </div>
              </div>
              {/* right content */}
              <div className="flex flex-col w-2/3 gap-[37px]">
                <div className="border-frame w-full h-full inline-block z-10">
                  <span></span>
                  <div className="flex items-center justify-between bg-red01/20 p-[11px]">
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      file xplorer
                    </h2>
                    <IoCloseSharp className="text-red01 text-[16px]" />
                  </div>
                  <div className="flex items-center gap-[6px] border-b p-[11px]">
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      location:
                    </h2>
                    <h2 className="iceland-text text-[14px] tracking-normal ">
                      /projects/the-name
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="py-[14px] px-[12px] flex flex-col gap-[16px]">
                      {/* 1 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 3 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 4 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 5 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 6 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="py-[14px] px-[120px] flex flex-col gap-[16px]">
                      {/* 7 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                      {/* 8 */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-red01/30 p-[12px]">
                          <CiImageOn className="w-[24px] h-[24px] text-red01" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            homepage.jpg
                          </h2>
                          <h2 className="iceland-text text-[16px] tracking-normal text-gray02">
                            23kb
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-[16px]">
                  <button className="bg-red01/70 hover:bg-red01 hover:rounded-[6px] transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-black">
                    view project demo
                  </button>
                  <button className="border hover:bg-red01/20 hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-red01">
                    Back to all projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreationsContent;
