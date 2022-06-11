import React, { useState } from "react";
import Navbar from "./navbar";
import checkAcc from "./data/account";
import Login from "./Login";

function App() {
  let [access, setAccess] = useState(false);
  const handleAccess = (name, password) => {
    const correction = setAccess(checkAcc(name, password));
    return correction;
  };
  return (
    <div className='w-screen h-screen'>
      {access ? <Navbar /> : <Login changeAccess={handleAccess} />}
    </div>
  );
}

export default App;
