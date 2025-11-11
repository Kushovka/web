import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import Header from "../components/Header";

import heroImg from "../assets/images/heroPage/heroImg.png";

const HeroPage = () => {
  return (
    <section>
      <Header />
      <LeftContent
        name={"Kirill Kushov"}
        occupation={"developer"}
        corporation={"freelance"}
      />
      <RightContent />
      <div className="max-w-max mx-auto py-[92px] px-[290px] relative z-10">
        <img src={heroImg} className="relative z-10 w-[1344px] h-[896px]" alt="" />
        <span></span>
      </div>
    </section>
  );
};

export default HeroPage;
