import React from "react";
import { FaPlus } from "react-icons/fa";
import { AppContext } from "../App";

const AddingBtn = ({ currData, tab }) => {
  const {
    changeEditorAct,
    toggleEditor,
    changeCurrData,
    changeTab,
    changeCurrItem,
  } = React.useContext(AppContext);
  const clickHandler = () => {
    changeEditorAct("adding");
    toggleEditor();
    changeCurrData(currData);
    changeTab(tab);
    changeCurrItem(null);
  };
  return (
    <button
      className='border-cyan-500 border-dashed border w-4/5 h-20 rounded-3xl sm:text-2xl text-base text-cyan-500 flex justify-center items-center gap-2'
      onClick={clickHandler}
    >
      Add new item
      <i>
        <FaPlus />
      </i>
    </button>
  );
};

export default AddingBtn;
