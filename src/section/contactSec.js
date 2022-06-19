import getData from "../data/getData";
import Item from "./item";
import Title from "./title";

const ContactSec = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      <Title secTitle={"contact"} />
      <Item order={1} id={"c-01"} noDelete={true} />
    </div>
  );
};
export default ContactSec;
