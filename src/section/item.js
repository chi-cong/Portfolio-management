import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MainContext } from "../mainPage";
import { AppContext } from "../App";

const Item = ({ id, order, noDelete, currData, tab }) => {
  return (
    <div className='border-gray-900 border w-4/5 h-20 rounded-3xl sm:text-2xl text-base flex sm:justify-around justify-center items-center gap-7'>
      <h2 className=''>
        <span className='font-bold'>Order : </span>
        {order}
      </h2>
      <h2 className=''>
        <span className='font-bold'>ID : </span>
        {id}
      </h2>
      <ItemBtn noDelete={noDelete} id={id} currData={currData} tab={tab} />
    </div>
  );
};

const ItemBtn = ({ noDelete, id, currData, tab }) => {
  const { toggleModal, changeModalAct } = useContext(MainContext);
  const {
    toggleEditor,
    changeCurrItem,
    changeTab,
    changeCurrData,
    changeEditorAct,
  } = useContext(AppContext);
  return (
    <div className='flex justify-center w-1/12 mr-2 gap-2 sm:gap-5 lg:gap-8'>
      <button
        className=' text-green-500'
        onClick={() => {
          toggleEditor();
          changeCurrData(currData);
          changeCurrItem(id);
          changeEditorAct("editing");
          changeTab(tab);
        }}
      >
        <i>
          <FaEdit />
        </i>
      </button>
      {!noDelete && (
        <button
          className=' text-red-500'
          onClick={() => {
            toggleModal();
            changeCurrItem(id);
            changeModalAct("delete");
            changeCurrData(currData);
            changeTab(tab);
          }}
        >
          <i>
            <FaTrash />
          </i>
        </button>
      )}
    </div>
  );
};
export default Item;
