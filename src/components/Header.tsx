import {Link} from "react-router-dom"
import CustomButton from "./CustomButton";


const Header = () => {
  return <header className="w-full absolute z-10">
    <nav className="flex justify-between items-center max-w-[1440px] px-6 py-4 sm:px-16">
        <Link to={"/"}>
            <img src="/bmw.png" width={50} alt="" />
        </Link>
        <CustomButton title="Kaydol" designs="rounded-full bg-primary-blue min-w-[130px] transition duration-500 hover:bg-blue-800 "/>
    </nav>

  </header>;
};

export default Header;
