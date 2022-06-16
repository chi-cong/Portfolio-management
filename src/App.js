import React, { useState } from "react";
import checkAcc from "./data/account";
import SignIn from "./signIn";
import MainPage from "./mainPage";

function App() {
  // let [access, setAccess] = useState(false);
  let [access, setAccess] = useState(true);
  const handleAccess = (name, password) => {
    var correction;
    if (name !== null && password !== null) {
      correction = setAccess(checkAcc(name, password));
    } else {
      setAccess(false);
    }
    return correction;
  };
  return (
    <div className='w-screen h-full'>
      {access ? (
        <MainPage changeAccess={handleAccess} />
      ) : (
        <SignIn changeAccess={handleAccess} />
      )}
    </div>
  );
}

export default App;
