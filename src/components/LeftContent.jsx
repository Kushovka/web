import imgAvatar from "../assets/images/homePage/avatar.png";
import Button from "./Button";
import connectImg from "../assets/images/buttonComponent/connect.svg";
import { IoIosBluetooth } from "react-icons/io";

const LeftContent = ({
  name,
  occupation,
  corporation,
  setOpenForHire,
  setOpenConnect,
}) => {
  return (
    <section className="fixed left-0 top-0 py-[92px] max-w-[290px] pr-[16px] flex flex-col justify-between  h-screen pl-[78px]  z-10">
      <div className=" flex flex-col gap-[20px]">
        <div className="border-frame p-[15px] inline-block relative z-10">
          {/* <div className="sphere-2"></div> */}
          <img
            src={imgAvatar}
            className="block relative z-10 hover:scale-[1.15] transition-all duration-300"
            alt=""
          />
          
          <span></span>
        </div>

        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">name</h1>
            <p className=" font-extrabold text-[18px] big-text text-red01">
              {name}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">occupation</h1>
            <p className="font-extrabold text-[18px]  text-red01 big-text">
              {occupation}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">corporation</h1>
            <p className=" font-extrabold text-[18px] big-text text-red01">
              {corporation}
            </p>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[14px] iceland-text">availability</h1>
            <Button
              onClick={() => setOpenForHire(true)}
              title={"open for hire"}
              color={"rgba(232, 74, 74, 0.7)"}
              opacity={"70%"}
            />
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className="text-[14px] iceland-text">social</h1>
            <button
              onClick={() => setOpenConnect(true)}
              className="relative font-extrabold text-[18px] big-text text-red01 border border-red01 p-[7px] text-left hover:bg-red01/60 group transition-all duration-300"
            >
              <span className="group-hover:text-white transition-all duration-300">
                open connection
              </span>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 px-[4px]">
                <IoIosBluetooth className="text-[24px] group-hover:text-white transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px]">
        <h1 className=" text-[18px] iceland-text text-red01">Motto:</h1>
        <p className=" text-[16px] iceland-text text-gray02">
          Saepe omnis neque numquam recusandae laudantium.
        </p>
      </div>
    </section>
  );
};

export default LeftContent;
