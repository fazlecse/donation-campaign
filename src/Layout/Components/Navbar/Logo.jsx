import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img className="w-[150px]" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
