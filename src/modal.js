const Modal = ({ toggleModal, action, signout }) => {
  return (
    <div className='z-30 w-screen h-screen fixed flex justify-center items-center'>
      <div className='w-4/5 h-1/3 sm:w-2/5 border-gray-800 border-2 mx-auto rounded-lg bg-white'>
        <h3>Do you want to logout ?</h3>
        <div className='w-full bg-gray-800' style={{ height: "1px" }}></div>
        <div className='w-full h-1/6 m-1 flex gap-3'>
          <button
            className='bg-slate-600 rounded-md p-1'
            onClick={() => {
              toggleModal();
            }}
          >
            Cancel
          </button>
          <button
            className='bg-green-500 rounded-md p-1'
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
