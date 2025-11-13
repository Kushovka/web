import CardAchievements from "../CardAchievements";

const AchievementsContent = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden px-[290px] py-[92px]">
      <div className="border-frame w-full h-full  inline-block z-10">
        <span></span>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center flex flex-col gap-[9px] pt-[39px]">
          <h2 className="iceland-text text-[18px] font-normal ">
            Achievements
          </h2>
          <div className="flex ">
            <div>
              <div className="border pt-[28px] p-[48px] flex flex-col gap-[11px]">
                <div className="w-[89px] h-[89px] rounded-full bg-red01 "></div>
                <h2 className="iceberg-text text-[12px] tracking-normal text-gray01">
                  progress
                </h2>
              </div>
              <div>
                <p className="iceland-text font-normal text-[14px] text-gray01 tracking-normal text-left">
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
                <button className="big-text text-[18px] font-extrabold text-red01 border border-red01 px-[36px] py-[6px]">
                  Challenge me
                </button>
              </div>
            </div>
            <div>
              <CardAchievements />
            </div>
            <div>
              <p>active btn</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AchievementsContent;
