import React, { useState } from "react";
import checkAcc from "./data/account";
import SignIn from "./signIn";
import MainPage from "./mainPage";
import Editor from "./editor";

export const AppContext = React.createContext();

function App() {
  // let [access, setAccess] = useState(false);
  const [access, setAccess] = useState(true);
  const [currItem, setCurrItem] = useState();
  const [editMode, setEditMode] = useState(false);
  const [tab, setTab] = useState();
  const [currData, setCurrData] = useState();
  const [editorAct, setEditAct] = useState();
  const [about, setAbout] = useState(false);

  const handleAccess = (name, password) => {
    var correction;
    if (name !== null && password !== null) {
      correction = setAccess(checkAcc(name, password));
    } else {
      setAccess(false);
    }
    return correction;
  };

  const toggleEditor = () => {
    if (editMode === true) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const changeCurrItem = (currId) => {
    setCurrItem(currId);
  };

  const changeTab = (newTab) => {
    setTab(newTab);
  };

  const changeCurrData = (dataObj) => {
    setCurrData(dataObj);
  };

  const changeEditorAct = (action) => {
    setEditAct(action);
  };

  const changeAbout = (isAbout) => {
    setAbout(isAbout);
  };

  return (
    <AppContext.Provider
      value={{
        toggleEditor,
        changeCurrItem,
        tab,
        changeTab,
        changeCurrData,
        currData,
        changeEditorAct,
        about,
        changeAbout,
      }}
    >
      <div className='w-screen h-full'>
        {editMode ? (
          <Editor
            editorAct={editorAct}
            currData={currData}
            currItem={currItem}
          />
        ) : access ? (
          <MainPage changeAccess={handleAccess} currItem={currItem} />
        ) : (
          <SignIn changeAccess={handleAccess} />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
