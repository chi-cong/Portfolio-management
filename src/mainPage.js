import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MainSec from "./mainSec";
import Modal from "./modal";

export const MainContext = React.createContext({});

const MainPage = ({ changeAccess }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(null);
  const [currSec, setCurrSec] = useState("Home");
  const [confirmation, setConfirmation] = useState(false);
  const [modalAct, setModalAct] = useState();

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  // show/hide side bar for mobile UI
  const changeToggle = () => {
    if (toggle === false || toggle === null) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  // change current main section
  const changeCurrSec = (sec) => {
    setCurrSec(sec);
  };
  // show/hide confirmation modal
  const toggleModal = () => {
    if (confirmation) {
      setConfirmation(false);
    } else {
      setConfirmation(true);
    }
  };
  // action for modal
  const changeModalAct = (act) => {
    setModalAct(act);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <MainContext.Provider value={{ toggleModal, changeModalAct }}>
      <section className='flex flex-col lg:flex-row h-full z-0'>
        {/* navbar on mobile UI */}
        {width < 1024 && <div className='h-14 w-full'></div>}
        {width < 1024 && <Navbar toggleFunc={changeToggle} />}

        {/* sidebar and main Section */}
        {width >= 1024 && <div className='w-2/12'></div>}
        {width < 1024 && (
          <div className='w-1/2 sm:w-1/3 h-screen -z-10 fixed'></div>
        )}
        <Sidebar
          show={toggle}
          changeCurrSec={changeCurrSec}
          logout={changeAccess}
          changeModalAct={changeModalAct}
        />

        {/* main work section */}
        <MainSec currSec={currSec} />

        {/* modal */}
        {confirmation && (
          <Modal
            toggleModal={toggleModal}
            action={modalAct}
            signout={changeAccess}
          />
        )}
        {confirmation && (
          <div
            className='w-screen h-screen bg-neutral-200 opacity-60 fixed'
            style={{ "z-index": "25" }}
          ></div>
        )}
      </section>
    </MainContext.Provider>
  );
};

export default MainPage;
