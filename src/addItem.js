import getData from "./data/getData";

const AddItem = (newObj, currData, tab, about) => {
  currData.push(newObj);
  let oldData = getData();
  if (about === true) {
    oldData.about[tab] = currData;
  } else {
    oldData[tab] = currData;
  }
  localStorage.setItem("data", JSON.stringify(oldData));
};

export default AddItem;
