import getData from "../data/getData";
import Item from "./item";

const BlogSec = () => {
  const blogData = getData().blogs;
  let order = 0;
  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-2'>
      {blogData.map((blog) => {
        order++;
        return (
          <Item id={blog.id} order={order} currData={blogData} tab={"blogs"} />
        );
      })}
    </div>
  );
};
export default BlogSec;
