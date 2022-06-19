import getData from "./data/getData";

const AddItem = (newObj, currData, tab) => {
  currData.push(newObj);
  let oldData = getData();
  if (tab === "portfolio") {
    oldData.portfolio = currData;
    localStorage.setItem("data", JSON.stringify(oldData));
  } else if (tab === "blogs") {
    oldData.blogs = currData;
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

export default AddItem;
