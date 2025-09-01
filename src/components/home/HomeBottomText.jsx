import { Link } from "react-router-dom";
import "./HomeBottomText.scss";
const HomeBottomText = () => {
  return (
    <main className="homeBottomText-main text-white">
      <div className=" uppercase border-2  hover:border-[#D3FD50] border-white rounded-full  px-10 pt-3 ">
        <Link to="/projects" className="text-[6vw] mt-6 hover:text-[#D3FD50]">
          Projects
        </Link>
      </div>
      <div className=" uppercase hover:border-[#D3FD50] border-2 border-white rounded-full  px-10 pt-3 ">
        <Link to="/agence" className="text-[6vw] mt-6 hover:text-[#D3FD50]">
          Agence
        </Link>
      </div>
    </main>
  );
};

export default HomeBottomText;
