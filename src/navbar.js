import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleFunc }) => {
  const toggleClick = (e) => {
    e.currentTarget.classList.toggle("text-cyan-600");
    e.currentTarget.classList.toggle("rotate-90");
    toggleFunc();
  };
  return (
    <div className='h-14 bg-slate-900 w-full flex justify-end items-center fixed'>
      <i
        className='text-gray-500 text-2xl mx-3 transition'
        onClick={toggleClick}
      >
        <FaBars />
      </i>
    </div>
  );
};
export default Navbar;
