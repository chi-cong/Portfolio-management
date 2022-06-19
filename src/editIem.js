import getData from "./data/getData";

const editItem = (newObj, currData, tab, currItem) => {
  const itemIndex = currData.indexOf(
    currData.find((item) => {
      return item.id === currItem;
    })
  );
  let oldData = getData();
  oldData[tab][itemIndex] = newObj;
  localStorage.setItem("data", JSON.stringify(oldData));
};

export default editItem;
