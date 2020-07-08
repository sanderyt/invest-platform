const refactorAmount = amount => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default refactorAmount;
