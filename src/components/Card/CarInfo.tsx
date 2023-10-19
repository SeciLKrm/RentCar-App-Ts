type InfoProps ={
    icon : string,
    title : string
}


const CarInfo = ({icon , title} : InfoProps) => {
  return <div className="flex flex-col justify-center items-center gap-2">
    <img src={icon} alt="" />
    <p>{title} </p>
  </div>;
};

export default CarInfo;
