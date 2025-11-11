import buttonComponent from "../assets/images/buttonComponent/star.svg";

const Button = ({ title, color, opacity, className }) => {
  return (
    <button
      style={{ backgroundColor: color, opacity: opacity }}
      className={`relative  font-extrabold text-[18px] big-text text-left px-[4px] py-[2px] group ${className}`}
    >
      <span className="text-black01 group-hover:text-white transition-colorss duration-300">
        {title}
      </span>
      <div className="absolute top-1/2 -translate-y-1/2 -right-3">
        <img src={buttonComponent} className="w-[20px]" alt="" />
      </div>
      <div className="absolute -top-[6px] right-[4px]">
        <img src={buttonComponent} className="w-[20px]" alt="" />
      </div>
      <div className="absolute top-[12px] right-[3px]">
        <img src={buttonComponent} className="w-[20px]" alt="" />
      </div>
    </button>
  );
};

export default Button;
