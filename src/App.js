import React, { useState, useEffect, useRef } from "react";
import checkAcc from "./data/account";
import Login from "./Login";
import MainPage from "./mainPage";

function App() {
  // let [access, setAccess] = useState(false);
  let [access, setAccess] = useState(true);
  const handleAccess = (name, password) => {
    const correction = setAccess(checkAcc(name, password));
    return correction;
  };
  return (
    <div className='w-screen h-screen'>
      {access ? <MainPage /> : <Login changeAccess={handleAccess} />}
    </div>
  );
}

export default App;
