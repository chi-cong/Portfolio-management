import getData from "../data/getData";

const deleteItem = (id, currData, tab) => {
  const newData = currData.filter((item) => {
    return item.id !== id;
  });
  let oldData = getData();
  if (tab === "portfolio") {
    oldData.portfolio = newData;
    localStorage.setItem("data", JSON.stringify(oldData));
  } else if (tab === "blogs") {
    oldData.blogs = newData;
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

export default deleteItem;
