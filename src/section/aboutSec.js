import getData from "../data/getData";
import Item from "./item";
import Title from "./title";

const AboutSec = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      <Title secTitle={"about"} />
    </div>
  );
};
export default AboutSec;
