import getData from "../data/getData";

const deleteItem = (id, currData, tab, about) => {
  const newData = currData.filter((item) => {
    return item.id !== id;
  });
  let oldData = getData();
  if (about === true) {
    oldData.about[tab] = newData;
    localStorage.setItem("data", JSON.stringify(oldData));
  } else {
    oldData[tab] = newData;
    localStorage.setItem("data", JSON.stringify(oldData));
  }
};

export default deleteItem;
