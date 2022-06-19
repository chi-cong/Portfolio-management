import getData from "../data/getData";
import Item from "./item";
import { FaPlus } from "react-icons/fa";
import AddingBtn from "./addBtn";
import Title from "./title";

const BlogSec = () => {
  const blogData = getData().blogs;
  let order = 0;
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      <Title secTitle={"blogs"} />
      {blogData.map((blog) => {
        order++;
        return (
          <Item id={blog.id} order={order} currData={blogData} tab={"blogs"} />
        );
      })}
      <AddingBtn currData={blogData} tab={"blogs"} />
    </div>
  );
};
export default BlogSec;
