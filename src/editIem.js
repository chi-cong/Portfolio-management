import getData from "./data/getData";

const editItem = (newObj, currData, tab, currItem, about) => {
  let itemIndex = 0;
  if (Array.isArray(currData)) {
    itemIndex = currData.indexOf(
      currData.find((item) => {
        return item.id === currItem;
      })
    );
  }
  let oldData = getData();
  if (about === true && Array.isArray(currData)) {
    oldData.about[tab][itemIndex] = newObj;
  } else if (about === true && !Array.isArray(currData)) {
    oldData.about[tab] = newObj;
  } else if (!about === true && !Array.isArray(currData)) {
    oldData[tab] = newObj;
  } else {
    oldData[tab][itemIndex] = newObj;
  }
  localStorage.setItem("data", JSON.stringify(oldData));
};

export default editItem;
