const HomePage = ({ setOpenSystem }) => {
  return (
    <section className="relative max-w-max mx-auto  py-[10px] px-[10px]">
      <div className="sphere-1"></div>
      <div className="flex flex-col md:flex-row items-center justify-center  md:gap-[84px]  h-screen">
        <div>
          <h1 className="big-text text-red01 font-extrabold md:text-[538px] text-[280px]">
            HI!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:gap-[68px] gap-[26px]">
          <div className="flex flex-col md:gap-[46px] gap-[20px]">
            <div>
              <h2 className=" text-white  md:text-[26px] iceland-text">
                Welcome to by personal website.
              </h2>
            </div>
            <div className="flex flex-col gap-[10px] max-w-[640px]">
              <p className=" md:text-[20px] leading-[130%] iceland-text">
                I have created this website to feel like a game/sci-fi
                interface. All text inside tries to reflect this.{" "}
              </p>
              <p className=" md:text-[20px] leading-[130%] iceland-text">
                You will find ‘achievements’ or ‘quests’ that show the progress
                in my professional life and are related to what I am working on.
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setOpenSystem(true)}
              className=" font-extrabold  md:text-[22px] text-red01 border py-[15px] px-[50px] border-red01 big-text hover:bg-red01/40 transition-all duration-300 animate-pulse hover:animate-none"
            >
              enter the system
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
