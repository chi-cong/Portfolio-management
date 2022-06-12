import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const screenWidth = window.width;
  console.log(screenWidth);
  return (
    <div className='lg:h-screen sm:h-1/6 lg:w-2/12 flex lg:flex-col items-start fixed bg-slate-900'>
      {screenWidth < 1024 && (
        <div className='h-1/6 w-full text-3xl text-center text-gray-500 flex justify-center items-center'>
          <h1>Web admin</h1>
        </div>
      )}
      <div
        style={{ height: "1px", width: "100%" }}
        className='bg-slate-600'
      ></div>
      <div className='w-full h-4/6'>
        <Tab title={"Home"} icon={<FaHome />} />
        <Tab title={"About"} icon={<FaUser />} />
        <Tab title={"Portfolio"} icon={<FaBriefcase />} />
        <Tab title={"Blogs"} icon={<FaNewspaper />} />
        <Tab title={"Contact"} icon={<FaEnvelope />} />
      </div>
      <div
        style={{ height: "1px", width: "100%" }}
        className='bg-slate-600'
      ></div>
      <div className='w-full'>
        <Tab title={"Sign out"} icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
};

const Tab = ({ title, icon }) => {
  return (
    <button className='text-xl h-12 text-gray-500 w-full flex items-center gap-2 hover:bg-slate-200 cursor-pointer '>
      <i className='ml-3'>{icon}</i> <p>{title}</p>
    </button>
  );
};

export default Sidebar;
