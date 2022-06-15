import { useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ show, changeCurrSec, toggleModal, changeModalAct }) => {
  const refBar = useRef(null);
  useEffect(() => {
    if (show) {
      refBar.current.classList.remove("opacity-0");
      refBar.current.classList.remove("-z-20");
      refBar.current.classList.add("z-20");
    } else {
      refBar.current.classList.add("opacity-0");
      refBar.current.classList.add("-z-20");
      refBar.current.classList.remove("z-20");
    }
  });
  return (
    <div
      className='opacity-0 w-1/2 h-screen border-r-2 border-slate-500 sm:w-4/12 lg:w-2/12 lg:flex lg:opacity-100 lg:flex-col items-start fixed bg-slate-900 -z-20 lg:z-0 transition-all '
      ref={refBar}
    >
      <div className='h-1/6 w-full text-3xl text-center text-gray-500 flex justify-center items-center'>
        <h1>Web admin</h1>
      </div>
      <div
        style={{ height: "1px", width: "100%" }}
        className='bg-slate-600'
      ></div>
      <div className='w-full h-4/6'>
        <Tab title={"Home"} icon={<FaHome />} changeCurrSec={changeCurrSec} />
        <Tab title={"About"} icon={<FaUser />} changeCurrSec={changeCurrSec} />
        <Tab
          title={"Portfolio"}
          icon={<FaBriefcase />}
          changeCurrSec={changeCurrSec}
        />
        <Tab
          title={"Blogs"}
          icon={<FaNewspaper />}
          changeCurrSec={changeCurrSec}
        />
        <Tab
          title={"Contact"}
          icon={<FaEnvelope />}
          changeCurrSec={changeCurrSec}
        />
      </div>
      <div
        style={{ height: "1px", width: "100%" }}
        className='bg-slate-600'
      ></div>
      <div className='w-full'>
        <Tab
          title={"Sign out"}
          icon={<FaSignOutAlt />}
          changeCurrSec={changeCurrSec}
          showModal={toggleModal}
          changeModalAct={changeModalAct}
        />
      </div>
    </div>
  );
};

const Tab = ({ title, icon, changeCurrSec, showModal, changeModalAct }) => {
  const clickHandler = () => {
    if (title !== "Sign out") {
      changeCurrSec(title);
    } else {
      showModal();
      changeModalAct("signout");
    }
  };
  return (
    <button
      className=' lg:dis text-xl h-12 text-gray-500 w-full flex items-center gap-2 hover:bg-slate-200 cursor-pointer '
      onClick={clickHandler}
    >
      <i className='ml-3'>{icon}</i> <p>{title}</p>
    </button>
  );
};

export default Sidebar;
