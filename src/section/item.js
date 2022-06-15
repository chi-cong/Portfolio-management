import { FaEdit, FaTrash } from "react-icons/fa";

const Item = () => {
  return (
    <div className='border-gray-900 border w-4/5 h-20 rounded-3xl sm:text-2xl text-base flex sm:justify-around justify-center items-center gap-7'>
      <h2 className=''>
        <span className='font-bold'>Order : </span>1
      </h2>
      <h2 className=''>
        <span className='font-bold'>ID : </span>H-01
      </h2>
      <ItemBtn noDelete={true} />
    </div>
  );
};

const ItemBtn = ({ noDelete }) => {
  return (
    <div className='flex justify-center w-1/12 mr-2 gap-2 sm:gap-5 lg:gap-8'>
      <button className=' text-green-500'>
        <i>
          <FaEdit />
        </i>
      </button>
      {noDelete && (
        <button className=' text-red-500'>
          <i>
            <FaTrash />
          </i>
        </button>
      )}
    </div>
  );
};
export default Item;
