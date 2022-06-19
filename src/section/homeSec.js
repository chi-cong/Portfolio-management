import getData from "../data/getData";
import Item from "./item";
import Title from "./title";

const HomeSec = () => {
  const homeData = getData().home;
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      <Title secTitle={"home"} />
      <Item
        order={1}
        id={"h-01"}
        noDelete={true}
        currData={homeData}
        tab={"home"}
      />
    </div>
  );
};
export default HomeSec;
