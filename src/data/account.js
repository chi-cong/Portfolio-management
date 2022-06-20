const checkAcc = (name, password) => {
  let accounts = [
    {
      name: "chicong222",
      password: "master222",
    },
    {
      name: "truonggiang555",
      password: "password555",
    },
    {
      name: "quoctuan66",
      password: "name666",
    },
  ];
  const findAcc = () => {
    var exist = false;
    accounts.forEach((account) => {
      if (name === account.name && password === account.password) {
        exist = true;
      }
    });
    return exist;
  };
  return findAcc;
};

export default checkAcc;
