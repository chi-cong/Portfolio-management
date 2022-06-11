import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-lime-700 h-14 flex justify-around items-center'>
      <Tab title={"Home"} icon={<FaHome />} />
      <Tab title={"About"} icon={<FaUser />} />
      <Tab title={"Portfolio"} icon={<FaBriefcase />} />
      <Tab title={"Blogs"} icon={<FaNewspaper />} />
      <Tab title={"Contact"} icon={<FaEnvelope />} />
    </div>
  );
};

const Tab = ({ title, icon }) => {
  return (
    <h2 className='text-2xl flex justify-between items-center gap-2 hover:text-blue-300 cursor-pointer'>
      {title} {icon}
    </h2>
  );
};

export default Navbar;
