import { data } from "./demoData";

const getData = () => {
  var initData = localStorage.getItem("data");
  if (initData === null) {
    localStorage.setItem("data", JSON.stringify(data));
    var initData = localStorage.getItem("data");
  }
  return initData;
};

export default getData;
