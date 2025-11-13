import React from "react";
import icon1 from "../assets/images/achievementsContent/icon1.png";

const CardAchievements = () => {
  return (
    <div className="border rounded-tl-[12px]">
      <div className="flex pt-[22px]">
        <div className="flex flex-col items-center justify-center gap-[7px]">
          <img src={icon1} className="w-[84px] h-[75px]" alt="" />
          <div className="bg-gold01 py-[3px] px-[17px]">
            <p className="iceland-text text-[14px] ">legendary</p>
          </div>
        </div>
        <div className="flex flex-col justify-between pl-[21px]">
          <div className="">
            <h2 className="big-text font-extrabold text-[18px] text-gold01 text-left">
              1000 stars on my project
            </h2>
            <p className="iceland-text text-[14px] text-gray01 tracking-normal text-left">
              I have contributed to Gutenberg, moment.js and react repositories
              in github.
            </p>
          </div>
          <div className="bg-gold01/10 py-[4px]">
            <p className="iceland-text text-[12px] text-left">
              Achieved: 14 / 02 / 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAchievements;
