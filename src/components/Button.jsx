import buttonComponent from "../assets/images/buttonComponent/star.svg";

const Button = ({ title, color, className, colortext, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`relative z-0 font-extrabold text-[18px] big-text text-left px-[6px] py-[4px] group ${className} overflow-hidden`}
    >
      <h2
        style={{ color: colortext }}
        className="text-black01 relative z-10 group-hover:text-white transition-colors duration-300 opacity-100"
      >
        {title}
      </h2>
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
