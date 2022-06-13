import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MainSec from "./mainSec";

const MainPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(null);
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  const changeToggle = () => {
    if (toggle === false || toggle === null) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });
  return (
    <section className='flex flex-col lg:flex-row h-full'>
      {width < 1024 && <Navbar toggleFunc={changeToggle} />}
      <Sidebar width={width} show={toggle} />
      <MainSec />
    </section>
  );
};

export default MainPage;
