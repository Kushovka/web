const CardAchievements = ({
  title,
  text,
  rank,
  achieved,
  img,
  variant1,
  variant2,
  variant3,
  textVariant,
  opacity,
}) => {
  return (
    <div
      className={`border ${variant2} rounded-tl-[12px] ${
        opacity ? "opacity-30" : ""
      }`}
    >
      <div className="flex">
        <div className="flex flex-col items-center justify-center gap-[8px] border-r border-black06 pt-[20px]">
          <img src={img} className="w-[84px] h-[75px] " alt="" />
          <div className={`${variant1} w-[113px] py-[3px] px-[17px]`}>
            <p className="iceland-text text-[14px] ">{rank}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="pt-[22px] pl-[21px]">
            <h2
              className={`big-text font-extrabold text-[18px] ${textVariant} text-left`}
            >
              {title}
            </h2>
            <p className="iceland-text text-[14px] text-gray01 tracking-normal text-left">
              {text}
            </p>
          </div>
          <div className={`${variant3} px-[22px] py-[4px]`}>
            <p className="iceland-text text-[12px] text-left">{achieved}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAchievements;
