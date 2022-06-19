import getData from "./data/getData";

const AddItem = (newObj, currData, tab) => {
  currData.push(newObj);
  let oldData = getData();
  oldData[tab] = currData;
  localStorage.setItem("data", JSON.stringify(oldData));
};

export default AddItem;
