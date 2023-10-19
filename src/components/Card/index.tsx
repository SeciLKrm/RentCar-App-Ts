import { useState } from "react";
import { ICarProps } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";
import {motion} from "framer-motion"

type CardProps={
  car : ICarProps
}

const Card = ({car}:CardProps) => {

const [isOpen, setIsOpen] = useState<boolean>(false)

  return <motion.div 
  className="car-card group"
  initial={{scale : 0.5}}
  whileInView={{scale : 1}}
  transition={{ duration: 0.2 }} 
  >
{/* başlık */}
<h2 className="car-card__content-title">{car.make} {car.model} </h2>
{/* fiyat */}
<p className="flex mt-6 text-[32px] ">
  <span className="self-start text-[14px] font-semibold">TL</span>
  {Math.round(Math.random()*20000 ) + 500 }
  <span className="self-end text-[14px] font-medium">/gün</span>
</p>
{/* resim */}
<div className="w-full h-40 my-3 object-contain">
  <img src={generateImage(car)} alt="" />
</div>
{/* bilgiler */}
<div className=" relative w-full mt-2">
  <div className="group-hover:invisible flex justify-between w-full mt-2 text-gray-500 ">
    <CarInfo icon="/steering-wheel.svg" title={car.transmission === "a" ? "automatic" : "manual"} />
    <CarInfo icon ="/steering-wheel.svg" title={car.drive?.toUpperCase()} />
    <CarInfo icon="/steering-wheel.svg" title={car.city_mpg + "MPG"} />
</div>

<div className="car-card__btn-container">
  <CustomButton title="Daha Fazla" 
 handleClick={()=>setIsOpen(true) }
  designs="w-full py-[16px] rounded-full bg-prmary-blue text-white transition hover:bg-blue-800 "
  rIcon="/right-arrow.svg"/>
</div>
{/* detay sayfası  */}
<DetailModal isOpen={isOpen} closeModal={()=>setIsOpen(false) } car={car} />
</div>
  </motion.div>;
};

export default Card;
