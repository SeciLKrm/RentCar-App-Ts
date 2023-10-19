
import { IButtonProps } from "../types";



const CustomButton = ({title, designs, btnType, handleClick, rIcon}:IButtonProps) => {
  return (
  <button 
  type="button" 
  className={`custom-btn ${designs}` } 
  onClick={handleClick} 
  disabled ={false} >
    <span className="flex-1">{title} </span>

    {rIcon && (
      <div className="w-6 h-6">
        <img src={rIcon} alt="" />
      </div>
    ) }
    </button>
  )
};

export default CustomButton;
