const Modal = ({ toggleModal, action, signout, ID }) => {
  return (
    <div className='z-30 w-screen h-screen fixed flex justify-center items-center'>
      <div className='w-4/5 h-1/3 sm:w-3/5 lg:w-2/5 border-gray-800 border-2 mx-auto rounded-lg bg-white flex flex-col justify-between items-start p-4'>
        <h3 className='text-2xl sm:text-3xl ml-3 mt-3'>
          {action === "signout" && "Do you want to sign out ?"}
          {action === "delete" && `Do you want to delete H-01 ?`}
        </h3>
        <div className='w-full h-1/4 ml-3 flex gap-3 items-center'>
          <button
            className='bg-slate-600 rounded-md h-4/5 w-20 p-1 '
            onClick={() => {
              toggleModal();
            }}
          >
            Cancel
          </button>
          <button
            className='bg-green-500 rounded-lg h-4/5 w-20 p-1'
            onClick={() => {
              if (action === "signout") {
                signout();
              }
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
