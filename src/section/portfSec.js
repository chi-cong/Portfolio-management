import getData from "../data/getData";
import AddingBtn from "./addBtn";
import Item from "./item";

const PortfolioSec = () => {
  const portData = getData().portfolio;
  let order = 0;
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      {portData.map((blog) => {
        order++;
        return (
          <Item
            id={blog.id}
            order={order}
            currData={portData}
            tab={"portfolio"}
          />
        );
      })}
      <AddingBtn currData={portData} />
    </div>
  );
};
export default PortfolioSec;
