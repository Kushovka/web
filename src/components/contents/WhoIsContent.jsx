import clsx from "clsx";

import img1 from "../../assets/images/whoContent/img1.png";

import { useTheme } from "../../hook/useTheme";

const WhoIsContent = () => {
  const { color } = useTheme();
  return (
    <main
      className={`relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]`}
    >
      <div
        className={clsx(
          "w-full h-full inline-block z-10",
          color === "red" ? "border-frame" : "border-frame_purple"
        )}
      >
        <span></span>
        <div
          className={clsx(
            "w-full h-full inline-block z-10 overflow-hidden",
            color === "red" ? "border-frame" : "border-frame_purple"
          )}
        >
          <div
            className={clsx(color === "red" ? "sphere-2" : "sphere-2_purple")}
          ></div>
          <div className="text-center flex flex-col gap-[32px] pt-[39px] px-[195px]">
            <h2 className="iceland-text text-[18px] font-normal ">
              Who is Kirill Kushov
            </h2>
            <div className="flex">
              {/* text content */}
              <div className="w-1/2 flex flex-col gap-[40px]">
                <div className="flex gap-[28px]">
                  <h2 className="text-end whitespace-nowrap iceland-text text-[14px] tracking-normal text-gray01">
                    The short introduction of <br /> my life
                  </h2>
                  <p className="text-start iceland-text text-[18px] tracking-normal leading-[110%]">
                    I’ve always been fascinated by how the internet can improve
                    lives. I became a web engineer to create practical,
                    innovative solutions and bring my unique perspective from
                    design and 3D experience into web projects.
                  </p>
                </div>
                <div className="flex gap-[28px]">
                  <h2 className="text-end whitespace-nowrap iceland-text text-[14px] tracking-normal text-gray01">
                    Career and development
                  </h2>
                  <p className="text-start iceland-text text-[18px] tracking-normal leading-[110%]">
                    I build web projects with React, Vue, and Node.js,
                    constantly leveling up my skills and using the latest
                    technologies to create products that truly impress.
                  </p>
                </div>
                <div className="flex gap-[28px]">
                  <h2 className="text-end whitespace-nowrap iceland-text text-[14px] tracking-normal text-gray01">
                    More can be added in the
                    <br /> left side for summary
                  </h2>
                  <p className="text-start iceland-text text-[18px] tracking-normal leading-[110%]">
                    As a web engineer, I prioritize building reliable, scalable,
                    and secure web applications. I enjoy working closely with
                    teams and clients, understanding their needs, and turning
                    their ideas into highly effective and impressive solutions.
                  </p>
                </div>
              </div>
              {/* img */}
              <div className="w-1/2 ">
                <button
                  onClick={() => setOpenContent(6)}
                  className="border-frame w-[60%] inline-block relative z-10"
                >
                  {/* <div className="sphere-2"></div> */}
                  <img
                    src={img1}
                    className="block relative z-10 h-[80%] transition-all duration-300"
                    alt=""
                  />

                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoIsContent;
