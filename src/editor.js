import keyfix from "./keyfix";
import { AppContext } from "./App";
import React, { useState } from "react";
import AddItem from "./addItem";

const Editor = ({ editorAct, currData }) => {
  const keys = Object.keys(currData[0]);
  const { toggleEditor, tab } = React.useContext(AppContext);
  // const [inputObj, setInputObj] = useState();
  let newObj = {};

  const cancel = () => {
    toggleEditor();
  };

  const confirm = (e) => {
    e.preventDefault();
    console.log(tab);
    AddItem(newObj, currData, tab);
    toggleEditor();
  };

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center'>
      <h1 className='lg:text-4xl sm:text-3xl text-2xl p-6 uppercase bg-slate-900 w-full text-cyan-600 text-center'>
        {editorAct === "adding" ? "adding item" : "Editing item"}
      </h1>

      <form className='w-screen h-full lg:px-24 flex flex-col gap-3 m-8 items-center justify-center '>
        {/* inputs */}
        {keys.map((key) => {
          let label = keyfix(key);
          return (
            <div className='flex flex-col md:w-2/5 sm:w-3/5 w-4/5'>
              <label htmlFor={key} className='capitalize sm:text-2xl text-xl'>
                {label}
              </label>
              {!label.includes("description") ? (
                <input
                  type='text'
                  name={key}
                  className='border border-slate-900 rounded-md mb-2 h-8 w-full sm:text-xl'
                  onChange={(e) => {
                    newObj[key] = e.currentTarget.value;
                  }}
                />
              ) : (
                <textarea
                  name={key}
                  className='border border-slate-900 rounded-md mb-2 w-full sm:text-xl'
                  onChange={(e) => {
                    newObj[key] = e.currentTarget.value;
                  }}
                />
              )}
            </div>
          );
        })}

        {/* buttons */}
        <div className='md:w-2/5 sm:w-3/5 w-4/5 flex flex-row justify-start items-center '>
          <button>
            <button
              className='bg-slate-600 rounded-md sm:text-2xl text-xl sm:w-32 w-24 mr-1 sm:h-12 h-10 p-1 '
              onClick={cancel}
            >
              Cancel
            </button>
            <h3 className='sm:text-3xl text-xl inline-block mx-2'>/</h3>
            <button
              className='bg-green-500 rounded-lg sm:text-2xl text:xl sm:w-32 w-24 ml-1 sm:h-12 h-10 p-1'
              onClick={confirm}
            >
              Confirm
            </button>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
