const checkAcc = (name, password) => {
  let accounts = [
    {
      name: "ManCity",
      password: "master222",
    },
    {
      name: "Liverpool",
      password: "password555",
    },
    {
      name: "realMadrid",
      password: "boy123",
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
