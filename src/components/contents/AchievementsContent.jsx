import CardAchievements from "../CardAchievements";
import icon1 from "../../assets/images/achievementsContent/icon1.png";
import icon2 from "../../assets/images/achievementsContent/icon2.png";
import icon4 from "../../assets/images/achievementsContent/icon4.png";

const AchievementsContent = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
      <div className="border-frame w-full h-full inline-block z-10">
        <span></span>
        <div className="border-frame w-full h-full overflow-hidden inline-block z-10">
          <div className="sphere-2"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full items-center flex flex-col gap-[40px] pt-[39px]">
            {/* title */}
            <h2 className="iceland-text text-[18px] font-normal ">
              Achievements
            </h2>
            {/* content */}
            <div className="flex gap-[18px]">
              {/* progress */}
              <div className="flex flex-col  gap-[15px]">
                <div className="border border-white/10  pt-[28px] p-[48px] flex flex-col gap-[11px]">
                  <div className="relative left-1/2 -translate-x-1/2">
                    <div className="relative left-1/2 -translate-x-12">
                      <svg
                        className="rotate-[90deg]"
                        width="90"
                        height="90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#1A1A1A"
                          strokeWidth="12"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#E84A4A"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray="283"
                          strokeDashoffset="175"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 big-text text-[22px] text-red01 font-bold">
                      8/27
                    </p>
                  </div>

                  <h2 className="iceberg-text text-[12px] tracking-normal text-gray01">
                    progress
                  </h2>
                </div>
                <div>
                  <p className="iceland-text font-normal text-[14px] text-gray01 tracking-normal text-start">
                    I have created a set of
                    <br /> achievements for myself
                    <br /> and I use this page to track them.
                    <br />
                    <br />
                    If you want to give me a<br /> challenge and rate it,
                    <br /> please feel free to submit it
                    <br /> with the button below!
                  </p>
                </div>
                <div>
                  <button className="big-text text-[18px] font-extrabold text-red01 border border-red01 px-[36px] py-[6px] w-full">
                    Challenge me
                  </button>
                </div>
              </div>
              {/* cards */}
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[22px]">
                  <div>
                    <p className="text-left iceberg-text text-[12px] tracking-normal ">
                      achieved
                    </p>
                  </div>
                  <CardAchievements
                    title={"1000 stars on my project"}
                    text={
                      "I have contributed to Gutenberg, moment.js and react repositories in github."
                    }
                    rank={"legendary"}
                    achieved={"Achieved: 14 / 02 / 2022"}
                    img={icon1}
                    variant1={"legendary-card"}
                    variant2={"border-green01/15"}
                    variant3={"bg-gold01/15"}
                    textVariant={"text-gold01"}
                  />
                  <CardAchievements
                    title={"released personal website"}
                    text={
                      "the site you are looking at right now -- yes, I did it! And it took me a few months."
                    }
                    rank={"EPIC"}
                    achieved={"Achieved: 14 / 02 / 2022"}
                    img={icon2}
                    variant1={"bg-red01"}
                    variant2={"border-white/10"}
                    variant3={"bg-red01/15"}
                    textVariant={"text-red01"}
                  />
                </div>
                <div className="flex flex-col gap-[22px]">
                  <div>
                    <p className="text-left iceberg-text text-[12px] tracking-normal ">
                      to be achieved:
                    </p>
                  </div>
                  <CardAchievements
                    title={"gain 50 stars on a my repository"}
                    text={
                      "My most popular extension is gaining traction, I am aiming for at least 50 stars"
                    }
                    rank={"RARE"}
                    achieved={"ongoing"}
                    img={icon4}
                    variant1={"bg-blue01"}
                    variant2={"border-white/10"}
                    variant3={"bg-blue01/15"}
                    textVariant={"text-blue01"}
                    opacity
                  />
                </div>
              </div>
              {/* buttons */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[9px]">
                  <div className="border border-red01 w-[18px] h-[18px] "></div>
                  <p className="iceberg-text text-[14px] text-red01">
                    active btn
                  </p>
                </div>
                <div className="flex gap-[9px]">
                  <div className="border border-red01 w-[18px] h-[18px] "></div>
                  <p className="iceberg-text text-[14px] text-red01">
                    in progress
                  </p>
                </div>
                <div className="flex gap-[9px]">
                  <div className="border border-red01 w-[18px] h-[18px] "></div>
                  <p className="iceberg-text text-[14px] text-red01">todo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AchievementsContent;
