import getData from "../data/getData";
import Item from "./item";

const HomeSec = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      <Item order={1} id={"h-01"} noDelete={true} />
    </div>
  );
};
export default HomeSec;
