import CustomButton from "./CustomButton";
import {motion} from "framer-motion"
const Hero = () => {
  return <div className="hero">
    <div className="pt-36 flex-1 padding-x max-h-[920px]">
        <h1 className="hero__title">  Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle"> Altın standartta hizmetle unutulmaz bir yolculuğa hazır
          mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.</p>
        <CustomButton title="Arabaları Keşfet" designs="bg-primary-blue rounded-full mt-10 hover:bg-blue-800"/>
</div>
    <div className="w-100 flex justify-center">
        <motion.img initial={{translateX:150}} 
        whileInView={{translateX : 0}} 
        transition={{ duration: 1 }} 
        src="/hero.png" alt="" 
        className="object-contain img-fluid "/>
    </div>
  </div>;
};

export default Hero;
