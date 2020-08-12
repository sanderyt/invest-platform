/**
 *
 * @param {Array} investments
 */
export const calculateProgress = investments => {
  let total = 0;
  investments.map(investment => (total += investment.amountInvested));
  return total;
};

/**
 *
 * @param {Array} investments
 */
export const amountOfInvestors = investments => {
  let investors = [];
  investments.map(investment => {
    if (!investors.includes(investment.user.id))
      investors.push(investment.user.id);
  });
  return investors.length;
};

/**
 *
 * @param {Date} datestring
 */
export const readableDate = datestring => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(datestring).toLocaleDateString("nl-NL", options);
};

/**
 *
 * @param {Number} amount
 */
export const refactorAmount = amount => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
