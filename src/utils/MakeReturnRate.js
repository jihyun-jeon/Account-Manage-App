const makeReturnRate = accountData => {
  return (((+accountData.assets - +accountData.payments) / +accountData.payments) * 100)
    .toString()
    .slice(0, 5);
};

export default makeReturnRate;
