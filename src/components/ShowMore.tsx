import { useSearchParams } from "react-router-dom";
import CustomButton from "./CustomButton";

interface IShowMore {
    limit : number | string
    isNext : boolean
}

const ShowMore = ({limit, isNext}:IShowMore) => {

const [params,setParams]=useSearchParams()

const handleNavigate =()=>{
  // yeni limiti belirler
const newLimit = Number(limit) + 5 
// eklenecek parametreyi belirliyoruz
params.set('limit',String(newLimit))
 // url'ye paramtreyi gönderme
setParams(params)
}
  return <div className="w-full flex-center gap-5 mt-10">
    {
        isNext && (
            <CustomButton title="Daha Fazla" 
            designs="bg-primary-blue rounded-full transition hover:bg-blue-800"
            handleClick={handleNavigate}/>
        )
    }
  </div>;
};

export default ShowMore;
