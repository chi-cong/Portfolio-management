import getData from "./data/getData";

const EditItem = (newObj, currData, tab, currItem) => {
  const itemIndex = currData.indexOf(
    currData.find((item) => {
      return item.id === currItem;
    })
  );
  let oldData = getData();
  if (tab === "portfolio") {
    oldData.portfolio[itemIndex] = newObj;
    localStorage.setItem("data", JSON.stringify(oldData));
  } else if (tab === "blogs") {
    oldData.blogs[itemIndex] = newObj;
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

export default EditItem;
