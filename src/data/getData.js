import { data } from "./demoData";

const getData = () => {
  var initData = JSON.parse(localStorage.getItem("data"));
  if (initData === null) {
    localStorage.setItem("data", JSON.stringify(data));
    var initData = JSON.parse(localStorage.getItem("data"));
  }
  return initData;
};

export default getData;
